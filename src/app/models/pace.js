class Pace {
    constructor(minutes, seconds, milliseconds) {
        this.minutes = minutes
        this.seconds = seconds
        this.milliseconds = milliseconds        
    }
    
    inSeconds() {
        return this.minutes * 60 + this.seconds + (this.milliseconds/1000)
    }
}

module.exports = Pace