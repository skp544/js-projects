import * as v from "./js/variable.js";
import * as f from "./js/function.js";

v.form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   let user = v.search.value;
  //   let user = v.search.value.replace("/\s+/g", "");
  let user = v.search.value.split(" ").join("");

  if (user === "") {
    f.errorMessage("Input cannot be blank");
  } else {
    f.getUser(user);
    v.form.reset();
  }
});
