radio.onReceivedString(function (receivedString) {
    if (receivedString == "L") {
        ButtonServe = ButtonServe + 5
        if (ButtonServe > 175) {
            ButtonServe = 175
        }
    }
    if (receivedString == "R") {
        ButtonServe = ButtonServe - 5
        if (ButtonServe < 5) {
            ButtonServe = 5
        }
    }
    if (receivedString == "F") {
        FrontBackServer = FrontBackServer + 5
        if (FrontBackServer > 175) {
            FrontBackServer = 175
        }
    }
    if (receivedString == "B") {
        FrontBackServer = FrontBackServer - 5
        if (FrontBackServer < 5) {
            FrontBackServer = 5
        }
    }
    if (receivedString == "T") {
        TopDownServer = TopDownServer + 5
        if (TopDownServer > 175) {
            TopDownServer = 170
        }
    }
    if (receivedString == "D") {
        TopDownServer = TopDownServer - 5
        if (TopDownServer < 90) {
            TopDownServer = 90
        }
    }
    if (receivedString == "O") {
        GrabServer = GrabServer + 5
        if (GrabServer > 120) {
            GrabServer = 120
        }
    }
    if (receivedString == "C") {
        GrabServer = GrabServer - 5
        if (GrabServer < 65) {
            GrabServer = 65
        }
    }
})
let GrabServer = 0
let TopDownServer = 0
let FrontBackServer = 0
let ButtonServe = 0
radio.setGroup(1)
ButtonServe = 90
FrontBackServer = 90
TopDownServer = 170
GrabServer = 65
pins.servoWritePin(AnalogPin.P6, ButtonServe)
pins.servoWritePin(AnalogPin.P7, FrontBackServer)
pins.servoWritePin(AnalogPin.P9, TopDownServer)
pins.servoWritePin(AnalogPin.P8, GrabServer)
basic.pause(2000)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P6, ButtonServe)
    pins.servoWritePin(AnalogPin.P7, FrontBackServer)
    pins.servoWritePin(AnalogPin.P9, TopDownServer)
    pins.servoWritePin(AnalogPin.P8, GrabServer)
})
