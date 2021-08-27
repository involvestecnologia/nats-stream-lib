const { NatsStreamConnection, NatsStreamService } = require('../../index')

const assert = require('assert').strict
const { StringCodec } = require('nats')

describe('Integration tests for nats service', function () {
  it('should publish at queue', async function () {
    const messageMock = 'message-test-integration'
    const queueName = 'test-integration'

    const connection = await NatsStreamConnection.getConnection()
    const subscription = connection.subscribe(queueName)

    subscribeTest(subscription, messageMock)

    await NatsStreamService.publish(queueName, messageMock)

    await connection.drain()
  })

  it('should publish a object at queue', async function () {
    const messageMock = {
      test: 'integration'
    }
    const queueName = 'test-integration'

    const connection = await NatsStreamConnection.getConnection()
    const subscription = connection.subscribe(queueName)

    subscribeTest(subscription, messageMock)

    await NatsStreamService.publish(queueName, messageMock)

    await connection.drain()
  })
})

const subscribeTest = async (subscription, messageMock) => {
  const sc = StringCodec()

  for await (const message of subscription) {
    assert.equal(sc.decode(message.data), messageMock)
  }
}
