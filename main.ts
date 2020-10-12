// Created by: Mikayla Barthelette
// Created on: Oct 2020
// 
// This program allows us to use a potentiometer to control the brightness of an LED
let potentiometer = 0
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.forever(function () {
    potentiometer = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P13, pins.analogReadPin(AnalogPin.P1))
    basic.showNumber(potentiometer)
})
