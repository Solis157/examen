let distance = 0
function Point () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function Ligne () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 A B G A F G E ", 120)
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        Point()
    }
    basic.pause(500)
    Point()
    basic.pause(500)
    Point()
    basic.pause(50)
    Ligne()
    basic.pause(50)
    for (let index = 0; index < 2; index++) {
        Point()
    }
    basic.pause(500)
    Point()
    basic.pause(50)
    for (let index = 0; index < 2; index++) {
        Ligne()
    }
    basic.pause(50)
    Point()
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
    basic.pause(1000)
    basic.showString("REEEEEEEEE!")
    basic.pause(1000)
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.East)
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # #
        # . . . #
        # # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.pause(100)
    RobotCar_Keyestudio.Leds.showWhite()
    basic.pause(100)
    RobotCar_Keyestudio.Leds.showBlue()
    basic.pause(100)
    RobotCar_Keyestudio.Leds.showGreen()
    basic.pause(100)
    RobotCar_Keyestudio.Leds.showRed()
    basic.pause(100)
    RobotCar_Keyestudio.Leds.setRGB(113, 212, 93)
    basic.pause(1000)
    RobotCar_Keyestudio.Motors.move(23)
    basic.showNumber(141 + 42)
    basic.pause(100)
    distance = RobotCar_Keyestudio.Sonar.ping()
    if (distance < 10) {
        RobotCar_Keyestudio.Motors.stop()
    }
})
