let arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "~",
  "`",
  "{",
  "}",
  "[",
  "]",
  "<",
  ">",
  "/",
  "?",
];

function getrand() {
  return arr[Math.floor(Math.random() * arr.length)];
}

function gen() {
  let p1 = document.querySelector("#p1");
  p1.textContent = "";
  for (let i = 0; i < 20; i++) {
    p1.textContent += getrand();
  }

  let p2 = document.querySelector("#p2");
  p2.textContent = "";
  for (let i = 0; i < 20; i++) {
    p2.textContent += getrand();
  }

  let p3 = document.querySelector("#p3");
  p3.textContent = "";
  for (let i = 0; i < 20; i++) {
    p3.textContent += getrand();
  }

  let p4 = document.querySelector("#p4");
  p4.textContent = "";
  for (let i = 0; i < 20; i++) {
    p4.textContent += getrand();
  }
}
