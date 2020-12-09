const DistanceController = require('../src/api/components/distance/controller')

module.exports = (app) => {
    const controller = new DistanceController()    
    app.route(DistanceController.route)
        .post(controller.calculate())
}