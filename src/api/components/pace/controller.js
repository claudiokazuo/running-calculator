const Pace = require('./model')
const Time = require('../time/model')
class PaceController {
    static route = '/pace'             

    calculate() {
        return (req, res) => {            
            const body = req.body            
            const time = new Time(body.hours, body.minutes, body.seconds)    
            let avgPaceInMinutes = time.inMinutes()/body.distance;    
            let minutes = parseInt(avgPaceInMinutes)      
            let seconds = parseInt((avgPaceInMinutes - minutes) * 60)
            let milliseconds = parseInt(((avgPaceInMinutes- minutes)*60 - seconds) * 1000)
            const pace = new Pace(minutes, seconds, milliseconds)  
              
            res.status(200).json(
                {
                    pace: pace,             
                    distance: body.distance,
                    time: time
                })
        }
    }
}

module.exports = PaceController