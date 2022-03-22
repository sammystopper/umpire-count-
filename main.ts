input.onButtonPressed(Button.A, function () {
    ball += 1
    basic.showNumber(ball)
})
input.onButtonPressed(Button.AB, function () {
    ball = 0
    strike = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    strike += 1
    basic.showNumber(strike)
})
let ball = 0
let strike = 0
basic.showNumber(0)
strike = 0
ball += 0
basic.forever(function () {
	
})
