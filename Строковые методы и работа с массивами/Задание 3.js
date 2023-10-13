// Напишите функцию reverseAndNegate(arr), которая принимает массив чисел и возвращает перевернутый отрицательный массив
// Например: [1, -2, 5, 4] ⇒ [-4, -5, 2, -1].

function reverseAndNegate(arr) {
    arr.reverse().forEach(function (item) {
        console.log(-item);
    })
}

reverseAndNegate([1, -2, 5, 4]);