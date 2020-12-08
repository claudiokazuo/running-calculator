const PaceController = require('../src/app/controllers/pacecontroller')

module.exports = (app) => {
    const controller = new PaceController()

    app.route(PaceController.route)        
        .post(controller.calculate())    
}