basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    while (!(input.buttonIsPressed(Button.A))) {
        basic.showIcon(IconNames.Sad)
    }
})
