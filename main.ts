let valszt1 = 0
let valaszt2 = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (valszt1 == 1) {
        if (valaszt2 == 1) {
            basic.showString("dontetlen")
        }
        if (valaszt2 == 2) {
            basic.showString("vesztettel")
        }
        if (valaszt2 == 3) {
            basic.showString("nyertel")
        }
    }
    if (valszt1 == 2) {
        if (valaszt2 == 1) {
            basic.showString("nyertel")
        }
        if (valaszt2 == 2) {
            basic.showString("dontetlen")
        }
        if (valaszt2 == 3) {
            basic.showString("vesztettel")
        }
    }
    if (valszt1 == 3) {
        if (valaszt2 == 1) {
            basic.showString("vesztettél")
        }
        if (valaszt2 == 2) {
            basic.showString("nyertél")
        }
        if (valaszt2 == 3) {
            basic.showString("dontetlen")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    valszt1 = randint(1, 3)
    valaszt2 = 0
    if (valszt1 == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        radio.sendString("k")
    }
    if (valszt1 == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        radio.sendString("p")
    }
    if (valszt1 == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        radio.sendString("o")
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "k") {
        valaszt2 = 1
    }
    if (receivedString == "p") {
        valaszt2 = 2
    }
    if (receivedString == "o") {
        valaszt2 = 3
    }
})
