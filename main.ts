basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P2))
    if (pins.analogReadPin(AnalogReadWritePin.P2) > 25) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
