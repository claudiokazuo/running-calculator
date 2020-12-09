const Pace = require('../pace/model')
const Time = require('./model')

class TimeController {
    static route = '/time'    

    calculate() {
        return (req, res) => {
            const body = req.body
            const pace = new Pace(body.minutes, body.seconds, body.milliseconds)
            let totalRunTimeInSeconds = pace.inSeconds() * body.distance
            let hours = totalRunTimeInSeconds/3600
            let minutes = (hours - parseInt(hours)) * 60
            let seconds = (minutes - parseInt(minutes)) * 60         
            const time = new Time(parseInt(hours), parseInt(minutes), Number(seconds.toFixed(2)))            
            res.status(200).json(time)
        }
    }
}
module.exports = TimeController