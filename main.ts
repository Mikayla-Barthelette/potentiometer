let potentiometer = robotbit.RgbUltrasonic(DigitalPin.P1)
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.forever(function () {
    basic.showNumber(potentiometer)
    basic.pause(500)
})
