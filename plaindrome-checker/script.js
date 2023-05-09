const btn = document.querySelector(".btn");

const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  const word = document.querySelector(".input-text").value;
  //   console.log(word);

  //   console.log(word);

  let str = word.toLowerCase();
  //   console.log(str);

  let e = word.length - 1;
  let ans = true;
  let s = 0;

  while (s <= e) {
    if (str[s] === str[e]) {
      s++;
      e--;
    } else {
      ans = false;
      break;
    }
  }

  //   str = word.toUpperCase();
  //   console.log(str);
  result.innerHTML = `${str.toUpperCase()} is ${
    ans ? "" : "not"
  } a palindrome.`;
}

/*

function palindrome() {
  const word = document.querySelector(".input-text").value;
  let len = word.length;
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = [...end].reverse().join("");
  if (start == flip) {
    result.innerHTML = `${str.toUpperCase()} is a palindrome.`;
  } else {
    result.innerHTML = `${str.toUpperCase()} is not a palindrome.`;
  }
}
*/
// madam

/*

let str = "skp";

let s = 0;
let e = str.length - 1;

let result = true;

while (s <= e) {
  if (str[s] === str[e]) {
    s++;
    e--;
  } else {
    result = false;
    break;
  }
}

if (result) {
  console.log("Palindrome");
} else {
  console.log("Not a palindrome");
}

// let firstName = "Shubham";
*/
