potentiometer = robotbit.rgb_ultrasonic(DigitalPin.P13)
basic.show_icon(IconNames.YES)
basic.pause(1000)

def on_forever():
    basic.show_number(potentiometer)
    basic.pause(500)
    basic.clear_screen()
    basic.pause(500)
basic.forever(on_forever)
