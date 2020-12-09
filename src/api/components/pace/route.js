const PaceController = require('./controller')

module.exports = (app) => {
    const controller = new PaceController()

    app.route(PaceController.route)        
        .post(controller.calculate())    
}