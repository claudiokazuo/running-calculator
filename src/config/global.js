const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')

module.exports = () => {
    const app = express()

    app.use(bodyParser.json())

    consign()
        .include('routes')
        .into(app)

    return app
}