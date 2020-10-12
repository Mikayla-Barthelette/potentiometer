# Created by: Mikayla Barthelette
# Created on: Oct 2020
# 
# This program allows us to use a potentiometer to control the brightness of an LED


from microbit import *

display.show(Image.YES)
sleep(1000)

while True:
    potentiometer = pin1.read_analog()
    pin13.write_analog(pin1.read_analog())
    display.show(potentiometer)
   
