# @involves/nats-stream-lib

[![Build status](https://badge.buildkite.com/043f295d4a003174fa891db8cf499a2b1d065058c2b4a201bd.svg)](https://buildkite.com/involves/nodejs-nats-stream-lib)

## Install
```
npm install @involves/nats-stream-lib --save
```

## Example usage

```javascript
    const express = require('express')
    const { NatsStreamMiddleware } = require('@involves/nats-stream-lib')

    const app = express()
    app.use(NatsStreamMiddleware.setService)
    app.get('/:id', (req, res) => {
        await req.integration.natsStream.publish('queueName', 'message')
        res.send()
    })
```

## How to run the tests

At the terminal, just type the command:
```
make test
```