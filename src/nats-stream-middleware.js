
const NatsStreamService = require('./nats-stream-service')

class NatsStreamMiddlware {
  static setService (req, _res, next) {
    if (!req.integrations) req.integrations = {}
    req.integrations.natsStream = NatsStreamService
    next()
  }
}

module.exports = NatsStreamMiddlware
