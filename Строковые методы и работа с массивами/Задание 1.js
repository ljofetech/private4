// Напишите функцию match, которая принимает 2 строки и возвращает true, если эти строки равны без учета регистра.
// Например, match('hEllO', 'HELLo') должен вернуть true.

function match(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(match("qwER", "QWer"));