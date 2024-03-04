// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// localStorage.setItem("ui-theme", "light");

// const savedTheme = localStorage.getItem("ui-theme");
// console.log(savedTheme); // "light"

// const savedItem = localStorage.getItem("key-that-does-not-exist");
// console.log(savedItem); // null

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme")); // "dark"

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null
// console.log(window.sessionStorage); // Storage {length: 0}

// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//   "tickets",
//   JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}
// const userId = sessionStorage.getItem("user-id");
// console.log(userId); // "123"

// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

// sessionStorage.removeItem("tickets");
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}

// sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}

const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const localStorageKey = "goit-example-message";

textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", (evt) => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
