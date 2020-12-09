const TimeController = require('../src/app/controllers/timecontroller')

module.exports = (app) => {
    const controller = new TimeController()
    
    app.route(TimeController.route)
       .post(controller.calculate())    
}