const form = document.querySelector("form");
const mealList = document.querySelector("#meal");
const mealModal = document.querySelector(".meal-modal");
const recipeContent = document.querySelector(".recipe-content");
const closeBtn = document.querySelector(".close-btn");
const searchInput = document.querySelector("#search");

const searchURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const lookupURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

form.addEventListener("submit", getMeals);
mealList.addEventListener("click", getMealRecipe);
closeBtn.addEventListener("click", () => {
  mealModal.style.display = "none";
});

// GET Meals
async function getMeals() {
  let searchInputVal = searchInput.value.trim();
  const res = await fetch(`${searchURL}${searchInputVal}`);
  const data = await res.json();
  //   console.log(data?.meals);
  displayMeals(data.meals);
}

// Display meals

function displayMeals(meals) {
  let html = "";
  if (meals) {
    meals.forEach((meal) => {
      html += `
        <div class="meal" data-id= "${meal.idMeal}"}>
            <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="food" />
            </div>
            <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">View Recipe &rarr;</a>
            </div>
        </div>
    `;
    });
  } else {
    html = "No Meal Found...! Please try again";
  }

  mealList.innerHTML = html;
}

// Get Recipe

async function getMealRecipe(e) {
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;

    console.log(mealItem);
    const res = await fetch(`${lookupURL}${mealItem.dataset.id}`);
    const data = await res.json();

    console.log(data);

    displayRecipe(data?.meals);
  }
}

// Display Recipe

async function displayRecipe(meal) {
  meal = meal[0];
  let html = `
    
    <div class="recipe-img">
      <img src="${meal.strMealThumb}" alt="food" />
    </div>

    <h2 class="recipe-title">${meal.strMeal}</h2>
    <div class="recipe-instruction">
      <h3>Instruction</h3>
      <p>
      ${meal.strInstructions}
      </p>
    </div>

    <div class="recipe-link">
      <a href="${meal.strYoutube}" target="_blank">Watch Video </a>
    </div>

  `;

  recipeContent.innerHTML = html;
  mealModal.style.display = "block";
}
