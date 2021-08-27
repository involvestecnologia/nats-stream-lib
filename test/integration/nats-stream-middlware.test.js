'use_strict'

const assert = require('assert').strict
const chai = require('chai')
const chaiHttp = require('chai-http')
const express = require('express')

const { NatsStreamMiddleware } = require('../../index')

chai.use(chaiHttp)

describe('Integration tests of nats stream middleware', function () {
  it('should inject setNatsStreamConnection at the request', async function () {
    const app = express()
    app.use(NatsStreamMiddleware.setService)
    const route = '/'
    app.get(route, (req, res) => {
      assert(req.integrations.natsStream)
      res.sendStatus(200)
    })

    const res = await chai.request(app).get(route)
    assert.equal(res.statusCode, 200)
  })
})
