const { NatsStreamConnection } = require('../../index')

const assert = require('assert').strict

describe('Integration tests for nats connection', function () {
  it('should return connection', async function () {
    const connection = await NatsStreamConnection.getConnection()
    assert.ok(connection)
  })

  it('should return connection in cache', async function () {
    const connection = await NatsStreamConnection.getConnection()
    assert.ok(connection)
  })
})
