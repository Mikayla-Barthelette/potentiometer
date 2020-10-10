let potentiometer = robotbit.RgbUltrasonic(DigitalPin.P13)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.forever(function () {
    basic.showNumber(potentiometer)
    basic.pause(500)
})
