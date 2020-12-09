const distance = require('../src/api/components/distance/route')
const pace = require('../src/api/components/pace/route')
const time = require('../src/api/components/time/route')

module.exports = (app) => {
    distance(app)
    pace(app)
    time(app)
}