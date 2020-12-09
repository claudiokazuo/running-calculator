const Pace = require('../models/pace')
const Time = require('../models/time')

class DistanceController {
    static route = '/distance'

    calculate() {
        return (req, res) => {
            const paceBody = req.body.pace
            const timeBody = req.body.time
            const pace = new Pace(paceBody.minutes, paceBody.seconds, paceBody.milliseconds)
            const time = new Time(timeBody.hours, timeBody.minutes, timeBody.seconds)
            let distance = time.inSeconds()/pace.inSeconds()
            res.status(200).json({distance: distance})
        }
    }
}
module.exports = DistanceController