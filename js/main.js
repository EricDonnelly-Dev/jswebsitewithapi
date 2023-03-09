 // TODO: HIDE THIS WHEN PUSHING
 let apiKey;
const baseURL = 'https://api.spoonacular.com/recipes/random';
const apiKeyParam = `?apiKey=${apiKey}`|| "";
const recipesRequested = '&number=30';

const requestURL = baseURL+apiKeyParam+recipesRequested;

const getRecipes = async () => {
    try {
         await loadData(fetchRecipes()) //  THIS CALLS the API , commented out for development , redo when finished
        // createCards(data); // This is the local development Object limiting the api calls
    }
    catch (err) {
        console.log(err);
    }
}

const fetchRecipes = () => fetch(requestURL).then(response => response.json()).then(data => data.recipes)


getRecipes();

async function loadData(req) {
    return Promise.resolve(req)
        .then(recipes => {
            createCards(recipes)
            favouriteRecipe();
        })
}


function createCards(data) {
    for (const elm of data) {
        const {
            title,
            id: ID,
            dishTypes: dishType,
            servings,
            readyInMinutes: makeTime,
            image
        } = elm;
        // Each data element gets needs a card

        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card', 'card');
        recipeCard.id = ID;
        const recipe = document.createElement('div');
        const dishTypeGroup = document.createElement("div");
        recipe.classList.add('recipe-header');
        recipe.innerHTML = ` <h2 class = "recipe-title"> ${title}</h2>   
                             <div class = "other-header-info">
                               <h4>${servings} Servings</h4>
                               <h4>${makeTime} Minutes</h4>
                             </div>
                             <i class = "fa-heart fas"></i> `
        // Assign the dishtypes to a data attribute
        for (const val of dishType) {
            dishTypeGroup.classList.add('dishTypeGroup');
            recipeCard.dataset.dishtype = dishType;
            const dishTypePill = document.createElement("div");
            dishTypePill.innerText = val;
            dishTypePill.classList.add('dishtype', 'pill');
            dishTypeGroup.appendChild(dishTypePill);
        }
        // Append card elements to base card
        recipe.appendChild(dishTypeGroup);
        const recipeImgWrapper = document.createElement('div');
        recipeImgWrapper.classList.add('recipe-img-wrapper');
        const recipeImg = document.createElement('img');
        recipeImg.setAttribute('src', image);
        recipeImgWrapper.appendChild(recipeImg);
        recipeCard.appendChild(recipe);
        recipeCard.appendChild(recipeImgWrapper);

        // Place card into appropriate card group
        addCardToGroup(recipeCard, 'base');

    }

    const setActive = (element, selector) => {
        if (document.querySelector(`${selector}.active`) !== null) {
            document.querySelector(`${selector}.active`).classList.remove('active');
        }
        element.classList.add('active');
    };

    const filterLinks = document.querySelectorAll('[data-filter]');
    const recipeItems = document.querySelectorAll('[data-dishType]');
    const sortLinks = document.querySelectorAll('[data-sort]');
    const searchInput = document.querySelector('#search');

    searchInput.addEventListener("keyup", (event) => {
        const searchInput = event.target.value.toLowerCase().trim();
        recipeItems.forEach((card) => {
            card.dataset.dishtype.includes(searchInput)
                ? card.style.display = 'block'
                : card.style.display = 'none'
        })
    })

    for (const filterLink of filterLinks) {
        filterLink.addEventListener("click", function () {
            setActive(filterLink, '.filter-link');
            const filter = this.dataset.filter;
            recipeItems.forEach((card) => {
                if (filter === 'all') card.style.display = 'block';
                else if (card.dataset.dishtype.includes(filter)) {
                    card.style.display = 'block'
                } else {
                    card.style.display = 'none'
                }
            })
        })
    }
    for (const sortLink of sortLinks) {
        sortLink.addEventListener("click", function () {
            setActive(sortLink,'.sort-link');
            const sortOrder = this.dataset.sort; //
            sortRecipes(sortOrder);
        })

    }

    function sortRecipes(sortOrder) {
        let recipeArray = Array.from(recipeItems);
        const order = sortOrder === 'AZ' ? [1, -1] : [-1, 1];
        recipeArray.sort((a, b) => {
            return a.childNodes[0].childNodes[1].textContent > b.childNodes[0].childNodes[1].textContent ? order[0]:order[1];
        });
        recipeArray.forEach(function (elm) {
            elm.parentElement.appendChild(elm);
        });
    }
}
    function addCardToGroup(elm, cardgroup) {
        let parentCardGroup;
        switch (cardgroup) {
            case 'favourite' :
                parentCardGroup = document.querySelector('#favourites');
                break;
            case 'base' :
                parentCardGroup = document.querySelector('#recipe-group');
                break;
            default :
                parentCardGroup = document.querySelector('#recipe-group');
                break;
        }
        parentCardGroup.appendChild(elm);
    }

 function favouriteRecipe() {
     const heartIconSelector = '.recipe-header i'
     const favouriteIcons = document.querySelectorAll(heartIconSelector);

     for (const icon of favouriteIcons) {
         icon.addEventListener("click" , function() {
             if (!icon.classList.contains('favourite')) {
                 icon.classList.add('favourite');
                 addCardToGroup(icon.parentElement.parentElement,'favourite');
             } else {
                 icon.classList.remove('favourite');
                 addCardToGroup(icon.parentElement.parentElement,'base');
             }
         })
     }
 }



