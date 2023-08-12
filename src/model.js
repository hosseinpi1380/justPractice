const $ = document;
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

let result = [];
const btn = document.querySelector("submit-btn");
const input = document.querySelector(".input");
const form = document.querySelector("form");
const ulElement = $.querySelector("ul");

let letterIntered = "";
form.addEventListener("keydown", (e) => {
  ulElement.innerHTML = "";
  if (e.key != "Backspace") {
    letterIntered += e.key;
    generateTemp(letterIntered);
  } else if (e.key == "Backspace") {
    letterIntered = letterIntered.slice(0, -1);
    generateTemp(letterIntered);
  }
  console.log(letterIntered);
});
function generateTemp(letter) {
  const filt = basket.filter((el) => el[0] == letter);
  filt.forEach((el) =>
    ulElement.insertAdjacentHTML(
      "afterbegin",
      `
        <li class="w-full bg-white text-black p-4">${el}</li>`
    )
  );
}
