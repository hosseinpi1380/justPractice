
const basket = [
    "javascript",
    "react",
    "node js",
    "sass",
    "tailwind",
    "css",
    "html",
    "next.js",
    "nothing",
    "jasem",
    "hamed",
    "taha",
    "sara",
    "nima",
    "reza",
    "amir",
    "saman",
    "lorem",
    "leila",
    "narima panahi",
    "ahmad",
    "iman",
    "fateme",
    "farzad",
    "farhad",
    "nima",
    "nasrin",
    "nazanin",
];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduceMethod = numbers.reduce((acc, cur) => (acc + cur) / (numbers.length - 1), 0);
console.log(reduceMethod);