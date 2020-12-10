const distance = require('../api/components/distance/route')
const pace = require('../api/components/pace/route')
const time = require('../api/components/time/route')
const internalservererror = require('./error/internalservererror')
const badrequest = require('./error/badrequest')

module.exports = (app) => {
    distance(app)
    pace(app)
    time(app)
    
    internalservererror(app)
    badrequest(app)
}