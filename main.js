 // TODO: HIDE THIS WHEN PUSHING
 let apiKey;
let data =  [
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 19,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 9,
            "healthScore": 2,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 91.8,
            "extendedIngredients": [
                {
                    "id": 12061,
                    "aisle": "Nuts",
                    "image": "almonds.jpg",
                    "consistency": "SOLID",
                    "name": "almonds",
                    "nameClean": "almonds",
                    "original": "50g almonds, peeled and thinly sliced",
                    "originalName": "almonds, peeled and thinly sliced",
                    "amount": 50.0,
                    "unit": "g",
                    "meta": [
                        "peeled",
                        "thinly sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.764,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 50.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 10014534,
                    "aisle": "Alcoholic Beverages",
                    "image": "temporary-orange-liqueur.jpg",
                    "consistency": "SOLID",
                    "name": "amaretto liqueur",
                    "nameClean": "amaretto liqueur",
                    "original": "1 Tbs amaretto liqueur",
                    "originalName": "amaretto liqueur",
                    "amount": 1.0,
                    "unit": "Tbs",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tb"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tb"
                        }
                    }
                },
                {
                    "id": 18369,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking powder",
                    "nameClean": "baking powder",
                    "original": "3 teaspoons baking powder",
                    "originalName": "baking powder",
                    "amount": 3.0,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "1 cup butter, softened",
                    "originalName": "butter, softened",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "softened"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 20027,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "cornstarch",
                    "nameClean": "corn starch",
                    "original": "1 Tbs cornstarch",
                    "originalName": "cornstarch",
                    "amount": 1.0,
                    "unit": "Tbs",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tb"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tb"
                        }
                    }
                },
                {
                    "id": 1124,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg-white.jpg",
                    "consistency": "SOLID",
                    "name": "egg whites",
                    "nameClean": "egg whites",
                    "original": "4 large egg whites, room temperature",
                    "originalName": "egg whites, room temperature",
                    "amount": 4.0,
                    "unit": "large",
                    "meta": [
                        "room temperature"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "large",
                            "unitLong": "larges"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "large",
                            "unitLong": "larges"
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "2 cups all-purpose flour",
                    "originalName": "all-purpose flour",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [
                        "all-purpose"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 93704,
                    "aisle": "Baking",
                    "image": "marzipan-or-almond-paste.jpg",
                    "consistency": "SOLID",
                    "name": "marzipan",
                    "nameClean": "marzipan",
                    "original": "100g marzipan, crumbled",
                    "originalName": "marzipan, crumbled",
                    "amount": 100.0,
                    "unit": "g",
                    "meta": [
                        "crumbled"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.527,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 100.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "250g sugar",
                    "originalName": "sugar",
                    "amount": 250.0,
                    "unit": "g",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 8.818,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 250.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                }
            ],
            "id": 665155,
            "title": "White cake with marzipan and almonds",
            "readyInMinutes": 45,
            "servings": 10,
            "sourceUrl": "http://www.foodista.com/recipe/G74N7TT4/white-cake-with-marzipan-and-almonds",
            "image": "https://spoonacular.com/recipeImages/665155-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you have approximately <b>45 minutes</b> to spend in the kitchen, White cake with marzipan and almonds might be a great <b>lacto ovo vegetarian</b> recipe to try. This dessert has <b>442 calories</b>, <b>6g of protein</b>, and <b>24g of fat</b> per serving. For <b>92 cents per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. This recipe serves 10. Only a few people made this recipe, and 9 would say it hit the spot. Head to the store and pick up flour, egg whites, marzipan, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 29%</b>, which is not so super. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/christmas-stollen-with-almonds-marzipan-1089945\">Christmas stollen with almonds & marzipan</a>, <a href=\"https://spoonacular.com/recipes/homemade-marzipan-boiled-marzipan-604202\">Homemade Marzipan (Boiled Marzipan)</a>, and <a href=\"https://spoonacular.com/recipes/german-marzipan-apple-cake-59611\">German Marzipan Apple Cake</a>.",
            "cuisines": [],
            "dishTypes": [
                "dessert"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "<ol><li>Beat egg whites and only 2 tablespoons of sugar into stiff peaks.</li><li>Mix the remaining sugar, flour, corn starch and baking powder in a separate bowl.</li><li>Sift the flour and sugar mixture into the egg whites; stir very gently the mixture until smooth.</li><li>Stir in the melted butter.</li><li>Add half of the marzipan and amaretto, mix and combine.</li><li>Pour the mixture into a suitable silicon mould (or regular round shape greased and sprinkled with bread crumbs).</li><li>Sprinkle the top with the rest of the marzipan and sliced almonds.</li><li>Bake the cake in the oven at 180C for 30 - 40 minutes or until done (the trick with a toothpick).</li><li>Let it completely cool in the mould, then turn onto a serving plate.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Beat egg whites and only 2 tablespoons of sugar into stiff peaks.",
                            "ingredients": [
                                {
                                    "id": 1124,
                                    "name": "egg whites",
                                    "localizedName": "egg whites",
                                    "image": "egg-white.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Mix the remaining sugar, flour, corn starch and baking powder in a separate bowl.Sift the flour and sugar mixture into the egg whites; stir very gently the mixture until smooth.Stir in the melted butter.",
                            "ingredients": [
                                {
                                    "id": 18369,
                                    "name": "baking powder",
                                    "localizedName": "baking powder",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 20027,
                                    "name": "corn starch",
                                    "localizedName": "corn starch",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 1124,
                                    "name": "egg whites",
                                    "localizedName": "egg whites",
                                    "image": "egg-white.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add half of the marzipan and amaretto, mix and combine.",
                            "ingredients": [
                                {
                                    "id": 10014534,
                                    "name": "amaretto liqueur",
                                    "localizedName": "amaretto liqueur",
                                    "image": "temporary-orange-liqueur.jpg"
                                },
                                {
                                    "id": 93704,
                                    "name": "marzipan",
                                    "localizedName": "marzipan",
                                    "image": "marzipan-or-almond-paste.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Pour the mixture into a suitable silicon mould (or regular round shape greased and sprinkled with bread crumbs).",
                            "ingredients": [
                                {
                                    "id": 18079,
                                    "name": "breadcrumbs",
                                    "localizedName": "breadcrumbs",
                                    "image": "breadcrumbs.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Sprinkle the top with the rest of the marzipan and sliced almonds.",
                            "ingredients": [
                                {
                                    "id": 10112061,
                                    "name": "sliced almonds",
                                    "localizedName": "sliced almonds",
                                    "image": "almonds.jpg"
                                },
                                {
                                    "id": 93704,
                                    "name": "marzipan",
                                    "localizedName": "marzipan",
                                    "image": "marzipan-or-almond-paste.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Bake the cake in the oven at 180C for 30 - 40 minutes or until done (the trick with a toothpick).",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404644,
                                    "name": "toothpicks",
                                    "localizedName": "toothpicks",
                                    "image": "toothpicks.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 180.0,
                                        "unit": "Celsius"
                                    }
                                }
                            ],
                            "length": {
                                "number": 40,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Let it completely cool in the mould, then turn onto a serving plate.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/white-cake-with-marzipan-and-almonds-665155"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 16,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 6,
            "healthScore": 27,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 473.54,
            "extendedIngredients": [
                {
                    "id": 15270,
                    "aisle": "Seafood",
                    "image": "shrimp.png",
                    "consistency": "SOLID",
                    "name": "shrimp",
                    "nameClean": "shrimp",
                    "original": "1 lb. large shrimp (21/25), peeled and deveined",
                    "originalName": "shrimp (21/25), peeled and deveined",
                    "amount": 1.0,
                    "unit": "lb",
                    "meta": [
                        "deveined",
                        "peeled",
                        "()"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "salt and pepper",
                    "originalName": "salt and pepper",
                    "amount": 6.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1034053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "extra virgin olive oil",
                    "nameClean": "extra virgin olive oil",
                    "original": "extra virgin olive oil",
                    "originalName": "extra virgin olive oil",
                    "amount": 6.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 10211215,
                    "aisle": "Produce",
                    "image": "garlic.jpg",
                    "consistency": "SOLID",
                    "name": "garlic cloves",
                    "nameClean": "whole garlic cloves",
                    "original": "8-9 garlic cloves, minced",
                    "originalName": "garlic cloves, minced",
                    "amount": 8.0,
                    "unit": "",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 8.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 5096,
                    "aisle": "Meat",
                    "image": "chicken-thighs.png",
                    "consistency": "SOLID",
                    "name": "chicken thighs",
                    "nameClean": "boneless skinless chicken thighs",
                    "original": "1 lb. boneless, skinless chicken thighs, trimmed of excess fat, cut crosswise in half",
                    "originalName": "boneless, skinless chicken thighs, trimmed of excess fat, cut crosswise in half",
                    "amount": 1.0,
                    "unit": "lb",
                    "meta": [
                        "boneless",
                        "skinless",
                        "trimmed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 99231,
                    "aisle": "Meat",
                    "image": "chorizo-sausages.png",
                    "consistency": "SOLID",
                    "name": "chorizo sausage",
                    "nameClean": "chorizo sausages",
                    "original": "8 oz. Spanish chorizo sausage, sliced 1/2 inch thick",
                    "originalName": "Spanish chorizo sausage, sliced 1/2 inch thick",
                    "amount": 8.0,
                    "unit": "oz",
                    "meta": [
                        "spanish",
                        "sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 226.796,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11821,
                    "aisle": "Produce",
                    "image": "red-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "bell pepper",
                    "nameClean": "red pepper",
                    "original": "1 red bell pepper, seeded and cut into 1/2 inch wide strips",
                    "originalName": "red bell pepper, seeded and cut into 1/2 inch wide strips",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "red",
                        "seeded",
                        "cut into 1/2 inch wide strips"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "onion",
                    "original": "1 . onion, chopped fine",
                    "originalName": "onion, chopped fine",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "chopped",
                        "fine"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 10011693,
                    "aisle": "Canned and Jarred",
                    "image": "tomatoes-canned.png",
                    "consistency": "SOLID",
                    "name": "canned tomatoes",
                    "nameClean": "canned tomatoes",
                    "original": "1 (14 1/2 oz.) can diced tomatoes, drained, finely chopped, then drained again",
                    "originalName": "diced tomatoes, drained, finely chopped, then drained again",
                    "amount": 14.5,
                    "unit": "oz",
                    "meta": [
                        "diced",
                        "drained",
                        "finely chopped",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 14.5,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 411.068,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 10020052,
                    "aisle": "Pasta and Rice",
                    "image": "uncooked-white-rice.png",
                    "consistency": "SOLID",
                    "name": "arborio rice",
                    "nameClean": "risotto rice",
                    "original": "2 c. Valencia or Arborio rice",
                    "originalName": "Valencia or Arborio rice",
                    "amount": 2.0,
                    "unit": "c",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 6970,
                    "aisle": "Canned and Jarred",
                    "image": "chicken-broth.png",
                    "consistency": "LIQUID",
                    "name": "chicken broth",
                    "nameClean": "low sodium chicken broth",
                    "original": "3 c. low-sodium chicken broth",
                    "originalName": "low-sodium chicken broth",
                    "amount": 3.0,
                    "unit": "c",
                    "meta": [
                        "low-sodium"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 709.764,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 14106,
                    "aisle": "Alcoholic Beverages",
                    "image": "white-wine.jpg",
                    "consistency": "LIQUID",
                    "name": "wine",
                    "nameClean": "dry white wine",
                    "original": "1/3 c. dry white wine",
                    "originalName": "dry white wine",
                    "amount": 0.33333334,
                    "unit": "c",
                    "meta": [
                        "dry white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.333,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 78.863,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2037,
                    "aisle": "Ethnic Foods;Spices and Seasonings;Gourmet",
                    "image": "saffron.jpg",
                    "consistency": "SOLID",
                    "name": "saffron threads",
                    "nameClean": "saffron",
                    "original": "1/2 t. saffron threads, crumbled",
                    "originalName": "saffron threads, crumbled",
                    "amount": 0.5,
                    "unit": "t",
                    "meta": [
                        "crumbled"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2004,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "bay-leaves.jpg",
                    "consistency": "SOLID",
                    "name": "bay leaf",
                    "nameClean": "bay leaves",
                    "original": "1 bay leaf",
                    "originalName": "bay leaf",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11009,
                    "aisle": "Frozen",
                    "image": "artichoke-hearts.png",
                    "consistency": "SOLID",
                    "name": "artichoke hearts",
                    "nameClean": "frozen artichoke hearts",
                    "original": "3/4 c. frozen artichoke hearts, thawed",
                    "originalName": "frozen artichoke hearts, thawed",
                    "amount": 0.75,
                    "unit": "c",
                    "meta": [
                        "frozen",
                        "thawed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 177.441,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11304,
                    "aisle": "Produce",
                    "image": "peas.jpg",
                    "consistency": "SOLID",
                    "name": "peas",
                    "nameClean": "petite peas",
                    "original": "1/2 c. frozen peas, thawed",
                    "originalName": "frozen peas, thawed",
                    "amount": 0.5,
                    "unit": "c",
                    "meta": [
                        "frozen",
                        "thawed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 10018413,
                    "aisle": "Bakery/Bread",
                    "image": "pita-bread.jpg",
                    "consistency": "SOLID",
                    "name": "flat parsely",
                    "nameClean": "flatbread",
                    "original": "chopped fresh flat-leaf parsely",
                    "originalName": "chopped fresh flat parsely",
                    "amount": 1.0,
                    "unit": "leaf",
                    "meta": [
                        "fresh",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "leaf",
                            "unitLong": "leave"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "leaf",
                            "unitLong": "leave"
                        }
                    }
                },
                {
                    "id": 1029150,
                    "aisle": "Produce",
                    "image": "lemon-wedge.png",
                    "consistency": "SOLID",
                    "name": "lemon wedges",
                    "nameClean": "lemon wedge",
                    "original": "lemon wedges",
                    "originalName": "lemon wedges",
                    "amount": 6.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                }
            ],
            "id": 631747,
            "title": "Dutch Oven Paella",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/HD6HS3BD/dutch-oven-paella",
            "image": "https://spoonacular.com/recipeImages/631747-556x370.jpg",
            "imageType": "jpg",
            "summary": "Dutch Oven Paellan is a main course that serves 6. For <b>$4.74 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. One serving contains <b>670 calories</b>, <b>43g of protein</b>, and <b>24g of fat</b>. 6 people found this recipe to be yummy and satisfying. If you have garlic cloves, flat parsely, chicken thighs, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. This recipe is typical of European cuisine. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>dairy free</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 78%</b>, which is good. <a href=\"https://spoonacular.com/recipes/dutch-oven-paella-1438817\">Dutch Oven Paella</a>, <a href=\"https://spoonacular.com/recipes/dutch-oven-paella-1479225\">Dutch Oven Paella</a>, and <a href=\"https://spoonacular.com/recipes/dutch-oven-cobbler-423365\">Dutch Oven Cobbler</a> are very similar to this recipe.",
            "cuisines": [
                "Spanish",
                "European"
            ],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "dairy free"
            ],
            "occasions": [],
            "instructions": "Adjust oven rack to lower middle position and heat oven to 350. In a med bowl, toss shrimp with 1 t. minced garlic, 1 T. olive oil, 1/4 t. salt & 1/4 t. pepper. Refrigerate until needed. Season chicken with salt & pepper, set aside.\nHeat 2 t. oil in a large Dutch oven over med-high heat until oil shimmers, add bell pepper and cook, stirring occasionally until skins blister and brown about 3-4 minutes. Remove to a plate and set aside. Add 1 T. more oil to the pot, add chicken thighs and brown well, flipping once, about 3 minutes per side. Remove chicken to a bowl, reduce heat to medium, add sausage and cook 4-5 minutes, stirring frequently, until browned and fat starts to render. Add to bowl with the browned chicken.\n3. At medium heat, add enough oil to the pot to equal 2 T., add onion and cook, stirring frequently, until tender, about 3 minutes, add remaining garlic, cook for 1 minute, add tomatoes, cook and stir until tomatoes thicken and darken slightly about 3 minutes. Add rice, cook and stir for about 2 minutes, making sure everything is evenly mixed. Add broth, wine, saffron, bay leaf and 1/2 t. salt. Add the browned chicken and sausage. Increase heat to med-high, bring to a boil, stirring often. Cover pot and place in the oven. Bake for 15 minutes (liquid should be mostly absorbed). Remove pot from the oven (keep oven door closed to retain heat), remove the lid, nestle the artichoke hearts down in the rice a bit. Sprinkle the shrimp over the top of the rice, then, sprinkle with the peas and bell pepper strips. Replace the led, add back to the oven for another 10 minutes or until the shrimp are opaque.\nTurn stove burner to med-high heat. Remove the pot from the oven, place on the stove cook for 5 minutes to get the browned portion on the bottom of the rice (called Soccarat), rotating the pot 180 degrees halfway through to ensure even browning. Remove pot from heat and let the paella rest, covered, for 5 minutes. Sprinkle with fresh chopped parsley and lemon wedges.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Adjust oven rack to lower middle position and heat oven to 35",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "In a med bowl, toss shrimp with 1 t. minced garlic, 1 T. olive oil, 1/4 t. salt & 1/4 t. pepper. Refrigerate until needed. Season chicken with salt & pepper, set aside.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "minced garlic",
                                    "localizedName": "minced garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 15270,
                                    "name": "shrimp",
                                    "localizedName": "shrimp",
                                    "image": "shrimp.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Heat 2 t. oil in a large Dutch oven over med-high heat until oil shimmers, add bell pepper and cook, stirring occasionally until skins blister and brown about 3-4 minutes.",
                            "ingredients": [
                                {
                                    "id": 10211821,
                                    "name": "bell pepper",
                                    "localizedName": "bell pepper",
                                    "image": "bell-pepper-orange.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404667,
                                    "name": "dutch oven",
                                    "localizedName": "dutch oven",
                                    "image": "dutch-oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 4,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Remove to a plate and set aside.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Add 1 T. more oil to the pot, add chicken thighs and brown well, flipping once, about 3 minutes per side.",
                            "ingredients": [
                                {
                                    "id": 5091,
                                    "name": "chicken thighs",
                                    "localizedName": "chicken thighs",
                                    "image": "chicken-thigh.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ],
                            "length": {
                                "number": 3,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 6,
                            "step": "Remove chicken to a bowl, reduce heat to medium, add sausage and cook 4-5 minutes, stirring frequently, until browned and fat starts to render.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 1017063,
                                    "name": "sausage",
                                    "localizedName": "sausage",
                                    "image": "raw-pork-sausage.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Add to bowl with the browned chicken.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "At medium heat, add enough oil to the pot to equal 2 T., add onion and cook, stirring frequently, until tender, about 3 minutes, add remaining garlic, cook for 1 minute, add tomatoes, cook and stir until tomatoes thicken and darken slightly about 3 minutes.",
                            "ingredients": [
                                {
                                    "id": 11529,
                                    "name": "tomato",
                                    "localizedName": "tomato",
                                    "image": "tomato.png"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ],
                            "length": {
                                "number": 7,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 9,
                            "step": "Add rice, cook and stir for about 2 minutes, making sure everything is evenly mixed.",
                            "ingredients": [
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 2,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 10,
                            "step": "Add broth, wine, saffron, bay leaf and 1/2 t. salt.",
                            "ingredients": [
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 2037,
                                    "name": "saffron",
                                    "localizedName": "saffron",
                                    "image": "saffron.jpg"
                                },
                                {
                                    "id": 1006615,
                                    "name": "broth",
                                    "localizedName": "broth",
                                    "image": "chicken-broth.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                },
                                {
                                    "id": 14084,
                                    "name": "wine",
                                    "localizedName": "wine",
                                    "image": "red-wine.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 11,
                            "step": "Add the browned chicken and sausage. Increase heat to med-high, bring to a boil, stirring often. Cover pot and place in the oven.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 1017063,
                                    "name": "sausage",
                                    "localizedName": "sausage",
                                    "image": "raw-pork-sausage.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 12,
                            "step": "Bake for 15 minutes (liquid should be mostly absorbed).",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 15,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 13,
                            "step": "Remove pot from the oven (keep oven door closed to retain heat), remove the lid, nestle the artichoke hearts down in the rice a bit.",
                            "ingredients": [
                                {
                                    "id": 99242,
                                    "name": "artichoke hearts",
                                    "localizedName": "artichoke hearts",
                                    "image": "artichoke-hearts.png"
                                },
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 14,
                            "step": "Sprinkle the shrimp over the top of the rice, then, sprinkle with the peas and bell pepper strips. Replace the led, add back to the oven for another 10 minutes or until the shrimp are opaque.",
                            "ingredients": [
                                {
                                    "id": 10211821,
                                    "name": "bell pepper",
                                    "localizedName": "bell pepper",
                                    "image": "bell-pepper-orange.png"
                                },
                                {
                                    "id": 15270,
                                    "name": "shrimp",
                                    "localizedName": "shrimp",
                                    "image": "shrimp.png"
                                },
                                {
                                    "id": 11304,
                                    "name": "peas",
                                    "localizedName": "peas",
                                    "image": "peas.jpg"
                                },
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 15,
                            "step": "Turn stove burner to med-high heat.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404794,
                                    "name": "stove",
                                    "localizedName": "stove",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 16,
                            "step": "Remove the pot from the oven, place on the stove cook for 5 minutes to get the browned portion on the bottom of the rice (called Soccarat), rotating the pot 180 degrees halfway through to ensure even browning.",
                            "ingredients": [
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404794,
                                    "name": "stove",
                                    "localizedName": "stove",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 17,
                            "step": "Remove pot from heat and let the paella rest, covered, for 5 minutes.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 18,
                            "step": "Sprinkle with fresh chopped parsley and lemon wedges.",
                            "ingredients": [
                                {
                                    "id": 1029150,
                                    "name": "lemon wedge",
                                    "localizedName": "lemon wedge",
                                    "image": "lemon-wedge.png"
                                },
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/dutch-oven-paella-631747"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 19,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 32,
            "healthScore": 2,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 126.95,
            "extendedIngredients": [
                {
                    "id": 12061,
                    "aisle": "Nuts",
                    "image": "almonds.jpg",
                    "consistency": "SOLID",
                    "name": "almond cookies",
                    "nameClean": "almonds",
                    "original": "150 grams Almond cookies, crumbed",
                    "originalName": "Almond cookies, crumbed",
                    "amount": 150.0,
                    "unit": "grams",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 5.291,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 150.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 20027,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "cornstarch",
                    "nameClean": "corn starch",
                    "original": "1 tablespoon Cornstarch",
                    "originalName": "Cornstarch",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1017,
                    "aisle": "Cheese",
                    "image": "cream-cheese.jpg",
                    "consistency": "SOLID",
                    "name": "philiadelphia balance cream cheese",
                    "nameClean": "cream cheese",
                    "original": "450 grams Philiadelphia 13% balance cream cheese",
                    "originalName": "Philiadelphia 13% balance cream cheese",
                    "amount": 450.0,
                    "unit": "grams",
                    "meta": [
                        "13%"
                    ],
                    "measures": {
                        "us": {
                            "amount": 15.873,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 450.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 98861,
                    "aisle": "Nut butters, Jams, and Honey;Ethnic Foods;Frozen;Baking",
                    "image": "dulce-de-leche.png",
                    "consistency": "SOLID",
                    "name": "dulce de leche",
                    "nameClean": "dulce de leche",
                    "original": "240 ml Dulce de leche",
                    "originalName": "Dulce de leche",
                    "amount": 240.0,
                    "unit": "ml",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.014,
                            "unitShort": "cups",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 240.0,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "2 Eggs",
                    "originalName": "Eggs",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 9152,
                    "aisle": "Produce",
                    "image": "lemon-juice.jpg",
                    "consistency": "LIQUID",
                    "name": "juice of lemon",
                    "nameClean": "lemon juice",
                    "original": "Juice and zest of 1 lemon",
                    "originalName": "Juice and zest of lemon",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "Pinch of salt",
                    "originalName": "Pinch of salt",
                    "amount": 1.0,
                    "unit": "pinch",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "pinch",
                            "unitLong": "pinch"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "1/2 cup organic sugar",
                    "originalName": "organic sugar",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "organic"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "unsalted butter",
                    "original": "1 1/2 sticks cold butter cut into small pieces (if you use unsalted butter add a little 2 cups organic flour1/2 cup organic sugar1 teaspoon vanilla",
                    "originalName": "cold butter cut into small pieces (if you use unsalted butter add a little 2 cups organic flour1/2 cup organic sugar1 teaspoon vanilla",
                    "amount": 1.5,
                    "unit": "sticks",
                    "meta": [
                        "unsalted",
                        "organic",
                        "cold",
                        "cut into small pieces (if you use  butter add a little 2 cups  flour1/2 cup  sugar1 teaspoon vanilla"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "sticks",
                            "unitLong": "sticks"
                        },
                        "metric": {
                            "amount": 1.5,
                            "unitShort": "sticks",
                            "unitLong": "sticks"
                        }
                    }
                },
                {
                    "id": 1116,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "plain-yogurt.jpg",
                    "consistency": "SOLID",
                    "name": "yogurt",
                    "nameClean": "yogurt",
                    "original": "150 grams 3. 5% yogurt",
                    "originalName": "3. 5% yogurt",
                    "amount": 150.0,
                    "unit": "grams",
                    "meta": [
                        "5%"
                    ],
                    "measures": {
                        "us": {
                            "amount": 5.291,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 150.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                }
            ],
            "id": 641730,
            "title": "Dulce De Leche Cheesecake",
            "readyInMinutes": 45,
            "servings": 10,
            "sourceUrl": "http://www.foodista.com/recipe/5LN8R7Z4/dulce-de-leche-cheesecake",
            "image": "https://spoonacular.com/recipeImages/641730-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you have about <b>45 minutes</b> to spend in the kitchen, Dulce De Leche Cheesecake might be a super <b>gluten free and lacto ovo vegetarian</b> recipe to try. One serving contains <b>430 calories</b>, <b>8g of protein</b>, and <b>38g of fat</b>. This recipe serves 10. For <b>$1.27 per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. A few people made this recipe, and 32 would say it hit the spot. If you have almond cookies, eggs, philiadelphia balance cream cheese, and a few other ingredients on hand, you can make it. It works well as a dessert. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 31%</b>, which is not so great. Similar recipes are <a href=\"https://spoonacular.com/recipes/russian-dulce-de-leche-waffle-cake-and-instant-pot-dulce-de-leche-1062236\">Russian Dulce De Leche Waffle Cake and Instant Pot Dulce De Leche</a>, <a href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-61816\">Dulce De Leche Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/dulce-de-leche-cheesecake-62261\">Dulce de Leche Cheesecake</a>.",
            "cuisines": [],
            "dishTypes": [
                "dessert"
            ],
            "diets": [
                "gluten free",
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "<ol><li>Toss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.</li><li>Using electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth. Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.</li><li>Pour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Toss the cookie crumbs into the melted butter in a mixing bowl. Reserve 1 tablespoon of the mixture for the topping. Press the rest of the mixture onto the bottom and up 3cm high of a greased 24cm spring form pan. Chill until its ready for use.Using electric mixer beat balance cream cheese and sugar in a large mixing bowl until smooth.",
                            "ingredients": [
                                {
                                    "id": 10018192,
                                    "name": "cookie crumbs",
                                    "localizedName": "cookie crumbs",
                                    "image": ""
                                },
                                {
                                    "id": 1017,
                                    "name": "cream cheese",
                                    "localizedName": "cream cheese",
                                    "image": "cream-cheese.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404628,
                                    "name": "hand mixer",
                                    "localizedName": "hand mixer",
                                    "image": "hand-mixer.png"
                                },
                                {
                                    "id": 405907,
                                    "name": "mixing bowl",
                                    "localizedName": "mixing bowl",
                                    "image": "mixing-bowl.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add yogurt and eggs, beating until just blended. Stir in cornstarch, dulce de leche, lemon juice and zest until blended.",
                            "ingredients": [
                                {
                                    "id": 98861,
                                    "name": "dulce de leche",
                                    "localizedName": "dulce de leche",
                                    "image": "dulce-de-leche.png"
                                },
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 20027,
                                    "name": "corn starch",
                                    "localizedName": "corn starch",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 1116,
                                    "name": "yogurt",
                                    "localizedName": "yogurt",
                                    "image": "plain-yogurt.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Pour the mixture into the crust and sprinkle the top with reserved cookie crumbs. Steamed bake the cheesecake at 165C/330F for 65 minutes until almost set. Turn oven off. Leave the cake with the oven door ajar for 1 hour. Cool completely and chill at least 4 hours or overnight until firm.",
                            "ingredients": [
                                {
                                    "id": 10018192,
                                    "name": "cookie crumbs",
                                    "localizedName": "cookie crumbs",
                                    "image": ""
                                },
                                {
                                    "id": 0,
                                    "name": "crust",
                                    "localizedName": "crust",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 165.0,
                                        "unit": "Celsius"
                                    }
                                }
                            ],
                            "length": {
                                "number": 365,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/dulce-de-leche-cheesecake-641730"
        },
        {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": false,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 11,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 11,
            "healthScore": 96,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 126.12,
            "extendedIngredients": [
                {
                    "id": 11090,
                    "aisle": "Produce",
                    "image": "broccoli.jpg",
                    "consistency": "SOLID",
                    "name": "broccoli",
                    "nameClean": "broccoli",
                    "original": "1 cup broccoli",
                    "originalName": "broccoli",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 16058,
                    "aisle": "Canned and Jarred",
                    "image": "chickpeas.png",
                    "consistency": "SOLID",
                    "name": "chickpeas",
                    "nameClean": "canned chickpeas",
                    "original": "1 can chickpeas, rinsed and drained",
                    "originalName": "chickpeas, rinsed and drained",
                    "amount": 1.0,
                    "unit": "can",
                    "meta": [
                        "rinsed",
                        "drained"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "can",
                            "unitLong": "can"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "can",
                            "unitLong": "can"
                        }
                    }
                },
                {
                    "id": 11124,
                    "aisle": "Produce",
                    "image": "sliced-carrot.png",
                    "consistency": "SOLID",
                    "name": "carrots",
                    "nameClean": "carrot",
                    "original": "2 large carrots, chopped",
                    "originalName": "carrots, chopped",
                    "amount": 2.0,
                    "unit": "large",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "large",
                            "unitLong": "larges"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "large",
                            "unitLong": "larges"
                        }
                    }
                },
                {
                    "id": 10111143,
                    "aisle": "Produce",
                    "image": "celery.jpg",
                    "consistency": "SOLID",
                    "name": "celery stalks",
                    "nameClean": "celery sticks",
                    "original": "2 celery stalks, chopped ili 1/3 cup chopped celery root",
                    "originalName": "celery stalks, chopped ili 1/3 cup chopped celery root",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 16070,
                    "aisle": "Pasta and Rice;Canned and Jarred",
                    "image": "lentils-brown.jpg",
                    "consistency": "SOLID",
                    "name": "lentils",
                    "nameClean": "cooked lentils",
                    "original": "½ cup cooked lentils",
                    "originalName": "cooked lentils",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "cooked"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 20028,
                    "aisle": "Pasta and Rice;Ethnic Foods;Health Foods",
                    "image": "couscous-cooked.jpg",
                    "consistency": "SOLID",
                    "name": "couscous",
                    "nameClean": "couscous",
                    "original": "1 cup couscous",
                    "originalName": "couscous",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11165,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "cilantro.png",
                    "consistency": "SOLID",
                    "name": "cilantro",
                    "nameClean": "cilantro",
                    "original": "Fresh cilantro, optional",
                    "originalName": "Fresh cilantro, optional",
                    "amount": 3.0,
                    "unit": "servings",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1012010,
                    "aisle": "Spices and Seasonings",
                    "image": "cinnamon.jpg",
                    "consistency": "SOLID",
                    "name": "ground cinnamon",
                    "nameClean": "ground cinnamon",
                    "original": "⅛ tsp ground cinnamon",
                    "originalName": "ground cinnamon",
                    "amount": 0.125,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1012014,
                    "aisle": "Spices and Seasonings",
                    "image": "ground-cumin.jpg",
                    "consistency": "SOLID",
                    "name": "ground cumin",
                    "nameClean": "ground cumin",
                    "original": "2 tsp ground cumin",
                    "originalName": "ground cumin",
                    "amount": 2.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2043,
                    "aisle": "Spices and Seasonings",
                    "image": "turmeric.jpg",
                    "consistency": "SOLID",
                    "name": "ground turmeric",
                    "nameClean": "turmeric",
                    "original": "½ tsp ground turmeric",
                    "originalName": "ground turmeric",
                    "amount": 0.5,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 9152,
                    "aisle": "Produce",
                    "image": "lemon-juice.jpg",
                    "consistency": "LIQUID",
                    "name": "lemon juice",
                    "nameClean": "lemon juice",
                    "original": "1 Tbs lemon juice",
                    "originalName": "lemon juice",
                    "amount": 1.0,
                    "unit": "Tbs",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tb"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tb"
                        }
                    }
                },
                {
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "olive oil",
                    "nameClean": "olive oil",
                    "original": "2 tsp olive oil",
                    "originalName": "olive oil",
                    "amount": 2.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2028,
                    "aisle": "Spices and Seasonings",
                    "image": "paprika.jpg",
                    "consistency": "SOLID",
                    "name": "paprika",
                    "nameClean": "paprika",
                    "original": "2 tsp paprika",
                    "originalName": "paprika",
                    "amount": 2.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "Salt and pepper",
                    "originalName": "Salt and pepper",
                    "amount": 3.0,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 11887,
                    "aisle": "Pasta and Rice",
                    "image": "tomato-paste.jpg",
                    "consistency": "SOLID",
                    "name": "tomato paste",
                    "nameClean": "tomato paste",
                    "original": "2-3 Tbs tomato paste",
                    "originalName": "tomato paste",
                    "amount": 2.0,
                    "unit": "Tbs",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "1 ½ cups water",
                    "originalName": "water",
                    "amount": 1.5,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 354.882,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 652417,
            "title": "Moroccan chickpea and lentil stew",
            "readyInMinutes": 30,
            "servings": 3,
            "sourceUrl": "http://www.foodista.com/recipe/C6DXLHJH/moroccan-chickpea-and-lentil-stew",
            "image": "https://spoonacular.com/recipeImages/652417-556x370.jpg",
            "imageType": "jpg",
            "summary": "The recipe Moroccan chickpean and lentil stew can be made <b>in roughly 30 minutes</b>. This dairy free, lacto ovo vegetarian, and vegan recipe serves 3 and costs <b>$1.26 per serving</b>. This main course has <b>466 calories</b>, <b>20g of protein</b>, and <b>7g of fat</b> per serving. This recipe is liked by 11 foodies and cooks. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is brought to you by Foodista. If you have olive oil, salt and pepper, tomato paste, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/moroccan-chickpea-and-lentil-stew-1376773\">Moroccan chickpean and lentil stew</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-chickpea-lentil-moroccan-stew-523871\">Butternut Squash, Chickpea & Lentil Moroccan Stew</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-chickpea-lentil-moroccan-stew-1379167\">Butternut Squash, Chickpea & Lentil Moroccan Stew</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "soup",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            "occasions": [
                "fall",
                "winter"
            ],
            "instructions": "<ol><li>Heat oil in large saucepan over medium-high heat, add onion and cook for about 3 minutes.</li><li>Add celery, carrot and broccoli to pan and saut for about 5 minutes.</li><li>Add in all seasonings and cook additional 1 minute.</li><li>Add water, tomato paste, chickpeas and lentils, bring to a boil. Cover, reduce heat to low and simmer for 20 minutes.</li><li>Meanwhile, cook couscous in separate pan according to package directions.</li><li>Add cilantro and lemon juice to stew and serve over warm couscous.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Heat oil in large saucepan over medium-high heat, add onion and cook for about 3 minutes.",
                            "ingredients": [
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ],
                            "length": {
                                "number": 3,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 2,
                            "step": "Add celery, carrot and broccoli to pan and saut for about 5 minutes.",
                            "ingredients": [
                                {
                                    "id": 11090,
                                    "name": "broccoli",
                                    "localizedName": "broccoli",
                                    "image": "broccoli.jpg"
                                },
                                {
                                    "id": 11124,
                                    "name": "carrot",
                                    "localizedName": "carrot",
                                    "image": "sliced-carrot.png"
                                },
                                {
                                    "id": 11143,
                                    "name": "celery",
                                    "localizedName": "celery",
                                    "image": "celery.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Add in all seasonings and cook additional 1 minute.",
                            "ingredients": [
                                {
                                    "id": 1042027,
                                    "name": "seasoning",
                                    "localizedName": "seasoning",
                                    "image": "seasoning.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 1,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Add water, tomato paste, chickpeas and lentils, bring to a boil. Cover, reduce heat to low and simmer for 20 minutes.Meanwhile, cook couscous in separate pan according to package directions.",
                            "ingredients": [
                                {
                                    "id": 11887,
                                    "name": "tomato paste",
                                    "localizedName": "tomato paste",
                                    "image": "tomato-paste.jpg"
                                },
                                {
                                    "id": 16057,
                                    "name": "chickpeas",
                                    "localizedName": "chickpeas",
                                    "image": "chickpeas.png"
                                },
                                {
                                    "id": 20028,
                                    "name": "couscous",
                                    "localizedName": "couscous",
                                    "image": "couscous-cooked.jpg"
                                },
                                {
                                    "id": 10316069,
                                    "name": "lentils",
                                    "localizedName": "lentils",
                                    "image": "lentils-brown.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 20,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Add cilantro and lemon juice to stew and serve over warm couscous.",
                            "ingredients": [
                                {
                                    "id": 9152,
                                    "name": "lemon juice",
                                    "localizedName": "lemon juice",
                                    "image": "lemon-juice.jpg"
                                },
                                {
                                    "id": 11165,
                                    "name": "cilantro",
                                    "localizedName": "cilantro",
                                    "image": "cilantro.png"
                                },
                                {
                                    "id": 20028,
                                    "name": "couscous",
                                    "localizedName": "couscous",
                                    "image": "couscous-cooked.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "stew",
                                    "localizedName": "stew",
                                    "image": ""
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/moroccan-chickpea-and-lentil-stew-652417"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 1,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 24,
            "healthScore": 0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 9.19,
            "extendedIngredients": [
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "1/2 cup butter, soften (I used brumble & brown)",
                    "originalName": "butter, soften (I used brumble & brown)",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "(I used brumble & brown)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 19334,
                    "aisle": "Baking",
                    "image": "light-brown-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "brown sugar",
                    "nameClean": "golden brown sugar",
                    "original": "1/2 cup brown sugar (they said 1 cup)",
                    "originalName": "brown sugar (they said 1 cup)",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "(they said 1 cup)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 19911,
                    "aisle": "Cereal",
                    "image": "maple-syrup.png",
                    "consistency": "LIQUID",
                    "name": "maple syrup",
                    "nameClean": "maple syrup",
                    "original": "1 Tbsp. maple syrup",
                    "originalName": "maple syrup",
                    "amount": 1.0,
                    "unit": "Tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 18372,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "baking soda",
                    "nameClean": "baking soda",
                    "original": "2 tsp. baking soda",
                    "originalName": "baking soda",
                    "amount": 2.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1012010,
                    "aisle": "Spices and Seasonings",
                    "image": "cinnamon.jpg",
                    "consistency": "SOLID",
                    "name": "ground cinnamon",
                    "nameClean": "ground cinnamon",
                    "original": "1 tsp. ground cinnamon",
                    "originalName": "ground cinnamon",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2021,
                    "aisle": "Spices and Seasonings",
                    "image": "ginger.png",
                    "consistency": "SOLID",
                    "name": "ground ginger",
                    "nameClean": "ginger powder",
                    "original": "1 tsp. ground ginger",
                    "originalName": "ground ginger",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1/4 tsp. salt",
                    "originalName": "salt",
                    "amount": 0.25,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "egg",
                    "nameClean": "egg",
                    "original": "1 egg or substitute",
                    "originalName": "egg or substitute",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 9019,
                    "aisle": "Canned and Jarred",
                    "image": "applesauce.png",
                    "consistency": "SOLID",
                    "name": "applesauce",
                    "nameClean": "applesauce",
                    "original": "1/4 cup unsweetened applesauce",
                    "originalName": "unsweetened applesauce",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "unsweetened"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2050,
                    "aisle": "Baking",
                    "image": "vanilla-extract.jpg",
                    "consistency": "LIQUID",
                    "name": "vanilla extract",
                    "nameClean": "vanilla extract",
                    "original": "1 tsp. vanilla extract",
                    "originalName": "vanilla extract",
                    "amount": 1.0,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 10020080,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "pastry flour",
                    "nameClean": "whole wheat pastry flour",
                    "original": "1 cup whole wheat pastry flour",
                    "originalName": "whole wheat pastry flour",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "whole wheat"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 93824,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "white whole wheat flour",
                    "original": "1 cup white whole wheat flour",
                    "originalName": "white whole wheat flour",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "whole wheat",
                        "white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11124,
                    "aisle": "Produce",
                    "image": "sliced-carrot.png",
                    "consistency": "SOLID",
                    "name": "carrots",
                    "nameClean": "carrot",
                    "original": "1 cup finely shredded carrots (about 2 medium)",
                    "originalName": "finely shredded carrots (about 2 medium)",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "shredded",
                        "finely",
                        "( 2 medium)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 9299,
                    "aisle": "Dried Fruits;Produce;Baking",
                    "image": "raisins.jpg",
                    "consistency": "SOLID",
                    "name": "raisin",
                    "nameClean": "raisins",
                    "original": "3/4 cup raisin",
                    "originalName": "raisin",
                    "amount": 0.75,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.75,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 177.441,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 10112155,
                    "aisle": "Nuts;Savory Snacks;Baking",
                    "image": "walnuts.jpg",
                    "consistency": "SOLID",
                    "name": "walnuts",
                    "nameClean": "walnut pieces",
                    "original": "1/2 cup chopped walnuts (recipe calls for 3/4 cup, but I only had half, add more)",
                    "originalName": "chopped walnuts (recipe calls for 3/4 cup, but I only had half, add more)",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "chopped",
                        "for 3/4 cup, but i only had half, add more",
                        "(recipe calls )"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 19908,
                    "aisle": "Baking",
                    "image": "raw-brown-sugar.png",
                    "consistency": "SOLID",
                    "name": "turbinado sugar",
                    "nameClean": "turbinado sugar",
                    "original": "1/2 Tbsp Turbinado Sugar",
                    "originalName": "Turbinado Sugar",
                    "amount": 0.5,
                    "unit": "Tbsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "id": 637181,
            "title": "Carrot Cake Muffin Cookies",
            "readyInMinutes": 45,
            "servings": 64,
            "sourceUrl": "https://www.foodista.com/recipe/MS6VMCQG/carrot-cake-muffin-cookies",
            "image": "https://spoonacular.com/recipeImages/637181-556x370.jpg",
            "imageType": "jpg",
            "summary": "Carrot Cake Muffin Cookies might be just the dessert you are searching for. Watching your figure? This lacto ovo vegetarian recipe has <b>47 calories</b>, <b>1g of protein</b>, and <b>2g of fat</b> per serving. This recipe serves 64 and costs 9 cents per serving. 24 people were glad they tried this recipe. If you have vanillan extract, ground ginger, turbinado sugar, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. <b>Easter</b> will be even more special with this recipe. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 10%</b>, which is improvable. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/single-serving-microwave-carrot-cake-muffin-523340\">Single-Serving Microwave Carrot Cake Muffin</a>, <a href=\"https://spoonacular.com/recipes/single-serving-microwave-carrot-cake-muffin-1217901\">Single-Serving Microwave Carrot Cake Muffin</a>, and <a href=\"https://spoonacular.com/recipes/carrot-cake-cookies-41261\">Carrot-cake Cookies</a>.",
            "cuisines": [],
            "dishTypes": [
                "dessert"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [
                "easter"
            ],
            "instructions": "Preheat oven to 350\nIn a large bowl beat the butter with an electric mixer on medium speed for 30 seconds.\nAdd brown sugar, maple syrup, baking soda, cinnamon, ginger and salt. Beat until combined.\nBeat in egg, applesauce and vanilla. Beat in as much flour as you can with mixer. Stir in remaining flour, carrots, raisins, walnuts just until combined.\nDrop by slightly rounded teaspoons 2 apart onto an ungreased cookie sheet. Sprinkle with Turbinado sugar. Bake 8  10 minutes or until edges are firm. Transfer to a wire rack: cool.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat oven to 350",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "In a large bowl beat the butter with an electric mixer on medium speed for 30 seconds.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404628,
                                    "name": "hand mixer",
                                    "localizedName": "hand mixer",
                                    "image": "hand-mixer.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add brown sugar, maple syrup, baking soda, cinnamon, ginger and salt. Beat until combined.",
                            "ingredients": [
                                {
                                    "id": 18372,
                                    "name": "baking soda",
                                    "localizedName": "baking soda",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 19334,
                                    "name": "brown sugar",
                                    "localizedName": "brown sugar",
                                    "image": "dark-brown-sugar.png"
                                },
                                {
                                    "id": 19911,
                                    "name": "maple syrup",
                                    "localizedName": "maple syrup",
                                    "image": "maple-syrup.png"
                                },
                                {
                                    "id": 2010,
                                    "name": "cinnamon",
                                    "localizedName": "cinnamon",
                                    "image": "cinnamon.jpg"
                                },
                                {
                                    "id": 11216,
                                    "name": "ginger",
                                    "localizedName": "ginger",
                                    "image": "ginger.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Beat in egg, applesauce and vanilla. Beat in as much flour as you can with mixer. Stir in remaining flour, carrots, raisins, walnuts just until combined.",
                            "ingredients": [
                                {
                                    "id": 9019,
                                    "name": "applesauce",
                                    "localizedName": "applesauce",
                                    "image": "applesauce.png"
                                },
                                {
                                    "id": 11124,
                                    "name": "carrot",
                                    "localizedName": "carrot",
                                    "image": "sliced-carrot.png"
                                },
                                {
                                    "id": 9299,
                                    "name": "raisins",
                                    "localizedName": "raisins",
                                    "image": "raisins.jpg"
                                },
                                {
                                    "id": 1052050,
                                    "name": "vanilla",
                                    "localizedName": "vanilla",
                                    "image": "vanilla.jpg"
                                },
                                {
                                    "id": 12155,
                                    "name": "walnuts",
                                    "localizedName": "walnuts",
                                    "image": "walnuts.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Drop by slightly rounded teaspoons 2 apart onto an ungreased cookie sheet.",
                            "ingredients": [
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Sprinkle with Turbinado sugar.",
                            "ingredients": [
                                {
                                    "id": 19908,
                                    "name": "turbinado sugar",
                                    "localizedName": "turbinado sugar",
                                    "image": "raw-brown-sugar.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Bake 8  10 minutes or until edges are firm.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 8,
                            "step": "Transfer to a wire rack: cool.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 405900,
                                    "name": "wire rack",
                                    "localizedName": "wire rack",
                                    "image": "wire-rack.jpg"
                                }
                            ]
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/carrot-cake-muffin-cookies-637181"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 6,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 11,
            "healthScore": 22,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 63.99,
            "extendedIngredients": [
                {
                    "id": 11819,
                    "aisle": "Produce",
                    "image": "red-chili.jpg",
                    "consistency": "SOLID",
                    "name": "chili pepper flakes",
                    "nameClean": "chili pepper",
                    "original": "1 teaspoon chili pepper flakes (optional)",
                    "originalName": "chili pepper flakes (optional)",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1034053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "extra virgin olive oil",
                    "nameClean": "extra virgin olive oil",
                    "original": "1/3 cup extra virgin olive oil",
                    "originalName": "extra virgin olive oil",
                    "amount": 0.33333334,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.333,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 78.863,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2012,
                    "aisle": "Spices and Seasonings",
                    "image": "ground-coriander.jpg",
                    "consistency": "SOLID",
                    "name": "coriander leaves",
                    "nameClean": "dried cilantro",
                    "original": "3 tablespoons coriander (cilantro) leaves, chopped",
                    "originalName": "coriander (cilantro) leaves, chopped",
                    "amount": 3.0,
                    "unit": "tablespoons",
                    "meta": [
                        "chopped",
                        "(cilantro)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "garlic, minced",
                    "originalName": "garlic, minced",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 11020420,
                    "aisle": "Pasta and Rice",
                    "image": "shell-pasta.jpg",
                    "consistency": "SOLID",
                    "name": "shrimp",
                    "nameClean": "pasta shells",
                    "original": "20 jumbo shrimp, shells removed",
                    "originalName": "shrimp, shells removed",
                    "amount": 20.0,
                    "unit": "jumbo",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 20.0,
                            "unitShort": "jumbo",
                            "unitLong": "jumbos"
                        },
                        "metric": {
                            "amount": 20.0,
                            "unitShort": "jumbo",
                            "unitLong": "jumbos"
                        }
                    }
                },
                {
                    "id": 9156,
                    "aisle": "Produce",
                    "image": "zest-lemon.jpg",
                    "consistency": "SOLID",
                    "name": "lemon zest",
                    "nameClean": "lemon peel",
                    "original": "1 tablespoon lemon zest",
                    "originalName": "lemon zest",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 11297,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "parsley.jpg",
                    "consistency": "SOLID",
                    "name": "parsley",
                    "nameClean": "parsley",
                    "original": "3 tablespoons chopped parsley",
                    "originalName": "chopped parsley",
                    "amount": 3.0,
                    "unit": "tablespoons",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "id": 645721,
            "title": "Grilled Garlicky-Herbed Shrimp",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/XVTYTLSS/grilled-garlicky-herbed-shrimp",
            "image": "https://spoonacular.com/recipeImages/645721-556x370.jpg",
            "imageType": "jpg",
            "summary": "Grilled Garlicky-Herbed Shrimp takes around <b>45 minutes</b> from beginning to end. For <b>64 cents per serving</b>, you get a hor d'oeuvre that serves 4. Watching your figure? This dairy free recipe has <b>189 calories</b>, <b>1g of protein</b>, and <b>18g of fat</b> per serving. 11 person were glad they tried this recipe. A mixture of chili pepper flakes, garlic, lemon zest, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is perfect for <b>The Fourth Of July</b>. It is brought to you by Foodista. With a spoonacular <b>score of 52%</b>, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/grilled-garlicky-herbed-shrimp-1352351\">Grilled Garlicky-Herbed Shrimp</a>, <a href=\"https://spoonacular.com/recipes/grilled-garlicky-herbed-shrimp-1364413\">Grilled Garlicky-Herbed Shrimp</a>, and <a href=\"https://spoonacular.com/recipes/grilled-garlicky-herbed-shrimp-1267345\">Grilled Garlicky-Herbed Shrimp</a>.",
            "cuisines": [],
            "dishTypes": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [
                "dairy free"
            ],
            "occasions": [
                "father's day",
                "4th of july",
                "summer"
            ],
            "instructions": "<ol><li>Combine all ingredients except shrimp in a large bowl. Add shrimp and toss to combine making sure all parts of the shrimp is coated in the marinade. Refrigerate 4 hours or overnight. Preheat grill on medium heat. Place shrimp on grill and cook, turning once, until pink  about 5 minutes.</li><li>The Culinary Chases Note: Want a Mediterranean feel?  Serve the shrimp with a roasted red pepper salad. Enjoy!</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Combine all ingredients except shrimp in a large bowl.",
                            "ingredients": [
                                {
                                    "id": 15270,
                                    "name": "shrimp",
                                    "localizedName": "shrimp",
                                    "image": "shrimp.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add shrimp and toss to combine making sure all parts of the shrimp is coated in the marinade. Refrigerate 4 hours or overnight. Preheat grill on medium heat.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "marinade",
                                    "localizedName": "marinade",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 15270,
                                    "name": "shrimp",
                                    "localizedName": "shrimp",
                                    "image": "shrimp.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404706,
                                    "name": "grill",
                                    "localizedName": "grill",
                                    "image": "grill.jpg"
                                }
                            ],
                            "length": {
                                "number": 240,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Place shrimp on grill and cook, turning once, until pink  about 5 minutes.The Culinary Chases Note: Want a Mediterranean feel?",
                            "ingredients": [
                                {
                                    "id": 15270,
                                    "name": "shrimp",
                                    "localizedName": "shrimp",
                                    "image": "shrimp.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404706,
                                    "name": "grill",
                                    "localizedName": "grill",
                                    "image": "grill.jpg"
                                }
                            ],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Serve the shrimp with a roasted red pepper salad. Enjoy!",
                            "ingredients": [
                                {
                                    "id": 11916,
                                    "name": "roasted red peppers",
                                    "localizedName": "roasted red peppers",
                                    "image": "red-pepper.jpg"
                                },
                                {
                                    "id": 15270,
                                    "name": "shrimp",
                                    "localizedName": "shrimp",
                                    "image": "shrimp.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/grilled-garlicky-herbed-shrimp-645721"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 8,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 10,
            "healthScore": 14,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 97.21,
            "extendedIngredients": [
                {
                    "id": 11266,
                    "aisle": "Produce",
                    "image": "mushrooms.png",
                    "consistency": "SOLID",
                    "name": "cremini mushrooms",
                    "nameClean": "crimini mushrooms",
                    "original": "2 cups cremini mushrooms, sliced",
                    "originalName": "cremini mushrooms, sliced",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [
                        "sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "2 large eggs, beaten",
                    "originalName": "eggs, beaten",
                    "amount": 2.0,
                    "unit": "large",
                    "meta": [
                        "beaten"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "large",
                            "unitLong": "larges"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "large",
                            "unitLong": "larges"
                        }
                    }
                },
                {
                    "id": 16157,
                    "aisle": "Gluten Free;Ethnic Foods;Health Foods",
                    "image": "chickpea-flour-or-another-gluten-free-flour.jpg",
                    "consistency": "SOLID",
                    "name": "bob's mill garbanzo bean flour",
                    "nameClean": "chickpea flour",
                    "original": "1/2 cup Bob's Red Mill Garbanzo Bean Flour",
                    "originalName": "Bob's Red Mill Garbanzo Bean Flour",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "red"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 10211215,
                    "aisle": "Produce",
                    "image": "garlic.jpg",
                    "consistency": "SOLID",
                    "name": "garlic clove",
                    "nameClean": "whole garlic cloves",
                    "original": "1 garlic clove, minced",
                    "originalName": "garlic clove, minced",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 4073,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "margarine",
                    "nameClean": "margarine",
                    "original": "1 tablespoon margarine",
                    "originalName": "margarine",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1034053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "olive oil",
                    "nameClean": "extra virgin olive oil",
                    "original": "2 tablespoons extra-virgin olive oil",
                    "originalName": "extra-virgin olive oil",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [
                        "extra-virgin"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 1035,
                    "aisle": "Cheese",
                    "image": "provolone-slices.jpg",
                    "consistency": "SOLID",
                    "name": "provolone cheese",
                    "nameClean": "provolone",
                    "original": "1/2 cup shredded Provolone cheese",
                    "originalName": "shredded Provolone cheese",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "shredded"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 10011282,
                    "aisle": "Produce",
                    "image": "red-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "red onion",
                    "original": "1/4 cup red onion, cut into 1-inch pieces",
                    "originalName": "red onion, cut into 1-inch pieces",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "red",
                        "cut into 1-inch pieces"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2036,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "rosemary.jpg",
                    "consistency": "SOLID",
                    "name": "rosemary",
                    "nameClean": "rosemary",
                    "original": "1/4 teaspoon rosemary",
                    "originalName": "rosemary",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "Salt and pepper, to taste",
                    "originalName": "Salt and pepper, to taste",
                    "amount": 4.0,
                    "unit": "servings",
                    "meta": [
                        "to taste"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1085,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.jpg",
                    "consistency": "LIQUID",
                    "name": "skim milk",
                    "nameClean": "fat free milk",
                    "original": "1/2 cup skim milk",
                    "originalName": "skim milk",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11147,
                    "aisle": "Produce",
                    "image": "swiss-chard.jpg",
                    "consistency": "SOLID",
                    "name": "swiss chard",
                    "nameClean": "swiss chard",
                    "original": "2 cups swiss chard, roughly chopped",
                    "originalName": "swiss chard, roughly chopped",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [
                        "roughly chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2049,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "thyme.jpg",
                    "consistency": "SOLID",
                    "name": "thyme",
                    "nameClean": "thyme",
                    "original": "1/4 teaspoon thyme",
                    "originalName": "thyme",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                }
            ],
            "id": 662668,
            "title": "Swiss Chard and Mushroom Popover Bake",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/TMFBNZ74/swiss-chard-and-mushroom-popover-bake",
            "image": "https://spoonacular.com/recipeImages/662668-556x370.jpg",
            "imageType": "jpg",
            "summary": "If you want to add more <b>gluten free</b> recipes to your collection, Swiss Chard and Mushroom Popover Bake might be a recipe you should try. This side dish has <b>266 calories</b>, <b>13g of protein</b>, and <b>18g of fat</b> per serving. For <b>97 cents per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. This recipe from Foodista requires thyme, margarine, skim milk, and onion. From preparation to the plate, this recipe takes about <b>45 minutes</b>. 10 people were impressed by this recipe. With a spoonacular <b>score of 64%</b>, this dish is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/swiss-chard-and-mushroom-popover-bake-20204\">Swiss Chard And Mushroom Popover Bake</a>, <a href=\"https://spoonacular.com/recipes/quiche-with-swiss-chard-and-mushroom-657511\">Quiche with Swiss Chard and Mushroom</a>, and <a href=\"https://spoonacular.com/recipes/mushroom-swiss-chard-pasta-941160\">Mushroom Swiss Chard Pasta</a>.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "gluten free"
            ],
            "occasions": [],
            "instructions": "<ol><li>Preheat your oven to 425 degrees F.</li><li>Add the olive oil to a large skillet over medium heat. When hot, add the onion and mushrooms and cook, stirring, until soft. Add the Swiss chard, garlic, and seasonings, and mix well for a few minutes (be careful not to burn the garlic).</li><li>Remove the mixture from the heat and cover it.</li><li>Spray an 8-inch square baking dish (you could also use a pie plate) with the nonstick cooking spray. Add the margarine and place the dish in the oven until the margarine melts, then remove it from the oven.</li><li>In a medium bowl, whisk together the garbanzo bean flour, milk and eggs.</li><li>Pour the flour mixture into the baking dish and bake for 12-14 minutes, or until it becomes puffy and lightly browns.</li><li>Spoon the Swiss chard mixture to the crust and sprinkle the Provolone cheese over the top. Bake for about 10 minutes, or until the cheese has melted.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat your oven to 425 degrees F.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 425.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add the olive oil to a large skillet over medium heat. When hot, add the onion and mushrooms and cook, stirring, until soft.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add the Swiss chard, garlic, and seasonings, and mix well for a few minutes (be careful not to burn the garlic).",
                            "ingredients": [
                                {
                                    "id": 11147,
                                    "name": "swiss chard",
                                    "localizedName": "swiss chard",
                                    "image": "swiss-chard.jpg"
                                },
                                {
                                    "id": 1042027,
                                    "name": "seasoning",
                                    "localizedName": "seasoning",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Remove the mixture from the heat and cover it.Spray an 8-inch square baking dish (you could also use a pie plate) with the nonstick cooking spray.",
                            "ingredients": [
                                {
                                    "id": 4679,
                                    "name": "cooking spray",
                                    "localizedName": "cooking spray",
                                    "image": "cooking-spray.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404646,
                                    "name": "baking pan",
                                    "localizedName": "baking pan",
                                    "image": "roasting-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Add the margarine and place the dish in the oven until the margarine melts, then remove it from the oven.In a medium bowl, whisk together the garbanzo bean flour, milk and eggs.",
                            "ingredients": [
                                {
                                    "id": 16157,
                                    "name": "chickpea flour",
                                    "localizedName": "chickpea flour",
                                    "image": "chickpea-flour-or-another-gluten-free-flour.jpg"
                                },
                                {
                                    "id": 4073,
                                    "name": "margarine",
                                    "localizedName": "margarine",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                },
                                {
                                    "id": 1077,
                                    "name": "milk",
                                    "localizedName": "milk",
                                    "image": "milk.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "whisk.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Pour the flour mixture into the baking dish and bake for 12-14 minutes, or until it becomes puffy and lightly browns.Spoon the Swiss chard mixture to the crust and sprinkle the Provolone cheese over the top.",
                            "ingredients": [
                                {
                                    "id": 1035,
                                    "name": "provolone",
                                    "localizedName": "provolone",
                                    "image": "provolone-slices.jpg"
                                },
                                {
                                    "id": 11147,
                                    "name": "swiss chard",
                                    "localizedName": "swiss chard",
                                    "image": "swiss-chard.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "crust",
                                    "localizedName": "crust",
                                    "image": ""
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404646,
                                    "name": "baking pan",
                                    "localizedName": "baking pan",
                                    "image": "roasting-pan.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 14,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 7,
                            "step": "Bake for about 10 minutes, or until the cheese has melted.",
                            "ingredients": [
                                {
                                    "id": 1041009,
                                    "name": "cheese",
                                    "localizedName": "cheese",
                                    "image": "cheddar-cheese.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/swiss-chard-and-mushroom-popover-bake-662668"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 18,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 9,
            "healthScore": 24,
            "creditsText": "foodista.com",
            "sourceName": "foodista.com",
            "pricePerServing": 261.76,
            "extendedIngredients": [
                {
                    "id": 18079,
                    "aisle": "Pasta and Rice",
                    "image": "breadcrumbs.jpg",
                    "consistency": "SOLID",
                    "name": "style bread crumbs",
                    "nameClean": "breadcrumbs",
                    "original": "2 cups Italian style bread crumbs",
                    "originalName": "Italian style bread crumbs",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [
                        "italian"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1025062,
                    "aisle": "Meat",
                    "image": "chicken-breasts.png",
                    "consistency": "SOLID",
                    "name": "chicken cutlets",
                    "nameClean": "chicken cutlet",
                    "original": "8 (3-ounces each) chicken cutlets",
                    "originalName": "each) chicken cutlets",
                    "amount": 24.0,
                    "unit": "ounces",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 24.0,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 680.389,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "3 eggs beaten",
                    "originalName": "eggs beaten",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [
                        "beaten"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "1 cup Flour",
                    "originalName": "Flour",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1026,
                    "aisle": "Cheese",
                    "image": "mozzarella.png",
                    "consistency": "SOLID",
                    "name": "mozzarella cheese",
                    "nameClean": "mozzarella",
                    "original": "4 cups mozzarella cheese (depending on how much cheese you like)",
                    "originalName": "mozzarella cheese (depending on how much cheese you like)",
                    "amount": 4.0,
                    "unit": "cups",
                    "meta": [
                        "(depending on how much cheese you like)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 946.352,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1033,
                    "aisle": "Cheese",
                    "image": "parmesan.jpg",
                    "consistency": "SOLID",
                    "name": "parmesan cheese",
                    "nameClean": "parmesan",
                    "original": "1/2 cup Parmesan cheese (Grated fresh, not from a green can)",
                    "originalName": "Parmesan cheese (Grated fresh, not from a green can)",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "fresh",
                        "green",
                        "grated",
                        "( , not from a can)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 4669,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "vegetable oil",
                    "nameClean": "vegetable oil",
                    "original": "vegetable oil for frying (you can bake them too, but they're better fried!)",
                    "originalName": "vegetable oil for frying (you bake them too, but they're better fried!)",
                    "amount": 1.0,
                    "unit": "can",
                    "meta": [
                        "for frying",
                        "(you bake them too, but they're better fried!)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "can",
                            "unitLong": "can"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "can",
                            "unitLong": "can"
                        }
                    }
                }
            ],
            "id": 634891,
            "title": "Best Chicken Parmesan",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.foodista.com/recipe/FZF4ZNP2/best-chicken-parmesan",
            "image": "https://spoonacular.com/recipeImages/634891-556x370.jpg",
            "imageType": "jpg",
            "summary": "Best Chicken Parmesan might be just the <b>Mediterranean</b> recipe you are searching for. One portion of this dish contains about <b>53g of protein</b>, <b>26g of fat</b>, and a total of <b>636 calories</b>. This recipe serves 6. For <b>$2.62 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. It works well as a reasonably priced main course. It is brought to you by Foodista. 9 people have tried and liked this recipe. If you have mozzarella cheese, flour, eggs, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 77%</b>, which is good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/easy-parmesan-chicken-fingers-and-parmesan-chicken-wraps-1222731\">Easy Parmesan Chicken Fingers and Parmesan Chicken Wraps</a>, <a href=\"https://spoonacular.com/recipes/easy-parmesan-chicken-fingers-and-parmesan-chicken-wraps-1224419\">Easy Parmesan Chicken Fingers and Parmesan Chicken Wraps</a>, and <a href=\"https://spoonacular.com/recipes/easy-parmesan-chicken-fingers-and-parmesan-chicken-wraps-1233753\">Easy Parmesan Chicken Fingers and Parmesan Chicken Wraps</a>.",
            "cuisines": [
                "Mediterranean",
                "Italian",
                "European"
            ],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [],
            "occasions": [],
            "instructions": "<ol><li>Depending on how think your chicken breasts are, place them under plastic wrap and pound until thin. If you don't have a meat pounder, use a heavy pot of skillet. You can also fillet these with a knife.</li><li>Get 3 pie plates or containers. Put flour in one, beaten eggs in one and bread crumbs in one.</li><li>Dredge chicken breast in flour, then in the egg wash, and then the bread crumbs.</li><li>Fry cutlets in vegetable oil over med heat. Fry until golden brown.</li><li>Spread a little marinara on the bottom of a 13x9 baking dish.</li><li>Make a layer of chicken. Add more marinara. Use most of the first quart. Add a layer of the cheeses. Repeat layers. Sprinkle parsley over last layer of cheese. Bake in a pre-heated 350 degree oven covered for 35 minutes. uncover and bake until top is bubbly!</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Depending on how think your chicken breasts are, place them under plastic wrap and pound until thin. If you don't have a meat pounder, use a heavy pot of skillet. You can also fillet these with a knife.Get 3 pie plates or containers. Put flour in one, beaten eggs in one and bread crumbs in one.Dredge chicken breast in flour, then in the egg wash, and then the bread crumbs.Fry cutlets in vegetable oil over med heat. Fry until golden brown.",
                            "ingredients": [
                                {
                                    "id": 5062,
                                    "name": "chicken breast",
                                    "localizedName": "chicken breast",
                                    "image": "chicken-breasts.png"
                                },
                                {
                                    "id": 4669,
                                    "name": "vegetable oil",
                                    "localizedName": "vegetable oil",
                                    "image": "vegetable-oil.jpg"
                                },
                                {
                                    "id": 18079,
                                    "name": "breadcrumbs",
                                    "localizedName": "breadcrumbs",
                                    "image": "breadcrumbs.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                },
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 10018364,
                                    "name": "wrap",
                                    "localizedName": "wrap",
                                    "image": "flour-tortilla.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 3846,
                                    "name": "meat tenderizer",
                                    "localizedName": "meat tenderizer",
                                    "image": "meat-mallet.jpg"
                                },
                                {
                                    "id": 404730,
                                    "name": "plastic wrap",
                                    "localizedName": "plastic wrap",
                                    "image": "plastic-wrap.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                },
                                {
                                    "id": 404745,
                                    "name": "knife",
                                    "localizedName": "knife",
                                    "image": "chefs-knife.jpg"
                                },
                                {
                                    "id": 404752,
                                    "name": "pot",
                                    "localizedName": "pot",
                                    "image": "stock-pot.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Spread a little marinara on the bottom of a 13x9 baking dish.Make a layer of chicken.",
                            "ingredients": [
                                {
                                    "id": 5006,
                                    "name": "whole chicken",
                                    "localizedName": "whole chicken",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "spread",
                                    "localizedName": "spread",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404646,
                                    "name": "baking pan",
                                    "localizedName": "baking pan",
                                    "image": "roasting-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add more marinara. Use most of the first quart.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Add a layer of the cheeses. Repeat layers.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Sprinkle parsley over last layer of cheese.",
                            "ingredients": [
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                },
                                {
                                    "id": 1041009,
                                    "name": "cheese",
                                    "localizedName": "cheese",
                                    "image": "cheddar-cheese.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Bake in a pre-heated 350 degree oven covered for 35 minutes. uncover and bake until top is bubbly!",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 35,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/best-chicken-parmesan-634891"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 19,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 34,
            "healthScore": 2,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 258.09,
            "extendedIngredients": [
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "6 tablespoons melted butter",
                    "originalName": "melted butter",
                    "amount": 6.0,
                    "unit": "tablespoons",
                    "meta": [
                        "melted"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 6.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 20027,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "SOLID",
                    "name": "cornstarch",
                    "nameClean": "corn starch",
                    "original": "1 tablespoon cornstarch",
                    "originalName": "cornstarch",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "4 eggs",
                    "originalName": "eggs",
                    "amount": 4.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "SOLID",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "1 cup flour",
                    "originalName": "flour",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "LIQUID",
                    "name": "milk",
                    "nameClean": "milk",
                    "original": "1 cup milk",
                    "originalName": "milk",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2064,
                    "aisle": "Produce",
                    "image": "mint.jpg",
                    "consistency": "SOLID",
                    "name": "mint leaves",
                    "nameClean": "mint",
                    "original": "1 tablespoon chopped mint leaves",
                    "originalName": "chopped mint leaves",
                    "amount": 1.0,
                    "unit": "tablespoon",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 9190,
                    "aisle": "Produce",
                    "image": "black-and-white-mulberries.jpg",
                    "consistency": "SOLID",
                    "name": "mulberries",
                    "nameClean": "mulberries",
                    "original": "1 cup mulberries, stems removed",
                    "originalName": "mulberries, stems removed",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 9206,
                    "aisle": "Beverages",
                    "image": "orange-juice.jpg",
                    "consistency": "LIQUID",
                    "name": "orange juice",
                    "nameClean": "orange juice",
                    "original": "1/4 cup orange juice",
                    "originalName": "orange juice",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 9307,
                    "aisle": "Produce",
                    "image": "rhubarb.jpg",
                    "consistency": "SOLID",
                    "name": "rhubarb",
                    "nameClean": "rhubarb",
                    "original": "1 cup chopped rhubarb",
                    "originalName": "chopped rhubarb",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1 teaspoon salt",
                    "originalName": "salt",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "1/4 cup sugar",
                    "originalName": "sugar",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 10319335,
                    "aisle": "Baking",
                    "image": "vanilla-sugar.jpg",
                    "consistency": "SOLID",
                    "name": "vanilla sugar",
                    "nameClean": "vanilla sugar",
                    "original": "cup vanilla sugar",
                    "originalName": "vanilla sugar",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 641766,
            "title": "Dutch Babies With Mulberry-Rhubarb Compote",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.foodista.com/recipe/F7B527KX/dutch-babies-with-mulberry-rhubarb-compote",
            "image": "https://spoonacular.com/recipeImages/641766-556x370.jpg",
            "imageType": "jpg",
            "summary": "Dutch Babies With Mulberry-Rhubarb Compote is a <b>lacto ovo vegetarian</b> recipe with 6 servings. One portion of this dish contains around <b>8g of protein</b>, <b>16g of fat</b>, and a total of <b>428 calories</b>. For <b>$2.58 per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. A couple people really liked this side dish. 34 people were glad they tried this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Head to the store and pick up mint leaves, vanilla sugar, rhubarb, and a few other things to make it today. With a spoonacular <b>score of 34%</b>, this dish is not so great. Try <a href=\"https://spoonacular.com/recipes/mulberry-rhubarb-compote-80998\">Mulberry-rhubarb Compote</a>, <a href=\"https://spoonacular.com/recipes/means-dutch-babies-141505\">Mean's Dutch Babies</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-mini-dutch-babies-529821\">Strawberry Mini Dutch Babies</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [],
            "instructions": "<ol><li>For the compote: Pulse the rhubarb in the food processor 5-6 times to a diced consistency. Then pulse the mulberries 3-4 times to chop.</li><li>Add rhubarb, mulberries, orange juice, sugar, salt and cornstarch to a sauce pan and simmer over medium for 10-15 minutesstirring occasionally.</li><li>Remove from heat and stir in the fresh mint leaves. Makes approximately 2 cups.</li><li>Dutch Babies: Preheat the oven to 375*F. In the blender, add the flour, sugar, salt, milk and eggs. Process for 10 seconds, then add 2 Tb. of melted butter and process again.</li><li>Brush the remaining 4 Tb. of butter into 24 muffin tinsthoroughly coating. Slowly pour the batter into the muffins tins.</li><li>Bake for 12-14 minutesuntil edges are golden brown and the center is puffed.</li><li>Immediately remove the Dutch babies from the muffins tins and top with mulberry-rhubarb compote!</li><li>Serves 6+.</li><li>If making the traditional way, this is enough batter for two cast-iron skillets.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "For the compote: Pulse the rhubarb in the food processor 5-6 times to a diced consistency. Then pulse the mulberries 3-4 times to chop.",
                            "ingredients": [
                                {
                                    "id": 9190,
                                    "name": "mulberries",
                                    "localizedName": "mulberries",
                                    "image": "black-and-white-mulberries.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "compote",
                                    "localizedName": "compote",
                                    "image": ""
                                },
                                {
                                    "id": 9307,
                                    "name": "rhubarb",
                                    "localizedName": "rhubarb",
                                    "image": "rhubarb.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add rhubarb, mulberries, orange juice, sugar, salt and cornstarch to a sauce pan and simmer over medium for 10-15 minutesstirring occasionally.",
                            "ingredients": [
                                {
                                    "id": 9206,
                                    "name": "orange juice",
                                    "localizedName": "orange juice",
                                    "image": "orange-juice.jpg"
                                },
                                {
                                    "id": 20027,
                                    "name": "corn starch",
                                    "localizedName": "corn starch",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 9190,
                                    "name": "mulberries",
                                    "localizedName": "mulberries",
                                    "image": "black-and-white-mulberries.jpg"
                                },
                                {
                                    "id": 9307,
                                    "name": "rhubarb",
                                    "localizedName": "rhubarb",
                                    "image": "rhubarb.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Remove from heat and stir in the fresh mint leaves. Makes approximately 2 cups.Dutch Babies: Preheat the oven to 375*F. In the blender, add the flour, sugar, salt, milk and eggs. Process for 10 seconds, then add 2 Tb. of melted butter and process again.",
                            "ingredients": [
                                {
                                    "id": 2064,
                                    "name": "fresh mint",
                                    "localizedName": "fresh mint",
                                    "image": "mint.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                },
                                {
                                    "id": 1077,
                                    "name": "milk",
                                    "localizedName": "milk",
                                    "image": "milk.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404726,
                                    "name": "blender",
                                    "localizedName": "blender",
                                    "image": "blender.png"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Brush the remaining 4 Tb. of butter into 24 muffin tinsthoroughly coating. Slowly pour the batter into the muffins tins.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Bake for 12-14 minutesuntil edges are golden brown and the center is puffed.Immediately remove the Dutch babies from the muffins tins and top with mulberry-rhubarb compote!",
                            "ingredients": [
                                {
                                    "id": 9190,
                                    "name": "mulberries",
                                    "localizedName": "mulberries",
                                    "image": "black-and-white-mulberries.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "compote",
                                    "localizedName": "compote",
                                    "image": ""
                                },
                                {
                                    "id": 9307,
                                    "name": "rhubarb",
                                    "localizedName": "rhubarb",
                                    "image": "rhubarb.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Serves 6+.If making the traditional way, this is enough batter for two cast-iron skillets.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/dutch-babies-with-mulberry-rhubarb-compote-641766"
        },
        {
            "vegetarian": true,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 26,
            "gaps": "no",
            "preparationMinutes": -1,
            "cookingMinutes": -1,
            "aggregateLikes": 9,
            "healthScore": 9,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 186.04,
            "extendedIngredients": [
                {
                    "id": 1145,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "SOLID",
                    "name": "butter",
                    "nameClean": "unsalted butter",
                    "original": "2 tablespoons unsalted butter",
                    "originalName": "unsalted butter",
                    "amount": 2.0,
                    "unit": "tablespoons",
                    "meta": [
                        "unsalted"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 10011282,
                    "aisle": "Produce",
                    "image": "red-onion.png",
                    "consistency": "SOLID",
                    "name": "onion",
                    "nameClean": "red onion",
                    "original": "1 cup red onion, chopped",
                    "originalName": "red onion, chopped",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "red",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11143,
                    "aisle": "Produce",
                    "image": "celery.jpg",
                    "consistency": "SOLID",
                    "name": "celery",
                    "nameClean": "celery",
                    "original": "1 cup celery, finely chopped",
                    "originalName": "celery, finely chopped",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11819,
                    "aisle": "Produce",
                    "image": "red-chili.jpg",
                    "consistency": "SOLID",
                    "name": "jalapeno chile peppers",
                    "nameClean": "chili pepper",
                    "original": "3 jalapeno chile peppers, seeded and diced",
                    "originalName": "jalapeno chile peppers, seeded and diced",
                    "amount": 3.0,
                    "unit": "",
                    "meta": [
                        "diced",
                        "seeded"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 3.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 12142,
                    "aisle": "Nuts;Baking",
                    "image": "pecans.jpg",
                    "consistency": "SOLID",
                    "name": "pecans",
                    "nameClean": "pecans",
                    "original": "1 cup toasted pecans, coarsely chopped",
                    "originalName": "toasted pecans, coarsely chopped",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "toasted",
                        "coarsely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 18023,
                    "aisle": "Bakery/Bread",
                    "image": "cornbread.jpg",
                    "consistency": "SOLID",
                    "name": "cornbread",
                    "nameClean": "cornbread",
                    "original": "8 cups cornbread, crumbled",
                    "originalName": "cornbread, crumbled",
                    "amount": 8.0,
                    "unit": "cups",
                    "meta": [
                        "crumbled"
                    ],
                    "measures": {
                        "us": {
                            "amount": 8.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 1.893,
                            "unitShort": "l",
                            "unitLong": "liters"
                        }
                    }
                },
                {
                    "id": 11165,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "cilantro.png",
                    "consistency": "SOLID",
                    "name": "cilantro",
                    "nameClean": "cilantro",
                    "original": "1/4 cup fresh cilantro, chopped",
                    "originalName": "fresh cilantro, chopped",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "fresh",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1 teaspoon salt",
                    "originalName": "salt",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "SOLID",
                    "name": "pepper",
                    "nameClean": "black pepper",
                    "original": "1 teaspoon black pepper",
                    "originalName": "black pepper",
                    "amount": 1.0,
                    "unit": "teaspoon",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2031,
                    "aisle": "Spices and Seasonings",
                    "image": "chili-powder.jpg",
                    "consistency": "SOLID",
                    "name": "cayenne pepper",
                    "nameClean": "ground cayenne pepper",
                    "original": "1/4 teaspoon cayenne pepper, optional",
                    "originalName": "cayenne pepper, optional",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 6194,
                    "aisle": "Canned and Jarred",
                    "image": "chicken-broth.png",
                    "consistency": "LIQUID",
                    "name": "chicken broth",
                    "nameClean": "chicken broth",
                    "original": "1 cup chicken broth, or more as needed",
                    "originalName": "chicken broth, or more as needed",
                    "amount": 1.0,
                    "unit": "cup",
                    "meta": [
                        "as needed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 648348,
            "title": "Jalapeno Cornbread Stuffing",
            "readyInMinutes": 45,
            "servings": 10,
            "sourceUrl": "https://www.foodista.com/recipe/35CL7GG7/jalapeno-cornbread-stuffing",
            "image": "https://spoonacular.com/recipeImages/648348-556x370.jpg",
            "imageType": "jpg",
            "summary": "Jalapeno Cornbread Stuffing takes approximately <b>45 minutes</b> from beginning to end. For <b>$1.86 per serving</b>, you get a side dish that serves 10. One serving contains <b>728 calories</b>, <b>14g of protein</b>, and <b>28g of fat</b>. 9 people were impressed by this recipe. Head to the store and pick up salt, onion, celery, and a few other things to make it today. Only a few people really liked this Southern dish. It will be a hit at your <b>Thanksgiving</b> event. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. It is brought to you by Foodista. With a spoonacular <b>score of 33%</b>, this dish is not so super. Similar recipes include <a href=\"https://spoonacular.com/recipes/cornbread-stuffing-694984\">Cornbread Stuffing</a>, <a href=\"https://spoonacular.com/recipes/cornbread-for-stuffing-1544479\">Cornbread for Stuffing</a>, and <a href=\"https://spoonacular.com/recipes/cornbread-stuffing-1775977\">Cornbread Stuffing</a>.",
            "cuisines": [
                "Southern"
            ],
            "dishTypes": [
                "side dish"
            ],
            "diets": [
                "lacto ovo vegetarian"
            ],
            "occasions": [
                "thanksgiving"
            ],
            "instructions": "Preheat oven to 350F (175C).\nMelt butter in a large skillet over medium high heat.\nAdd onion, celery, and jalapeno peppers and cook until tender, about 5 minutes.\nAdd pecans and cook for one minute more.\nPlace crumbled cornbread in a large bowl; add onion-pecan mixture, cilantro and seasonings. Toss to mix.\nAdd enough chicken broth to moisten; about 1 cup.\nUse as a stuffing or spoon into a greased baking dish.\nBake until the top has formed a crust and the stuffing is heated through, about 25 to 30 minutes. Serve hot.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat oven to 350F (175C).",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 350.0,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Melt butter in a large skillet over medium high heat.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add onion, celery, and jalapeno peppers and cook until tender, about 5 minutes.",
                            "ingredients": [
                                {
                                    "id": 11979,
                                    "name": "jalapeno pepper",
                                    "localizedName": "jalapeno pepper",
                                    "image": "jalapeno-pepper.png"
                                },
                                {
                                    "id": 11143,
                                    "name": "celery",
                                    "localizedName": "celery",
                                    "image": "celery.jpg"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Add pecans and cook for one minute more.",
                            "ingredients": [
                                {
                                    "id": 12142,
                                    "name": "pecans",
                                    "localizedName": "pecans",
                                    "image": "pecans.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 1,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Place crumbled cornbread in a large bowl; add onion-pecan mixture, cilantro and seasonings. Toss to mix.",
                            "ingredients": [
                                {
                                    "id": 1042027,
                                    "name": "seasoning",
                                    "localizedName": "seasoning",
                                    "image": "seasoning.png"
                                },
                                {
                                    "id": 18023,
                                    "name": "cornbread",
                                    "localizedName": "cornbread",
                                    "image": "cornbread.jpg"
                                },
                                {
                                    "id": 11165,
                                    "name": "cilantro",
                                    "localizedName": "cilantro",
                                    "image": "cilantro.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 12142,
                                    "name": "pecans",
                                    "localizedName": "pecans",
                                    "image": "pecans.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Add enough chicken broth to moisten; about 1 cup.",
                            "ingredients": [
                                {
                                    "id": 6194,
                                    "name": "chicken broth",
                                    "localizedName": "chicken broth",
                                    "image": "chicken-broth.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Use as a stuffing or spoon into a greased baking dish.",
                            "ingredients": [
                                {
                                    "id": 18082,
                                    "name": "stuffing",
                                    "localizedName": "stuffing",
                                    "image": "stuffing-mix.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404646,
                                    "name": "baking pan",
                                    "localizedName": "baking pan",
                                    "image": "roasting-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Bake until the top has formed a crust and the stuffing is heated through, about 25 to 30 minutes.",
                            "ingredients": [
                                {
                                    "id": 18082,
                                    "name": "stuffing",
                                    "localizedName": "stuffing",
                                    "image": "stuffing-mix.png"
                                },
                                {
                                    "id": 0,
                                    "name": "crust",
                                    "localizedName": "crust",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 25,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 9,
                            "step": "Serve hot.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/jalapeno-cornbread-stuffing-648348"
        },
        {
        "vegetarian": true,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 1,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 24,
        "healthScore": 0,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 9.19,
        "extendedIngredients": [
            {
                "id": 1001,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "butter-sliced.jpg",
                "consistency": "SOLID",
                "name": "butter",
                "nameClean": "butter",
                "original": "1/2 cup butter, soften (I used brumble & brown)",
                "originalName": "butter, soften (I used brumble & brown)",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "(I used brumble & brown)"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 19334,
                "aisle": "Baking",
                "image": "light-brown-sugar.jpg",
                "consistency": "SOLID",
                "name": "brown sugar",
                "nameClean": "golden brown sugar",
                "original": "1/2 cup brown sugar (they said 1 cup)",
                "originalName": "brown sugar (they said 1 cup)",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "(they said 1 cup)"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 19911,
                "aisle": "Cereal",
                "image": "maple-syrup.png",
                "consistency": "LIQUID",
                "name": "maple syrup",
                "nameClean": "maple syrup",
                "original": "1 Tbsp. maple syrup",
                "originalName": "maple syrup",
                "amount": 1.0,
                "unit": "Tbsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 18372,
                "aisle": "Baking",
                "image": "white-powder.jpg",
                "consistency": "SOLID",
                "name": "baking soda",
                "nameClean": "baking soda",
                "original": "2 tsp. baking soda",
                "originalName": "baking soda",
                "amount": 2.0,
                "unit": "tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1012010,
                "aisle": "Spices and Seasonings",
                "image": "cinnamon.jpg",
                "consistency": "SOLID",
                "name": "ground cinnamon",
                "nameClean": "ground cinnamon",
                "original": "1 tsp. ground cinnamon",
                "originalName": "ground cinnamon",
                "amount": 1.0,
                "unit": "tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 2021,
                "aisle": "Spices and Seasonings",
                "image": "ginger.png",
                "consistency": "SOLID",
                "name": "ground ginger",
                "nameClean": "ginger powder",
                "original": "1 tsp. ground ginger",
                "originalName": "ground ginger",
                "amount": 1.0,
                "unit": "tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "1/4 tsp. salt",
                "originalName": "salt",
                "amount": 0.25,
                "unit": "tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1123,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "egg.png",
                "consistency": "SOLID",
                "name": "egg",
                "nameClean": "egg",
                "original": "1 egg or substitute",
                "originalName": "egg or substitute",
                "amount": 1.0,
                "unit": "",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "",
                        "unitLong": ""
                    }
                }
            },
            {
                "id": 9019,
                "aisle": "Canned and Jarred",
                "image": "applesauce.png",
                "consistency": "SOLID",
                "name": "applesauce",
                "nameClean": "applesauce",
                "original": "1/4 cup unsweetened applesauce",
                "originalName": "unsweetened applesauce",
                "amount": 0.25,
                "unit": "cup",
                "meta": [
                    "unsweetened"
                ],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 59.147,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2050,
                "aisle": "Baking",
                "image": "vanilla-extract.jpg",
                "consistency": "LIQUID",
                "name": "vanilla extract",
                "nameClean": "vanilla extract",
                "original": "1 tsp. vanilla extract",
                "originalName": "vanilla extract",
                "amount": 1.0,
                "unit": "tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 10020080,
                "aisle": "Baking",
                "image": "flour.png",
                "consistency": "SOLID",
                "name": "pastry flour",
                "nameClean": "whole wheat pastry flour",
                "original": "1 cup whole wheat pastry flour",
                "originalName": "whole wheat pastry flour",
                "amount": 1.0,
                "unit": "cup",
                "meta": [
                    "whole wheat"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 93824,
                "aisle": "Baking",
                "image": "flour.png",
                "consistency": "SOLID",
                "name": "flour",
                "nameClean": "white whole wheat flour",
                "original": "1 cup white whole wheat flour",
                "originalName": "white whole wheat flour",
                "amount": 1.0,
                "unit": "cup",
                "meta": [
                    "whole wheat",
                    "white"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 11124,
                "aisle": "Produce",
                "image": "sliced-carrot.png",
                "consistency": "SOLID",
                "name": "carrots",
                "nameClean": "carrot",
                "original": "1 cup finely shredded carrots (about 2 medium)",
                "originalName": "finely shredded carrots (about 2 medium)",
                "amount": 1.0,
                "unit": "cup",
                "meta": [
                    "shredded",
                    "finely",
                    "( 2 medium)"
                ],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "cup",
                        "unitLong": "cup"
                    },
                    "metric": {
                        "amount": 236.588,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 9299,
                "aisle": "Dried Fruits;Produce;Baking",
                "image": "raisins.jpg",
                "consistency": "SOLID",
                "name": "raisin",
                "nameClean": "raisins",
                "original": "3/4 cup raisin",
                "originalName": "raisin",
                "amount": 0.75,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.75,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 177.441,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 10112155,
                "aisle": "Nuts;Savory Snacks;Baking",
                "image": "walnuts.jpg",
                "consistency": "SOLID",
                "name": "walnuts",
                "nameClean": "walnut pieces",
                "original": "1/2 cup chopped walnuts (recipe calls for 3/4 cup, but I only had half, add more)",
                "originalName": "chopped walnuts (recipe calls for 3/4 cup, but I only had half, add more)",
                "amount": 0.5,
                "unit": "cup",
                "meta": [
                    "chopped",
                    "for 3/4 cup, but i only had half, add more",
                    "(recipe calls )"
                ],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 118.294,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 19908,
                "aisle": "Baking",
                "image": "raw-brown-sugar.png",
                "consistency": "SOLID",
                "name": "turbinado sugar",
                "nameClean": "turbinado sugar",
                "original": "1/2 Tbsp Turbinado Sugar",
                "originalName": "Turbinado Sugar",
                "amount": 0.5,
                "unit": "Tbsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            }
        ],
        "id": 637181,
        "title": "Carrot Cake Muffin Cookies",
        "readyInMinutes": 45,
        "servings": 64,
        "sourceUrl": "https://www.foodista.com/recipe/MS6VMCQG/carrot-cake-muffin-cookies",
        "image": "https://spoonacular.com/recipeImages/637181-556x370.jpg",
        "imageType": "jpg",
        "summary": "Carrot Cake Muffin Cookies might be just the dessert you are searching for. Watching your figure? This lacto ovo vegetarian recipe has <b>47 calories</b>, <b>1g of protein</b>, and <b>2g of fat</b> per serving. This recipe serves 64 and costs 9 cents per serving. 24 people were glad they tried this recipe. If you have vanillan extract, ground ginger, turbinado sugar, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. <b>Easter</b> will be even more special with this recipe. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 10%</b>, which is improvable. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/single-serving-microwave-carrot-cake-muffin-523340\">Single-Serving Microwave Carrot Cake Muffin</a>, <a href=\"https://spoonacular.com/recipes/single-serving-microwave-carrot-cake-muffin-1217901\">Single-Serving Microwave Carrot Cake Muffin</a>, and <a href=\"https://spoonacular.com/recipes/carrot-cake-cookies-41261\">Carrot-cake Cookies</a>.",
        "cuisines": [],
        "dishTypes": [
            "dessert"
        ],
        "diets": [
            "lacto ovo vegetarian"
        ],
        "occasions": [
            "easter"
        ],
        "instructions": "Preheat oven to 350\nIn a large bowl beat the butter with an electric mixer on medium speed for 30 seconds.\nAdd brown sugar, maple syrup, baking soda, cinnamon, ginger and salt. Beat until combined.\nBeat in egg, applesauce and vanilla. Beat in as much flour as you can with mixer. Stir in remaining flour, carrots, raisins, walnuts just until combined.\nDrop by slightly rounded teaspoons 2 apart onto an ungreased cookie sheet. Sprinkle with Turbinado sugar. Bake 8  10 minutes or until edges are firm. Transfer to a wire rack: cool.",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Preheat oven to 350",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "In a large bowl beat the butter with an electric mixer on medium speed for 30 seconds.",
                        "ingredients": [
                            {
                                "id": 1001,
                                "name": "butter",
                                "localizedName": "butter",
                                "image": "butter-sliced.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404628,
                                "name": "hand mixer",
                                "localizedName": "hand mixer",
                                "image": "hand-mixer.png"
                            },
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 3,
                        "step": "Add brown sugar, maple syrup, baking soda, cinnamon, ginger and salt. Beat until combined.",
                        "ingredients": [
                            {
                                "id": 18372,
                                "name": "baking soda",
                                "localizedName": "baking soda",
                                "image": "white-powder.jpg"
                            },
                            {
                                "id": 19334,
                                "name": "brown sugar",
                                "localizedName": "brown sugar",
                                "image": "dark-brown-sugar.png"
                            },
                            {
                                "id": 19911,
                                "name": "maple syrup",
                                "localizedName": "maple syrup",
                                "image": "maple-syrup.png"
                            },
                            {
                                "id": 2010,
                                "name": "cinnamon",
                                "localizedName": "cinnamon",
                                "image": "cinnamon.jpg"
                            },
                            {
                                "id": 11216,
                                "name": "ginger",
                                "localizedName": "ginger",
                                "image": "ginger.png"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Beat in egg, applesauce and vanilla. Beat in as much flour as you can with mixer. Stir in remaining flour, carrots, raisins, walnuts just until combined.",
                        "ingredients": [
                            {
                                "id": 9019,
                                "name": "applesauce",
                                "localizedName": "applesauce",
                                "image": "applesauce.png"
                            },
                            {
                                "id": 11124,
                                "name": "carrot",
                                "localizedName": "carrot",
                                "image": "sliced-carrot.png"
                            },
                            {
                                "id": 9299,
                                "name": "raisins",
                                "localizedName": "raisins",
                                "image": "raisins.jpg"
                            },
                            {
                                "id": 1052050,
                                "name": "vanilla",
                                "localizedName": "vanilla",
                                "image": "vanilla.jpg"
                            },
                            {
                                "id": 12155,
                                "name": "walnuts",
                                "localizedName": "walnuts",
                                "image": "walnuts.jpg"
                            },
                            {
                                "id": 20081,
                                "name": "all purpose flour",
                                "localizedName": "all purpose flour",
                                "image": "flour.png"
                            },
                            {
                                "id": 1123,
                                "name": "egg",
                                "localizedName": "egg",
                                "image": "egg.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404726,
                                "name": "blender",
                                "localizedName": "blender",
                                "image": "blender.png"
                            }
                        ]
                    },
                    {
                        "number": 5,
                        "step": "Drop by slightly rounded teaspoons 2 apart onto an ungreased cookie sheet.",
                        "ingredients": [
                            {
                                "id": 10118192,
                                "name": "cookies",
                                "localizedName": "cookies",
                                "image": "shortbread-cookies.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404727,
                                "name": "baking sheet",
                                "localizedName": "baking sheet",
                                "image": "baking-sheet.jpg"
                            }
                        ]
                    },
                    {
                        "number": 6,
                        "step": "Sprinkle with Turbinado sugar.",
                        "ingredients": [
                            {
                                "id": 19908,
                                "name": "turbinado sugar",
                                "localizedName": "turbinado sugar",
                                "image": "raw-brown-sugar.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 7,
                        "step": "Bake 8  10 minutes or until edges are firm.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404784,
                                "name": "oven",
                                "localizedName": "oven",
                                "image": "oven.jpg"
                            }
                        ],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 8,
                        "step": "Transfer to a wire rack: cool.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 405900,
                                "name": "wire rack",
                                "localizedName": "wire rack",
                                "image": "wire-rack.jpg"
                            }
                        ]
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/carrot-cake-muffin-cookies-637181"
    },
        {
        "vegetarian": false,
        "vegan": false,
        "glutenFree": false,
        "dairyFree": true,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 6,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 11,
        "healthScore": 22,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 63.99,
        "extendedIngredients": [
            {
                "id": 11819,
                "aisle": "Produce",
                "image": "red-chili.jpg",
                "consistency": "SOLID",
                "name": "chili pepper flakes",
                "nameClean": "chili pepper",
                "original": "1 teaspoon chili pepper flakes (optional)",
                "originalName": "chili pepper flakes (optional)",
                "amount": 1.0,
                "unit": "teaspoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "tsp",
                        "unitLong": "teaspoon"
                    }
                }
            },
            {
                "id": 1034053,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "olive-oil.jpg",
                "consistency": "LIQUID",
                "name": "extra virgin olive oil",
                "nameClean": "extra virgin olive oil",
                "original": "1/3 cup extra virgin olive oil",
                "originalName": "extra virgin olive oil",
                "amount": 0.33333334,
                "unit": "cup",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.333,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 78.863,
                        "unitShort": "ml",
                        "unitLong": "milliliters"
                    }
                }
            },
            {
                "id": 2012,
                "aisle": "Spices and Seasonings",
                "image": "ground-coriander.jpg",
                "consistency": "SOLID",
                "name": "coriander leaves",
                "nameClean": "dried cilantro",
                "original": "3 tablespoons coriander (cilantro) leaves, chopped",
                "originalName": "coriander (cilantro) leaves, chopped",
                "amount": 3.0,
                "unit": "tablespoons",
                "meta": [
                    "chopped",
                    "(cilantro)"
                ],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 11215,
                "aisle": "Produce",
                "image": "garlic.png",
                "consistency": "SOLID",
                "name": "garlic",
                "nameClean": "garlic",
                "original": "garlic, minced",
                "originalName": "garlic, minced",
                "amount": 4.0,
                "unit": "servings",
                "meta": [
                    "minced"
                ],
                "measures": {
                    "us": {
                        "amount": 4.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    },
                    "metric": {
                        "amount": 4.0,
                        "unitShort": "servings",
                        "unitLong": "servings"
                    }
                }
            },
            {
                "id": 11020420,
                "aisle": "Pasta and Rice",
                "image": "shell-pasta.jpg",
                "consistency": "SOLID",
                "name": "shrimp",
                "nameClean": "pasta shells",
                "original": "20 jumbo shrimp, shells removed",
                "originalName": "shrimp, shells removed",
                "amount": 20.0,
                "unit": "jumbo",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 20.0,
                        "unitShort": "jumbo",
                        "unitLong": "jumbos"
                    },
                    "metric": {
                        "amount": 20.0,
                        "unitShort": "jumbo",
                        "unitLong": "jumbos"
                    }
                }
            },
            {
                "id": 9156,
                "aisle": "Produce",
                "image": "zest-lemon.jpg",
                "consistency": "SOLID",
                "name": "lemon zest",
                "nameClean": "lemon peel",
                "original": "1 tablespoon lemon zest",
                "originalName": "lemon zest",
                "amount": 1.0,
                "unit": "tablespoon",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    },
                    "metric": {
                        "amount": 1.0,
                        "unitShort": "Tbsp",
                        "unitLong": "Tbsp"
                    }
                }
            },
            {
                "id": 11297,
                "aisle": "Produce;Spices and Seasonings",
                "image": "parsley.jpg",
                "consistency": "SOLID",
                "name": "parsley",
                "nameClean": "parsley",
                "original": "3 tablespoons chopped parsley",
                "originalName": "chopped parsley",
                "amount": 3.0,
                "unit": "tablespoons",
                "meta": [
                    "chopped"
                ],
                "measures": {
                    "us": {
                        "amount": 3.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 3.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            }
        ],
        "id": 645721,
        "title": "Grilled Garlicky-Herbed Shrimp",
        "readyInMinutes": 45,
        "servings": 4,
        "sourceUrl": "http://www.foodista.com/recipe/XVTYTLSS/grilled-garlicky-herbed-shrimp",
        "image": "https://spoonacular.com/recipeImages/645721-556x370.jpg",
        "imageType": "jpg",
        "summary": "Grilled Garlicky-Herbed Shrimp takes around <b>45 minutes</b> from beginning to end. For <b>64 cents per serving</b>, you get a hor d'oeuvre that serves 4. Watching your figure? This dairy free recipe has <b>189 calories</b>, <b>1g of protein</b>, and <b>18g of fat</b> per serving. 11 person were glad they tried this recipe. A mixture of chili pepper flakes, garlic, lemon zest, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is perfect for <b>The Fourth Of July</b>. It is brought to you by Foodista. With a spoonacular <b>score of 52%</b>, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/grilled-garlicky-herbed-shrimp-1352351\">Grilled Garlicky-Herbed Shrimp</a>, <a href=\"https://spoonacular.com/recipes/grilled-garlicky-herbed-shrimp-1364413\">Grilled Garlicky-Herbed Shrimp</a>, and <a href=\"https://spoonacular.com/recipes/grilled-garlicky-herbed-shrimp-1267345\">Grilled Garlicky-Herbed Shrimp</a>.",
        "cuisines": [],
        "dishTypes": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "dairy free"
        ],
        "occasions": [
            "father's day",
            "4th of july",
            "summer"
        ],
        "instructions": "<ol><li>Combine all ingredients except shrimp in a large bowl. Add shrimp and toss to combine making sure all parts of the shrimp is coated in the marinade. Refrigerate 4 hours or overnight. Preheat grill on medium heat. Place shrimp on grill and cook, turning once, until pink  about 5 minutes.</li><li>The Culinary Chases Note: Want a Mediterranean feel?  Serve the shrimp with a roasted red pepper salad. Enjoy!</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Combine all ingredients except shrimp in a large bowl.",
                        "ingredients": [
                            {
                                "id": 15270,
                                "name": "shrimp",
                                "localizedName": "shrimp",
                                "image": "shrimp.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Add shrimp and toss to combine making sure all parts of the shrimp is coated in the marinade. Refrigerate 4 hours or overnight. Preheat grill on medium heat.",
                        "ingredients": [
                            {
                                "id": 0,
                                "name": "marinade",
                                "localizedName": "marinade",
                                "image": "seasoning.png"
                            },
                            {
                                "id": 15270,
                                "name": "shrimp",
                                "localizedName": "shrimp",
                                "image": "shrimp.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404706,
                                "name": "grill",
                                "localizedName": "grill",
                                "image": "grill.jpg"
                            }
                        ],
                        "length": {
                            "number": 240,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Place shrimp on grill and cook, turning once, until pink  about 5 minutes.The Culinary Chases Note: Want a Mediterranean feel?",
                        "ingredients": [
                            {
                                "id": 15270,
                                "name": "shrimp",
                                "localizedName": "shrimp",
                                "image": "shrimp.png"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404706,
                                "name": "grill",
                                "localizedName": "grill",
                                "image": "grill.jpg"
                            }
                        ],
                        "length": {
                            "number": 5,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 4,
                        "step": "Serve the shrimp with a roasted red pepper salad. Enjoy!",
                        "ingredients": [
                            {
                                "id": 11916,
                                "name": "roasted red peppers",
                                "localizedName": "roasted red peppers",
                                "image": "red-pepper.jpg"
                            },
                            {
                                "id": 15270,
                                "name": "shrimp",
                                "localizedName": "shrimp",
                                "image": "shrimp.png"
                            }
                        ],
                        "equipment": []
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularSourceUrl": "https://spoonacular.com/grilled-garlicky-herbed-shrimp-645721"
    }
];
const baseURL = 'https://api.spoonacular.com/recipes/random';
const apiKeyParam = `?apiKey=${apiKey}`|| "";
const recipesRequested = '&number=30';

const requestURL = baseURL+apiKeyParam+recipesRequested;

const getRecipes = async () => {
    try {
        // fillValues(await loadData()) //  THIS CALLS the API , commented out for development , redo when finished
        fillValues(data); // This is the local development Object limiting the api calls
    }
    catch (err) {
        console.log(err);
    }
}

getRecipes()

async function loadData() {
    return fetch(requestURL)
        .then(response => response.json())
        .then(data => data = data.recipes );

}


function fillValues(data) {
    console.log(data);
     for (const elm of data) {
         const {
             title,
             id: ID,
             dishTypes: dishType,
             servings,
             readyInMinutes: makeTime,
             image
         } = elm;
         const recipeCardGroup = document.querySelector('#recipe-group');
         const recipeCard = document.createElement('div');
         recipeCard.classList.add('recipe-card', 'card');
         recipeCard.id = ID;
         const recipe = document.createElement('div');
         recipe.classList.add('recipe-header');
         recipe.innerHTML = ` <h3 class="recipe-title">${title}</h3>   
                             <div class="other-header-info">
                               <h4>${servings} Servings</h4>
                                <h4>${makeTime} Minutes</h4>
                             </div>
                             <i class="fa-heart fas"</i>   `

         const recipeImgWrapper = document.createElement('div');
         recipeImgWrapper.classList.add('recipe-img-wrapper');
         const recipeImg = document.createElement('img');
         recipeImg.setAttribute('src', image);

         recipeImgWrapper.appendChild(recipeImg);
         recipeCard.appendChild(recipe);
         recipeCard.appendChild(recipeImgWrapper);
         recipeCardGroup.appendChild(recipeCard);
     }
}


