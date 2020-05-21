class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.timerId = null
    }
    addClock(time, callback , id) {
            if(!id) {
                throw new Error('Невозможно идентифицировать будильник. Параметр id не найден')
            }
            if(this.alarmCollection.some(element => element.id === id)) {
                console.error('Будильник с тким id уже существует')
            } else {
                this.alarmCollection.push({
                    time,
                    callback, 
                    id
                })
            }
            
    }
    removeClock(id) {
        const index = this.alarmCollection.findIndex(element => element.id === id)
        if(!(index === -1)) {
            this.alarmCollection.splice(index, 1)
            return true
        }
        return false
    }
    getCurrentFormattedTime() {
         
        return new Date().toLocaleTimeString().slice(0,-3);

    }
    start() {

        const checkClock = (objCall) => {
            if (objCall.time === this.getCurrentFormattedTime()) {
                objCall.callback()
            }
        }

        if(!this.timerId) {

            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(objCall => checkClock(objCall))
            }, 1000)

        }
        
    }
    stop() {
        if(this.timerId) {
            clearInterval(this.timerId)
            this.timerId = null
        }
    }
    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} заведен на ${element.time}`))
    }
    clearAlarms() {
        this.stop()
        this.alarmCollection = []
    }
}

const clock = new AlarmClock

clock.addClock("14:45", () => console.log('Скоро спать'), 1)
clock.addClock("14:48", () => {console.log("пора готовиться ко сну!"); clock.removeClock(2)}, 2)
//clock.addClock("14:52", () => console.log("иди умываться"))
clock.addClock("14:45", () => console.log('иди спать, завтра на работу'), 1)


clock.addClock('21:02', () => {
    console.log('Иди спать, завтра рано на работу');
    clock.clearAlarms();
    clock.printAlarms();
}, 3)

//console.log(clock.getCurrentFormattedTime())
//clock.addClock(6, "13:45", () => console.log('call'))
//clock.addClock(10, "14:14", () => console.log('call'))
//console.log(clock.alarmCollection.length)
//clock.clearAlarms()
//console.log(clock.alarmCollection.length)


//clock.start()
/*
clock.stop()*/
//clock.clearAlarms()

clock.printAlarms()





