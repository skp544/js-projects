// console.log(window);
// "";

// 672
// 673
// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// console.log(Object.getOwnPropertyNames(window));

// window.localStorage.setItem("key","value")

window.localStorage.setItem("firstName", "Shubham");
localStorage.setItem("lastName", "Kumar");

const person = {
  fullName: "Shubham Kumar Prajapati",
  location: "Ghaziabad",
};

localStorage.setItem("user", JSON.stringify(person));

const fruits = ["Mango", "Apple", "Grapes"];
localStorage.setItem("fruits", JSON.stringify(fruits));

// Get item from local storage

// console.log(localStorage.getItem("firstName"));

// console.log(localStorage.getItem(JSON.parse(user)));

// Remove items from local storage

localStorage.removeItem("fruits");

// clear local storage

localStorage.clear();

localStorage.setItem("name", "Shubham");
localStorage.setItem("age", "21");

// local storage key method

console.log(localStorage.key(0));
