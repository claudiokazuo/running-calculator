const PaceController = require('../src/api/components/pace/controller')

module.exports = (app) => {
    const controller = new PaceController()

    app.route(PaceController.route)        
        .post(controller.calculate())    
}