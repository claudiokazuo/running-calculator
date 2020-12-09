const TimeController = require('../src/api/components/time/controller')

module.exports = (app) => {
    const controller = new TimeController()
    
    app.route(TimeController.route)
       .post(controller.calculate())    
}