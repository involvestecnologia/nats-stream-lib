'use_strict'

const { StringCodec } = require('nats')

const natsStreamConnection = require('./nats-stream-connection')

class NatsStreamService {
  static async publish (queueName, message) {
    const connection = await natsStreamConnection.getConnection()
    const sc = StringCodec()
    connection.publish(queueName, sc.encode(message))
  }
}
module.exports = NatsStreamService
