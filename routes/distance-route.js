const DistanceController = require('../src/app/controllers/distancecontroller')

module.exports = (app) => {
    const controller = new DistanceController()    
    app.route(DistanceController.route)
        .post(controller.calculate())
}