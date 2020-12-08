class PaceController {
    static route = '/pace'             

    calculate(time, distance) {
        return (req, res) => {            
            let body = req.body            
            let totalTimeInMinutes = (body.hours * 60) + body.minutes + (body.seconds/60)            
            let avgPaceInMinutes = totalTimeInMinutes/body.distance;    
            let minutes = parseInt(avgPaceInMinutes)      
            let seconds = parseInt((avgPaceInMinutes - minutes) * 60)
            let milliseconds = parseInt(((avgPaceInMinutes- minutes)*60 - seconds) * 1000)

            res.status(200).json(
                {
                    pace: {
                        minutes: minutes,
                        seconds: seconds,
                        milliseconds: milliseconds
                    },                    
                    distance: body.distance,
                    time: {
                        hours : body.hours,
                        minutes : body.minutes,
                        seconds: body.seconds
                    }
                })
        }
    }
}

module.exports = PaceController