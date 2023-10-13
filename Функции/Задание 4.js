// Напишите функцию createAdder(a), которая возвращает функцию addA, которая принимает b и возвращает a + b.

function createAdder(a) {
    return function (b) {
        console.log(a + b);
    }
}

const plus = createAdder(5);
plus(5);
plus(12);