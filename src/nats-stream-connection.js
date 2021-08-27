'use_strict'

const { connect } = require('nats')
const { EventEmitter } = require('events')

class NatsStreamConnection {
  static async getConnection () {
    this.connection = await _getConnection(this.connection)
    return this.connection
  }
}

const _getConnection = async (connection) => {
  if (connection && !connection.isClosed()) return connection

  const conn = await connect({ servers: process.env.NATS_URL })

  conn.events = new EventEmitter()

  _setEvents(conn)

  return conn
}

const _setEvents = async (connection) => {
  for await (const status of connection.status()) {
    connection.events.emit(status.type)
  }
}

module.exports = NatsStreamConnection
