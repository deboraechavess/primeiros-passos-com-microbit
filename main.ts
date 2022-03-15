input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
    music.playMelody("C5 F C G E C5 D A ", 120)
})
basic.showIcon(IconNames.Happy)
music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
