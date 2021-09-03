const NatsStreamConnection = require('./src/nats-stream-connection')
const NatsStreamMiddleware = require('./src/nats-stream-middleware')
const NatsStreamService = require('./src/nats-stream-service')
const { StringCodec } = require('nats')

module.exports = {
  NatsStreamConnection,
  NatsStreamMiddleware,
  NatsStreamService,
  StringCodec
}
