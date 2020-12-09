class Time {

    constructor(hours, minutes, seconds) {
        this.hours = hours,
        this.minutes = minutes,
        this.seconds = seconds
    }

    inMinutes() {
        return (this.hours * 60) + this.minutes + (this.seconds/60)
    }
    
    inSeconds() {
        return (this.hours * 3600) + (this.minutes*60) + this.seconds
    }
}

module.exports = Time