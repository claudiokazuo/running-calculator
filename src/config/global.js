const bodyParser = require('body-parser')
const routes = require('../routes/index')
const express = require('express')

module.exports = () => {
    const app = express()
    app.use(bodyParser.json())
    routes(app)    
    return app
}