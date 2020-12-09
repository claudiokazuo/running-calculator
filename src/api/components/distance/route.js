const DistanceController = require('./controller')

module.exports = (app) => {
    const controller = new DistanceController()    
    app.route(DistanceController.route)
        .post(controller.calculate())
}