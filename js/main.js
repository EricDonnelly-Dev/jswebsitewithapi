// TODO: HIDE THIS WHEN PUSHING
let apiKey;
const baseURL = "https://api.spoonacular.com/recipes/random";
const apiKeyParam = `?apiKey=${apiKey}` || "";
const recipesRequested = "&number=30";

const requestURL = baseURL + apiKeyParam + recipesRequested;

const getRecipes = async () => {
  try {
    await loadData(fetchRecipes());
  } catch (err) {
    console.log(err);
  }
};

const fetchRecipes = () =>
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => data.recipes);

getRecipes();

async function loadData(req) {
  return Promise.resolve(req).then((recipes) => {
    createCards(recipes);
    setupEvents();
  });
}
function setSearchEvents(arr) {
  const recipeItems = document.querySelectorAll("[data-dishType]");
  arr.addEventListener("keyup", (event) => {
    const searchInput = event.target.value.toLowerCase().trim();
    recipeItems.forEach((card) => {
      card.dataset.dishtype.includes(searchInput)
        ? (card.style.display = "block")
        : (card.style.display = "none");
    });
  });
}

function handleFilterLinks(filterLinks) {
  for (const filterLink of filterLinks) {
    filterLink.addEventListener("click", function () {
      setActive(filterLink, ".filter-link");
      const filter = this.dataset.filter;
      recipeItems.forEach((card) => {
        if (filter === "all") card.style.display = "block";
        else if (card.dataset.dishtype.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
}

const setActive = (element, selector) => {
  if (document.querySelector(`${selector}.active`) !== null) {
    document.querySelector(`${selector}.active`).classList.remove("active");
  }
  element.classList.add("active");
};
function sortRecipes(sortOrder, recipeItems) {
  let recipeArray = Array.from(recipeItems);
  const order = sortOrder === "AZ" ? [1, -1] : [-1, 1];
  recipeArray.sort((a, b) => {
    return a.childNodes[0].childNodes[1].textContent >
      b.childNodes[0].childNodes[1].textContent
      ? order[0]
      : order[1];
  });
  recipeArray.forEach((elm) => elm.parentElement.appendChild(elm));
}
function handleSortLinks(sortLinks) {
  const recipeItems = document.querySelectorAll("[data-dishType]");
  for (const sortLink of sortLinks) {
    sortLink.addEventListener("click", function () {
      setActive(sortLink, ".sort-link");
      const sortOrder = this.dataset.sort; //
      sortRecipes(sortOrder, recipeItems);
    });
  }
}

function setupEvents() {
  favouriteRecipe();
  const filterLinks = document.querySelectorAll("[data-filter]");
  const sortLinks = document.querySelectorAll("[data-sort]");
  const searchInput = document.querySelector("#search");
  setSearchEvents(searchInput);
  handleFilterLinks(filterLinks);
  handleSortLinks(sortLinks);
}

function createCards(data) {
  for (const elm of data) {
    const {
      title,
      id: ID,
      dishTypes: dishType,
      servings,
      readyInMinutes: makeTime,
      image,
    } = elm;
    // Each data element gets needs a card

    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card", "card");
    recipeCard.id = ID;
    recipeCard.dataset.dishtype = "none";
    const recipe = document.createElement("div");
    const dishTypeGroup = document.createElement("div");
    recipe.classList.add("recipe-header");
    recipe.innerHTML = ` <h2 class = "recipe-title"> ${title}</h2>   
                             <div class = "other-header-info">
                               <h4 class="servings">${servings} Servings</h4>
                               <h4 class="minutes">${makeTime} Minutes</h4>
                             </div>
                             <i class = "fa-heart fas"></i> `;
    // Assign the dishtypes to a data attribute
    for (const val of dishType) {
      dishTypeGroup.classList.add("dishTypeGroup");
      recipeCard.dataset.dishtype = dishType;
      const dishTypePill = document.createElement("div");
      dishTypePill.innerText = val;
      dishTypePill.classList.add("dishtype", "pill");
      dishTypeGroup.appendChild(dishTypePill);
    }
    // Append card elements to base card
    recipe.appendChild(dishTypeGroup);
    const recipeImgWrapper = document.createElement("div");
    recipeImgWrapper.classList.add("recipe-img-wrapper");
    const recipeImg = document.createElement("img");
    recipeImg.setAttribute("src", image);
    recipeImgWrapper.appendChild(recipeImg);
    recipeCard.appendChild(recipe);
    recipeCard.appendChild(recipeImgWrapper);

    // Place card into appropriate card group
    addCardToGroup(recipeCard, "base");
    calculateTotals();
  }
}
function addCardToGroup(elm, cardgroup) {
  let parentCardGroup;
  switch (cardgroup) {
    case "favourite":
      parentCardGroup = document.querySelector("#favourites");
      break;
    case "base":
      parentCardGroup = document.querySelector("#recipe-group");
      break;
    default:
      parentCardGroup = document.querySelector("#recipe-group");
      break;
  }
  parentCardGroup.appendChild(elm);
}

function setMethod(list, method, data) {
  if (method === "add") list.add(data);
  else list.remove(data);
}

function favouriteRecipe() {
  const heartIconSelector = ".recipe-header i";
  const favouriteIcons = document.querySelectorAll(heartIconSelector);
  for (const icon of favouriteIcons) {
    icon.addEventListener("click", function () {
      const params = !icon.classList.contains("favourite")
        ? ["favourite", "add"]
        : ["base", "remove"];
      setMethod(icon.classList, params[1], "favourite");
      addCardToGroup(icon.parentElement.parentElement, params[0]);
      calculateTotals();
    });
  }
}

function calculateTotals() {
  const obj = {
    favTotalServingsLabel: {
      labelName: "fav-total-servings",
      className: "#favourites .servings",
    },
    favTotalMinutesLabel: {
      labelName: "fav-total-minutes",
      className: "#favourites .minutes",
    },
    regTotalServingsLabel: {
      labelName: "reg-total-servings",
      className: "#recipe-group .servings",
    },
    regTotalMinutesLabel: {
      labelName: "reg-total-minutes",
      className: "#recipe-group .minutes",
    },
  };
  const labels = Object.values(obj).map((item) =>
    document.getElementById(item.labelName)
  );
  const items = Object.values(obj)
    .map((item) => document.querySelectorAll(item.className))
    .map((item) => {
      const arr = [];
      for (const elm of item) {
        arr.push(elm.innerHTML.split(" ")[0]);
      }
      return arr;
    })
    .map((item) => {
      return item.reduce(function (acc, elm) {
        return acc + parseInt(elm);
      }, 0);
    });
  const [reducedFTM, reducedFTS, reducedRTM, reducedRTS] = items;

  const phrase = [
    "Total Servings",
    "Total Minutes to Prepare",
    "Total Servings",
    "Total Minutes to Prepare",
  ];
  for (let i = 0; i < labels.length; i++) {
    labels[i].innerText = `${items[i]} ${phrase[i]}`;
  }
}
