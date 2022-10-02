function Orange_LED_lights_on () {
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
}
function Red_LED_lights_on () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
function Green_LED_lights_on () {
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
function Blue_LED_lights_on () {
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
}
function Purple_LED_lights_on () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
    strip.show()
}
function White_LED_lights_on () {
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.White))
    strip.show()
}
function Red2_LED_lights_on () {
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
function Violet_LED_lights_on () {
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Violet))
    strip.show()
}
function Indigo_LED_lights_on () {
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Indigo))
    strip.show()
}
function Black () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Yellow_LED_lights_on () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
basic.forever(function () {
    Red_LED_lights_on()
    basic.pause(1000)
    Red_LED_lights_on()
    Purple_LED_lights_on()
    basic.pause(1000)
    Red_LED_lights_on()
    Purple_LED_lights_on()
    Yellow_LED_lights_on()
    basic.pause(1000)
    Red_LED_lights_on()
    Purple_LED_lights_on()
    Yellow_LED_lights_on()
    Green_LED_lights_on()
    basic.pause(1000)
    Red_LED_lights_on()
    Purple_LED_lights_on()
    Yellow_LED_lights_on()
    Green_LED_lights_on()
    Blue_LED_lights_on()
    basic.pause(1000)
    Red_LED_lights_on()
    Purple_LED_lights_on()
    Yellow_LED_lights_on()
    Green_LED_lights_on()
    Blue_LED_lights_on()
    Orange_LED_lights_on()
    basic.pause(1000)
    Red_LED_lights_on()
    Purple_LED_lights_on()
    Yellow_LED_lights_on()
    Green_LED_lights_on()
    Blue_LED_lights_on()
    Orange_LED_lights_on()
    Violet_LED_lights_on()
    basic.pause(1000)
    Red_LED_lights_on()
    Purple_LED_lights_on()
    Yellow_LED_lights_on()
    Green_LED_lights_on()
    Blue_LED_lights_on()
    Orange_LED_lights_on()
    Violet_LED_lights_on()
    Indigo_LED_lights_on()
    basic.pause(1000)
    Red_LED_lights_on()
    Purple_LED_lights_on()
    Yellow_LED_lights_on()
    Green_LED_lights_on()
    Blue_LED_lights_on()
    Orange_LED_lights_on()
    Violet_LED_lights_on()
    Indigo_LED_lights_on()
    White_LED_lights_on()
    basic.pause(1000)
    Red_LED_lights_on()
    Purple_LED_lights_on()
    Yellow_LED_lights_on()
    Green_LED_lights_on()
    Blue_LED_lights_on()
    Orange_LED_lights_on()
    Violet_LED_lights_on()
    Indigo_LED_lights_on()
    White_LED_lights_on()
    Red2_LED_lights_on()
    basic.pause(2000)
    Black()
})
