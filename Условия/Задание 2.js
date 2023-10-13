// Напишите программу, которая запрашивает у пользователя три числа и выводит максимальное из них.

let num1
let num2
let num3

num1 = prompt()
num2 = prompt()
num3 = prompt()

if (num1 > num2) {
    if (num1 > num3) {
        alert(`${num1}`)
    }
}
if (num2 > num1) {
    if (num2 > num3) {
        alert(`${num2}`)
    }
}
if (num3 > num2) {
    if (num3 > num1) {
        alert(`${num3}`)
    }
}