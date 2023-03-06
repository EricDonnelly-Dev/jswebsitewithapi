 // TODO: HIDE THIS WHEN PUSHING
 let apiKey;
let data = [
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
         "weightWatcherSmartPoints": 12,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 30,
         "healthScore": 3,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 67.81,
         "extendedIngredients": [
             {
                 "id": 20081,
                 "aisle": "Baking",
                 "image": "flour.png",
                 "consistency": "SOLID",
                 "name": "flour",
                 "nameClean": "wheat flour",
                 "original": "225g flour",
                 "originalName": "flour",
                 "amount": 225.0,
                 "unit": "g",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 7.937,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 225.0,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "2 ½ tsp baking powder",
                 "originalName": "baking powder",
                 "amount": 2.5,
                 "unit": "tsp",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 2.5,
                         "unitShort": "tsps",
                         "unitLong": "teaspoons"
                     },
                     "metric": {
                         "amount": 2.5,
                         "unitShort": "tsps",
                         "unitLong": "teaspoons"
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
                 "original": "½ tsp salt",
                 "originalName": "salt",
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
                 "id": 93740,
                 "aisle": "Gluten Free;Health Foods",
                 "image": "almond-meal-or-almond-flour.jpg",
                 "consistency": "SOLID",
                 "name": "ground almonds",
                 "nameClean": "almond meal",
                 "original": "75g ground almonds",
                 "originalName": "ground almonds",
                 "amount": 75.0,
                 "unit": "g",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 2.646,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 75.0,
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
                 "name": "caster sugar",
                 "nameClean": "sugar",
                 "original": "80g caster sugar",
                 "originalName": "caster sugar",
                 "amount": 80.0,
                 "unit": "g",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 2.822,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 80.0,
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
                 "original": "2 eggs",
                 "originalName": "eggs",
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
                 "id": 10219296,
                 "aisle": "Nut butters, Jams, and Honey;Health Foods",
                 "image": "honey.png",
                 "consistency": "LIQUID",
                 "name": "runny honey",
                 "nameClean": "runny honey",
                 "original": "1 ¼ Tbs (50g) runny honey",
                 "originalName": "¼ Tbs runny honey",
                 "amount": 50.0,
                 "unit": "g",
                 "meta": [],
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
                 "id": 1001116,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "plain-yogurt.jpg",
                 "consistency": "LIQUID",
                 "name": "natural yoghurt",
                 "nameClean": "plain yogurt",
                 "original": "250ml natural yoghurt",
                 "originalName": "natural yoghurt",
                 "amount": 250.0,
                 "unit": "ml",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.057,
                         "unitShort": "cups",
                         "unitLong": "cups"
                     },
                     "metric": {
                         "amount": 250.0,
                         "unitShort": "ml",
                         "unitLong": "milliliters"
                     }
                 }
             },
             {
                 "id": 4584,
                 "aisle": "Oil, Vinegar, Salad Dressing",
                 "image": "vegetable-oil.jpg",
                 "consistency": "LIQUID",
                 "name": "sunflower oil",
                 "nameClean": "sunflower oil",
                 "original": "150ml sunflower oil",
                 "originalName": "sunflower oil",
                 "amount": 150.0,
                 "unit": "ml",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 5.073,
                         "unitShort": "fl. oz",
                         "unitLong": "fl. ozs"
                     },
                     "metric": {
                         "amount": 150.0,
                         "unitShort": "ml",
                         "unitLong": "milliliters"
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
                 "original": "Finely grated zest of 1 lemon",
                 "originalName": "Finely grated zest of lemon",
                 "amount": 1.0,
                 "unit": "",
                 "meta": [
                     "finely grated"
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
                 "id": 12152,
                 "aisle": "Nuts;Savory Snacks",
                 "image": "pistachios.jpg",
                 "consistency": "SOLID",
                 "name": "pistachios",
                 "nameClean": "unsalted pistachios",
                 "original": "50g unsalted pistachios, roughly chopped",
                 "originalName": "unsalted pistachios, roughly chopped",
                 "amount": 50.0,
                 "unit": "g",
                 "meta": [
                     "unsalted",
                     "roughly chopped"
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
                 "id": 14412,
                 "aisle": "Beverages",
                 "image": "water.png",
                 "consistency": "LIQUID",
                 "name": "water",
                 "nameClean": "water",
                 "original": "150ml water",
                 "originalName": "water",
                 "amount": 150.0,
                 "unit": "ml",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 5.073,
                         "unitShort": "fl. oz",
                         "unitLong": "fl. ozs"
                     },
                     "metric": {
                         "amount": 150.0,
                         "unitShort": "ml",
                         "unitLong": "milliliters"
                     }
                 }
             },
             {
                 "id": 19335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "caster sugar",
                 "nameClean": "sugar",
                 "original": "100g caster sugar",
                 "originalName": "caster sugar",
                 "amount": 100.0,
                 "unit": "g",
                 "meta": [],
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
                 "id": 9152,
                 "aisle": "Produce",
                 "image": "lemon-juice.jpg",
                 "consistency": "LIQUID",
                 "name": "juice of lemon",
                 "nameClean": "lemon juice",
                 "original": "Juice of 1 lemon",
                 "originalName": "Juice of lemon",
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
                 "id": 10411111,
                 "aisle": "Gourmet",
                 "image": "rosewater.png",
                 "consistency": "SOLID",
                 "name": "rosewater",
                 "nameClean": "rose water",
                 "original": "1-2tbs rosewater",
                 "originalName": "rosewater",
                 "amount": 1.0,
                 "unit": "tbs",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "tbs",
                         "unitLong": "tb"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "tbs",
                         "unitLong": "tb"
                     }
                 }
             }
         ],
         "id": 636766,
         "title": "Cake with lemon, rosewater and pistachios",
         "readyInMinutes": 45,
         "servings": 12,
         "sourceUrl": "https://www.foodista.com/recipe/F8MSDTTK/cake-with-lemon-rosewater-and-pistachios",
         "image": "https://spoonacular.com/recipeImages/636766-556x370.jpg",
         "imageType": "jpg",
         "summary": "Cake with lemon, rosewater and pistachios might be just the dessert you are searching for. This lacto ovo vegetarian recipe serves 12 and costs <b>68 cents per serving</b>. One portion of this dish contains about <b>6g of protein</b>, <b>18g of fat</b>, and a total of <b>325 calories</b>. 30 people found this recipe to be flavorful and satisfying. A mixture of natural yoghurt, baking powder, salt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns a <b>pretty good spoonacular score of 41%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/lemon-ginger-cake-with-pistachios-188808\">Lemon-Ginger Cake with Pistachios</a>, <a href=\"https://spoonacular.com/recipes/yellow-lemon-cake-with-candied-lemons-and-pistachios-60493\">Yellow Lemon Cake With Candied Lemons And Pistachios</a>, and <a href=\"https://spoonacular.com/recipes/rosewater-raspberry-sponge-cake-1084668\">Rosewater & raspberry sponge cake</a>.",
         "cuisines": [],
         "dishTypes": [
             "dessert"
         ],
         "diets": [
             "lacto ovo vegetarian"
         ],
         "occasions": [],
         "instructions": "Sift the flour, baking powder and salt into a large bowl. Add the ground almonds and caster sugar and mix.\nMix the eggs, honey, yoghurt, sunflower oil and lemon zest together well in another bowl.\nMake a well in the center of the dry ingredients and slowly pour in the wet ingredients, bringing them together with a whisk until they are just combined.\nAdd some chopped pistachios to the mixture.\nPour the mixture into the 22cm springform cake tin lined with greaseproof paper and bake in the oven at 180C for 50 minutes or until a skewer inserted into the middle comes out clean. Allow to cool in the tin for about 20 minutes.\nMeanwhile, make the syrup. In a small saucepan, boil the water and sugar for about 5 minutes until it is reduced by half. Add the lemon juice and boil for a further 2 minutes, then cool and add the rosewater.\nMake holes on top of the warm cake with a toothpick and spoon the syrup all over the top. Scatter the pistachios over and leave to cool for 1 hour.\nDecorate with rose petals before serving.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Sift the flour, baking powder and salt into a large bowl.",
                         "ingredients": [
                             {
                                 "id": 18369,
                                 "name": "baking powder",
                                 "localizedName": "baking powder",
                                 "image": "white-powder.jpg"
                             },
                             {
                                 "id": 20081,
                                 "name": "all purpose flour",
                                 "localizedName": "all purpose flour",
                                 "image": "flour.png"
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
                         "number": 2,
                         "step": "Add the ground almonds and caster sugar and mix.",
                         "ingredients": [
                             {
                                 "id": 93740,
                                 "name": "almond meal",
                                 "localizedName": "almond meal",
                                 "image": "almond-meal-or-almond-flour.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "caster sugar",
                                 "localizedName": "caster sugar",
                                 "image": "sugar-in-bowl.png"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 3,
                         "step": "Mix the eggs, honey, yoghurt, sunflower oil and lemon zest together well in another bowl.",
                         "ingredients": [
                             {
                                 "id": 4584,
                                 "name": "sunflower oil",
                                 "localizedName": "sunflower oil",
                                 "image": "vegetable-oil.jpg"
                             },
                             {
                                 "id": 9156,
                                 "name": "lemon zest",
                                 "localizedName": "lemon zest",
                                 "image": "zest-lemon.jpg"
                             },
                             {
                                 "id": 1116,
                                 "name": "yogurt",
                                 "localizedName": "yogurt",
                                 "image": "plain-yogurt.jpg"
                             },
                             {
                                 "id": 19296,
                                 "name": "honey",
                                 "localizedName": "honey",
                                 "image": "honey.png"
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
                                 "id": 404783,
                                 "name": "bowl",
                                 "localizedName": "bowl",
                                 "image": "bowl.jpg"
                             }
                         ]
                     },
                     {
                         "number": 4,
                         "step": "Make a well in the center of the dry ingredients and slowly pour in the wet ingredients, bringing them together with a whisk until they are just combined.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404661,
                                 "name": "whisk",
                                 "localizedName": "whisk",
                                 "image": "whisk.png"
                             }
                         ]
                     },
                     {
                         "number": 5,
                         "step": "Add some chopped pistachios to the mixture.",
                         "ingredients": [
                             {
                                 "id": 12151,
                                 "name": "pistachio nuts",
                                 "localizedName": "pistachio nuts",
                                 "image": "pistachios.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 6,
                         "step": "Pour the mixture into the 22cm springform cake tin lined with greaseproof paper and bake in the oven at 180C for 50 minutes or until a skewer inserted into the middle comes out clean. Allow to cool in the tin for about 20 minutes.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg",
                                 "temperature": {
                                     "number": 180.0,
                                     "unit": "Celsius"
                                 }
                             },
                             {
                                 "id": 404747,
                                 "name": "cake form",
                                 "localizedName": "cake form",
                                 "image": "cake-pan.png"
                             },
                             {
                                 "id": 3065,
                                 "name": "skewers",
                                 "localizedName": "skewers",
                                 "image": "wooden-skewers.jpg"
                             }
                         ],
                         "length": {
                             "number": 70,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 7,
                         "step": "Meanwhile, make the syrup. In a small saucepan, boil the water and sugar for about 5 minutes until it is reduced by half.",
                         "ingredients": [
                             {
                                 "id": 19335,
                                 "name": "sugar",
                                 "localizedName": "sugar",
                                 "image": "sugar-in-bowl.png"
                             },
                             {
                                 "id": 0,
                                 "name": "syrup",
                                 "localizedName": "syrup",
                                 "image": ""
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
                                 "id": 404669,
                                 "name": "sauce pan",
                                 "localizedName": "sauce pan",
                                 "image": "sauce-pan.jpg"
                             }
                         ],
                         "length": {
                             "number": 5,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 8,
                         "step": "Add the lemon juice and boil for a further 2 minutes, then cool and add the rosewater.",
                         "ingredients": [
                             {
                                 "id": 9152,
                                 "name": "lemon juice",
                                 "localizedName": "lemon juice",
                                 "image": "lemon-juice.jpg"
                             },
                             {
                                 "id": 10411111,
                                 "name": "rose water",
                                 "localizedName": "rose water",
                                 "image": "rosewater.png"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 2,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 9,
                         "step": "Make holes on top of the warm cake with a toothpick and spoon the syrup all over the top. Scatter the pistachios over and leave to cool for 1 hour.",
                         "ingredients": [
                             {
                                 "id": 12151,
                                 "name": "pistachio nuts",
                                 "localizedName": "pistachio nuts",
                                 "image": "pistachios.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "syrup",
                                 "localizedName": "syrup",
                                 "image": ""
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404644,
                                 "name": "toothpicks",
                                 "localizedName": "toothpicks",
                                 "image": "toothpicks.jpg"
                             }
                         ],
                         "length": {
                             "number": 60,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 10,
                         "step": "Decorate with rose petals before serving.",
                         "ingredients": [],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/cake-with-lemon-rosewater-and-pistachios-636766"
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
         "aggregateLikes": 31,
         "healthScore": 1,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 94.2,
         "extendedIngredients": [
             {
                 "id": 9050,
                 "aisle": "Produce",
                 "image": "blueberries.jpg",
                 "consistency": "SOLID",
                 "name": "berries",
                 "nameClean": "blueberries",
                 "original": "1 pound fresh blue berries (could use frozen)",
                 "originalName": "fresh blue berries (could use frozen)",
                 "amount": 1.0,
                 "unit": "pound",
                 "meta": [
                     "fresh",
                     "blue",
                     "frozen",
                     "(could use )"
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
                 "id": 93811,
                 "aisle": "Gourmet",
                 "image": "lavender.jpg",
                 "consistency": "SOLID",
                 "name": "lavender buds",
                 "nameClean": "fresh lavender",
                 "original": "1 teaspoon dried lavender buds, smashed or ground",
                 "originalName": "dried lavender buds, smashed or ground",
                 "amount": 1.0,
                 "unit": "teaspoon",
                 "meta": [
                     "dried",
                     "smashed"
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
                 "id": 19335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "sugar",
                 "nameClean": "sugar",
                 "original": "cup sugar",
                 "originalName": "sugar",
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
                 "id": 9152,
                 "aisle": "Produce",
                 "image": "lemon-juice.jpg",
                 "consistency": "LIQUID",
                 "name": "lemon juice",
                 "nameClean": "lemon juice",
                 "original": "2 teaspoons lemon juice",
                 "originalName": "lemon juice",
                 "amount": 2.0,
                 "unit": "teaspoons",
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
                 "id": 2047,
                 "aisle": "Spices and Seasonings",
                 "image": "salt.jpg",
                 "consistency": "SOLID",
                 "name": "salt",
                 "nameClean": "table salt",
                 "original": "A pinch of salt",
                 "originalName": "salt",
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
                 "id": 18172,
                 "aisle": "Sweet Snacks",
                 "image": "gingersnaps.png",
                 "consistency": "SOLID",
                 "name": "ginger snap cookies",
                 "nameClean": "gingersnap crumbs",
                 "original": "12 ounces ginger snap cookies, ground (about 2 cups ground)",
                 "originalName": "ginger snap cookies, ground (about 2 cups ground)",
                 "amount": 12.0,
                 "unit": "ounces",
                 "meta": [
                     "( 2 cups ground)"
                 ],
                 "measures": {
                     "us": {
                         "amount": 12.0,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 340.194,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "1 stick of butter, melted",
                 "originalName": "butter, melted",
                 "amount": 1.0,
                 "unit": "stick",
                 "meta": [
                     "melted"
                 ],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "stick",
                         "unitLong": "stick"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "stick",
                         "unitLong": "stick"
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
                 "original": "1 1/2 tablespoons sugar",
                 "originalName": "sugar",
                 "amount": 1.5,
                 "unit": "tablespoons",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.5,
                         "unitShort": "Tbsps",
                         "unitLong": "Tbsps"
                     },
                     "metric": {
                         "amount": 1.5,
                         "unitShort": "Tbsps",
                         "unitLong": "Tbsps"
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
                 "original": "pinch of salt",
                 "originalName": "pinch of salt",
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
                 "id": 19095,
                 "aisle": "Frozen",
                 "image": "vanilla-ice-cream.png",
                 "consistency": "SOLID",
                 "name": "ice cream",
                 "nameClean": "vanilla ice cream",
                 "original": "Ice cream",
                 "originalName": "Ice cream",
                 "amount": 12.0,
                 "unit": "servings",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 12.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     },
                     "metric": {
                         "amount": 12.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     }
                 }
             }
         ],
         "id": 635561,
         "title": "Blueberry-Lavender Sauce and Ginger Snap Ice Cream Cups",
         "readyInMinutes": 45,
         "servings": 12,
         "sourceUrl": "https://www.foodista.com/recipe/26YSG3GF/blueberry-lavender-sauce-and-ginger-snap-ice-cream-cups",
         "image": "https://spoonacular.com/recipeImages/635561-556x370.jpg",
         "imageType": "jpg",
         "summary": "Blueberry-Lavender Sauce and Ginger Snap Ice Cream Cups might be just the dessert you are searching for. This recipe serves 12. One serving contains <b>416 calories</b>, <b>4g of protein</b>, and <b>18g of fat</b>. For <b>94 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up salt, lavender buds, ginger snap cookies, and a few other things to make it today. It is brought to you by Foodista. 31 person were glad they tried this recipe. <b>Summer</b> will be even more special with this recipe. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns a <b>not so awesome spoonacular score of 21%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/blueberry-lavender-sauce-for-ice-cream-51771\">Blueberry-lavender Sauce For Ice Cream</a>, <a href=\"https://spoonacular.com/recipes/blueberry-lavender-ice-cream-51826\">Blueberry Lavender Ice Cream</a>, and <a href=\"https://spoonacular.com/recipes/ginger-and-lavender-ice-cream-sandwich-644544\">Ginger and Lavender Ice Cream Sandwich</a>.",
         "cuisines": [],
         "dishTypes": [
             "dessert"
         ],
         "diets": [],
         "occasions": [
             "summer"
         ],
         "instructions": "In a small sauce pan, bring the blueberries, lavender, sugar and cornstarch to a boil.\nLower heat and simmer for 5 minutes. Remove from heat the stir in lemon juice and a dash of salt.\nThis sauce is also great for pancakes, pound cake or cheesecake!\nGingersnap Ice Cream Cups: Preheat the oven to 300 degree F. Grind the cookies in a food processor. If you don't have a food processor, place them in a zip bag and roll them with a rolling pin.\nMix in the butter, sugar and salt. Spray a muffin tin with non-stick spray. Scoop about 2 Tb. of the mixture into each cup. Use a small cup to press each scoop of mixture, shaping it into a tiny cup. Bake the cups for 12-15 minutes. Allow them to cool, then lift them out with your fingers or a small knife. Makes 10-12.\nPlace one scoop of ice cream in each cup and top with blueberry-lavender sauce.\nThis recipe is especially good with vanilla bean, lemon curd, or peach ice cream!",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "In a small sauce pan, bring the blueberries, lavender, sugar and cornstarch to a boil.",
                         "ingredients": [
                             {
                                 "id": 9050,
                                 "name": "blueberries",
                                 "localizedName": "blueberries",
                                 "image": "blueberries.jpg"
                             },
                             {
                                 "id": 20027,
                                 "name": "corn starch",
                                 "localizedName": "corn starch",
                                 "image": "white-powder.jpg"
                             },
                             {
                                 "id": 93811,
                                 "name": "fresh lavender",
                                 "localizedName": "fresh lavender",
                                 "image": "lavender.jpg"
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
                         "number": 2,
                         "step": "Lower heat and simmer for 5 minutes.",
                         "ingredients": [],
                         "equipment": [],
                         "length": {
                             "number": 5,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 3,
                         "step": "Remove from heat the stir in lemon juice and a dash of salt.",
                         "ingredients": [
                             {
                                 "id": 9152,
                                 "name": "lemon juice",
                                 "localizedName": "lemon juice",
                                 "image": "lemon-juice.jpg"
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
                         "step": "This sauce is also great for pancakes, pound cake or cheesecake!",
                         "ingredients": [
                             {
                                 "id": 18133,
                                 "name": "pound cake",
                                 "localizedName": "pound cake",
                                 "image": "pound-cake.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 5,
                         "step": "Gingersnap Ice Cream Cups: Preheat the oven to 300 degree F. Grind the cookies in a food processor. If you don't have a food processor, place them in a zip bag and roll them with a rolling pin.",
                         "ingredients": [
                             {
                                 "id": 0,
                                 "name": "ice cream cups",
                                 "localizedName": "ice cream cups",
                                 "image": "vanilla-ice-cream.png"
                             },
                             {
                                 "id": 10118192,
                                 "name": "cookies",
                                 "localizedName": "cookies",
                                 "image": "shortbread-cookies.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "roll",
                                 "localizedName": "roll",
                                 "image": "dinner-yeast-rolls.jpg"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404771,
                                 "name": "food processor",
                                 "localizedName": "food processor",
                                 "image": "food-processor.png"
                             },
                             {
                                 "id": 404746,
                                 "name": "rolling pin",
                                 "localizedName": "rolling pin",
                                 "image": "rolling-pin.jpg"
                             },
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg",
                                 "temperature": {
                                     "number": 300.0,
                                     "unit": "Fahrenheit"
                                 }
                             }
                         ]
                     },
                     {
                         "number": 6,
                         "step": "Mix in the butter, sugar and salt. Spray a muffin tin with non-stick spray. Scoop about 2 Tb. of the mixture into each cup. Use a small cup to press each scoop of mixture, shaping it into a tiny cup.",
                         "ingredients": [
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
                                 "id": 404671,
                                 "name": "muffin tray",
                                 "localizedName": "muffin tray",
                                 "image": "muffin-tray.jpg"
                             }
                         ]
                     },
                     {
                         "number": 7,
                         "step": "Bake the cups for 12-15 minutes. Allow them to cool, then lift them out with your fingers or a small knife. Makes 10-1",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg"
                             },
                             {
                                 "id": 404745,
                                 "name": "knife",
                                 "localizedName": "knife",
                                 "image": "chefs-knife.jpg"
                             }
                         ],
                         "length": {
                             "number": 15,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 8,
                         "step": "Place one scoop of ice cream in each cup and top with blueberry-lavender sauce.",
                         "ingredients": [
                             {
                                 "id": 9050,
                                 "name": "blueberries",
                                 "localizedName": "blueberries",
                                 "image": "blueberries.jpg"
                             },
                             {
                                 "id": 19095,
                                 "name": "ice cream",
                                 "localizedName": "ice cream",
                                 "image": "vanilla-ice-cream.png"
                             },
                             {
                                 "id": 93811,
                                 "name": "fresh lavender",
                                 "localizedName": "fresh lavender",
                                 "image": "lavender.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 9,
                         "step": "This recipe is especially good with vanilla bean, lemon curd, or peach ice cream!",
                         "ingredients": [
                             {
                                 "id": 93622,
                                 "name": "vanilla bean",
                                 "localizedName": "vanilla bean",
                                 "image": "vanilla.jpg"
                             },
                             {
                                 "id": 93834,
                                 "name": "lemon curd",
                                 "localizedName": "lemon curd",
                                 "image": "lemon-curd.png"
                             },
                             {
                                 "id": 19095,
                                 "name": "ice cream",
                                 "localizedName": "ice cream",
                                 "image": "vanilla-ice-cream.png"
                             },
                             {
                                 "id": 9236,
                                 "name": "peach",
                                 "localizedName": "peach",
                                 "image": "peach.png"
                             }
                         ],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/blueberry-lavender-sauce-and-ginger-snap-ice-cream-cups-635561"
     },
     {
         "vegetarian": false,
         "vegan": false,
         "glutenFree": false,
         "dairyFree": false,
         "veryHealthy": false,
         "cheap": false,
         "veryPopular": true,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 12,
         "gaps": "no",
         "preparationMinutes": 80,
         "cookingMinutes": 30,
         "aggregateLikes": 32767,
         "healthScore": 10,
         "creditsText": "pinkwhen.com",
         "sourceName": "pinkwhen.com",
         "pricePerServing": 136.02,
         "extendedIngredients": [
             {
                 "id": 11549,
                 "aisle": "Pasta and Rice",
                 "image": "tomato-sauce-or-pasta-sauce.jpg",
                 "consistency": "SOLID",
                 "name": "tomato sauce",
                 "nameClean": "canned tomato sauce",
                 "original": "1 (8 oz) can tomato sauce",
                 "originalName": "tomato sauce",
                 "amount": 8.0,
                 "unit": "oz",
                 "meta": [
                     "canned"
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
                 "id": 11549,
                 "aisle": "Pasta and Rice",
                 "image": "tomato-sauce-or-pasta-sauce.jpg",
                 "consistency": "SOLID",
                 "name": "tomato sauce",
                 "nameClean": "canned tomato sauce",
                 "original": "1 (16 oz) can tomato sauce",
                 "originalName": "tomato sauce",
                 "amount": 16.0,
                 "unit": "oz",
                 "meta": [
                     "canned"
                 ],
                 "measures": {
                     "us": {
                         "amount": 16.0,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 453.592,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             },
             {
                 "id": 2003,
                 "aisle": "Spices and Seasonings",
                 "image": "basil.jpg",
                 "consistency": "SOLID",
                 "name": "basil",
                 "nameClean": "dried basil",
                 "original": "1½ tsp dried basil",
                 "originalName": "dried basil",
                 "amount": 1.5,
                 "unit": "tsp",
                 "meta": [
                     "dried"
                 ],
                 "measures": {
                     "us": {
                         "amount": 1.5,
                         "unitShort": "tsps",
                         "unitLong": "teaspoons"
                     },
                     "metric": {
                         "amount": 1.5,
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
                 "original": "1 egg",
                 "originalName": "egg",
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
                 "id": 1034053,
                 "aisle": "Oil, Vinegar, Salad Dressing",
                 "image": "olive-oil.jpg",
                 "consistency": "LIQUID",
                 "name": "extra virgin olive oil",
                 "nameClean": "extra virgin olive oil",
                 "original": "1 Tbsp extra virgin olive oil",
                 "originalName": "extra virgin olive oil",
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
                 "id": 98849,
                 "aisle": "Canned and Jarred",
                 "image": "tomatoes-canned.png",
                 "consistency": "SOLID",
                 "name": "canned tomatoes",
                 "nameClean": "fire roasted tomatoes",
                 "original": "1 (15 oz) can diced tomatoes (I use flavored fire roasted with basil)",
                 "originalName": "diced tomatoes (I use flavored fire roasted with basil)",
                 "amount": 15.0,
                 "unit": "oz",
                 "meta": [
                     "diced",
                     "fire roasted",
                     "with basil)",
                     "flavored",
                     "canned"
                 ],
                 "measures": {
                     "us": {
                         "amount": 15.0,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 425.243,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             },
             {
                 "id": 10511297,
                 "aisle": "Produce",
                 "image": "parsley.jpg",
                 "consistency": "SOLID",
                 "name": "parsley",
                 "nameClean": "fresh parsley",
                 "original": "4 Tbsp chopped fresh parsley",
                 "originalName": "chopped fresh parsley",
                 "amount": 4.0,
                 "unit": "Tbsp",
                 "meta": [
                     "fresh",
                     "chopped"
                 ],
                 "measures": {
                     "us": {
                         "amount": 4.0,
                         "unitShort": "Tbsps",
                         "unitLong": "Tbsps"
                     },
                     "metric": {
                         "amount": 4.0,
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
                 "original": "2 cloves garlic (minced)",
                 "originalName": "garlic (minced)",
                 "amount": 2.0,
                 "unit": "cloves",
                 "meta": [
                     "minced",
                     "()"
                 ],
                 "measures": {
                     "us": {
                         "amount": 2.0,
                         "unitShort": "cloves",
                         "unitLong": "cloves"
                     },
                     "metric": {
                         "amount": 2.0,
                         "unitShort": "cloves",
                         "unitLong": "cloves"
                     }
                 }
             },
             {
                 "id": 1002030,
                 "aisle": "Spices and Seasonings",
                 "image": "pepper.jpg",
                 "consistency": "SOLID",
                 "name": "ground pepper",
                 "nameClean": "black pepper",
                 "original": "¼ tsp ground black pepper",
                 "originalName": "ground black pepper",
                 "amount": 0.25,
                 "unit": "tsp",
                 "meta": [
                     "black"
                 ],
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
                 "id": 7036,
                 "aisle": "Meat",
                 "image": "raw-pork-sausage.png",
                 "consistency": "SOLID",
                 "name": "sausage",
                 "nameClean": "italian sausage",
                 "original": "1 pound Italian Sausage",
                 "originalName": "Italian Sausage",
                 "amount": 1.0,
                 "unit": "pound",
                 "meta": [
                     "italian"
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
                 "id": 1022027,
                 "aisle": "Spices and Seasonings",
                 "image": "dried-herbs.png",
                 "consistency": "SOLID",
                 "name": "seasoning",
                 "nameClean": "italian seasoning",
                 "original": "1 tsp Italian seasoning",
                 "originalName": "Italian seasoning",
                 "amount": 1.0,
                 "unit": "tsp",
                 "meta": [
                     "italian"
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
                 "id": 10620420,
                 "aisle": "Pasta and Rice",
                 "image": "lasagna-noodles.jpg",
                 "consistency": "SOLID",
                 "name": "lasagna noodles",
                 "nameClean": "lasagne noodles",
                 "original": "Uncooked Lasagna noodles",
                 "originalName": "Uncooked Lasagna noodles",
                 "amount": 18.0,
                 "unit": "servings",
                 "meta": [
                     "uncooked"
                 ],
                 "measures": {
                     "us": {
                         "amount": 18.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     },
                     "metric": {
                         "amount": 18.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     }
                 }
             },
             {
                 "id": 23557,
                 "aisle": "Meat",
                 "image": "fresh-ground-beef.jpg",
                 "consistency": "SOLID",
                 "name": "ground beef",
                 "nameClean": "95 percent lean ground beef",
                 "original": "1 pound Lean Ground Beef (I like 93/7)",
                 "originalName": "Lean Ground Beef (I like 93/7)",
                 "amount": 1.0,
                 "unit": "pound",
                 "meta": [
                     "lean",
                     "(I like)"
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
                 "id": 1041009,
                 "aisle": "Cheese",
                 "image": "cheddar-cheese.png",
                 "consistency": "SOLID",
                 "name": "m zarella cheese",
                 "nameClean": "cheese",
                 "original": "sliced mozzarella cheese",
                 "originalName": "sliced m zarella cheese",
                 "amount": 1.0,
                 "unit": "oz",
                 "meta": [
                     "sliced"
                 ],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "oz",
                         "unitLong": "ounce"
                     },
                     "metric": {
                         "amount": 28.35,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "½ cup chopped onion",
                 "originalName": "chopped onion",
                 "amount": 0.5,
                 "unit": "cup",
                 "meta": [
                     "chopped"
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
                 "id": 1033,
                 "aisle": "Cheese",
                 "image": "parmesan.jpg",
                 "consistency": "SOLID",
                 "name": "parmesan reggiano",
                 "nameClean": "parmesan",
                 "original": "¾ cup grated parmesan reggiano",
                 "originalName": "grated parmesan reggiano",
                 "amount": 0.75,
                 "unit": "cup",
                 "meta": [
                     "grated"
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
                 "id": 1036,
                 "aisle": "Cheese",
                 "image": "ricotta.png",
                 "consistency": "SOLID",
                 "name": "ricotta cheese",
                 "nameClean": "ricotta cheese",
                 "original": "(16 oz) ricotta cheese",
                 "originalName": "ricotta cheese",
                 "amount": 16.0,
                 "unit": "oz",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 16.0,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 453.592,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "½ tsp salt",
                 "originalName": "salt",
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
                 "id": 14412,
                 "aisle": "Beverages",
                 "image": "water.png",
                 "consistency": "LIQUID",
                 "name": "water",
                 "nameClean": "water",
                 "original": "½ cup water",
                 "originalName": "water",
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
             }
         ],
         "id": 715560,
         "title": "World’s Greatest Lasagna Roll Ups",
         "readyInMinutes": 110,
         "servings": 18,
         "sourceUrl": "http://www.pinkwhen.com/worlds-greatest-lasagna-roll-ups-recipe/",
         "image": "https://spoonacular.com/recipeImages/715560-556x370.jpg",
         "imageType": "jpg",
         "summary": "You can never have too many Mediterranean recipes, so give World’s Greatest Lasagna Roll Ups a try. One portion of this dish contains around <b>22g of protein</b>, <b>16g of fat</b>, and a total of <b>424 calories</b>. For <b>$1.36 per serving</b>, you get a main course that serves 18. This recipe is liked by 32767 foodies and cooks. If you have extra virgin olive oil, tomato sauce, water, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about <b>1 hour and 50 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>solid spoonacular score of 71%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/worlds-greatest-lasagna-roll-ups-1283037\">World’s Greatest Lasagna Roll Ups</a>, <a href=\"https://spoonacular.com/recipes/how-to-make-the-worlds-greatest-lasagna-roll-ups-1054737\">How to make the World’s Greatest Lasagna Roll Ups</a>, and <a href=\"https://spoonacular.com/recipes/how-to-make-the-worlds-greatest-lasagna-roll-ups-1366803\">How to make the World’s Greatest Lasagna Roll Ups</a>.",
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
         "instructions": "In a large sauce pan on medium heat start browning your meat.On medium heat in a separate pan with the Tbsp of olive oil start to cook the onion, garlic, Italian seasoning, and basil for about 6-8 minutes, or until onion is translucent. Add this to the meat mixture, along with the tomatoes, tomato sauce, water, black pepper, and 2 tbsp of the fresh parsley. Allow to simmer uncovered for 1 hour.Bring a large pot of water to boil and begin cook the lasagna noodles for 8-10 minutes. Drain and rinse with cold water.In a small mixing bowl combine remaining parsley, ricotta cheese, egg,  tsp salt and mix well.Heat oven to 375. Pour some meat sauce into the bottom of a 9 x 13 glass baking dish.To make the roll ups place a noodle onto a flat surface and spread with the cheese mixture. Then sprinkle a little parmesan reggiano cheese on the cheese mixture.Then roll them up!Once you have all of the lasagna roll ups lined into the dish, cover each with a little more of the meat mixture. Top with a slice of mozzarella cheese and then cover the dish with foil. Bake in the oven for 20 minutes. Remove foil and bake for an additional 10 minutes uncovered. Remove from the oven and allow to cool for 10 minutes before serving.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "In a large sauce pan on medium heat start browning your meat.On medium heat in a separate pan with the Tbsp of olive oil start to cook the onion, garlic, Italian seasoning, and basil for about 6-8 minutes, or until onion is translucent.",
                         "ingredients": [
                             {
                                 "id": 1022027,
                                 "name": "italian seasoning",
                                 "localizedName": "italian seasoning",
                                 "image": "dried-herbs.png"
                             },
                             {
                                 "id": 4053,
                                 "name": "olive oil",
                                 "localizedName": "olive oil",
                                 "image": "olive-oil.jpg"
                             },
                             {
                                 "id": 11215,
                                 "name": "garlic",
                                 "localizedName": "garlic",
                                 "image": "garlic.png"
                             },
                             {
                                 "id": 2044,
                                 "name": "basil",
                                 "localizedName": "basil",
                                 "image": "basil.jpg"
                             },
                             {
                                 "id": 11282,
                                 "name": "onion",
                                 "localizedName": "onion",
                                 "image": "brown-onion.png"
                             },
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
                             },
                             {
                                 "id": 1065062,
                                 "name": "meat",
                                 "localizedName": "meat",
                                 "image": "whole-chicken.jpg"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404669,
                                 "name": "sauce pan",
                                 "localizedName": "sauce pan",
                                 "image": "sauce-pan.jpg"
                             },
                             {
                                 "id": 404645,
                                 "name": "frying pan",
                                 "localizedName": "frying pan",
                                 "image": "pan.png"
                             }
                         ],
                         "length": {
                             "number": 8,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 2,
                         "step": "Add this to the meat mixture, along with the tomatoes, tomato sauce, water, black pepper, and 2 tbsp of the fresh parsley. Allow to simmer uncovered for 1 hour.Bring a large pot of water to boil and begin cook the lasagna noodles for 8-10 minutes.",
                         "ingredients": [
                             {
                                 "id": 10620420,
                                 "name": "lasagne noodles",
                                 "localizedName": "lasagne noodles",
                                 "image": "lasagna-noodles.jpg"
                             },
                             {
                                 "id": 10511297,
                                 "name": "fresh parsley",
                                 "localizedName": "fresh parsley",
                                 "image": "parsley.jpg"
                             },
                             {
                                 "id": 1002030,
                                 "name": "black pepper",
                                 "localizedName": "black pepper",
                                 "image": "pepper.jpg"
                             },
                             {
                                 "id": 11549,
                                 "name": "tomato sauce",
                                 "localizedName": "tomato sauce",
                                 "image": "tomato-sauce-or-pasta-sauce.jpg"
                             },
                             {
                                 "id": 11529,
                                 "name": "tomato",
                                 "localizedName": "tomato",
                                 "image": "tomato.png"
                             },
                             {
                                 "id": 14412,
                                 "name": "water",
                                 "localizedName": "water",
                                 "image": "water.png"
                             },
                             {
                                 "id": 1065062,
                                 "name": "meat",
                                 "localizedName": "meat",
                                 "image": "whole-chicken.jpg"
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
                             "number": 70,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 3,
                         "step": "Drain and rinse with cold water.In a small mixing bowl combine remaining parsley, ricotta cheese, egg,  tsp salt and mix well.",
                         "ingredients": [
                             {
                                 "id": 1036,
                                 "name": "ricotta cheese",
                                 "localizedName": "ricotta cheese",
                                 "image": "ricotta.png"
                             },
                             {
                                 "id": 11297,
                                 "name": "parsley",
                                 "localizedName": "parsley",
                                 "image": "parsley.jpg"
                             },
                             {
                                 "id": 14412,
                                 "name": "water",
                                 "localizedName": "water",
                                 "image": "water.png"
                             },
                             {
                                 "id": 2047,
                                 "name": "salt",
                                 "localizedName": "salt",
                                 "image": "salt.jpg"
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
                                 "id": 405907,
                                 "name": "mixing bowl",
                                 "localizedName": "mixing bowl",
                                 "image": "mixing-bowl.jpg"
                             }
                         ]
                     },
                     {
                         "number": 4,
                         "step": "Heat oven to 37",
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
                         "number": 5,
                         "step": "Pour some meat sauce into the bottom of a 9 x 13 glass baking dish.To make the roll ups place a noodle onto a flat surface and spread with the cheese mixture. Then sprinkle a little parmesan reggiano cheese on the cheese mixture.Then roll them up!Once you have all of the lasagna roll ups lined into the dish, cover each with a little more of the meat mixture. Top with a slice of mozzarella cheese and then cover the dish with foil.",
                         "ingredients": [
                             {
                                 "id": 1026,
                                 "name": "mozzarella",
                                 "localizedName": "mozzarella",
                                 "image": "mozzarella.png"
                             },
                             {
                                 "id": 1033,
                                 "name": "parmesan",
                                 "localizedName": "parmesan",
                                 "image": "parmesan.jpg"
                             },
                             {
                                 "id": 1041009,
                                 "name": "cheese",
                                 "localizedName": "cheese",
                                 "image": "cheddar-cheese.png"
                             },
                             {
                                 "id": 20420,
                                 "name": "pasta",
                                 "localizedName": "pasta",
                                 "image": "fusilli.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "spread",
                                 "localizedName": "spread",
                                 "image": ""
                             },
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
                             },
                             {
                                 "id": 1065062,
                                 "name": "meat",
                                 "localizedName": "meat",
                                 "image": "whole-chicken.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "roll",
                                 "localizedName": "roll",
                                 "image": "dinner-yeast-rolls.jpg"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 406921,
                                 "name": "glass baking pan",
                                 "localizedName": "glass baking pan",
                                 "image": "glass-baking-tray.jpg"
                             },
                             {
                                 "id": 404765,
                                 "name": "aluminum foil",
                                 "localizedName": "aluminum foil",
                                 "image": "aluminum-foil.png"
                             }
                         ]
                     },
                     {
                         "number": 6,
                         "step": "Bake in the oven for 20 minutes.",
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
                             "number": 20,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 7,
                         "step": "Remove foil and bake for an additional 10 minutes uncovered.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg"
                             },
                             {
                                 "id": 404765,
                                 "name": "aluminum foil",
                                 "localizedName": "aluminum foil",
                                 "image": "aluminum-foil.png"
                             }
                         ],
                         "length": {
                             "number": 10,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 8,
                         "step": "Remove from the oven and allow to cool for 10 minutes before serving.",
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
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/worlds-greatest-lasagna-roll-ups-715560"
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
         "weightWatcherSmartPoints": 19,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 55,
         "healthScore": 10,
         "creditsText": "foodista.com",
         "sourceName": "foodista.com",
         "pricePerServing": 404.97,
         "extendedIngredients": [
             {
                 "id": 10123,
                 "aisle": "Meat",
                 "image": "raw-bacon.png",
                 "consistency": "SOLID",
                 "name": "bacon",
                 "nameClean": "applewood smoked bacon",
                 "original": "8 strips bacon",
                 "originalName": "bacon",
                 "amount": 8.0,
                 "unit": "strips",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 8.0,
                         "unitShort": "strips",
                         "unitLong": "strips"
                     },
                     "metric": {
                         "amount": 8.0,
                         "unitShort": "strips",
                         "unitLong": "strips"
                     }
                 }
             },
             {
                 "id": 6150,
                 "aisle": "Condiments",
                 "image": "barbecue-sauce.jpg",
                 "consistency": "SOLID",
                 "name": "barbecue sauce",
                 "nameClean": "barbecue sauce",
                 "original": "Barbecue sauce to taste",
                 "originalName": "Barbecue sauce to taste",
                 "amount": 6.0,
                 "unit": "servings",
                 "meta": [
                     "to taste"
                 ],
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
                 "id": 1001,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "butter-sliced.jpg",
                 "consistency": "SOLID",
                 "name": "butter",
                 "nameClean": "butter",
                 "original": "1/2 stick butter",
                 "originalName": "butter",
                 "amount": 0.5,
                 "unit": "stick",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 0.5,
                         "unitShort": "stick",
                         "unitLong": "sticks"
                     },
                     "metric": {
                         "amount": 0.5,
                         "unitShort": "stick",
                         "unitLong": "sticks"
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
                 "original": "3 garlic cloves minced",
                 "originalName": "garlic cloves minced",
                 "amount": 3.0,
                 "unit": "",
                 "meta": [
                     "minced"
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
                 "id": 8160,
                 "aisle": "Cereal;Baking",
                 "image": "cornmeal.png",
                 "consistency": "SOLID",
                 "name": "grits",
                 "nameClean": "grits",
                 "original": "2 cups grits",
                 "originalName": "grits",
                 "amount": 2.0,
                 "unit": "cups",
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
                 "id": 10215149,
                 "aisle": "Seafood",
                 "image": "shrimp.png",
                 "consistency": "SOLID",
                 "name": "shrimp",
                 "nameClean": "raw shrimp",
                 "original": "2 lb medium raw shrimp",
                 "originalName": "raw shrimp",
                 "amount": 2.0,
                 "unit": "lb",
                 "meta": [
                     "raw"
                 ],
                 "measures": {
                     "us": {
                         "amount": 2.0,
                         "unitShort": "lb",
                         "unitLong": "pounds"
                     },
                     "metric": {
                         "amount": 907.185,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "1/4 teaspoon salt",
                 "originalName": "salt",
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
                 "id": 11291,
                 "aisle": "Produce",
                 "image": "spring-onions.jpg",
                 "consistency": "SOLID",
                 "name": "scallions",
                 "nameClean": "spring onions",
                 "original": "3/4 cup chopped scallions",
                 "originalName": "chopped scallions",
                 "amount": 0.75,
                 "unit": "cup",
                 "meta": [
                     "chopped"
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
                 "id": 1031009,
                 "aisle": "Cheese",
                 "image": "cheddar-cheese.png",
                 "consistency": "SOLID",
                 "name": "sharp cheddar cheese",
                 "nameClean": "sharp cheddar cheese",
                 "original": "1 1/2 cup sharp cheddar cheese",
                 "originalName": "sharp cheddar cheese",
                 "amount": 1.5,
                 "unit": "cup",
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
             },
             {
                 "id": 14412,
                 "aisle": "Beverages",
                 "image": "water.png",
                 "consistency": "LIQUID",
                 "name": "water",
                 "nameClean": "water",
                 "original": "1 tablespoon water",
                 "originalName": "water",
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
             }
         ],
         "id": 634318,
         "title": "Barbecued Shrimp & Grits",
         "readyInMinutes": 45,
         "servings": 6,
         "sourceUrl": "http://www.foodista.com/recipe/6V5NQDLF/bbq-shrimp-grits",
         "image": "https://spoonacular.com/recipeImages/634318-556x370.jpg",
         "imageType": "jpg",
         "summary": "Barbecued Shrimp & Grits requires around <b>45 minutes</b> from start to finish. This recipe serves 6 and costs $4.05 per serving. One portion of this dish contains about <b>36g of protein</b>, <b>31g of fat</b>, and a total of <b>613 calories</b>. 55 people found this recipe to be tasty and satisfying. A couple people really liked this Southern dish. It is a good option if you're following a <b>gluten free</b> diet. It works well as a breakfast. It is brought to you by Foodista. Head to the store and pick up shrimp, sharp cheddar cheese, butter, and a few other things to make it today. With a spoonacular <b>score of 64%</b>, this dish is pretty good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/creole-barbecued-shrimp-572536\">Creole Barbecued Shrimp</a>, <a href=\"https://spoonacular.com/recipes/shrimp-grits-5477\">Shrimp & Grits</a>, and <a href=\"https://spoonacular.com/recipes/shrimp-and-grits-587444\">Shrimp and Grits</a>.",
         "cuisines": [
             "Southern"
         ],
         "dishTypes": [
             "morning meal",
             "brunch",
             "breakfast"
         ],
         "diets": [
             "gluten free"
         ],
         "occasions": [],
         "instructions": "<ol><li>Fry bacon until crisp, crumble and set aside. </li><li>Peel and devein shrimp. </li><li>Grill shrimp on a skewer for 2-3 minutes on each side or until pink. Alternatively, fry shrimp over medium heat, a few minutes per side until pink (about 5-8 minutes total). </li><li>Saute garlic in 1 tbsp butter.</li><li>Bring water to boil, add grits. </li><li>Stir and cover for 5 minutes then turn heat to low. </li><li>Stir in cheese, remaining butter, garlic, and salt. </li><li>Toss shrimp in barbecue sauce. </li><li>Layer grits, shrimp, bacon, and scallions in a bowl and serve piping hot. </li><li>Top with additional barbecue sauce if desired.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Fry bacon until crisp, crumble and set aside. Peel and devein shrimp. Grill shrimp on a skewer for 2-3 minutes on each side or until pink. Alternatively, fry shrimp over medium heat, a few minutes per side until pink (about 5-8 minutes total).",
                         "ingredients": [
                             {
                                 "id": 15270,
                                 "name": "shrimp",
                                 "localizedName": "shrimp",
                                 "image": "shrimp.png"
                             },
                             {
                                 "id": 10123,
                                 "name": "bacon",
                                 "localizedName": "bacon",
                                 "image": "raw-bacon.png"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 3065,
                                 "name": "skewers",
                                 "localizedName": "skewers",
                                 "image": "wooden-skewers.jpg"
                             },
                             {
                                 "id": 404706,
                                 "name": "grill",
                                 "localizedName": "grill",
                                 "image": "grill.jpg"
                             }
                         ],
                         "length": {
                             "number": 11,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 2,
                         "step": "Saute garlic in 1 tbsp butter.Bring water to boil, add grits. Stir and cover for 5 minutes then turn heat to low. Stir in cheese, remaining butter, garlic, and salt. Toss shrimp in barbecue sauce.",
                         "ingredients": [
                             {
                                 "id": 6150,
                                 "name": "barbecue sauce",
                                 "localizedName": "barbecue sauce",
                                 "image": "barbecue-sauce.jpg"
                             },
                             {
                                 "id": 1001,
                                 "name": "butter",
                                 "localizedName": "butter",
                                 "image": "butter-sliced.jpg"
                             },
                             {
                                 "id": 1041009,
                                 "name": "cheese",
                                 "localizedName": "cheese",
                                 "image": "cheddar-cheese.png"
                             },
                             {
                                 "id": 11215,
                                 "name": "garlic",
                                 "localizedName": "garlic",
                                 "image": "garlic.png"
                             },
                             {
                                 "id": 15270,
                                 "name": "shrimp",
                                 "localizedName": "shrimp",
                                 "image": "shrimp.png"
                             },
                             {
                                 "id": 8160,
                                 "name": "grits",
                                 "localizedName": "grits",
                                 "image": "cornmeal.png"
                             },
                             {
                                 "id": 14412,
                                 "name": "water",
                                 "localizedName": "water",
                                 "image": "water.png"
                             },
                             {
                                 "id": 2047,
                                 "name": "salt",
                                 "localizedName": "salt",
                                 "image": "salt.jpg"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 5,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 3,
                         "step": "Layer grits, shrimp, bacon, and scallions in a bowl and serve piping hot. Top with additional barbecue sauce if desired.",
                         "ingredients": [
                             {
                                 "id": 6150,
                                 "name": "barbecue sauce",
                                 "localizedName": "barbecue sauce",
                                 "image": "barbecue-sauce.jpg"
                             },
                             {
                                 "id": 11291,
                                 "name": "green onions",
                                 "localizedName": "green onions",
                                 "image": "spring-onions.jpg"
                             },
                             {
                                 "id": 15270,
                                 "name": "shrimp",
                                 "localizedName": "shrimp",
                                 "image": "shrimp.png"
                             },
                             {
                                 "id": 10123,
                                 "name": "bacon",
                                 "localizedName": "bacon",
                                 "image": "raw-bacon.png"
                             },
                             {
                                 "id": 8160,
                                 "name": "grits",
                                 "localizedName": "grits",
                                 "image": "cornmeal.png"
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
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/barbecued-shrimp-grits-634318"
     },
     {
         "vegetarian": false,
         "vegan": false,
         "glutenFree": true,
         "dairyFree": true,
         "veryHealthy": false,
         "cheap": false,
         "veryPopular": false,
         "sustainable": false,
         "lowFodmap": true,
         "weightWatcherSmartPoints": 1,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 11,
         "healthScore": 10,
         "creditsText": "foodista.com",
         "sourceName": "foodista.com",
         "pricePerServing": 109.32,
         "extendedIngredients": [
             {
                 "id": 14412,
                 "aisle": "Beverages",
                 "image": "water.png",
                 "consistency": "LIQUID",
                 "name": "water",
                 "nameClean": "water",
                 "original": "5 cups water",
                 "originalName": "water",
                 "amount": 5.0,
                 "unit": "cups",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 5.0,
                         "unitShort": "cups",
                         "unitLong": "cups"
                     },
                     "metric": {
                         "amount": 1.183,
                         "unitShort": "l",
                         "unitLong": "liters"
                     }
                 }
             },
             {
                 "id": 5062,
                 "aisle": "Meat",
                 "image": "chicken-breasts.png",
                 "consistency": "SOLID",
                 "name": "chicken breasts",
                 "nameClean": "chicken breast",
                 "original": "4 chicken breasts",
                 "originalName": "chicken breasts",
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
                 "id": 1026076,
                 "aisle": "Canned and Jarred",
                 "image": "no.jpg",
                 "consistency": "SOLID",
                 "name": "bouillon cubes",
                 "nameClean": "bouillon cube",
                 "original": "2 bouillon cubes (chicken)",
                 "originalName": "bouillon cubes (chicken)",
                 "amount": 2.0,
                 "unit": "",
                 "meta": [
                     "(chicken)"
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
                 "id": 11124,
                 "aisle": "Produce",
                 "image": "sliced-carrot.png",
                 "consistency": "SOLID",
                 "name": "carrots",
                 "nameClean": "carrot",
                 "original": "2 carrots, diced",
                 "originalName": "carrots, diced",
                 "amount": 2.0,
                 "unit": "",
                 "meta": [
                     "diced"
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
                 "id": 11165,
                 "aisle": "Produce;Spices and Seasonings",
                 "image": "cilantro.png",
                 "consistency": "SOLID",
                 "name": "cilantro",
                 "nameClean": "cilantro",
                 "original": "1/2 cup diced cilantro (coriander)",
                 "originalName": "diced cilantro (coriander)",
                 "amount": 0.5,
                 "unit": "cup",
                 "meta": [
                     "diced",
                     "(coriander)"
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
                 "id": 1042047,
                 "aisle": "Spices and Seasonings",
                 "image": "garlic-salt.jpg",
                 "consistency": "SOLID",
                 "name": "lawry's seasoned salt",
                 "nameClean": "seasoned salt",
                 "original": "1 teaspoon Lawry's seasoned salt",
                 "originalName": "Lawry's seasoned salt",
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
             }
         ],
         "id": 638488,
         "title": "Chicken-Tortilla Chip Soup",
         "readyInMinutes": 45,
         "servings": 8,
         "sourceUrl": "https://www.foodista.com/recipe/CGYQCRH6/chicken-tortilla-chip-soup",
         "image": "https://spoonacular.com/recipeImages/638488-556x370.jpg",
         "imageType": "jpg",
         "summary": "Chicken-Tortilla Chip Soup could be just the <b>gluten free, dairy free, fodmap friendly, and whole 30</b> recipe you've been looking for. For <b>$1.09 per serving</b>, you get a main course that serves 8. One portion of this dish contains around <b>24g of protein</b>, <b>3g of fat</b>, and a total of <b>137 calories</b>. 11 person have tried and liked this recipe. Head to the store and pick up carrots, cilantro, bouillon cubes, and a few other things to make it today. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 58%</b>, which is good. <a href=\"https://spoonacular.com/recipes/tortilla-chip-crusted-chicken-with-queso-sauce-1562207\">Tortilla Chip Crusted Chicken with Queso Sauce</a>, <a href=\"https://spoonacular.com/recipes/cheese-tortilla-chip-chicken-enchilada-chilaquiles-1014028\">Cheese Tortilla Chip Chicken Enchilada Chilaquiles</a>, and <a href=\"https://spoonacular.com/recipes/garden-of-eatin-tortilla-chip-chicken-strips-83735\">Garden Of Eatin’ Tortilla Chip Chicken Strips</a> are very similar to this recipe.",
         "cuisines": [],
         "dishTypes": [
             "lunch",
             "soup",
             "main course",
             "main dish",
             "dinner"
         ],
         "diets": [
             "gluten free",
             "dairy free",
             "fodmap friendly",
             "whole 30"
         ],
         "occasions": [
             "fall",
             "winter"
         ],
         "instructions": "Boil all of the above for 30-40 minutes. On serving, add corn chips, Monterey Jack cheese and slices of avocado.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Boil all of the above for 30-40 minutes. On serving, add corn chips, Monterey Jack cheese and slices of avocado.",
                         "ingredients": [
                             {
                                 "id": 1001025,
                                 "name": "monterey jack cheese",
                                 "localizedName": "monterey jack cheese",
                                 "image": "shredded-cheese-white.jpg"
                             },
                             {
                                 "id": 19003,
                                 "name": "corn chips",
                                 "localizedName": "corn chips",
                                 "image": "fritos-or-corn-chips.jpg"
                             },
                             {
                                 "id": 9037,
                                 "name": "avocado",
                                 "localizedName": "avocado",
                                 "image": "avocado.jpg"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 40,
                             "unit": "minutes"
                         }
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/chicken-tortilla-chip-soup-638488"
     },
     {
         "vegetarian": false,
         "vegan": false,
         "glutenFree": false,
         "dairyFree": false,
         "veryHealthy": false,
         "cheap": false,
         "veryPopular": true,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 30,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 3413,
         "healthScore": 4,
         "creditsText": "Jen West",
         "sourceName": "Pink When",
         "pricePerServing": 154.52,
         "extendedIngredients": [
             {
                 "id": 1001,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "butter-sliced.jpg",
                 "consistency": "SOLID",
                 "name": "butter",
                 "nameClean": "butter",
                 "original": "1/2 cup butter",
                 "originalName": "butter",
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
                 "id": 19350,
                 "aisle": "Baking",
                 "image": "corn-syrup.png",
                 "consistency": "SOLID",
                 "name": "corn syrup",
                 "nameClean": "corn syrup",
                 "original": "3/4 cup Corn Syrup",
                 "originalName": "Corn Syrup",
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
                 "id": 19157,
                 "aisle": "Sweet Snacks",
                 "image": "candy-coated-chocolate-pieces-or-M&M's.jpg",
                 "consistency": "SOLID",
                 "name": "dove® chocolate candies",
                 "nameClean": "candy coated chocolate pieces",
                 "original": "1 package DOVE® Chocolate Candies",
                 "originalName": "DOVE® Chocolate Candies",
                 "amount": 1.0,
                 "unit": "package",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "pkg",
                         "unitLong": "package"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "pkg",
                         "unitLong": "package"
                     }
                 }
             },
             {
                 "id": 2064,
                 "aisle": "Produce",
                 "image": "mint.jpg",
                 "consistency": "SOLID",
                 "name": "m&m's® holiday baking minis and/or m&m's® holiday mint candies",
                 "nameClean": "mint",
                 "original": "1 package M&M's® Holiday Baking Minis and/or M&M's® Holiday Mint Candies",
                 "originalName": "M&M's® Holiday Baking Minis and/or M&M's® Holiday Mint Candies",
                 "amount": 1.0,
                 "unit": "package",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "pkg",
                         "unitLong": "package"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "pkg",
                         "unitLong": "package"
                     }
                 }
             },
             {
                 "id": 16091,
                 "aisle": "Nuts;Savory Snacks",
                 "image": "peanuts.png",
                 "consistency": "SOLID",
                 "name": "peanuts",
                 "nameClean": "peanuts",
                 "original": "2 cups peanuts",
                 "originalName": "peanuts",
                 "amount": 2.0,
                 "unit": "cups",
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
                 "id": 19034,
                 "aisle": "Savory Snacks",
                 "image": "popcorn.png",
                 "consistency": "SOLID",
                 "name": "popped popcorn",
                 "nameClean": "popcorn",
                 "original": "8-10 cups popped popcorn",
                 "originalName": "popped popcorn",
                 "amount": 8.0,
                 "unit": "cups",
                 "meta": [],
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
                 "id": 19047,
                 "aisle": "Savory Snacks",
                 "image": "pretzels.jpg",
                 "consistency": "SOLID",
                 "name": "holiday shaped pretzels",
                 "nameClean": "finely crushed pretzels",
                 "original": "2-3 cups Holiday shaped pretzels",
                 "originalName": "Holiday shaped pretzels",
                 "amount": 2.0,
                 "unit": "cups",
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
                 "id": 93645,
                 "aisle": "Baking",
                 "image": "nonpareils.jpg",
                 "consistency": "SOLID",
                 "name": "holiday sprinkles",
                 "nameClean": "sprinkles",
                 "original": "1 cup red and green Holiday sprinkles",
                 "originalName": "red and green Holiday sprinkles",
                 "amount": 1.0,
                 "unit": "cup",
                 "meta": [
                     "green",
                     "red"
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
                 "id": 19335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "sugar",
                 "nameClean": "sugar",
                 "original": "1 1/2 cups Sugar",
                 "originalName": "Sugar",
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
             },
             {
                 "id": 2050,
                 "aisle": "Baking",
                 "image": "vanilla-extract.jpg",
                 "consistency": "LIQUID",
                 "name": "vanilla extract",
                 "nameClean": "vanilla extract",
                 "original": "1 tsp. Vanilla extract",
                 "originalName": "Vanilla extract",
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
             }
         ],
         "id": 715469,
         "title": "White Chocolate Christmas Holiday Pretzels and Santa’s Snack Mix",
         "readyInMinutes": 45,
         "servings": 9,
         "sourceUrl": "http://www.pinkwhen.com/white-chocolate-christmas-holiday-pretzels-and-santas-snack-mix/",
         "image": "https://spoonacular.com/recipeImages/715469-556x370.jpg",
         "imageType": "jpg",
         "summary": "White Chocolate Christmas Holiday Pretzels and Santa’s Snack Mix might be just the side dish you are searching for. This recipe makes 9 servings with <b>667 calories</b>, <b>12g of protein</b>, and <b>28g of fat</b> each. For <b>$1.55 per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Christmas</b>. This recipe is liked by 3413 foodies and cooks. This recipe from Pink When requires butter, corn syrup, dove® chocolate candies, and sugar. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns a <b>good spoonacular score of 50%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/white-trash-holiday-snack-mix-622069\">White Trash Holiday Snack Mix</a>, <a href=\"https://spoonacular.com/recipes/white-trash-holiday-snack-mix-1221453\">White Trash Holiday Snack Mix</a>, and <a href=\"https://spoonacular.com/recipes/white-chocolate-santa-mix-563626\">White Chocolate Santa Mix</a>.",
         "cuisines": [],
         "dishTypes": [
             "side dish"
         ],
         "diets": [],
         "occasions": [
             "christmas"
         ],
         "instructions": "Spread the popcorn mix on a baking tray or cake pan (may want to use two pans). Bake for 15 minutes. Remove from oven and sprinkle with 1/2 cup Holiday sprinkles, stir. Sprinkle with M&MS  candies, stir again.Place DOVE chocolates in a small microwave safe bowl. Heat for 30 seconds and stir.Repeat until melted and smooth. Drizzle over the popcorn. Sprinkle with remaining sprinkles. Let cool approximately 10-20 minutes (may put in refrigerator so chocolate hardens more quickly. Once cool, break into chunks.Store or give as a gift in your favorite Holiday Glad packaging!Thinking about making these White Chocolate Christmas Holiday Pretzels or the Santa Snack Mix? Make sure you head to Target to grab your supplies, because you wont find them anywhere else, and they are only here for the season!JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow PinkWhen on Social Media, the PinkWhen blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First NameEmail AddressSubscribePowered by ConvertKit",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Spread the popcorn mix on a baking tray or cake pan (may want to use two pans).",
                         "ingredients": [
                             {
                                 "id": 19034,
                                 "name": "popcorn",
                                 "localizedName": "popcorn",
                                 "image": "popcorn.png"
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
                             },
                             {
                                 "id": 404747,
                                 "name": "cake form",
                                 "localizedName": "cake form",
                                 "image": "cake-pan.png"
                             }
                         ]
                     },
                     {
                         "number": 2,
                         "step": "Bake for 15 minutes.",
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
                         "number": 3,
                         "step": "Remove from oven and sprinkle with 1/2 cup Holiday sprinkles, stir.",
                         "ingredients": [
                             {
                                 "id": 93645,
                                 "name": "sprinkles",
                                 "localizedName": "sprinkles",
                                 "image": "colorful-sprinkles.jpg"
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
                         "number": 4,
                         "step": "Sprinkle with M&MS  candies, stir again.",
                         "ingredients": [
                             {
                                 "id": 0,
                                 "name": "candy",
                                 "localizedName": "candy",
                                 "image": ""
                             },
                             {
                                 "id": 19157,
                                 "name": "m&ms",
                                 "localizedName": "m&ms",
                                 "image": "candy-coated-chocolate-pieces-or-M&M's.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 5,
                         "step": "Place DOVE chocolates in a small microwave safe bowl.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404762,
                                 "name": "microwave",
                                 "localizedName": "microwave",
                                 "image": "microwave.jpg"
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
                         "number": 6,
                         "step": "Heat for 30 seconds and stir.Repeat until melted and smooth.",
                         "ingredients": [],
                         "equipment": []
                     },
                     {
                         "number": 7,
                         "step": "Drizzle over the popcorn.",
                         "ingredients": [
                             {
                                 "id": 19034,
                                 "name": "popcorn",
                                 "localizedName": "popcorn",
                                 "image": "popcorn.png"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 8,
                         "step": "Sprinkle with remaining sprinkles.",
                         "ingredients": [
                             {
                                 "id": 93645,
                                 "name": "sprinkles",
                                 "localizedName": "sprinkles",
                                 "image": "colorful-sprinkles.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 9,
                         "step": "Let cool approximately 10-20 minutes (may put in refrigerator so chocolate hardens more quickly. Once cool, break into chunks.Store or give as a gift in your favorite Holiday Glad packaging!Thinking about making these White Chocolate Christmas Holiday Pretzels or the Santa Snack",
                         "ingredients": [
                             {
                                 "id": 19087,
                                 "name": "white chocolate",
                                 "localizedName": "white chocolate",
                                 "image": "white-chocolate.jpg"
                             },
                             {
                                 "id": 19081,
                                 "name": "chocolate",
                                 "localizedName": "chocolate",
                                 "image": "milk-chocolate.jpg"
                             },
                             {
                                 "id": 19047,
                                 "name": "pretzels",
                                 "localizedName": "pretzels",
                                 "image": "pretzels.jpg"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 20,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 10,
                         "step": "Mix? Make sure you head to Target to grab your supplies, because you wont find them anywhere else, and they are only here for the season!JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow Pink",
                         "ingredients": [],
                         "equipment": []
                     },
                     {
                         "number": 11,
                         "step": "When on Social Media, the Pink",
                         "ingredients": [],
                         "equipment": []
                     },
                     {
                         "number": 12,
                         "step": "When blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First Name",
                         "ingredients": [],
                         "equipment": []
                     },
                     {
                         "number": 13,
                         "step": "Email",
                         "ingredients": [],
                         "equipment": []
                     },
                     {
                         "number": 14,
                         "step": "Address",
                         "ingredients": [],
                         "equipment": []
                     },
                     {
                         "number": 15,
                         "step": "Subscribe",
                         "ingredients": [],
                         "equipment": []
                     },
                     {
                         "number": 16,
                         "step": "Powered by Convert",
                         "ingredients": [],
                         "equipment": []
                     },
                     {
                         "number": 17,
                         "step": "Kit",
                         "ingredients": [],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/white-chocolate-christmas-holiday-pretzels-and-santas-snack-mix-715469"
     },
     {
         "vegetarian": false,
         "vegan": false,
         "glutenFree": true,
         "dairyFree": true,
         "veryHealthy": false,
         "cheap": false,
         "veryPopular": false,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 8,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 13,
         "healthScore": 18,
         "creditsText": "foodista.com",
         "sourceName": "foodista.com",
         "pricePerServing": 196.23,
         "extendedIngredients": [
             {
                 "id": 4053,
                 "aisle": "Oil, Vinegar, Salad Dressing",
                 "image": "olive-oil.jpg",
                 "consistency": "LIQUID",
                 "name": "olive oil",
                 "nameClean": "olive oil",
                 "original": "1 tablespoon olive oil",
                 "originalName": "olive oil",
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
                 "id": 10611282,
                 "aisle": "Produce",
                 "image": "white-onion.png",
                 "consistency": "SOLID",
                 "name": "onion",
                 "nameClean": "white onion",
                 "original": "1 medium white onion, small dice (about 2 cups chopped)",
                 "originalName": "medium white onion, small dice (about chopped)",
                 "amount": 2.0,
                 "unit": "cups",
                 "meta": [
                     "white",
                     "chopped"
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
                 "id": 11124,
                 "aisle": "Produce",
                 "image": "sliced-carrot.png",
                 "consistency": "SOLID",
                 "name": "carrots",
                 "nameClean": "carrot",
                 "original": "2 carrots, peeled and diced",
                 "originalName": "carrots, peeled and diced",
                 "amount": 2.0,
                 "unit": "",
                 "meta": [
                     "diced",
                     "peeled"
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
                 "id": 2047,
                 "aisle": "Spices and Seasonings",
                 "image": "salt.jpg",
                 "consistency": "SOLID",
                 "name": "salt",
                 "nameClean": "table salt",
                 "original": "1/2 teaspoon salt",
                 "originalName": "salt",
                 "amount": 0.5,
                 "unit": "teaspoon",
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
                 "id": 1002030,
                 "aisle": "Spices and Seasonings",
                 "image": "pepper.jpg",
                 "consistency": "SOLID",
                 "name": "pepper",
                 "nameClean": "black pepper",
                 "original": "1/4 teaspoon black pepper",
                 "originalName": "black pepper",
                 "amount": 0.25,
                 "unit": "teaspoon",
                 "meta": [
                     "black"
                 ],
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
                 "id": 11215,
                 "aisle": "Produce",
                 "image": "garlic.png",
                 "consistency": "SOLID",
                 "name": "garlic",
                 "nameClean": "garlic",
                 "original": "1 clove garlic, minced",
                 "originalName": "garlic, minced",
                 "amount": 1.0,
                 "unit": "clove",
                 "meta": [
                     "minced"
                 ],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "clove",
                         "unitLong": "clove"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "clove",
                         "unitLong": "clove"
                     }
                 }
             },
             {
                 "id": 1032009,
                 "aisle": "Spices and Seasonings",
                 "image": "red-pepper-flakes.jpg",
                 "consistency": "SOLID",
                 "name": "pepper flakes",
                 "nameClean": "red pepper flakes",
                 "original": "1/4 teaspoon crushed red pepper flakes",
                 "originalName": "crushed red pepper flakes",
                 "amount": 0.25,
                 "unit": "teaspoon",
                 "meta": [
                     "red",
                     "crushed"
                 ],
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
                 "id": 93668,
                 "aisle": "Meat",
                 "image": "chicken-or-turkey-sausage.jpg",
                 "consistency": "SOLID",
                 "name": "mild chicken sausage",
                 "nameClean": "chicken sausage",
                 "original": "1 pound mild Italian chicken sausage",
                 "originalName": "mild Italian chicken sausage",
                 "amount": 1.0,
                 "unit": "pound",
                 "meta": [
                     "italian"
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
                 "id": 6615,
                 "aisle": "Canned and Jarred",
                 "image": "chicken-broth.png",
                 "consistency": "LIQUID",
                 "name": "vegetable stock",
                 "nameClean": "vegetable stock",
                 "original": "5 cups low sodium chicken or vegetable stock",
                 "originalName": "low sodium chicken or vegetable stock",
                 "amount": 5.0,
                 "unit": "cups",
                 "meta": [
                     "low sodium"
                 ],
                 "measures": {
                     "us": {
                         "amount": 5.0,
                         "unitShort": "cups",
                         "unitLong": "cups"
                     },
                     "metric": {
                         "amount": 1.183,
                         "unitShort": "l",
                         "unitLong": "liters"
                     }
                 }
             },
             {
                 "id": 16051,
                 "aisle": "Canned and Jarred",
                 "image": "white-beans.jpg",
                 "consistency": "SOLID",
                 "name": "beans",
                 "nameClean": "canned white beans",
                 "original": "15 oz can white beans, drained and rinsed",
                 "originalName": "white beans, drained and rinsed",
                 "amount": 15.0,
                 "unit": "oz",
                 "meta": [
                     "white",
                     "drained and rinsed",
                     "canned"
                 ],
                 "measures": {
                     "us": {
                         "amount": 15.0,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 425.243,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             },
             {
                 "id": 11109,
                 "aisle": "Produce",
                 "image": "cabbage.jpg",
                 "consistency": "SOLID",
                 "name": "cabbage",
                 "nameClean": "cabbage",
                 "original": "1/2 head green cabbage",
                 "originalName": "green cabbage",
                 "amount": 0.5,
                 "unit": "head",
                 "meta": [
                     "green"
                 ],
                 "measures": {
                     "us": {
                         "amount": 0.5,
                         "unitShort": "head",
                         "unitLong": "heads"
                     },
                     "metric": {
                         "amount": 0.5,
                         "unitShort": "head",
                         "unitLong": "heads"
                     }
                 }
             }
         ],
         "id": 638315,
         "title": "Chicken Sausage, White Bean and Cabbage Soup",
         "readyInMinutes": 45,
         "servings": 6,
         "sourceUrl": "https://www.foodista.com/recipe/R66F23JJ/chicken-sausage-white-bean-and-cabbage-soup",
         "image": "https://spoonacular.com/recipeImages/638315-556x370.jpg",
         "imageType": "jpg",
         "summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Chicken Sausage, White Bean and Cabbage Soup might be a recipe you should try. One serving contains <b>312 calories</b>, <b>19g of protein</b>, and <b>13g of fat</b>. For <b>$1.96 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. 13 people have made this recipe and would make it again. A mixture of olive oil, mild chicken sausage, salt, and a handful of other ingredients are all it takes to make this recipe so flavorful. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It works well as a main course. It is brought to you by Foodista. Overall, this recipe earns a <b>pretty good spoonacular score of 67%</b>. Try <a href=\"https://spoonacular.com/recipes/white-bean-and-chicken-sausage-soup-1065782\">White Bean and Chicken Sausage Soup</a>, <a href=\"https://spoonacular.com/recipes/chicken-sausage-and-white-bean-soup-video-850572\">Chicken Sausage and White Bean Soup Video</a>, and <a href=\"https://spoonacular.com/recipes/cabbage-and-white-bean-soup-11799\">Cabbage and White Bean Soup</a> for similar recipes.",
         "cuisines": [],
         "dishTypes": [
             "lunch",
             "soup",
             "main course",
             "main dish",
             "dinner"
         ],
         "diets": [
             "gluten free",
             "dairy free"
         ],
         "occasions": [
             "fall",
             "winter"
         ],
         "instructions": "In a large pot, heat oil over medium heat.\nSaute onions until tender, about 8 minutes.\nAdd carrots and continue cooking for another 5 minutes.\nSeason with salt, pepper, garlic and red pepper flakes; cook for another minute.\nRemove sausage from casing and break into small chunks in the pot.\nToss with vegetables to brown meat, cooking for another 8-10 minutes.\nPour in stock, enough to cover everything; bring to a simmer.\nAdd white beans and cabbage, stirring to combine.\nSimmer, covered, until cabbage is wilted but not mushy, about 10 minutes.\nGenerally the sausage will contain enough salt for the soup, but check seasoning and add more salt or pepper if needed.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "In a large pot, heat oil over medium heat.",
                         "ingredients": [
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
                         ]
                     },
                     {
                         "number": 2,
                         "step": "Saute onions until tender, about 8 minutes.",
                         "ingredients": [
                             {
                                 "id": 11282,
                                 "name": "onion",
                                 "localizedName": "onion",
                                 "image": "brown-onion.png"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 8,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 3,
                         "step": "Add carrots and continue cooking for another 5 minutes.",
                         "ingredients": [
                             {
                                 "id": 11124,
                                 "name": "carrot",
                                 "localizedName": "carrot",
                                 "image": "sliced-carrot.png"
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
                         "step": "Season with salt, pepper, garlic and red pepper flakes; cook for another minute.",
                         "ingredients": [
                             {
                                 "id": 1032009,
                                 "name": "red pepper flakes",
                                 "localizedName": "red pepper flakes",
                                 "image": "red-pepper-flakes.jpg"
                             },
                             {
                                 "id": 11215,
                                 "name": "garlic",
                                 "localizedName": "garlic",
                                 "image": "garlic.png"
                             },
                             {
                                 "id": 1002030,
                                 "name": "pepper",
                                 "localizedName": "pepper",
                                 "image": "pepper.jpg"
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
                         "number": 5,
                         "step": "Remove sausage from casing and break into small chunks in the pot.",
                         "ingredients": [
                             {
                                 "id": 1017063,
                                 "name": "sausage",
                                 "localizedName": "sausage",
                                 "image": "raw-pork-sausage.png"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404752,
                                 "name": "pot",
                                 "localizedName": "pot",
                                 "image": "stock-pot.jpg"
                             }
                         ]
                     },
                     {
                         "number": 6,
                         "step": "Toss with vegetables to brown meat, cooking for another 8-10 minutes.",
                         "ingredients": [
                             {
                                 "id": 11583,
                                 "name": "vegetable",
                                 "localizedName": "vegetable",
                                 "image": "mixed-vegetables.png"
                             },
                             {
                                 "id": 1065062,
                                 "name": "meat",
                                 "localizedName": "meat",
                                 "image": "whole-chicken.jpg"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 10,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 7,
                         "step": "Pour in stock, enough to cover everything; bring to a simmer.",
                         "ingredients": [
                             {
                                 "id": 1006615,
                                 "name": "stock",
                                 "localizedName": "stock",
                                 "image": "chicken-broth.png"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 8,
                         "step": "Add white beans and cabbage, stirring to combine.",
                         "ingredients": [
                             {
                                 "id": 10516050,
                                 "name": "white beans",
                                 "localizedName": "white beans",
                                 "image": "white-beans.jpg"
                             },
                             {
                                 "id": 11109,
                                 "name": "cabbage",
                                 "localizedName": "cabbage",
                                 "image": "cabbage.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 9,
                         "step": "Simmer, covered, until cabbage is wilted but not mushy, about 10 minutes.",
                         "ingredients": [
                             {
                                 "id": 11109,
                                 "name": "cabbage",
                                 "localizedName": "cabbage",
                                 "image": "cabbage.jpg"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 10,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 10,
                         "step": "Generally the sausage will contain enough salt for the soup, but check seasoning and add more salt or pepper if needed.",
                         "ingredients": [
                             {
                                 "id": 1042027,
                                 "name": "seasoning",
                                 "localizedName": "seasoning",
                                 "image": "seasoning.png"
                             },
                             {
                                 "id": 1017063,
                                 "name": "sausage",
                                 "localizedName": "sausage",
                                 "image": "raw-pork-sausage.png"
                             },
                             {
                                 "id": 1002030,
                                 "name": "pepper",
                                 "localizedName": "pepper",
                                 "image": "pepper.jpg"
                             },
                             {
                                 "id": 2047,
                                 "name": "salt",
                                 "localizedName": "salt",
                                 "image": "salt.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "soup",
                                 "localizedName": "soup",
                                 "image": ""
                             }
                         ],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/chicken-sausage-white-bean-and-cabbage-soup-638315"
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
         "weightWatcherSmartPoints": 3,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 31,
         "healthScore": 25,
         "creditsText": "foodista.com",
         "sourceName": "foodista.com",
         "pricePerServing": 150.75,
         "extendedIngredients": [
             {
                 "id": 10015172,
                 "aisle": "Seafood",
                 "image": "scallops.jpg",
                 "consistency": "SOLID",
                 "name": "big scallops",
                 "nameClean": "scallops",
                 "original": "12 big fresh scallops (18 if they're small)",
                 "originalName": "12 big fresh scallops (18 if they're small)",
                 "amount": 12.0,
                 "unit": "small",
                 "meta": [
                     "fresh",
                     "(18 if they're small)"
                 ],
                 "measures": {
                     "us": {
                         "amount": 12.0,
                         "unitShort": "small",
                         "unitLong": "smalls"
                     },
                     "metric": {
                         "amount": 12.0,
                         "unitShort": "small",
                         "unitLong": "smalls"
                     }
                 }
             },
             {
                 "id": 10151,
                 "aisle": "Meat",
                 "image": "ham-whole.jpg",
                 "consistency": "SOLID",
                 "name": "parma ham",
                 "nameClean": "ham",
                 "original": "4 thin slices of Parma ham",
                 "originalName": "thin slices of Parma ham",
                 "amount": 4.0,
                 "unit": "slices",
                 "meta": [
                     "thin"
                 ],
                 "measures": {
                     "us": {
                         "amount": 4.0,
                         "unitShort": "slice",
                         "unitLong": "slices"
                     },
                     "metric": {
                         "amount": 4.0,
                         "unitShort": "slice",
                         "unitLong": "slices"
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
                 "original": "1 garlic clove",
                 "originalName": "garlic clove",
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
                 "id": 18079,
                 "aisle": "Pasta and Rice",
                 "image": "breadcrumbs.jpg",
                 "consistency": "SOLID",
                 "name": "breadcrumbs",
                 "nameClean": "breadcrumbs",
                 "original": "3 tablespoons of dried breadcrumbs",
                 "originalName": "dried breadcrumbs",
                 "amount": 3.0,
                 "unit": "tablespoons",
                 "meta": [
                     "dried"
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
                 "id": 11297,
                 "aisle": "Produce;Spices and Seasonings",
                 "image": "parsley.jpg",
                 "consistency": "SOLID",
                 "name": "parsley",
                 "nameClean": "parsley",
                 "original": "2 tablespoons of parsley",
                 "originalName": "parsley",
                 "amount": 2.0,
                 "unit": "tablespoons",
                 "meta": [],
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
                 "id": 4053,
                 "aisle": "Oil, Vinegar, Salad Dressing",
                 "image": "olive-oil.jpg",
                 "consistency": "LIQUID",
                 "name": "olive oil",
                 "nameClean": "olive oil",
                 "original": "2 tablespoons of olive oil",
                 "originalName": "olive oil",
                 "amount": 2.0,
                 "unit": "tablespoons",
                 "meta": [],
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
                 "id": 10211821,
                 "aisle": "Produce",
                 "image": "bell-pepper-orange.png",
                 "consistency": "SOLID",
                 "name": "bell pepper",
                 "nameClean": "bell pepper",
                 "original": "Pepper",
                 "originalName": "Pepper",
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
         "id": 633786,
         "title": "Baked Scallops With Parma Ham",
         "readyInMinutes": 45,
         "servings": 6,
         "sourceUrl": "https://www.foodista.com/recipe/HCYYJYBM/baked-scallops-with-parma-ham",
         "image": "https://spoonacular.com/recipeImages/633786-556x370.jpg",
         "imageType": "jpg",
         "summary": "Baked Scallops With Parma Ham is a <b>dairy free</b> recipe with 6 servings. One portion of this dish contains approximately <b>13g of protein</b>, <b>9g of fat</b>, and a total of <b>168 calories</b>. For <b>$1.51 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. 31 person were impressed by this recipe. It works best as a main course, and is done in around <b>45 minutes</b>. Head to the store and pick up big scallops, parsley, bell pepper, and a few other things to make it today. It is brought to you by Foodista. With a spoonacular <b>score of 57%</b>, this dish is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/chicken-wrapped-in-parma-ham-1088028\">Chicken wrapped in Parma ham</a>, <a href=\"https://spoonacular.com/recipes/parma-ham-peach-plates-219116\">Parma ham & peach plates</a>, and <a href=\"https://spoonacular.com/recipes/cod-with-parma-ham-asparagus-1632\">Cod With Parma Ham & Asparagus</a>.",
         "cuisines": [],
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
         "instructions": "Preheat oven to 410 F (210 C / T 7).\nMix breadcrumbs, Parma ham, garlic, parsley and 1 teaspoon of olive oil in a food processor.\nFold a piece of kitchen paper, pour 1 teaspoon of olive oil on it and use it to grease an oven rack.\nPlace scallops on the greased rack and top them with Parma ham mix.\nPour a dash of olive oil on top and bake in oven for 8 minutes.\nServe as a starter with a few leaves of lamb's lettuce or rocket if you like.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Preheat oven to 410 F (210 C / T 7).",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg",
                                 "temperature": {
                                     "number": 410.0,
                                     "unit": "Fahrenheit"
                                 }
                             }
                         ]
                     },
                     {
                         "number": 2,
                         "step": "Mix breadcrumbs, Parma ham, garlic, parsley and 1 teaspoon of olive oil in a food processor.",
                         "ingredients": [
                             {
                                 "id": 18079,
                                 "name": "breadcrumbs",
                                 "localizedName": "breadcrumbs",
                                 "image": "breadcrumbs.jpg"
                             },
                             {
                                 "id": 4053,
                                 "name": "olive oil",
                                 "localizedName": "olive oil",
                                 "image": "olive-oil.jpg"
                             },
                             {
                                 "id": 11297,
                                 "name": "parsley",
                                 "localizedName": "parsley",
                                 "image": "parsley.jpg"
                             },
                             {
                                 "id": 11215,
                                 "name": "garlic",
                                 "localizedName": "garlic",
                                 "image": "garlic.png"
                             },
                             {
                                 "id": 10151,
                                 "name": "ham",
                                 "localizedName": "ham",
                                 "image": "ham-whole.jpg"
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
                         "number": 3,
                         "step": "Fold a piece of kitchen paper, pour 1 teaspoon of olive oil on it and use it to grease an oven rack.",
                         "ingredients": [
                             {
                                 "id": 4053,
                                 "name": "olive oil",
                                 "localizedName": "olive oil",
                                 "image": "olive-oil.jpg"
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
                         "number": 4,
                         "step": "Place scallops on the greased rack and top them with Parma ham mix.",
                         "ingredients": [
                             {
                                 "id": 10015172,
                                 "name": "scallops",
                                 "localizedName": "scallops",
                                 "image": "scallops.jpg"
                             },
                             {
                                 "id": 10151,
                                 "name": "ham",
                                 "localizedName": "ham",
                                 "image": "ham-whole.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 5,
                         "step": "Pour a dash of olive oil on top and bake in oven for 8 minutes.",
                         "ingredients": [
                             {
                                 "id": 4053,
                                 "name": "olive oil",
                                 "localizedName": "olive oil",
                                 "image": "olive-oil.jpg"
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
                             "number": 8,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 6,
                         "step": "Serve as a starter with a few leaves of lamb's lettuce or rocket if you like.",
                         "ingredients": [
                             {
                                 "id": 11190,
                                 "name": "mache",
                                 "localizedName": "mache",
                                 "image": "lambs-lettuce.jpg"
                             },
                             {
                                 "id": 11959,
                                 "name": "arugula",
                                 "localizedName": "arugula",
                                 "image": "arugula-or-rocket-salad.jpg"
                             }
                         ],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/baked-scallops-with-parma-ham-633786"
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
         "weightWatcherSmartPoints": 4,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 45,
         "healthScore": 0,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 30.24,
         "extendedIngredients": [
             {
                 "id": 20081,
                 "aisle": "Baking",
                 "image": "flour.png",
                 "consistency": "SOLID",
                 "name": "all purpose flour",
                 "nameClean": "wheat flour",
                 "original": "150g All Purpose Flour, sifted",
                 "originalName": "All Purpose Flour, sifted",
                 "amount": 150.0,
                 "unit": "g",
                 "meta": [
                     "sifted"
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
             },
             {
                 "id": 9003,
                 "aisle": "Produce",
                 "image": "apple.jpg",
                 "consistency": "SOLID",
                 "name": "apples",
                 "nameClean": "apple",
                 "original": "4 Large Apples",
                 "originalName": "Large Apples",
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
                 "id": 19334,
                 "aisle": "Baking",
                 "image": "light-brown-sugar.jpg",
                 "consistency": "SOLID",
                 "name": "brown sugar",
                 "nameClean": "golden brown sugar",
                 "original": "1/3 cup Brown Sugar",
                 "originalName": "Brown Sugar",
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
                 "id": 2010,
                 "aisle": "Spices and Seasonings",
                 "image": "cinnamon.jpg",
                 "consistency": "SOLID",
                 "name": "cinnamon",
                 "nameClean": "cinnamon",
                 "original": "1 Tbsp Cinnamon",
                 "originalName": "Cinnamon",
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
                 "id": 1123,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "egg.png",
                 "consistency": "SOLID",
                 "name": "eggs",
                 "nameClean": "egg",
                 "original": "2 Eggs, lightly beaten",
                 "originalName": "Eggs, lightly beaten",
                 "amount": 2.0,
                 "unit": "",
                 "meta": [
                     "lightly beaten"
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
                 "id": 10719335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "granulated sugar",
                 "nameClean": "granulated sugar",
                 "original": "2 Tbsp Granulated Sugar",
                 "originalName": "Granulated Sugar",
                 "amount": 2.0,
                 "unit": "Tbsp",
                 "meta": [],
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
                 "id": 9156,
                 "aisle": "Produce",
                 "image": "zest-lemon.jpg",
                 "consistency": "SOLID",
                 "name": "lemon zest",
                 "nameClean": "lemon peel",
                 "original": "1/2 Tsp Lemon Zest",
                 "originalName": "Lemon Zest",
                 "amount": 0.5,
                 "unit": "Tsp",
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
                 "id": 1077,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "milk.png",
                 "consistency": "LIQUID",
                 "name": "milk",
                 "nameClean": "milk",
                 "original": "250ml Milk",
                 "originalName": "Milk",
                 "amount": 250.0,
                 "unit": "ml",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.057,
                         "unitShort": "cups",
                         "unitLong": "cups"
                     },
                     "metric": {
                         "amount": 250.0,
                         "unitShort": "ml",
                         "unitLong": "milliliters"
                     }
                 }
             },
             {
                 "id": 4582,
                 "aisle": "Oil, Vinegar, Salad Dressing",
                 "image": "vegetable-oil.jpg",
                 "consistency": "LIQUID",
                 "name": "oil",
                 "nameClean": "cooking oil",
                 "original": "Oil for frying",
                 "originalName": "Oil for frying",
                 "amount": 16.0,
                 "unit": "servings",
                 "meta": [
                     "for frying"
                 ],
                 "measures": {
                     "us": {
                         "amount": 16.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     },
                     "metric": {
                         "amount": 16.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
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
                 "original": "1 pinch salt",
                 "originalName": "salt",
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
                 "id": 1145,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "butter-sliced.jpg",
                 "consistency": "SOLID",
                 "name": "butter",
                 "nameClean": "unsalted butter",
                 "original": "1 Tbsp Melted Unsalted Butter",
                 "originalName": "Melted Unsalted Butter",
                 "amount": 1.0,
                 "unit": "Tbsp",
                 "meta": [
                     "unsalted",
                     "melted"
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
             }
         ],
         "id": 639487,
         "title": "Cinnamon Sugar Fried Apples",
         "readyInMinutes": 60,
         "servings": 16,
         "sourceUrl": "http://www.foodista.com/recipe/TNR4865M/cinnamon-sugar-fried-apples",
         "image": "https://spoonacular.com/recipeImages/639487-556x370.jpg",
         "imageType": "jpg",
         "summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Cinnamon Sugar Fried Apples might be a recipe you should try. For <b>30 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. One serving contains <b>131 calories</b>, <b>2g of protein</b>, and <b>5g of fat</b>. This recipe serves 16. A mixture of all purpose flour, apples, oil, and a handful of other ingredients are all it takes to make this recipe so scrumptious. A couple people made this recipe, and 45 would say it hit the spot. It works best as a hor d'oeuvre, and is done in roughly <b>1 hour</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 18%</b>. This score is rather bad. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/low-sugar-slow-cooker-cinnamon-apples-626821\">Low Sugar Slow Cooker Cinnamon Apples</a>, <a href=\"https://spoonacular.com/recipes/brown-sugar-oatmeal-with-maple-cinnamon-apples-801859\">Brown Sugar Oatmeal with Maple Cinnamon Apples</a>, and <a href=\"https://spoonacular.com/recipes/cinnamon-waffles-with-fried-apples-553859\">Cinnamon Waffles with Fried Apples</a>.",
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
             "lacto ovo vegetarian"
         ],
         "occasions": [],
         "instructions": "<ol><li>Mix all ingredients for batter (flour, salt, granulated sugar, milk, lightly beaten eggs, lemon zest, and melted unsalted butter) in a bowl until smooth. Cover with plastic wrap and set aside to rest for 30 minutes.</li><li>While batter is resting core and slice apples 1 cm thick. Set aside. Start heating oil.</li><li>Dip apple slices in batter, then fry until golden on each side. Drain the apples well on double lined paper towels. Then sprinkle the cinnamon sugar (brown sugar and cinnamon combined) on the slices. Serve immediately.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Mix all ingredients for batter (flour, salt, granulated sugar, milk, lightly beaten eggs, lemon zest, and melted unsalted butter) in a bowl until smooth. Cover with plastic wrap and set aside to rest for 30 minutes.While batter is resting core and slice apples 1 cm thick. Set aside. Start heating oil.Dip apple slices in batter, then fry until golden on each side.",
                         "ingredients": [
                             {
                                 "id": 10719335,
                                 "name": "granulated sugar",
                                 "localizedName": "granulated sugar",
                                 "image": "sugar-in-bowl.png"
                             },
                             {
                                 "id": 1145,
                                 "name": "unsalted butter",
                                 "localizedName": "unsalted butter",
                                 "image": "butter-sliced.jpg"
                             },
                             {
                                 "id": 9156,
                                 "name": "lemon zest",
                                 "localizedName": "lemon zest",
                                 "image": "zest-lemon.jpg"
                             },
                             {
                                 "id": 9003,
                                 "name": "apple",
                                 "localizedName": "apple",
                                 "image": "apple.jpg"
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
                             },
                             {
                                 "id": 10018364,
                                 "name": "wrap",
                                 "localizedName": "wrap",
                                 "image": "flour-tortilla.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "dip",
                                 "localizedName": "dip",
                                 "image": ""
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
                                 "id": 404730,
                                 "name": "plastic wrap",
                                 "localizedName": "plastic wrap",
                                 "image": "plastic-wrap.jpg"
                             },
                             {
                                 "id": 404783,
                                 "name": "bowl",
                                 "localizedName": "bowl",
                                 "image": "bowl.jpg"
                             }
                         ],
                         "length": {
                             "number": 30,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 2,
                         "step": "Drain the apples well on double lined paper towels. Then sprinkle the cinnamon sugar (brown sugar and cinnamon combined) on the slices.",
                         "ingredients": [
                             {
                                 "id": 10219335,
                                 "name": "cinnamon sugar",
                                 "localizedName": "cinnamon sugar",
                                 "image": "cinnamon-sugar.png"
                             },
                             {
                                 "id": 19334,
                                 "name": "brown sugar",
                                 "localizedName": "brown sugar",
                                 "image": "dark-brown-sugar.png"
                             },
                             {
                                 "id": 2010,
                                 "name": "cinnamon",
                                 "localizedName": "cinnamon",
                                 "image": "cinnamon.jpg"
                             },
                             {
                                 "id": 9003,
                                 "name": "apple",
                                 "localizedName": "apple",
                                 "image": "apple.jpg"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 405895,
                                 "name": "paper towels",
                                 "localizedName": "paper towels",
                                 "image": "paper-towels.jpg"
                             }
                         ]
                     },
                     {
                         "number": 3,
                         "step": "Serve immediately.",
                         "ingredients": [],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/cinnamon-sugar-fried-apples-639487"
     },
     {
         "vegetarian": true,
         "vegan": false,
         "glutenFree": true,
         "dairyFree": false,
         "veryHealthy": true,
         "cheap": false,
         "veryPopular": false,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 9,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 41,
         "healthScore": 66,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 187.33,
         "extendedIngredients": [
             {
                 "id": 11206,
                 "aisle": "Produce",
                 "image": "cucumber.jpg",
                 "consistency": "SOLID",
                 "name": "cucumber",
                 "nameClean": "cucumber",
                 "original": "3/4 cup cucumber",
                 "originalName": "cucumber",
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
                 "id": 2064,
                 "aisle": "Produce",
                 "image": "mint.jpg",
                 "consistency": "SOLID",
                 "name": "mint",
                 "nameClean": "mint",
                 "original": "2 tablespoons chopped fresh mint",
                 "originalName": "chopped fresh mint",
                 "amount": 2.0,
                 "unit": "tablespoons",
                 "meta": [
                     "fresh",
                     "chopped"
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
                 "id": 19296,
                 "aisle": "Nut butters, Jams, and Honey",
                 "image": "honey.png",
                 "consistency": "LIQUID",
                 "name": "honey",
                 "nameClean": "honey",
                 "original": "1 T. honey",
                 "originalName": "honey",
                 "amount": 1.0,
                 "unit": "T",
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
                 "id": 9160,
                 "aisle": "Produce",
                 "image": "lime-juice.png",
                 "consistency": "LIQUID",
                 "name": "lime juice",
                 "nameClean": "lime juice",
                 "original": "2 T. lime juice",
                 "originalName": "lime juice",
                 "amount": 2.0,
                 "unit": "T",
                 "meta": [],
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
                 "id": 1009159,
                 "aisle": "Produce",
                 "image": "zest-lime.jpg",
                 "consistency": "SOLID",
                 "name": "lime zest",
                 "nameClean": "lime peel",
                 "original": "1/2 t. lime zest",
                 "originalName": "lime zest",
                 "amount": 0.5,
                 "unit": "t",
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
                 "id": 9176,
                 "aisle": "Produce",
                 "image": "mango.jpg",
                 "consistency": "SOLID",
                 "name": "mango",
                 "nameClean": "mango",
                 "original": "1/2 mango",
                 "originalName": "mango",
                 "amount": 0.5,
                 "unit": "",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 0.5,
                         "unitShort": "",
                         "unitLong": ""
                     },
                     "metric": {
                         "amount": 0.5,
                         "unitShort": "",
                         "unitLong": ""
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
                 "original": "1/4 c. olive oil",
                 "originalName": "olive oil",
                 "amount": 0.25,
                 "unit": "c",
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
                 "id": 10211821,
                 "aisle": "Produce",
                 "image": "bell-pepper-orange.png",
                 "consistency": "SOLID",
                 "name": "bell pepper",
                 "nameClean": "bell pepper",
                 "original": "pepper",
                 "originalName": "pepper",
                 "amount": 4.0,
                 "unit": "servings",
                 "meta": [],
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
                 "id": 20035,
                 "aisle": "Pasta and Rice;Health Foods",
                 "image": "uncooked-quinoa.png",
                 "consistency": "SOLID",
                 "name": "quinoa",
                 "nameClean": "quinoa",
                 "original": "1 c. quinoa, well rinsed",
                 "originalName": "quinoa, well rinsed",
                 "amount": 1.0,
                 "unit": "c",
                 "meta": [
                     "rinsed",
                     "well"
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
                 "original": "salt",
                 "originalName": "salt",
                 "amount": 4.0,
                 "unit": "servings",
                 "meta": [],
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
                 "id": 1001116,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "plain-yogurt.jpg",
                 "consistency": "LIQUID",
                 "name": "cream",
                 "nameClean": "plain yogurt",
                 "original": "1 T. sour cream (or plain yogurt can be subbed)",
                 "originalName": "sour cream (or plain yogurt can be subbed)",
                 "amount": 1.0,
                 "unit": "T",
                 "meta": [
                     "plain",
                     "sour",
                     "canned",
                     "(or yogurt can be subbed)"
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
                 "id": 9316,
                 "aisle": "Produce",
                 "image": "strawberries.png",
                 "consistency": "SOLID",
                 "name": "strawberries",
                 "nameClean": "strawberries",
                 "original": "1 1/2 cups strawberries, hulled and quartered",
                 "originalName": "strawberries, hulled and quartered",
                 "amount": 1.5,
                 "unit": "cups",
                 "meta": [
                     "hulled",
                     "quartered"
                 ],
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
             },
             {
                 "id": 14412,
                 "aisle": "Beverages",
                 "image": "water.png",
                 "consistency": "LIQUID",
                 "name": "water",
                 "nameClean": "water",
                 "original": "1 1/2 c. water",
                 "originalName": "water",
                 "amount": 1.5,
                 "unit": "c",
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
         "id": 661925,
         "title": "Strawberry-Mango Quinoa Salad",
         "readyInMinutes": 45,
         "servings": 4,
         "sourceUrl": "http://www.foodista.com/recipe/K2BYJP76/strawberry-mango-quinoa-salad",
         "image": "https://spoonacular.com/recipeImages/661925-556x370.jpg",
         "imageType": "jpg",
         "summary": "Need a <b>gluten free and lacto ovo vegetarian hor d'oeuvre</b>? Strawberry-Mango Quinoa Salad could be an awesome recipe to try. This recipe serves 4. One serving contains <b>354 calories</b>, <b>8g of protein</b>, and <b>17g of fat</b>. For <b>$1.87 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. 41 person were impressed by this recipe. This recipe from Foodista requires cucumber, cream, mango, and strawberries. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/strawberry-mango-quinoa-salad-1578467\">Strawberry-Mango Quinoa Salad</a>, <a href=\"https://spoonacular.com/recipes/strawberry-mango-quinoa-salad-1588251\">Strawberry-Mango Quinoa Salad</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-mango-chopped-spinach-quinoa-salad-with-sesame-lime-vinaigrette-1469287\">Strawberry & Mango Chopped Spinach Quinoa Salad with Sesame-Lime Vinaigrette</a>.",
         "cuisines": [],
         "dishTypes": [
             "side dish",
             "antipasti",
             "salad",
             "starter",
             "snack",
             "appetizer",
             "antipasto",
             "hor d'oeuvre"
         ],
         "diets": [
             "gluten free",
             "lacto ovo vegetarian"
         ],
         "occasions": [],
         "instructions": "<ol><li>Prepare the quinoa: In a medium saucepan combine the quinoa, water and 1/4 t. salt. Bring to a boil, reduce heat to low, cover and simmer until the liquid is just absorbed, about 15 minutes. Spread the cooked quinoa out on a baking sheet to cool for about 20 minutes.</li><li>In a large bowl whisk together lime juice, zest, honey, sour cream and olive oil. Add the cooled quinoa, strawberries, mango, cucumber and mint. Toss well to combine and season with salt &amp; pepper. Serve immediately.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Prepare the quinoa: In a medium saucepan combine the quinoa, water and 1/4 t. salt. Bring to a boil, reduce heat to low, cover and simmer until the liquid is just absorbed, about 15 minutes.",
                         "ingredients": [
                             {
                                 "id": 20035,
                                 "name": "quinoa",
                                 "localizedName": "quinoa",
                                 "image": "uncooked-quinoa.png"
                             },
                             {
                                 "id": 14412,
                                 "name": "water",
                                 "localizedName": "water",
                                 "image": "water.png"
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
                         ],
                         "length": {
                             "number": 15,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 2,
                         "step": "Spread the cooked quinoa out on a baking sheet to cool for about 20 minutes.In a large bowl whisk together lime juice, zest, honey, sour cream and olive oil.",
                         "ingredients": [
                             {
                                 "id": 20137,
                                 "name": "cooked quinoa",
                                 "localizedName": "cooked quinoa",
                                 "image": "cooked-quinoa.png"
                             },
                             {
                                 "id": 9160,
                                 "name": "lime juice",
                                 "localizedName": "lime juice",
                                 "image": "lime-juice.png"
                             },
                             {
                                 "id": 1056,
                                 "name": "sour cream",
                                 "localizedName": "sour cream",
                                 "image": "sour-cream.jpg"
                             },
                             {
                                 "id": 4053,
                                 "name": "olive oil",
                                 "localizedName": "olive oil",
                                 "image": "olive-oil.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "spread",
                                 "localizedName": "spread",
                                 "image": ""
                             },
                             {
                                 "id": 19296,
                                 "name": "honey",
                                 "localizedName": "honey",
                                 "image": "honey.png"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404727,
                                 "name": "baking sheet",
                                 "localizedName": "baking sheet",
                                 "image": "baking-sheet.jpg"
                             },
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
                             }
                         ],
                         "length": {
                             "number": 20,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 3,
                         "step": "Add the cooled quinoa, strawberries, mango, cucumber and mint. Toss well to combine and season with salt &amp; pepper.",
                         "ingredients": [
                             {
                                 "id": 9316,
                                 "name": "strawberries",
                                 "localizedName": "strawberries",
                                 "image": "strawberries.png"
                             },
                             {
                                 "id": 11206,
                                 "name": "cucumber",
                                 "localizedName": "cucumber",
                                 "image": "cucumber.jpg"
                             },
                             {
                                 "id": 1002030,
                                 "name": "pepper",
                                 "localizedName": "pepper",
                                 "image": "pepper.jpg"
                             },
                             {
                                 "id": 20035,
                                 "name": "quinoa",
                                 "localizedName": "quinoa",
                                 "image": "uncooked-quinoa.png"
                             },
                             {
                                 "id": 9176,
                                 "name": "mango",
                                 "localizedName": "mango",
                                 "image": "mango.jpg"
                             },
                             {
                                 "id": 2064,
                                 "name": "mint",
                                 "localizedName": "mint",
                                 "image": "mint.jpg"
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
                         "step": "Serve immediately.",
                         "ingredients": [],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/strawberry-mango-quinoa-salad-661925"
     },
     {
         "vegetarian": true,
         "vegan": true,
         "glutenFree": true,
         "dairyFree": true,
         "veryHealthy": false,
         "cheap": false,
         "veryPopular": false,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 5,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 47,
         "healthScore": 21,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 91.88,
         "extendedIngredients": [
             {
                 "id": 9037,
                 "aisle": "Produce",
                 "image": "avocado.jpg",
                 "consistency": "SOLID",
                 "name": "avocados",
                 "nameClean": "avocado",
                 "original": "2 avocados, fairly soft, peeled and pit removed",
                 "originalName": "avocados, fairly soft, peeled and pit removed",
                 "amount": 2.0,
                 "unit": "",
                 "meta": [
                     "soft",
                     "peeled"
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
                 "id": 9160,
                 "aisle": "Produce",
                 "image": "lime-juice.png",
                 "consistency": "LIQUID",
                 "name": "lime juice",
                 "nameClean": "lime juice",
                 "original": "1 tablespoon lime juice",
                 "originalName": "lime juice",
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
                 "id": 1002068,
                 "aisle": "Oil, Vinegar, Salad Dressing",
                 "image": "vinegar-(white).jpg",
                 "consistency": "LIQUID",
                 "name": "white wine vinegar",
                 "nameClean": "white wine vinegar",
                 "original": "¼ teaspoon white wine vinegar",
                 "originalName": "white wine vinegar",
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
                 "id": 10011282,
                 "aisle": "Produce",
                 "image": "red-onion.png",
                 "consistency": "SOLID",
                 "name": "onion",
                 "nameClean": "red onion",
                 "original": "½ red onion, minced",
                 "originalName": "red onion, minced",
                 "amount": 0.5,
                 "unit": "",
                 "meta": [
                     "red",
                     "minced"
                 ],
                 "measures": {
                     "us": {
                         "amount": 0.5,
                         "unitShort": "",
                         "unitLong": ""
                     },
                     "metric": {
                         "amount": 0.5,
                         "unitShort": "",
                         "unitLong": ""
                     }
                 }
             },
             {
                 "id": 11977,
                 "aisle": "Produce",
                 "image": "serrano-pepper.jpg",
                 "consistency": "SOLID",
                 "name": "serrano pepper",
                 "nameClean": "serrano pepper",
                 "original": "1 Serrano pepper, minced",
                 "originalName": "Serrano pepper, minced",
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
                 "id": 11165,
                 "aisle": "Produce;Spices and Seasonings",
                 "image": "cilantro.png",
                 "consistency": "SOLID",
                 "name": "cilantro",
                 "nameClean": "cilantro",
                 "original": "2 tablespoons chopped cilantro",
                 "originalName": "chopped cilantro",
                 "amount": 2.0,
                 "unit": "tablespoons",
                 "meta": [
                     "chopped"
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
                 "id": 10211529,
                 "aisle": "Produce",
                 "image": "roma-tomatoes.png",
                 "consistency": "SOLID",
                 "name": "roma tomato",
                 "nameClean": "italian tomato",
                 "original": "1 roma tomato, pulp removed, then diced",
                 "originalName": "roma tomato, pulp removed, then diced",
                 "amount": 1.0,
                 "unit": "",
                 "meta": [
                     "diced"
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
                 "id": 2047,
                 "aisle": "Spices and Seasonings",
                 "image": "salt.jpg",
                 "consistency": "SOLID",
                 "name": "salt",
                 "nameClean": "table salt",
                 "original": "½ teaspoon salt",
                 "originalName": "salt",
                 "amount": 0.5,
                 "unit": "teaspoon",
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
                 "id": 1002030,
                 "aisle": "Spices and Seasonings",
                 "image": "pepper.jpg",
                 "consistency": "SOLID",
                 "name": "pepper",
                 "nameClean": "black pepper",
                 "original": "¼ teaspoon freshly ground black pepper",
                 "originalName": "freshly ground black pepper",
                 "amount": 0.25,
                 "unit": "teaspoon",
                 "meta": [
                     "black",
                     "freshly ground"
                 ],
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
                 "id": 1002014,
                 "aisle": "Spices and Seasonings",
                 "image": "ground-cumin.jpg",
                 "consistency": "SOLID",
                 "name": "cumin",
                 "nameClean": "cumin",
                 "original": "1/8 teaspoon cumin",
                 "originalName": "cumin",
                 "amount": 0.125,
                 "unit": "teaspoon",
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
                 "id": 1022020,
                 "aisle": "Spices and Seasonings",
                 "image": "garlic-powder.png",
                 "consistency": "SOLID",
                 "name": "garlic powder",
                 "nameClean": "garlic powder",
                 "original": "1/8 teaspoon garlic powder",
                 "originalName": "garlic powder",
                 "amount": 0.125,
                 "unit": "teaspoon",
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
             }
         ],
         "id": 661188,
         "title": "Spicy Seasoned Loaded Guacamole",
         "readyInMinutes": 45,
         "servings": 4,
         "sourceUrl": "https://www.foodista.com/recipe/Z7GWGX8D/spicy-seasoned-loaded-guacamole",
         "image": "https://spoonacular.com/recipeImages/661188-556x370.jpg",
         "imageType": "jpg",
         "summary": "Spicy Seasoned Loaded Guacamole is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> hor d'oeuvre. For <b>92 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. One serving contains <b>171 calories</b>, <b>2g of protein</b>, and <b>15g of fat</b>. This recipe serves 4. If you have garlic powder, salt, cumin, and a few other ingredients on hand, you can make it. 47 people found this recipe to be flavorful and satisfying. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is brought to you by Foodista. A few people really liked this Mexican dish. Overall, this recipe earns a <b>pretty good spoonacular score of 79%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/loaded-guacamole-1626197\">Loaded Guacamole</a>, <a href=\"https://spoonacular.com/recipes/guacamole-loaded-1626465\">Guacamole, loaded</a>, and <a href=\"https://spoonacular.com/recipes/fully-loaded-guacamole-621631\">Fully Loaded Guacamole</a>.",
         "cuisines": [
             "Mexican"
         ],
         "dishTypes": [
             "antipasti",
             "condiment",
             "starter",
             "snack",
             "appetizer",
             "dip",
             "antipasto",
             "hor d'oeuvre",
             "spread"
         ],
         "diets": [
             "gluten free",
             "dairy free",
             "paleolithic",
             "lacto ovo vegetarian",
             "primal",
             "whole 30",
             "vegan"
         ],
         "occasions": [],
         "instructions": "In a medium bowl, mash avocado and mix with lime juice and vinegar.\nStir in the salt, pepper, cumin, and garlic powder.\nMix in red onion, Serrano pepper, cilantro, and chopped tomato.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "In a medium bowl, mash avocado and mix with lime juice and vinegar.",
                         "ingredients": [
                             {
                                 "id": 9160,
                                 "name": "lime juice",
                                 "localizedName": "lime juice",
                                 "image": "lime-juice.png"
                             },
                             {
                                 "id": 9037,
                                 "name": "avocado",
                                 "localizedName": "avocado",
                                 "image": "avocado.jpg"
                             },
                             {
                                 "id": 2053,
                                 "name": "vinegar",
                                 "localizedName": "vinegar",
                                 "image": "vinegar-(white).jpg"
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
                         "step": "Stir in the salt, pepper, cumin, and garlic powder.",
                         "ingredients": [
                             {
                                 "id": 1022020,
                                 "name": "garlic powder",
                                 "localizedName": "garlic powder",
                                 "image": "garlic-powder.png"
                             },
                             {
                                 "id": 1002030,
                                 "name": "pepper",
                                 "localizedName": "pepper",
                                 "image": "pepper.jpg"
                             },
                             {
                                 "id": 1002014,
                                 "name": "cumin",
                                 "localizedName": "cumin",
                                 "image": "ground-cumin.jpg"
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
                         "number": 3,
                         "step": "Mix in red onion, Serrano pepper, cilantro, and chopped tomato.",
                         "ingredients": [
                             {
                                 "id": 11977,
                                 "name": "serrano pepper",
                                 "localizedName": "serrano pepper",
                                 "image": "serrano-pepper.jpg"
                             },
                             {
                                 "id": 10011282,
                                 "name": "red onion",
                                 "localizedName": "red onion",
                                 "image": "red-onion.png"
                             },
                             {
                                 "id": 11165,
                                 "name": "cilantro",
                                 "localizedName": "cilantro",
                                 "image": "cilantro.png"
                             },
                             {
                                 "id": 11529,
                                 "name": "tomato",
                                 "localizedName": "tomato",
                                 "image": "tomato.png"
                             }
                         ],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/spicy-seasoned-loaded-guacamole-661188"
     },
     {
         "vegetarian": true,
         "vegan": true,
         "glutenFree": true,
         "dairyFree": true,
         "veryHealthy": true,
         "cheap": false,
         "veryPopular": false,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 8,
         "gaps": "GAPS_FULL",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 7,
         "healthScore": 100,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 120.28,
         "extendedIngredients": [
             {
                 "id": 2069,
                 "aisle": "Oil, Vinegar, Salad Dressing",
                 "image": "balsamic-vinegar.jpg",
                 "consistency": "LIQUID",
                 "name": "balsamic vinegar",
                 "nameClean": "balsamic vinegar",
                 "original": "2 teaspoons balsamic vinegar",
                 "originalName": "balsamic vinegar",
                 "amount": 2.0,
                 "unit": "teaspoons",
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
                 "id": 1034053,
                 "aisle": "Oil, Vinegar, Salad Dressing",
                 "image": "olive-oil.jpg",
                 "consistency": "LIQUID",
                 "name": "extra virgin olive oil",
                 "nameClean": "extra virgin olive oil",
                 "original": "3 tablespoons extra virgin olive oil",
                 "originalName": "extra virgin olive oil",
                 "amount": 3.0,
                 "unit": "tablespoons",
                 "meta": [],
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
                 "id": 11291,
                 "aisle": "Produce",
                 "image": "spring-onions.jpg",
                 "consistency": "SOLID",
                 "name": "green onions",
                 "nameClean": "spring onions",
                 "original": "4 green onions, sliced thin",
                 "originalName": "green onions, sliced thin",
                 "amount": 4.0,
                 "unit": "",
                 "meta": [
                     "sliced",
                     "thin"
                 ],
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
                 "id": 10316069,
                 "aisle": "Pasta and Rice;Canned and Jarred",
                 "image": "lentils-brown.jpg",
                 "consistency": "SOLID",
                 "name": "lentils",
                 "nameClean": "lentils",
                 "original": "1 cup lentils",
                 "originalName": "lentils",
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
                 "id": 10211821,
                 "aisle": "Produce",
                 "image": "bell-pepper-orange.png",
                 "consistency": "SOLID",
                 "name": "bell pepper",
                 "nameClean": "bell pepper",
                 "original": "pepper",
                 "originalName": "pepper",
                 "amount": 4.0,
                 "unit": "servings",
                 "meta": [],
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
                 "id": 11821,
                 "aisle": "Produce",
                 "image": "red-pepper.jpg",
                 "consistency": "SOLID",
                 "name": "bell pepper",
                 "nameClean": "red pepper",
                 "original": "1 red bell pepper",
                 "originalName": "red bell pepper",
                 "amount": 1.0,
                 "unit": "",
                 "meta": [
                     "red"
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
                 "id": 1022068,
                 "aisle": "Oil, Vinegar, Salad Dressing",
                 "image": "red-wine-vinegar.jpg",
                 "consistency": "LIQUID",
                 "name": "red wine vinegar",
                 "nameClean": "red wine vinegar",
                 "original": "2 teaspoons red wine vinegar",
                 "originalName": "red wine vinegar",
                 "amount": 2.0,
                 "unit": "teaspoons",
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
                 "id": 2036,
                 "aisle": "Produce;Spices and Seasonings",
                 "image": "rosemary.jpg",
                 "consistency": "SOLID",
                 "name": "rosemary",
                 "nameClean": "rosemary",
                 "original": "1 tablespoon rosemary, minced fine",
                 "originalName": "rosemary, minced fine",
                 "amount": 1.0,
                 "unit": "tablespoon",
                 "meta": [
                     "minced",
                     "fine"
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
                 "id": 2047,
                 "aisle": "Spices and Seasonings",
                 "image": "salt.jpg",
                 "consistency": "SOLID",
                 "name": "salt",
                 "nameClean": "table salt",
                 "original": "Salt",
                 "originalName": "Salt",
                 "amount": 4.0,
                 "unit": "servings",
                 "meta": [],
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
                 "id": 11529,
                 "aisle": "Produce",
                 "image": "tomato.png",
                 "consistency": "SOLID",
                 "name": "tomatoes",
                 "nameClean": "tomato",
                 "original": "2 tomatoes",
                 "originalName": "tomatoes",
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
                 "id": 10611282,
                 "aisle": "Produce",
                 "image": "white-onion.png",
                 "consistency": "SOLID",
                 "name": "onion",
                 "nameClean": "white onion",
                 "original": "1 white onion, diced",
                 "originalName": "white onion, diced",
                 "amount": 1.0,
                 "unit": "",
                 "meta": [
                     "diced",
                     "white"
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
             }
         ],
         "id": 649931,
         "title": "Lentil Salad With Vegetables",
         "readyInMinutes": 45,
         "servings": 4,
         "sourceUrl": "http://www.foodista.com/recipe/M6VXBPYY/lentil-salad-with-vegetables",
         "image": "https://spoonacular.com/recipeImages/649931-556x370.jpg",
         "imageType": "jpg",
         "summary": "Lentil Salad With Vegetables might be a good recipe to expand your side dish repertoire. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 4 and costs <b>$1.2 per serving</b>. One serving contains <b>320 calories</b>, <b>15g of protein</b>, and <b>12g of fat</b>. Head to the store and pick up tomatoes, rosemary, red wine vinegar, and a few other things to make it today. This recipe from Foodista has 7 fans. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 97%</b>, which is awesome. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/lentil-salad-with-vegetables-1400649\">Lentil Salad With Vegetables</a>, <a href=\"https://spoonacular.com/recipes/lentil-salad-with-summer-vegetables-1019650\">Lentil Salad with Summer Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/puy-lentil-salad-with-caramelized-vegetables-33731\">Puy Lentil Salad With Caramelized Vegetables</a>.",
         "cuisines": [],
         "dishTypes": [
             "side dish"
         ],
         "diets": [
             "gluten free",
             "dairy free",
             "lacto ovo vegetarian",
             "vegan"
         ],
         "occasions": [],
         "instructions": "<ol><li>Heat olive oil in a saucepan over medium high heat and add onion. Cook until just translucent and then add lentils. Add water and cook according to package directions. Drain and cool.</li><li>Combine lentils with tomatoes, pepper, onions, rosemary, olive oil, and vinegars. Season with salt and pepper to taste and adjust oil or vinegar as desired.</li><li>Serve cold or at room temperature.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Heat olive oil in a saucepan over medium high heat and add onion. Cook until just translucent and then add lentils.",
                         "ingredients": [
                             {
                                 "id": 4053,
                                 "name": "olive oil",
                                 "localizedName": "olive oil",
                                 "image": "olive-oil.jpg"
                             },
                             {
                                 "id": 10316069,
                                 "name": "lentils",
                                 "localizedName": "lentils",
                                 "image": "lentils-brown.jpg"
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
                                 "id": 404669,
                                 "name": "sauce pan",
                                 "localizedName": "sauce pan",
                                 "image": "sauce-pan.jpg"
                             }
                         ]
                     },
                     {
                         "number": 2,
                         "step": "Add water and cook according to package directions.",
                         "ingredients": [
                             {
                                 "id": 14412,
                                 "name": "water",
                                 "localizedName": "water",
                                 "image": "water.png"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 3,
                         "step": "Drain and cool.",
                         "ingredients": [],
                         "equipment": []
                     },
                     {
                         "number": 4,
                         "step": "Combine lentils with tomatoes, pepper, onions, rosemary, olive oil, and vinegars. Season with salt and pepper to taste and adjust oil or vinegar as desired.",
                         "ingredients": [
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
                                 "id": 2036,
                                 "name": "rosemary",
                                 "localizedName": "rosemary",
                                 "image": "rosemary.jpg"
                             },
                             {
                                 "id": 11529,
                                 "name": "tomato",
                                 "localizedName": "tomato",
                                 "image": "tomato.png"
                             },
                             {
                                 "id": 10316069,
                                 "name": "lentils",
                                 "localizedName": "lentils",
                                 "image": "lentils-brown.jpg"
                             },
                             {
                                 "id": 2053,
                                 "name": "vinegar",
                                 "localizedName": "vinegar",
                                 "image": "vinegar-(white).jpg"
                             },
                             {
                                 "id": 11282,
                                 "name": "onion",
                                 "localizedName": "onion",
                                 "image": "brown-onion.png"
                             },
                             {
                                 "id": 1002030,
                                 "name": "pepper",
                                 "localizedName": "pepper",
                                 "image": "pepper.jpg"
                             },
                             {
                                 "id": 4582,
                                 "name": "cooking oil",
                                 "localizedName": "cooking oil",
                                 "image": "vegetable-oil.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 5,
                         "step": "Serve cold or at room temperature.",
                         "ingredients": [],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/lentil-salad-with-vegetables-649931"
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
         "weightWatcherSmartPoints": 16,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 23,
         "healthScore": 5,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 225.54,
         "extendedIngredients": [
             {
                 "id": 1001,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "butter-sliced.jpg",
                 "consistency": "SOLID",
                 "name": "butter",
                 "nameClean": "butter",
                 "original": "1 teaspoon butter, slightly softened",
                 "originalName": "butter, slightly softened",
                 "amount": 1.0,
                 "unit": "teaspoon",
                 "meta": [
                     "softened"
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
                 "id": 2010,
                 "aisle": "Spices and Seasonings",
                 "image": "cinnamon.jpg",
                 "consistency": "SOLID",
                 "name": "cinnamon",
                 "nameClean": "cinnamon",
                 "original": "1/2 teaspoon cinnamon",
                 "originalName": "cinnamon",
                 "amount": 0.5,
                 "unit": "teaspoon",
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
                 "id": 20081,
                 "aisle": "Baking",
                 "image": "flour.png",
                 "consistency": "SOLID",
                 "name": "flour",
                 "nameClean": "wheat flour",
                 "original": "2 cups flour",
                 "originalName": "flour",
                 "amount": 2.0,
                 "unit": "cups",
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
                 "id": 1089003,
                 "aisle": "Produce",
                 "image": "grannysmith-apple.png",
                 "consistency": "SOLID",
                 "name": "granny smith apples",
                 "nameClean": "granny smith apple",
                 "original": "13 large granny smith apples",
                 "originalName": "granny smith apples",
                 "amount": 13.0,
                 "unit": "large",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 13.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     },
                     "metric": {
                         "amount": 13.0,
                         "unitShort": "large",
                         "unitLong": "larges"
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
                 "original": "lemon juice",
                 "originalName": "lemon juice",
                 "amount": 8.0,
                 "unit": "servings",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 8.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     },
                     "metric": {
                         "amount": 8.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     }
                 }
             },
             {
                 "id": 2025,
                 "aisle": "Spices and Seasonings",
                 "image": "ground-nutmeg.jpg",
                 "consistency": "SOLID",
                 "name": "nutmeg",
                 "nameClean": "nutmeg",
                 "original": "1/2 teaspoon nutmeg",
                 "originalName": "nutmeg",
                 "amount": 0.5,
                 "unit": "teaspoon",
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
                 "id": 18334,
                 "aisle": "Refrigerated;Frozen;Baking",
                 "image": "pie-crust.jpg",
                 "consistency": "SOLID",
                 "name": "pie crusts",
                 "nameClean": "refrigerated pie crust",
                 "original": "2 Pie Crusts",
                 "originalName": "Pie Crusts",
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
                 "id": 19335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "sugar",
                 "nameClean": "sugar",
                 "original": "1 cup sugar",
                 "originalName": "sugar",
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
         "id": 632572,
         "title": "Apple Pie",
         "readyInMinutes": 45,
         "servings": 8,
         "sourceUrl": "http://www.foodista.com/recipe/B3XV7VSY/apple-pie",
         "image": "https://spoonacular.com/recipeImages/632572-556x370.jpg",
         "imageType": "jpg",
         "summary": "Apple Pie is an American recipe that serves 8. For <b>$2.26 per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. This dessert has <b>601 calories</b>, <b>7g of protein</b>, and <b>13g of fat</b> per serving. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. If you have sugar, granny smith apples, flour, and a few other ingredients on hand, you can make it. 23 people have made this recipe and would make it again. It is brought to you by Foodista. With a spoonacular <b>score of 45%</b>, this dish is good. <a href=\"https://spoonacular.com/recipes/baked-apple-pie-cookie-cups-with-apple-pie-mousse-506649\">Baked Apple Pie Cookie Cups with Apple Pie Mousse</a>, <a href=\"https://spoonacular.com/recipes/stovetop-apple-pie-filling-and-over-18-apple-pie-678327\">Stovetop Apple Pie Filling and Over 18 Apple Pie</a>, and <a href=\"https://spoonacular.com/recipes/apple-pecan-pie-cronuts-with-apple-cider-caramel-drizzle-549559\">Apple Pecan Pie Cronuts with Apple Cider Caramel Drizzle</a> are very similar to this recipe.",
         "cuisines": [
             "American"
         ],
         "dishTypes": [
             "dessert"
         ],
         "diets": [],
         "occasions": [],
         "instructions": "<ol><li>Preheat oven to 350</li><li>Line pie pan with bottom crust.</li><li>Peel and slice apples.</li><li>Put 1/2 of the apple slices in prepared pie pan.</li><li>Sprinkle apple slices with 1 cup sugar, a little nutmeg and cinnamon.</li><li>Add rest of apples and top with rest of sugar (1 cup), a little nutmeg cinnamon, flour and butter or margarine cut into small pieces.</li><li>Sprinkle with lemon juice.</li><li>Cover with top crust.</li><li>Crimp edges together with fork.</li><li>Sprinkle top with sugar and cut steam vents in top crust.</li><li>Put pie on baking sheet in case of spill-overs.</li><li>Bake for 1 hour at 350</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Preheat oven to 350Line pie pan with bottom crust.Peel and slice apples.Put 1/2 of the apple slices in prepared pie pan.",
                         "ingredients": [
                             {
                                 "id": 9003,
                                 "name": "apple",
                                 "localizedName": "apple",
                                 "image": "apple.jpg"
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
                                 "id": 405915,
                                 "name": "pie form",
                                 "localizedName": "pie form",
                                 "image": "pie-pan.png"
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
                         "number": 2,
                         "step": "Sprinkle apple slices with 1 cup sugar, a little nutmeg and cinnamon.",
                         "ingredients": [
                             {
                                 "id": 2010,
                                 "name": "cinnamon",
                                 "localizedName": "cinnamon",
                                 "image": "cinnamon.jpg"
                             },
                             {
                                 "id": 2025,
                                 "name": "nutmeg",
                                 "localizedName": "nutmeg",
                                 "image": "ground-nutmeg.jpg"
                             },
                             {
                                 "id": 9003,
                                 "name": "apple",
                                 "localizedName": "apple",
                                 "image": "apple.jpg"
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
                         "number": 3,
                         "step": "Add rest of apples and top with rest of sugar (1 cup), a little nutmeg cinnamon, flour and butter or margarine cut into small pieces.",
                         "ingredients": [
                             {
                                 "id": 4073,
                                 "name": "margarine",
                                 "localizedName": "margarine",
                                 "image": "butter-sliced.jpg"
                             },
                             {
                                 "id": 2010,
                                 "name": "cinnamon",
                                 "localizedName": "cinnamon",
                                 "image": "cinnamon.jpg"
                             },
                             {
                                 "id": 9003,
                                 "name": "apple",
                                 "localizedName": "apple",
                                 "image": "apple.jpg"
                             },
                             {
                                 "id": 1001,
                                 "name": "butter",
                                 "localizedName": "butter",
                                 "image": "butter-sliced.jpg"
                             },
                             {
                                 "id": 2025,
                                 "name": "nutmeg",
                                 "localizedName": "nutmeg",
                                 "image": "ground-nutmeg.jpg"
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
                         "equipment": []
                     },
                     {
                         "number": 4,
                         "step": "Sprinkle with lemon juice.Cover with top crust.Crimp edges together with fork.",
                         "ingredients": [
                             {
                                 "id": 9152,
                                 "name": "lemon juice",
                                 "localizedName": "lemon juice",
                                 "image": "lemon-juice.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "crust",
                                 "localizedName": "crust",
                                 "image": ""
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 5,
                         "step": "Sprinkle top with sugar and cut steam vents in top crust.Put pie on baking sheet in case of spill-overs.",
                         "ingredients": [
                             {
                                 "id": 0,
                                 "name": "crust",
                                 "localizedName": "crust",
                                 "image": ""
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
                                 "id": 404727,
                                 "name": "baking sheet",
                                 "localizedName": "baking sheet",
                                 "image": "baking-sheet.jpg"
                             }
                         ]
                     },
                     {
                         "number": 6,
                         "step": "Bake for 1 hour at 350",
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
                             "number": 60,
                             "unit": "minutes"
                         }
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/apple-pie-632572"
     },
     {
         "vegetarian": true,
         "vegan": true,
         "glutenFree": true,
         "dairyFree": true,
         "veryHealthy": true,
         "cheap": false,
         "veryPopular": false,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 3,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 14,
         "healthScore": 90,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 81.56,
         "extendedIngredients": [
             {
                 "id": 11147,
                 "aisle": "Produce",
                 "image": "swiss-chard.jpg",
                 "consistency": "SOLID",
                 "name": "swiss chard leaves",
                 "nameClean": "swiss chard",
                 "original": "6-7 large swiss chard leaves, rinsed and dried",
                 "originalName": "swiss chard leaves, rinsed and dried",
                 "amount": 6.0,
                 "unit": "large",
                 "meta": [
                     "dried",
                     "rinsed"
                 ],
                 "measures": {
                     "us": {
                         "amount": 6.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     },
                     "metric": {
                         "amount": 6.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     }
                 }
             },
             {
                 "id": 9200,
                 "aisle": "Produce",
                 "image": "orange.png",
                 "consistency": "SOLID",
                 "name": "orange cauliflower",
                 "nameClean": "orange",
                 "original": "1 small head of orange cauliflower",
                 "originalName": "orange cauliflower",
                 "amount": 1.0,
                 "unit": "small head",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "small head",
                         "unitLong": "small head"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "small head",
                         "unitLong": "small head"
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
                 "original": "1 1/2 Tbs olive oil",
                 "originalName": "olive oil",
                 "amount": 1.5,
                 "unit": "Tbs",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.5,
                         "unitShort": "Tbs",
                         "unitLong": "Tbs"
                     },
                     "metric": {
                         "amount": 1.5,
                         "unitShort": "Tbs",
                         "unitLong": "Tbs"
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
                 "original": "3 cloves garlic, pressed or minced",
                 "originalName": "garlic, pressed or minced",
                 "amount": 3.0,
                 "unit": "cloves",
                 "meta": [
                     "minced",
                     "pressed"
                 ],
                 "measures": {
                     "us": {
                         "amount": 3.0,
                         "unitShort": "cloves",
                         "unitLong": "cloves"
                     },
                     "metric": {
                         "amount": 3.0,
                         "unitShort": "cloves",
                         "unitLong": "cloves"
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
                 "original": "pinch of salt",
                 "originalName": "pinch of salt",
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
                 "id": 2044,
                 "aisle": "Produce",
                 "image": "fresh-basil.jpg",
                 "consistency": "SOLID",
                 "name": "basil",
                 "nameClean": "fresh basil",
                 "original": "1 sprig of fresh basil, leaves finely chopped",
                 "originalName": "fresh basil, leaves finely chopped",
                 "amount": 1.0,
                 "unit": "sprig",
                 "meta": [
                     "fresh",
                     "finely chopped"
                 ],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "sprig",
                         "unitLong": "sprig"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "sprig",
                         "unitLong": "sprig"
                     }
                 }
             },
             {
                 "id": 11477,
                 "aisle": "Produce",
                 "image": "zucchini.jpg",
                 "consistency": "SOLID",
                 "name": "zucchini",
                 "nameClean": "zucchini",
                 "original": "1 medium zucchini (courgette)",
                 "originalName": "zucchini (courgette)",
                 "amount": 1.0,
                 "unit": "medium",
                 "meta": [
                     "(courgette)"
                 ],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "medium",
                         "unitLong": "medium"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "medium",
                         "unitLong": "medium"
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
                 "original": "1 large red pepper, thinly sliced",
                 "originalName": "red pepper, thinly sliced",
                 "amount": 1.0,
                 "unit": "large",
                 "meta": [
                     "red",
                     "thinly sliced"
                 ],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "large",
                         "unitLong": "large"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "large",
                         "unitLong": "large"
                     }
                 }
             },
             {
                 "id": 9037,
                 "aisle": "Produce",
                 "image": "avocado.jpg",
                 "consistency": "SOLID",
                 "name": "avocado",
                 "nameClean": "avocado",
                 "original": "1 medium avocado, sliced",
                 "originalName": "avocado, sliced",
                 "amount": 1.0,
                 "unit": "medium",
                 "meta": [
                     "sliced"
                 ],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "medium",
                         "unitLong": "medium"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "medium",
                         "unitLong": "medium"
                     }
                 }
             },
             {
                 "id": 16091,
                 "aisle": "Nuts;Savory Snacks",
                 "image": "peanuts.png",
                 "consistency": "SOLID",
                 "name": "trader joe's spicy peanut vinaigrette",
                 "nameClean": "peanuts",
                 "original": "3-4 Tbs Trader Joe's Asian Style Spicy Peanut Vinaigrette (or your favorite sauce)",
                 "originalName": "Trader Joe's Asian Style Spicy Peanut Vinaigrette (or your favorite sauce)",
                 "amount": 3.0,
                 "unit": "Tbs",
                 "meta": [
                     "asian style",
                     "your favorite",
                     "(or sauce)"
                 ],
                 "measures": {
                     "us": {
                         "amount": 3.0,
                         "unitShort": "Tbs",
                         "unitLong": "Tbs"
                     },
                     "metric": {
                         "amount": 3.0,
                         "unitShort": "Tbs",
                         "unitLong": "Tbs"
                     }
                 }
             }
         ],
         "id": 662670,
         "title": "Swiss Chard Wraps",
         "readyInMinutes": 45,
         "servings": 6,
         "sourceUrl": "https://www.foodista.com/recipe/LHXZRNVW/swiss-chard-wraps",
         "image": "https://spoonacular.com/recipeImages/662670-556x370.jpg",
         "imageType": "jpg",
         "summary": "Swiss Chard Wraps is a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe with 6 servings. One serving contains <b>137 calories</b>, <b>4g of protein</b>, and <b>11g of fat</b>. For <b>82 cents per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. It works best as a side dish, and is done in about <b>45 minutes</b>. 14 people were impressed by this recipe. If you have swiss chard leaves, orange cauliflower, olive oil, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns an <b>excellent spoonacular score of 96%</b>. <a href=\"https://spoonacular.com/recipes/swiss-chard-wraps-1367505\">Swiss Chard Wraps</a>, <a href=\"https://spoonacular.com/recipes/sweet-thai-chile-chicken-swiss-chard-wraps-with-peanut-ginger-sauce-703915\">Sweet Thai Chile Chicken Swiss Chard Wraps with Peanut Ginger Sauce</a>, and <a href=\"https://spoonacular.com/recipes/swiss-chard-353815\">Swiss Chard</a> are very similar to this recipe.",
         "cuisines": [],
         "dishTypes": [
             "side dish"
         ],
         "diets": [
             "gluten free",
             "dairy free",
             "paleolithic",
             "lacto ovo vegetarian",
             "primal",
             "vegan"
         ],
         "occasions": [],
         "instructions": "Chop off the stems of the swiss chard at the point where it meets the leaf. You could stem the swiss chard entirely. I like leaving a bit of stem with the leaves to give better structure to the wraps.\nChop the cauliflower into small pieces and pulse them in a food processor until it looks like rice. I usually pulse the cauliflower florets and the stalk together.\nPlace the olive oil in a saut pan over medium-high heat. Once the pan is hot, add the garlic and let it fry for about a minute or two, or until the garlic starts to brown. Add the pulsed cauliflower rice and cook it for about 2-3 minutes. The cauliflower should turn into a vibrant yellow-orange color when it is cooked. Add a pinch of salt and chopped basil to the cauliflower and stir.\nSpiralize the zucchini with Blade B to create zucchini noodles. If you do not have a spiralizer, just create zucchini ribbons with a vegetable peeler.\nTo assemble the wraps, place a large leaf flat down. Add a bit of sauted cauliflower, zucchini noodles, red pepper, and avocado along the swiss chard stalk. Drizzle a bit of vinaigrette on top of the vegetables and wrap everything up.\nEnjoy these wraps as a side to your favorite protein! Feel free to dip these wraps in more sauce.\nThese wraps are best consumed when they are freshly made. Refrigerate any leftovers in an airtight container.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Chop off the stems of the swiss chard at the point where it meets the leaf. You could stem the swiss chard entirely. I like leaving a bit of stem with the leaves to give better structure to the wraps.",
                         "ingredients": [
                             {
                                 "id": 11147,
                                 "name": "swiss chard",
                                 "localizedName": "swiss chard",
                                 "image": "swiss-chard.jpg"
                             },
                             {
                                 "id": 10018364,
                                 "name": "wrap",
                                 "localizedName": "wrap",
                                 "image": "flour-tortilla.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 2,
                         "step": "Chop the cauliflower into small pieces and pulse them in a food processor until it looks like rice. I usually pulse the cauliflower florets and the stalk together.",
                         "ingredients": [
                             {
                                 "id": 10011135,
                                 "name": "cauliflower florets",
                                 "localizedName": "cauliflower florets",
                                 "image": "cauliflower.jpg"
                             },
                             {
                                 "id": 11135,
                                 "name": "cauliflower",
                                 "localizedName": "cauliflower",
                                 "image": "cauliflower.jpg"
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
                                 "id": 404771,
                                 "name": "food processor",
                                 "localizedName": "food processor",
                                 "image": "food-processor.png"
                             }
                         ]
                     },
                     {
                         "number": 3,
                         "step": "Place the olive oil in a saut pan over medium-high heat. Once the pan is hot, add the garlic and let it fry for about a minute or two, or until the garlic starts to brown.",
                         "ingredients": [
                             {
                                 "id": 4053,
                                 "name": "olive oil",
                                 "localizedName": "olive oil",
                                 "image": "olive-oil.jpg"
                             },
                             {
                                 "id": 11215,
                                 "name": "garlic",
                                 "localizedName": "garlic",
                                 "image": "garlic.png"
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
                         "number": 4,
                         "step": "Add the pulsed cauliflower rice and cook it for about 2-3 minutes. The cauliflower should turn into a vibrant yellow-orange color when it is cooked.",
                         "ingredients": [
                             {
                                 "id": 10111135,
                                 "name": "cauliflower rice",
                                 "localizedName": "cauliflower rice",
                                 "image": "cauliflower.jpg"
                             },
                             {
                                 "id": 11135,
                                 "name": "cauliflower",
                                 "localizedName": "cauliflower",
                                 "image": "cauliflower.jpg"
                             },
                             {
                                 "id": 9200,
                                 "name": "orange",
                                 "localizedName": "orange",
                                 "image": "orange.png"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 3,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 5,
                         "step": "Add a pinch of salt and chopped basil to the cauliflower and stir.",
                         "ingredients": [
                             {
                                 "id": 11135,
                                 "name": "cauliflower",
                                 "localizedName": "cauliflower",
                                 "image": "cauliflower.jpg"
                             },
                             {
                                 "id": 2044,
                                 "name": "basil",
                                 "localizedName": "basil",
                                 "image": "basil.jpg"
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
                         "number": 6,
                         "step": "Spiralize the zucchini with Blade B to create zucchini noodles. If you do not have a spiralizer, just create zucchini ribbons with a vegetable peeler.",
                         "ingredients": [
                             {
                                 "id": 10111477,
                                 "name": "zucchini noodles",
                                 "localizedName": "zucchini noodles",
                                 "image": "zoodles.jpg"
                             },
                             {
                                 "id": 11583,
                                 "name": "vegetable",
                                 "localizedName": "vegetable",
                                 "image": "mixed-vegetables.png"
                             },
                             {
                                 "id": 11477,
                                 "name": "zucchini",
                                 "localizedName": "zucchini",
                                 "image": "zucchini.jpg"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404693,
                                 "name": "peeler",
                                 "localizedName": "peeler",
                                 "image": "peeler.png"
                             }
                         ]
                     },
                     {
                         "number": 7,
                         "step": "To assemble the wraps, place a large leaf flat down.",
                         "ingredients": [
                             {
                                 "id": 10018364,
                                 "name": "wrap",
                                 "localizedName": "wrap",
                                 "image": "flour-tortilla.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 8,
                         "step": "Add a bit of sauted cauliflower, zucchini noodles, red pepper, and avocado along the swiss chard stalk.",
                         "ingredients": [
                             {
                                 "id": 10111477,
                                 "name": "zucchini noodles",
                                 "localizedName": "zucchini noodles",
                                 "image": "zoodles.jpg"
                             },
                             {
                                 "id": 11135,
                                 "name": "cauliflower",
                                 "localizedName": "cauliflower",
                                 "image": "cauliflower.jpg"
                             },
                             {
                                 "id": 11147,
                                 "name": "swiss chard",
                                 "localizedName": "swiss chard",
                                 "image": "swiss-chard.jpg"
                             },
                             {
                                 "id": 11821,
                                 "name": "red pepper",
                                 "localizedName": "red pepper",
                                 "image": "red-pepper.jpg"
                             },
                             {
                                 "id": 9037,
                                 "name": "avocado",
                                 "localizedName": "avocado",
                                 "image": "avocado.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 9,
                         "step": "Drizzle a bit of vinaigrette on top of the vegetables and wrap everything up.",
                         "ingredients": [
                             {
                                 "id": 4135,
                                 "name": "vinaigrette",
                                 "localizedName": "vinaigrette",
                                 "image": "vinaigrette.jpg"
                             },
                             {
                                 "id": 11583,
                                 "name": "vegetable",
                                 "localizedName": "vegetable",
                                 "image": "mixed-vegetables.png"
                             },
                             {
                                 "id": 10018364,
                                 "name": "wrap",
                                 "localizedName": "wrap",
                                 "image": "flour-tortilla.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 10,
                         "step": "Enjoy these wraps as a side to your favorite protein! Feel free to dip these wraps in more sauce.",
                         "ingredients": [
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
                             },
                             {
                                 "id": 10018364,
                                 "name": "wrap",
                                 "localizedName": "wrap",
                                 "image": "flour-tortilla.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "dip",
                                 "localizedName": "dip",
                                 "image": ""
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 11,
                         "step": "These wraps are best consumed when they are freshly made. Refrigerate any leftovers in an airtight container.",
                         "ingredients": [
                             {
                                 "id": 10018364,
                                 "name": "wrap",
                                 "localizedName": "wrap",
                                 "image": "flour-tortilla.jpg"
                             }
                         ],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/swiss-chard-wraps-662670"
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
         "weightWatcherSmartPoints": 7,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 30,
         "healthScore": 5,
         "creditsText": "Jen West",
         "sourceName": "Pink When",
         "pricePerServing": 68.89,
         "extendedIngredients": [
             {
                 "id": 9316,
                 "aisle": "Produce",
                 "image": "strawberries.png",
                 "consistency": "SOLID",
                 "name": "strawberries",
                 "nameClean": "strawberries",
                 "original": "10 large strawberries, washed and sliced",
                 "originalName": "strawberries, washed and sliced",
                 "amount": 10.0,
                 "unit": "large",
                 "meta": [
                     "washed and sliced"
                 ],
                 "measures": {
                     "us": {
                         "amount": 10.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     },
                     "metric": {
                         "amount": 10.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     }
                 }
             },
             {
                 "id": 19095,
                 "aisle": "Frozen",
                 "image": "vanilla-ice-cream.png",
                 "consistency": "SOLID",
                 "name": "vanilla ice cream",
                 "nameClean": "vanilla ice cream",
                 "original": "2½ cups vanilla ice cream",
                 "originalName": "vanilla ice cream",
                 "amount": 2.5,
                 "unit": "cups",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 2.5,
                         "unitShort": "cups",
                         "unitLong": "cups"
                     },
                     "metric": {
                         "amount": 591.47,
                         "unitShort": "ml",
                         "unitLong": "milliliters"
                     }
                 }
             },
             {
                 "id": 1011077,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "milk.png",
                 "consistency": "LIQUID",
                 "name": "milk",
                 "nameClean": "whole milk",
                 "original": "2 cups whole milk",
                 "originalName": "whole milk",
                 "amount": 2.0,
                 "unit": "cups",
                 "meta": [
                     "whole"
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
             }
         ],
         "id": 715574,
         "title": "Homemade Strawberry Shake",
         "readyInMinutes": 45,
         "servings": 6,
         "sourceUrl": "http://www.pinkwhen.com/homemade-strawberry-shake/",
         "image": "https://spoonacular.com/recipeImages/715574-556x370.jpg",
         "imageType": "jpg",
         "summary": "Homemade Strawberry Shake takes roughly <b>45 minutes</b> from beginning to end. One portion of this dish contains roughly <b>5g of protein</b>, <b>9g of fat</b>, and a total of <b>177 calories</b>. For <b>69 cents per serving</b>, you get a beverage that serves 6. This recipe is liked by 30 foodies and cooks. If you have strawberries, vanillan ice cream, milk, and a few other ingredients on hand, you can make it. It will be a hit at your <b>Mother's Day</b> event. It is brought to you by Pink When. It is a good option if you're following a <b>gluten free</b> diet. With a spoonacular <b>score of 53%</b>, this dish is solid. Try <a href=\"https://spoonacular.com/recipes/strawberry-milkshake-strawberry-short-shake-551702\">Strawberry Milkshake - Strawberry Short-Shake</a>, <a href=\"https://spoonacular.com/recipes/strawberry-shake-58234\">Strawberry Shake</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-lime-shake-472568\">Strawberry Lime Shake</a> for similar recipes.",
         "cuisines": [],
         "dishTypes": [
             "beverage",
             "drink"
         ],
         "diets": [
             "gluten free"
         ],
         "occasions": [
             "mother's day"
         ],
         "instructions": "Add the strawberries, whole milk and vanilla ice cream to a blender, and blend until smooth.Pour into cold glasses that have been kept in the freezer.Return the shakes to the freezer for about 5 minutes, or until they are thick.Top with whipped cream and sliced strawberries.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Add the strawberries, whole milk and vanilla ice cream to a blender, and blend until smooth.",
                         "ingredients": [
                             {
                                 "id": 19095,
                                 "name": "vanilla ice cream",
                                 "localizedName": "vanilla ice cream",
                                 "image": "vanilla-ice-cream.png"
                             },
                             {
                                 "id": 9316,
                                 "name": "strawberries",
                                 "localizedName": "strawberries",
                                 "image": "strawberries.png"
                             },
                             {
                                 "id": 1011077,
                                 "name": "whole milk",
                                 "localizedName": "whole milk",
                                 "image": "milk.png"
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
                         "number": 2,
                         "step": "Pour into cold glasses that have been kept in the freezer.Return the shakes to the freezer for about 5 minutes, or until they are thick.Top with whipped cream and sliced strawberries.",
                         "ingredients": [
                             {
                                 "id": 1054,
                                 "name": "whipped cream",
                                 "localizedName": "whipped cream",
                                 "image": "whipped-cream.jpg"
                             },
                             {
                                 "id": 9316,
                                 "name": "strawberries",
                                 "localizedName": "strawberries",
                                 "image": "strawberries.png"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 5,
                             "unit": "minutes"
                         }
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/homemade-strawberry-shake-715574"
     },
     {
         "vegetarian": true,
         "vegan": false,
         "glutenFree": true,
         "dairyFree": false,
         "veryHealthy": false,
         "cheap": false,
         "veryPopular": true,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 25,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 19636,
         "healthScore": 7,
         "creditsText": "Full Belly Sisters",
         "license": "CC BY-SA 3.0",
         "sourceName": "Full Belly Sisters",
         "pricePerServing": 154.74,
         "extendedIngredients": [
             {
                 "id": 19904,
                 "aisle": "Sweet Snacks",
                 "image": "dark-chocolate-pieces.jpg",
                 "consistency": "SOLID",
                 "name": "chocolate",
                 "nameClean": "dark chocolate",
                 "original": "2 ounces dark chocolate, at least 70% cocoa",
                 "originalName": "dark chocolate, at least 70% cocoa",
                 "amount": 2.0,
                 "unit": "ounces",
                 "meta": [
                     "dark",
                     "70%"
                 ],
                 "measures": {
                     "us": {
                         "amount": 2.0,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 56.699,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "1/2 cup milk",
                 "originalName": "milk",
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
                 "id": 12151,
                 "aisle": "Nuts;Savory Snacks",
                 "image": "pistachios.jpg",
                 "consistency": "SOLID",
                 "name": "pistachios",
                 "nameClean": "pistachio nuts",
                 "original": "1/4 cup pistachios, raw",
                 "originalName": "pistachios, raw",
                 "amount": 0.25,
                 "unit": "cup",
                 "meta": [
                     "raw"
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
                 "id": 1036,
                 "aisle": "Cheese",
                 "image": "ricotta.png",
                 "consistency": "SOLID",
                 "name": "ricotta",
                 "nameClean": "ricotta cheese",
                 "original": "1 3/4 cups good-quality ricotta",
                 "originalName": "good-quality ricotta",
                 "amount": 1.75,
                 "unit": "cups",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.75,
                         "unitShort": "cups",
                         "unitLong": "cups"
                     },
                     "metric": {
                         "amount": 414.029,
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
                 "original": "small pinch of salt",
                 "originalName": "salt",
                 "amount": 1.0,
                 "unit": "small pinch",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "small pinch",
                         "unitLong": "small pinch"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "small pinch",
                         "unitLong": "small pinch"
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
                 "original": "1/2 cup sugar",
                 "originalName": "sugar",
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
                 "id": 1052050,
                 "aisle": "Baking",
                 "image": "vanilla.jpg",
                 "consistency": "SOLID",
                 "name": "vanilla",
                 "nameClean": "vanilla",
                 "original": "1/2 tsp vanilla",
                 "originalName": "vanilla",
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
             }
         ],
         "id": 716410,
         "title": "Cannoli Ice Cream w. Pistachios & Dark Chocolate",
         "readyInMinutes": 45,
         "servings": 3,
         "sourceUrl": "http://fullbellysisters.blogspot.com/2012/08/cannoli-ice-cream-w-pistachios-dark.html",
         "image": "https://spoonacular.com/recipeImages/716410-556x370.jpg",
         "imageType": "jpg",
         "summary": "Cannoli Ice Cream w. Pistachios & Dark Chocolate requires approximately <b>45 minutes</b> from start to finish. This recipe serves 3 and costs $1.55 per serving. Watching your figure? This gluten free and lacto ovo vegetarian recipe has <b>575 calories</b>, <b>21g of protein</b>, and <b>33g of fat</b> per serving. 19636 people have tried and liked this recipe. Several people really liked this dessert. This recipe from fullbellysisters.blogspot.com requires salt, milk, vanilla, and ricotta. It can be enjoyed any time, but it is especially good for <b>Summer</b>. With a spoonacular <b>score of 65%</b>, this dish is pretty good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chocolate-dipped-cannoli-with-pistachios-355861\">Chocolate-Dipped Cannoli with Pistachios</a>, <a href=\"https://spoonacular.com/recipes/mounds-bar-n-cream-coconut-and-dark-chocolate-chunk-ice-cream-522968\">Mounds Bar n’ Cream – Coconut and Dark Chocolate Chunk Ice Cream</a>, and <a href=\"https://spoonacular.com/recipes/icecreamweek-dark-chocolate-cookies-and-cream-ice-cream-555517\">IceCreamWeek: Dark Chocolate Cookies and Cream Ice Cream</a>.",
         "cuisines": [],
         "dishTypes": [
             "dessert"
         ],
         "diets": [
             "gluten free",
             "lacto ovo vegetarian"
         ],
         "occasions": [
             "summer"
         ],
         "instructions": "",
         "analyzedInstructions": [],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/cannoli-ice-cream-w-pistachios-dark-chocolate-716410"
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
         "weightWatcherSmartPoints": 23,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 13,
         "healthScore": 40,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 386.62,
         "extendedIngredients": [
             {
                 "id": 1001,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "butter-sliced.jpg",
                 "consistency": "SOLID",
                 "name": "butter",
                 "nameClean": "butter",
                 "original": "2 tablespoon butter",
                 "originalName": "butter",
                 "amount": 2.0,
                 "unit": "tablespoon",
                 "meta": [],
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
                 "id": 1230,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "buttermilk.jpg",
                 "consistency": "SOLID",
                 "name": "buttermilk",
                 "nameClean": "buttermilk",
                 "original": "1/3 cup buttermilk",
                 "originalName": "buttermilk",
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
                 "id": 14106,
                 "aisle": "Alcoholic Beverages",
                 "image": "white-wine.jpg",
                 "consistency": "LIQUID",
                 "name": "wine",
                 "nameClean": "dry white wine",
                 "original": "1/3 cup dry white wine",
                 "originalName": "dry white wine",
                 "amount": 0.33333334,
                 "unit": "cup",
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
                 "id": 1012049,
                 "aisle": "Produce",
                 "image": "thyme.jpg",
                 "consistency": "SOLID",
                 "name": "thyme",
                 "nameClean": "fresh thyme",
                 "original": "3 sprigs Fresh thyme",
                 "originalName": "Fresh thyme",
                 "amount": 3.0,
                 "unit": "sprigs",
                 "meta": [
                     "fresh"
                 ],
                 "measures": {
                     "us": {
                         "amount": 3.0,
                         "unitShort": "sprigs",
                         "unitLong": "sprigs"
                     },
                     "metric": {
                         "amount": 3.0,
                         "unitShort": "sprigs",
                         "unitLong": "sprigs"
                     }
                 }
             },
             {
                 "id": 1053,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "fluid-cream.jpg",
                 "consistency": "LIQUID",
                 "name": "heavy cream",
                 "nameClean": "cream",
                 "original": "1 cup heavy cream",
                 "originalName": "heavy cream",
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
                 "id": 10211821,
                 "aisle": "Produce",
                 "image": "bell-pepper-orange.png",
                 "consistency": "SOLID",
                 "name": "bell pepper",
                 "nameClean": "bell pepper",
                 "original": "pepper",
                 "originalName": "pepper",
                 "amount": 4.0,
                 "unit": "servings",
                 "meta": [],
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
                 "id": 10010062,
                 "aisle": "Meat",
                 "image": "pork-chops.jpg",
                 "consistency": "SOLID",
                 "name": "pork chops",
                 "nameClean": "pork chops",
                 "original": "900 grams pork chops",
                 "originalName": "pork chops",
                 "amount": 900.0,
                 "unit": "grams",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.984,
                         "unitShort": "lb",
                         "unitLong": "pounds"
                     },
                     "metric": {
                         "amount": 900.0,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "salt",
                 "originalName": "salt",
                 "amount": 4.0,
                 "unit": "servings",
                 "meta": [],
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
                 "id": 11677,
                 "aisle": "Produce",
                 "image": "shallots.jpg",
                 "consistency": "SOLID",
                 "name": "shallot",
                 "nameClean": "shallot",
                 "original": "1 medium shallot, minced",
                 "originalName": "shallot, minced",
                 "amount": 1.0,
                 "unit": "medium",
                 "meta": [
                     "minced"
                 ],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "medium",
                         "unitLong": "medium"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "medium",
                         "unitLong": "medium"
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
                 "original": "2 tablespoon vegetable oil",
                 "originalName": "vegetable oil",
                 "amount": 2.0,
                 "unit": "tablespoon",
                 "meta": [],
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
                 "id": 10211215,
                 "aisle": "Produce",
                 "image": "garlic.jpg",
                 "consistency": "SOLID",
                 "name": "garlic cloves",
                 "nameClean": "whole garlic cloves",
                 "original": "12 large garlic cloves, all about the same size, and peeled but left whole",
                 "originalName": "garlic cloves, all about the same size, and peeled but left whole",
                 "amount": 12.0,
                 "unit": "large",
                 "meta": [
                     "whole",
                     "peeled"
                 ],
                 "measures": {
                     "us": {
                         "amount": 12.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     },
                     "metric": {
                         "amount": 12.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     }
                 }
             }
         ],
         "id": 656752,
         "title": "Pork Chops with Garlic Cream",
         "readyInMinutes": 45,
         "servings": 4,
         "sourceUrl": "http://www.foodista.com/recipe/MMSZLRHM/pork-chops-with-garlic-cream",
         "image": "https://spoonacular.com/recipeImages/656752-556x370.jpg",
         "imageType": "jpg",
         "summary": "Pork Chops with Garlic Cream might be just the main course you are searching for. This recipe makes 4 servings with <b>728 calories</b>, <b>52g of protein</b>, and <b>51g of fat</b> each. For <b>$3.87 per serving</b>, this recipe <b>covers 40%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 13 foodies and cooks. A mixture of butter, bell pepper, shallot, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>gluten free and ketogenic</b> diet. Overall, this recipe earns a <b>spectacular spoonacular score of 88%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/garlic-baked-pork-chops-free-pork-chops-1001480\">Garlic Baked Pork Chops + FREE PORK CHOPS</a>, <a href=\"https://spoonacular.com/recipes/garlic-roasted-pork-chops-1510299\">Garlic Roasted Pork Chops</a>, and <a href=\"https://spoonacular.com/recipes/honey-garlic-pork-chops-116394\">Honey & Garlic Pork Chops</a>.",
         "cuisines": [],
         "dishTypes": [
             "lunch",
             "main course",
             "main dish",
             "dinner"
         ],
         "diets": [
             "gluten free",
             "ketogenic"
         ],
         "occasions": [],
         "instructions": "<ol><li>In a small sauce pan melt the butter over medium-low heat and cook the shallots until softened, about 5 minutes.</li><li>Add the wine, thyme and a generous  teaspoon salt. Raise the heat to medium and simmer until the liquid is reduced to 2 tablespoons. Stir in the heavy cream and the buttermilk and all the garlic cloves.</li><li>Return to a bare simmer and cook, stirring occasionally, until the garlic is completely tender, 40 to 45 minutes.</li><li>Transfer the garlic mixture to a blender and puree until very smooth, about 1 minute. Return the garlic sauce to the saucepan. It should be thick enough to cover the back of a wooden spoon but easy to pour. Set aside covered to keep warm.</li><li>Preheat oven to 375.</li><li>Salt and pepper generously the pork chops. In a large skillet over medium high heat add the oil. When hot add the chops and sear them on each side. 2minutes each sides.</li><li>Remove from the stove and place in the hot oven. Cook for 3 minutes at 375 then lower the heat to 300 for another 5 minutes. The chops need to be springy to the touch and golden brown on the outside.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "In a small sauce pan melt the butter over medium-low heat and cook the shallots until softened, about 5 minutes.",
                         "ingredients": [
                             {
                                 "id": 11677,
                                 "name": "shallot",
                                 "localizedName": "shallot",
                                 "image": "shallots.jpg"
                             },
                             {
                                 "id": 1001,
                                 "name": "butter",
                                 "localizedName": "butter",
                                 "image": "butter-sliced.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
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
                             "number": 5,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 2,
                         "step": "Add the wine, thyme and a generous  teaspoon salt. Raise the heat to medium and simmer until the liquid is reduced to 2 tablespoons. Stir in the heavy cream and the buttermilk and all the garlic cloves.Return to a bare simmer and cook, stirring occasionally, until the garlic is completely tender, 40 to 45 minutes.",
                         "ingredients": [
                             {
                                 "id": 10211215,
                                 "name": "whole garlic cloves",
                                 "localizedName": "whole garlic cloves",
                                 "image": "garlic.jpg"
                             },
                             {
                                 "id": 1053,
                                 "name": "heavy cream",
                                 "localizedName": "heavy cream",
                                 "image": "fluid-cream.jpg"
                             },
                             {
                                 "id": 1230,
                                 "name": "buttermilk",
                                 "localizedName": "buttermilk",
                                 "image": "buttermilk.jpg"
                             },
                             {
                                 "id": 11215,
                                 "name": "garlic",
                                 "localizedName": "garlic",
                                 "image": "garlic.png"
                             },
                             {
                                 "id": 2049,
                                 "name": "thyme",
                                 "localizedName": "thyme",
                                 "image": "thyme.jpg"
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
                         "equipment": [],
                         "length": {
                             "number": 40,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 3,
                         "step": "Transfer the garlic mixture to a blender and puree until very smooth, about 1 minute. Return the garlic sauce to the saucepan. It should be thick enough to cover the back of a wooden spoon but easy to pour. Set aside covered to keep warm.Preheat oven to 375.Salt and pepper generously the pork chops. In a large skillet over medium high heat add the oil. When hot add the chops and sear them on each side. 2minutes each sides.",
                         "ingredients": [
                             {
                                 "id": 1102047,
                                 "name": "salt and pepper",
                                 "localizedName": "salt and pepper",
                                 "image": "salt-and-pepper.jpg"
                             },
                             {
                                 "id": 10010062,
                                 "name": "pork chops",
                                 "localizedName": "pork chops",
                                 "image": "pork-chops.jpg"
                             },
                             {
                                 "id": 11215,
                                 "name": "garlic",
                                 "localizedName": "garlic",
                                 "image": "garlic.png"
                             },
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
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
                                 "id": 404732,
                                 "name": "wooden spoon",
                                 "localizedName": "wooden spoon",
                                 "image": "wooden-spoon.jpg"
                             },
                             {
                                 "id": 404669,
                                 "name": "sauce pan",
                                 "localizedName": "sauce pan",
                                 "image": "sauce-pan.jpg"
                             },
                             {
                                 "id": 404726,
                                 "name": "blender",
                                 "localizedName": "blender",
                                 "image": "blender.png"
                             },
                             {
                                 "id": 404645,
                                 "name": "frying pan",
                                 "localizedName": "frying pan",
                                 "image": "pan.png"
                             },
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg"
                             }
                         ],
                         "length": {
                             "number": 3,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 4,
                         "step": "Remove from the stove and place in the hot oven. Cook for 3 minutes at 375 then lower the heat to 300 for another 5 minutes. The chops need to be springy to the touch and golden brown on the outside.",
                         "ingredients": [],
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
                             }
                         ],
                         "length": {
                             "number": 8,
                             "unit": "minutes"
                         }
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/pork-chops-with-garlic-cream-656752"
     },
     {
         "vegetarian": false,
         "vegan": false,
         "glutenFree": false,
         "dairyFree": false,
         "veryHealthy": false,
         "cheap": false,
         "veryPopular": true,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 24,
         "gaps": "no",
         "preparationMinutes": 30,
         "cookingMinutes": 30,
         "aggregateLikes": 5743,
         "healthScore": 14,
         "creditsText": "pinkwhen.com",
         "sourceName": "pinkwhen.com",
         "pricePerServing": 128.97,
         "extendedIngredients": [
             {
                 "id": 43212,
                 "aisle": "Meat",
                 "image": "bacon-bits.jpg",
                 "consistency": "SOLID",
                 "name": "bacon bits",
                 "nameClean": "bacon bits",
                 "original": "bacon bits",
                 "originalName": "bacon bits",
                 "amount": 8.0,
                 "unit": "servings",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 8.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     },
                     "metric": {
                         "amount": 8.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     }
                 }
             },
             {
                 "id": 11353,
                 "aisle": "Produce",
                 "image": "russet-or-idaho-potatoes.png",
                 "consistency": "SOLID",
                 "name": "baking potatoes",
                 "nameClean": "russet potato",
                 "original": "8 medium baking potatoes (peeled and cubed)",
                 "originalName": "baking potatoes (peeled and cubed)",
                 "amount": 8.0,
                 "unit": "medium",
                 "meta": [
                     "cubed",
                     "peeled",
                     "( and )"
                 ],
                 "measures": {
                     "us": {
                         "amount": 8.0,
                         "unitShort": "medium",
                         "unitLong": "mediums"
                     },
                     "metric": {
                         "amount": 8.0,
                         "unitShort": "medium",
                         "unitLong": "mediums"
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
                 "original": "½ cup butter",
                 "originalName": "butter",
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
                 "id": 20081,
                 "aisle": "Baking",
                 "image": "flour.png",
                 "consistency": "SOLID",
                 "name": "flour",
                 "nameClean": "wheat flour",
                 "original": "½ cup flour",
                 "originalName": "flour",
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
                 "id": 1077,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "milk.png",
                 "consistency": "LIQUID",
                 "name": "milk",
                 "nameClean": "milk",
                 "original": "8 cups milk",
                 "originalName": "milk",
                 "amount": 8.0,
                 "unit": "cups",
                 "meta": [],
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
                 "id": 1102047,
                 "aisle": "Spices and Seasonings",
                 "image": "salt-and-pepper.jpg",
                 "consistency": "SOLID",
                 "name": "salt and pepper",
                 "nameClean": "salt and pepper",
                 "original": "salt and pepper to taste",
                 "originalName": "salt and pepper to taste",
                 "amount": 8.0,
                 "unit": "servings",
                 "meta": [
                     "to taste"
                 ],
                 "measures": {
                     "us": {
                         "amount": 8.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     },
                     "metric": {
                         "amount": 8.0,
                         "unitShort": "servings",
                         "unitLong": "servings"
                     }
                 }
             },
             {
                 "id": 1001009,
                 "aisle": "Cheese",
                 "image": "shredded-cheddar.jpg",
                 "consistency": "SOLID",
                 "name": "cheddar cheese",
                 "nameClean": "shredded cheddar cheese",
                 "original": "2 cups shredded cheddar cheese",
                 "originalName": "shredded cheddar cheese",
                 "amount": 2.0,
                 "unit": "cups",
                 "meta": [
                     "shredded"
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
                 "id": 1056,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "sour-cream.jpg",
                 "consistency": "SOLID",
                 "name": "cream",
                 "nameClean": "sour cream",
                 "original": "8 oz. container of sour cream",
                 "originalName": "sour cream",
                 "amount": 8.0,
                 "unit": "oz",
                 "meta": [
                     "sour"
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
                 "id": 10611282,
                 "aisle": "Produce",
                 "image": "white-onion.png",
                 "consistency": "SOLID",
                 "name": "onion",
                 "nameClean": "white onion",
                 "original": "½ medium chopped white onion",
                 "originalName": "chopped white onion",
                 "amount": 0.5,
                 "unit": "medium",
                 "meta": [
                     "white",
                     "chopped"
                 ],
                 "measures": {
                     "us": {
                         "amount": 0.5,
                         "unitShort": "medium",
                         "unitLong": "mediums"
                     },
                     "metric": {
                         "amount": 0.5,
                         "unitShort": "medium",
                         "unitLong": "mediums"
                     }
                 }
             }
         ],
         "id": 715562,
         "title": "Loaded Baked Potato Soup",
         "readyInMinutes": 60,
         "servings": 8,
         "sourceUrl": "http://www.pinkwhen.com/loaded-baked-potato-soup/",
         "image": "https://spoonacular.com/recipeImages/715562-556x370.jpg",
         "imageType": "jpg",
         "summary": "Loaded Baked Potato Soup might be just the main course you are searching for. This recipe serves 8. One portion of this dish contains about <b>21g of protein</b>, <b>35g of fat</b>, and a total of <b>624 calories</b>. For <b>$1.29 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. 5743 people found this recipe to be flavorful and satisfying. <b>Autumn</b> will be even more special with this recipe. If you have bacon bits, cream, onion, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>1 hour</b>. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 82%</b>. This score is awesome. <a href=\"https://spoonacular.com/recipes/loaded-baked-potato-soup-with-crispy-fried-potato-skins-1218881\">Loaded Baked Potato Soup with Crispy-Fried Potato Skins</a>, <a href=\"https://spoonacular.com/recipes/loaded-baked-potato-soup-with-crispy-fried-potato-skins-1224705\">Loaded Baked Potato Soup with Crispy-Fried Potato Skins</a>, and <a href=\"https://spoonacular.com/recipes/loaded-baked-potato-soup-with-crispy-fried-potato-skins-1632271\">Loaded Baked Potato Soup with Crispy-Fried Potato Skins</a> are very similar to this recipe.",
         "cuisines": [],
         "dishTypes": [
             "lunch",
             "soup",
             "main course",
             "main dish",
             "dinner"
         ],
         "diets": [],
         "occasions": [
             "fall",
             "winter"
         ],
         "instructions": "<ol><li>Place a large pot of water on the stove and add in the peeled and cubed potatoes. Get the water up to a boil, and then boil for 20 minutes, or until potatoes are cooked. Remove from heat and drain water. Place to the side.</li><li>In a medium pot over medium-high heat melt butter and sautee onion for 6 minutes. Add in the flour and using a whisk, mix well for 30 seconds to one minute.</li><li>Gradually start whisking in the milk, about ½ cup to a cup at a time, constantly stirring. You want to keep whisking and adding milk and stirring. Bring to a boil, and then turn heat down to medium and allow the mixture to simmer for 8-10 minutes until thickened.</li><li>Stir in the potatoes and cook for an additional 5 minutes. Add in the cheese, salt and pepper, sour cream and stir well. Remove from heat and allow to cool slightly before serving.</li><li>Top with additional sour cream, cheese, and bacon bits if desired.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Place a large pot of water on the stove and add in the peeled and cubed potatoes. Get the water up to a boil, and then boil for 20 minutes, or until potatoes are cooked.",
                         "ingredients": [
                             {
                                 "id": 11352,
                                 "name": "potato",
                                 "localizedName": "potato",
                                 "image": "potatoes-yukon-gold.png"
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
                                 "id": 404794,
                                 "name": "stove",
                                 "localizedName": "stove",
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
                             "number": 20,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 2,
                         "step": "Remove from heat and drain water.",
                         "ingredients": [
                             {
                                 "id": 14412,
                                 "name": "water",
                                 "localizedName": "water",
                                 "image": "water.png"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 3,
                         "step": "Place to the side.In a medium pot over medium-high heat melt butter and sautee onion for 6 minutes.",
                         "ingredients": [
                             {
                                 "id": 1001,
                                 "name": "butter",
                                 "localizedName": "butter",
                                 "image": "butter-sliced.jpg"
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
                                 "id": 404752,
                                 "name": "pot",
                                 "localizedName": "pot",
                                 "image": "stock-pot.jpg"
                             }
                         ],
                         "length": {
                             "number": 6,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 4,
                         "step": "Add in the flour and using a whisk, mix well for 30 seconds to one minute.Gradually start whisking in the milk, about ½ cup to a cup at a time, constantly stirring. You want to keep whisking and adding milk and stirring. Bring to a boil, and then turn heat down to medium and allow the mixture to simmer for 8-10 minutes until thickened.Stir in the potatoes and cook for an additional 5 minutes.",
                         "ingredients": [
                             {
                                 "id": 11352,
                                 "name": "potato",
                                 "localizedName": "potato",
                                 "image": "potatoes-yukon-gold.png"
                             },
                             {
                                 "id": 20081,
                                 "name": "all purpose flour",
                                 "localizedName": "all purpose flour",
                                 "image": "flour.png"
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
                             }
                         ],
                         "length": {
                             "number": 16,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 5,
                         "step": "Add in the cheese, salt and pepper, sour cream and stir well.",
                         "ingredients": [
                             {
                                 "id": 1102047,
                                 "name": "salt and pepper",
                                 "localizedName": "salt and pepper",
                                 "image": "salt-and-pepper.jpg"
                             },
                             {
                                 "id": 1056,
                                 "name": "sour cream",
                                 "localizedName": "sour cream",
                                 "image": "sour-cream.jpg"
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
                         "step": "Remove from heat and allow to cool slightly before serving.Top with additional sour cream, cheese, and bacon bits if desired.",
                         "ingredients": [
                             {
                                 "id": 43212,
                                 "name": "bacon bits",
                                 "localizedName": "bacon bits",
                                 "image": "bacon-bits.jpg"
                             },
                             {
                                 "id": 1056,
                                 "name": "sour cream",
                                 "localizedName": "sour cream",
                                 "image": "sour-cream.jpg"
                             },
                             {
                                 "id": 1041009,
                                 "name": "cheese",
                                 "localizedName": "cheese",
                                 "image": "cheddar-cheese.png"
                             }
                         ],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/loaded-baked-potato-soup-715562"
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
         "weightWatcherSmartPoints": 5,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 15,
         "healthScore": 1,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 22.08,
         "extendedIngredients": [
             {
                 "id": 18009,
                 "aisle": "Frozen",
                 "image": "buttermilk-biscuits.jpg",
                 "consistency": "SOLID",
                 "name": "buttermilk biscuits",
                 "nameClean": "buttermilk biscuits",
                 "original": "1 tube (12 ounces) refrigerated buttermilk biscuits ( I used Pillsbury Golden Layers Refrigerated",
                 "originalName": "tube refrigerated buttermilk biscuits ( I used Pillsbury Golden Layers Refrigerated",
                 "amount": 12.0,
                 "unit": "ounces",
                 "meta": [
                     "refrigerated"
                 ],
                 "measures": {
                     "us": {
                         "amount": 12.0,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 340.194,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             },
             {
                 "id": 1014582,
                 "aisle": "Oil, Vinegar, Salad Dressing",
                 "image": "vegetable-oil.jpg",
                 "consistency": "LIQUID",
                 "name": "canola oil",
                 "nameClean": "canola oil",
                 "original": "1/4 cup canola oil",
                 "originalName": "canola oil",
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
                 "id": 2029,
                 "aisle": "Spices and Seasonings",
                 "image": "dried-parsley.png",
                 "consistency": "SOLID",
                 "name": "parsley flakes",
                 "nameClean": "dried parsley",
                 "original": "1 teaspoon dried parsley flakes",
                 "originalName": "dried parsley flakes",
                 "amount": 1.0,
                 "unit": "teaspoon",
                 "meta": [
                     "dried"
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
                 "id": 1022020,
                 "aisle": "Spices and Seasonings",
                 "image": "garlic-powder.png",
                 "consistency": "SOLID",
                 "name": "garlic powder",
                 "nameClean": "garlic powder",
                 "original": "1/2 teaspoon garlic powder",
                 "originalName": "garlic powder",
                 "amount": 0.5,
                 "unit": "teaspoon",
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
                 "id": 2027,
                 "aisle": "Produce;Spices and Seasonings",
                 "image": "oregano.jpg",
                 "consistency": "SOLID",
                 "name": "oregano",
                 "nameClean": "oregano",
                 "original": "1 teaspoon dried oregano",
                 "originalName": "dried oregano",
                 "amount": 1.0,
                 "unit": "teaspoon",
                 "meta": [
                     "dried"
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
                 "id": 1032,
                 "aisle": "Cheese",
                 "image": "parmesan.jpg",
                 "consistency": "SOLID",
                 "name": "parmesan cheese",
                 "nameClean": "grated parmesan cheese",
                 "original": "3 tablespoons grated Parmesan cheese (I did use the green can stuff)",
                 "originalName": "grated Parmesan cheese (I did use the green can stuff)",
                 "amount": 3.0,
                 "unit": "tablespoons",
                 "meta": [
                     "green",
                     "grated",
                     "canned",
                     "(I did use the can stuff)"
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
         "id": 642054,
         "title": "Easy Parmesan Knots",
         "readyInMinutes": 45,
         "servings": 10,
         "sourceUrl": "http://www.foodista.com/recipe/KMKHNJX2/easy-parmesan-knots",
         "image": "https://spoonacular.com/recipeImages/642054-556x370.jpg",
         "imageType": "jpg",
         "summary": "You can never have too many side dish recipes, so give Easy Parmesan Knots a try. This recipe serves 10. One portion of this dish contains approximately <b>3g of protein</b>, <b>12g of fat</b>, and a total of <b>181 calories</b>. For <b>22 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. 15 people found this recipe to be delicious and satisfying. It is brought to you by Foodista. Head to the store and pick up parmesan cheese, canolan oil, parsley flakes, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>45 minutes</b>. With a spoonacular <b>score of 23%</b>, this dish is rather bad. Try <a href=\"https://spoonacular.com/recipes/easy-garlic-parmesan-knots-536072\">Easy Garlic Parmesan Knots</a>, <a href=\"https://spoonacular.com/recipes/easy-garlic-parmesan-knots-1522583\">Easy Garlic Parmesan Knots</a>, and <a href=\"https://spoonacular.com/recipes/easy-garlic-parmesan-knots-606847\">Easy Garlic Parmesan Knots</a> for similar recipes.",
         "cuisines": [],
         "dishTypes": [
             "side dish"
         ],
         "diets": [],
         "occasions": [],
         "instructions": "<ol><li>Roll each biscuit into a 12-in. rope and tie into a knot; tuck ends under. Place 2 in. apart on a greased baking sheet. Bake at 400 for 8-10 minutes or until golden brown.</li><li>In a large bowl, combine the remaining ingredients; brush the warm knots with the mixture. Yield:10 knots.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Roll each biscuit into a 12-in. rope and tie into a knot; tuck ends under.",
                         "ingredients": [
                             {
                                 "id": 18009,
                                 "name": "biscuits",
                                 "localizedName": "biscuits",
                                 "image": "buttermilk-biscuits.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "roll",
                                 "localizedName": "roll",
                                 "image": "dinner-yeast-rolls.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 2,
                         "step": "Place 2 in. apart on a greased baking sheet.",
                         "ingredients": [],
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
                         "number": 3,
                         "step": "Bake at 400 for 8-10 minutes or until golden brown.In a large bowl, combine the remaining ingredients; brush the warm knots with the mixture.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg"
                             },
                             {
                                 "id": 404783,
                                 "name": "bowl",
                                 "localizedName": "bowl",
                                 "image": "bowl.jpg"
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
         "spoonacularSourceUrl": "https://spoonacular.com/easy-parmesan-knots-642054"
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
         "weightWatcherSmartPoints": 28,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 143,
         "healthScore": 2,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 136.13,
         "extendedIngredients": [
             {
                 "id": 19903,
                 "aisle": "Sweet Snacks",
                 "image": "dark-chocolate-pieces.jpg",
                 "consistency": "SOLID",
                 "name": "bittersweet chocolate",
                 "nameClean": "semisweet chocolate",
                 "original": "8 oz bittersweet chocolate, chopped",
                 "originalName": "bittersweet chocolate, chopped",
                 "amount": 8.0,
                 "unit": "oz",
                 "meta": [
                     "chopped"
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
                 "id": 1001,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "butter-sliced.jpg",
                 "consistency": "SOLID",
                 "name": "butter",
                 "nameClean": "butter",
                 "original": "1/2 cup butter, room temperature",
                 "originalName": "butter, room temperature",
                 "amount": 0.5,
                 "unit": "cup",
                 "meta": [
                     "room temperature"
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
                 "id": 1017,
                 "aisle": "Cheese",
                 "image": "cream-cheese.jpg",
                 "consistency": "SOLID",
                 "name": "cream cheese",
                 "nameClean": "cream cheese",
                 "original": "1 package cream cheese (8 oz), room temperature",
                 "originalName": "package cream cheese , room temperature",
                 "amount": 8.0,
                 "unit": "oz",
                 "meta": [
                     "room temperature"
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
                 "id": 1123,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "egg.png",
                 "consistency": "SOLID",
                 "name": "eggs",
                 "nameClean": "egg",
                 "original": "3 large eggs, at room temperature",
                 "originalName": "eggs, at room temperature",
                 "amount": 3.0,
                 "unit": "large",
                 "meta": [
                     "at room temperature"
                 ],
                 "measures": {
                     "us": {
                         "amount": 3.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     },
                     "metric": {
                         "amount": 3.0,
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
                 "original": "3/4 cups All-purpose flour",
                 "originalName": "All-purpose flour",
                 "amount": 0.75,
                 "unit": "cups",
                 "meta": [
                     "all-purpose"
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
                 "id": 10014214,
                 "aisle": "Tea and Coffee",
                 "image": "instant-coffee-or-instant-espresso.png",
                 "consistency": "SOLID",
                 "name": "espresso",
                 "nameClean": "instant espresso",
                 "original": "1 tablespoon instant espresso",
                 "originalName": "instant espresso",
                 "amount": 1.0,
                 "unit": "tablespoon",
                 "meta": [
                     "instant"
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
                 "id": 19335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "sugar",
                 "nameClean": "sugar",
                 "original": "1 1/2 cup sugar",
                 "originalName": "sugar",
                 "amount": 1.5,
                 "unit": "cup",
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
             },
             {
                 "id": 2050,
                 "aisle": "Baking",
                 "image": "vanilla-extract.jpg",
                 "consistency": "LIQUID",
                 "name": "vanilla extract",
                 "nameClean": "vanilla extract",
                 "original": "1 tablespoon vanilla extract",
                 "originalName": "vanilla extract",
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
                 "id": -1,
                 "aisle": "?",
                 "image": null,
                 "consistency": "SOLID",
                 "name": "baileys",
                 "nameClean": null,
                 "original": "2 tablespoon Baileys",
                 "originalName": "Baileys",
                 "amount": 2.0,
                 "unit": "tablespoon",
                 "meta": [],
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
             }
         ],
         "id": 644081,
         "title": "Fudgy chocolate cream cheese brownies with Baileys",
         "readyInMinutes": 45,
         "servings": 8,
         "sourceUrl": "http://www.foodista.com/recipe/6DCLS47W/fudgy-chocolate-cream-cheese-brownies-with-baileys",
         "image": "https://spoonacular.com/recipeImages/644081-556x370.jpg",
         "imageType": "jpg",
         "summary": "Fudgy chocolate cream cheese brownies with Baileys takes approximately <b>45 minutes</b> from beginning to end. This dessert has <b>586 calories</b>, <b>7g of protein</b>, and <b>34g of fat</b> per serving. This recipe serves 8. For <b>$1.36 per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. If you have bittersweet chocolate, eggs, sugar, and a few other ingredients on hand, you can make it. It is a <b>reasonably priced</b> recipe for fans of American food. 143 people were impressed by this recipe. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 34%</b>, which is not so amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/fudgy-chocolate-cream-cheese-brownies-with-baileys-1635823\">Fudgy chocolate cream cheese brownies with Baileys</a>, <a href=\"https://spoonacular.com/recipes/fudgy-cream-cheese-brownies-221991\">Fudgy Cream Cheese Brownies</a>, and <a href=\"https://spoonacular.com/recipes/ultimate-fudgy-cappuccino-cream-cheese-brownies-55124\">Ultimate Fudgy Cappuccino Cream Cheese Brownies</a>.",
         "cuisines": [
             "American"
         ],
         "dishTypes": [
             "dessert"
         ],
         "diets": [],
         "occasions": [],
         "instructions": "<ol><li>To make the chocolate layer, place chocolate and butter in a large glass dish (you will be adding the eggs, sugar, and flour to it later) and microwave 1.5 minutes. The chocolate may hold its shape when you remove it from the microwave, but it will be soft, so stir to melt it. If pieces remain after you have stirred it for a while then return to microwave for another few seconds and then stir again until it is fully melted. Be careful not to overheat the chocolate. You are better off starting with less time and reheating than overheating and ruining it.</li><li>When chocolate has melted add the sugar and vanilla and stir with a whisk to combine. Let it cool a little and then add the eggs, one at a time, whisking after each addition. Don't add the eggs when the chocolate is hot because it may cook the whites.</li><li>Once the eggs are mixed in, place the flour in a strainer and sift over the chocolate mixture, a little at a time, mixing it in as you sift it over. Set aside while you prepare the cream cheese layer.</li><li>For the cream cheese layer, place the cream cheese in a bowl and mix with a hand mixer for a couple of minutes until soft.</li><li>Add the sugar and mix to blend it in.</li><li>Add egg and beat to incorporate.</li><li>Add Bailey's and stir it in.</li><li>To assemble, spray an 8\" square baking pan with straight sides with non-stick spray, or butter and flour it. You can also line the baking pan with parchment, leaving the edges high so you can lift the entire cake out of the pan.</li><li>Pour the chocolate mixture into the pan and tilt it to spread it out evenly.</li><li>Pour the cream cheese mixture over it, and with a fork, swirl the layers so some of the chocolate shows on top and the cream cheese layer becomes part of the chocolate layer. Do not over mix - you just want some swirls.</li><li>Place in a preheated 350 degree F oven and bake for 35 minutes or until a knife inserted into the center comes out clean. Do not over bake.</li><li>Remove from oven and let cool before cutting into squares.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "To make the chocolate layer, place chocolate and butter in a large glass dish (you will be adding the eggs, sugar, and flour to it later) and microwave 1.5 minutes. The chocolate may hold its shape when you remove it from the microwave, but it will be soft, so stir to melt it. If pieces remain after you have stirred it for a while then return to microwave for another few seconds and then stir again until it is fully melted. Be careful not to overheat the chocolate. You are better off starting with less time and reheating than overheating and ruining it.When chocolate has melted add the sugar and vanilla and stir with a whisk to combine.",
                         "ingredients": [
                             {
                                 "id": 19081,
                                 "name": "chocolate",
                                 "localizedName": "chocolate",
                                 "image": "milk-chocolate.jpg"
                             },
                             {
                                 "id": 1052050,
                                 "name": "vanilla",
                                 "localizedName": "vanilla",
                                 "image": "vanilla.jpg"
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
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404762,
                                 "name": "microwave",
                                 "localizedName": "microwave",
                                 "image": "microwave.jpg"
                             },
                             {
                                 "id": 404661,
                                 "name": "whisk",
                                 "localizedName": "whisk",
                                 "image": "whisk.png"
                             }
                         ],
                         "length": {
                             "number": 5,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 2,
                         "step": "Let it cool a little and then add the eggs, one at a time, whisking after each addition. Don't add the eggs when the chocolate is hot because it may cook the whites.Once the eggs are mixed in, place the flour in a strainer and sift over the chocolate mixture, a little at a time, mixing it in as you sift it over. Set aside while you prepare the cream cheese layer.For the cream cheese layer, place the cream cheese in a bowl and mix with a hand mixer for a couple of minutes until soft.",
                         "ingredients": [
                             {
                                 "id": 1017,
                                 "name": "cream cheese",
                                 "localizedName": "cream cheese",
                                 "image": "cream-cheese.jpg"
                             },
                             {
                                 "id": 19081,
                                 "name": "chocolate",
                                 "localizedName": "chocolate",
                                 "image": "milk-chocolate.jpg"
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
                                 "id": 404661,
                                 "name": "whisk",
                                 "localizedName": "whisk",
                                 "image": "whisk.png"
                             },
                             {
                                 "id": 404628,
                                 "name": "hand mixer",
                                 "localizedName": "hand mixer",
                                 "image": "hand-mixer.png"
                             },
                             {
                                 "id": 405600,
                                 "name": "sieve",
                                 "localizedName": "sieve",
                                 "image": "strainer.png"
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
                         "step": "Add the sugar and mix to blend it in.",
                         "ingredients": [
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
                         "number": 4,
                         "step": "Add egg and beat to incorporate.",
                         "ingredients": [
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
                         "number": 5,
                         "step": "Add Bailey's and stir it in.To assemble, spray an 8\" square baking pan with straight sides with non-stick spray, or butter and flour it. You can also line the baking pan with parchment, leaving the edges high so you can lift the entire cake out of the pan.",
                         "ingredients": [
                             {
                                 "id": 0,
                                 "name": "baileys irish cream",
                                 "localizedName": "baileys irish cream",
                                 "image": "baileys-liqueur.png"
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
                         "number": 6,
                         "step": "Pour the chocolate mixture into the pan and tilt it to spread it out evenly.",
                         "ingredients": [
                             {
                                 "id": 19081,
                                 "name": "chocolate",
                                 "localizedName": "chocolate",
                                 "image": "milk-chocolate.jpg"
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
                                 "id": 404645,
                                 "name": "frying pan",
                                 "localizedName": "frying pan",
                                 "image": "pan.png"
                             }
                         ]
                     },
                     {
                         "number": 7,
                         "step": "Pour the cream cheese mixture over it, and with a fork, swirl the layers so some of the chocolate shows on top and the cream cheese layer becomes part of the chocolate layer. Do not over mix - you just want some swirls.",
                         "ingredients": [
                             {
                                 "id": 1017,
                                 "name": "cream cheese",
                                 "localizedName": "cream cheese",
                                 "image": "cream-cheese.jpg"
                             },
                             {
                                 "id": 19081,
                                 "name": "chocolate",
                                 "localizedName": "chocolate",
                                 "image": "milk-chocolate.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 8,
                         "step": "Place in a preheated 350 degree F oven and bake for 35 minutes or until a knife inserted into the center comes out clean. Do not over bake.",
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
                             },
                             {
                                 "id": 404745,
                                 "name": "knife",
                                 "localizedName": "knife",
                                 "image": "chefs-knife.jpg"
                             }
                         ],
                         "length": {
                             "number": 35,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 9,
                         "step": "Remove from oven and let cool before cutting into squares.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg"
                             }
                         ]
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/fudgy-chocolate-cream-cheese-brownies-with-baileys-644081"
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
         "weightWatcherSmartPoints": 20,
         "gaps": "GAPS_FULL",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 8,
         "healthScore": 52,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 979.48,
         "extendedIngredients": [
             {
                 "id": 1099003,
                 "aisle": "Produce",
                 "image": "apple.jpg",
                 "consistency": "SOLID",
                 "name": "pink lady apples",
                 "nameClean": "pink lady apple",
                 "original": "2 Pink Lady apples, chopped",
                 "originalName": "Pink Lady apples, chopped",
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
                 "id": 1089003,
                 "aisle": "Produce",
                 "image": "grannysmith-apple.png",
                 "consistency": "SOLID",
                 "name": "granny smith apples",
                 "nameClean": "granny smith apple",
                 "original": "2 Granny Smith apples, chopped",
                 "originalName": "Granny Smith apples, chopped",
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
                 "id": 9412,
                 "aisle": "Produce",
                 "image": "bartlett-pear.png",
                 "consistency": "SOLID",
                 "name": "bartlett pear",
                 "nameClean": "bartlett pear",
                 "original": "1 Bartlett pear, chopped",
                 "originalName": "Bartlett pear, chopped",
                 "amount": 1.0,
                 "unit": "",
                 "meta": [
                     "chopped"
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
                 "id": 9040,
                 "aisle": "Produce",
                 "image": "bananas.jpg",
                 "consistency": "SOLID",
                 "name": "banana",
                 "nameClean": "banana",
                 "original": "1 banana, sliced",
                 "originalName": "banana, sliced",
                 "amount": 1.0,
                 "unit": "",
                 "meta": [
                     "sliced"
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
                 "id": 1019132,
                 "aisle": "Produce",
                 "image": "white-grapes.jpg",
                 "consistency": "SOLID",
                 "name": "grapes",
                 "nameClean": "green grapes",
                 "original": "1 cup green grapes, halved",
                 "originalName": "green grapes, halved",
                 "amount": 1.0,
                 "unit": "cup",
                 "meta": [
                     "green",
                     "halved"
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
                 "id": 9132,
                 "aisle": "Produce",
                 "image": "red-grapes.jpg",
                 "consistency": "SOLID",
                 "name": "globe grapes",
                 "nameClean": "grapes",
                 "original": "1 cup red globe grapes, halved and seeded",
                 "originalName": "red globe grapes, halved and seeded",
                 "amount": 1.0,
                 "unit": "cup",
                 "meta": [
                     "red",
                     "halved",
                     "seeded"
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
                 "id": 9152,
                 "aisle": "Produce",
                 "image": "lemon-juice.jpg",
                 "consistency": "LIQUID",
                 "name": "lemon juice",
                 "nameClean": "lemon juice",
                 "original": "1/2 teaspoon lemon juice",
                 "originalName": "lemon juice",
                 "amount": 0.5,
                 "unit": "teaspoon",
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
                 "id": 9299,
                 "aisle": "Dried Fruits;Produce;Baking",
                 "image": "raisins.jpg",
                 "consistency": "SOLID",
                 "name": "raisins",
                 "nameClean": "raisins",
                 "original": "1/2 cup raisins",
                 "originalName": "raisins",
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
                 "id": 12142,
                 "aisle": "Nuts;Baking",
                 "image": "pecans.jpg",
                 "consistency": "SOLID",
                 "name": "pecan halves",
                 "nameClean": "pecans",
                 "original": "1/2 cup pecan halves",
                 "originalName": "pecan halves",
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
                 "id": 99033,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "vanilla-yogurt.png",
                 "consistency": "LIQUID",
                 "name": "vanilla-flavored chobani greek yogurt",
                 "nameClean": "fat free vanilla greek yogurt",
                 "original": "6 ounces vanilla-flavored Chobani Greek Yogurt",
                 "originalName": "vanilla-flavored Chobani Greek Yogurt",
                 "amount": 6.0,
                 "unit": "ounces",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 6.0,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 170.097,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             },
             {
                 "id": 19296,
                 "aisle": "Nut butters, Jams, and Honey",
                 "image": "honey.png",
                 "consistency": "LIQUID",
                 "name": "honey",
                 "nameClean": "honey",
                 "original": "1 tablespoon honey",
                 "originalName": "honey",
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
                 "id": 2010,
                 "aisle": "Spices and Seasonings",
                 "image": "cinnamon.jpg",
                 "consistency": "SOLID",
                 "name": "cinnamon",
                 "nameClean": "cinnamon",
                 "original": "1/8 teaspoon cinnamon",
                 "originalName": "cinnamon",
                 "amount": 0.125,
                 "unit": "teaspoon",
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
             }
         ],
         "id": 638779,
         "title": "Chobani Harvest Fruit Salad",
         "readyInMinutes": 45,
         "servings": 1,
         "sourceUrl": "https://www.foodista.com/recipe/SJ2FLX7W/chobani-harvest-fruit-salad",
         "image": "https://spoonacular.com/recipeImages/638779-556x370.jpg",
         "imageType": "jpg",
         "summary": "Need a <b>gluten free, lacto ovo vegetarian, and primal main course</b>? Chobani Harvest Fruit Salad could be an excellent recipe to try. One portion of this dish contains roughly <b>26g of protein</b>, <b>38g of fat</b>, and a total of <b>1562 calories</b>. For <b>$9.79 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. This recipe serves 1. 8 people have tried and liked this recipe. This recipe from Foodista requires pink lady apples, cinnamon, pecan halves, and lemon juice. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Overall, this recipe earns an <b>excellent spoonacular score of 86%</b>. <a href=\"https://spoonacular.com/recipes/harvest-bacon-and-chicken-dinner-salad-with-tangy-fruit-dressing-270038\">Harvest Bacon and Chicken Dinner Salad with Tangy Fruit Dressing</a>, <a href=\"https://spoonacular.com/recipes/waldorf-ish-chicken-salad-with-chobani-0-pear-cawalnuts-493101\">Waldorf-ish Chicken Salad with @Chobani 0% Pear & @CAWalnuts</a>, and <a href=\"https://spoonacular.com/recipes/harvest-fruit-puree-195719\">Harvest Fruit Puree</a> are very similar to this recipe.",
         "cuisines": [],
         "dishTypes": [
             "side dish",
             "lunch",
             "main course",
             "salad",
             "main dish",
             "dinner"
         ],
         "diets": [
             "gluten free",
             "lacto ovo vegetarian",
             "primal"
         ],
         "occasions": [],
         "instructions": "In a large bowl, combine the apples, pear, banana and grapes.\nPour in the lemon juice and gently toss.\nAdd the raisins and pecans.\nAfter opening the yogurt container, incorporate the honey and cinnamon. Stir well.\nThen, pour the yogurt mixture over the fruit and toss to coat.\nShare and enjoy!",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "In a large bowl, combine the apples, pear, banana and grapes.",
                         "ingredients": [
                             {
                                 "id": 9003,
                                 "name": "apple",
                                 "localizedName": "apple",
                                 "image": "apple.jpg"
                             },
                             {
                                 "id": 9040,
                                 "name": "banana",
                                 "localizedName": "banana",
                                 "image": "bananas.jpg"
                             },
                             {
                                 "id": 9132,
                                 "name": "grapes",
                                 "localizedName": "grapes",
                                 "image": "red-grapes.jpg"
                             },
                             {
                                 "id": 9252,
                                 "name": "pear",
                                 "localizedName": "pear",
                                 "image": "pears-bosc.jpg"
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
                         "step": "Pour in the lemon juice and gently toss.",
                         "ingredients": [
                             {
                                 "id": 9152,
                                 "name": "lemon juice",
                                 "localizedName": "lemon juice",
                                 "image": "lemon-juice.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 3,
                         "step": "Add the raisins and pecans.",
                         "ingredients": [
                             {
                                 "id": 9299,
                                 "name": "raisins",
                                 "localizedName": "raisins",
                                 "image": "raisins.jpg"
                             },
                             {
                                 "id": 12142,
                                 "name": "pecans",
                                 "localizedName": "pecans",
                                 "image": "pecans.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 4,
                         "step": "After opening the yogurt container, incorporate the honey and cinnamon. Stir well.",
                         "ingredients": [
                             {
                                 "id": 2010,
                                 "name": "cinnamon",
                                 "localizedName": "cinnamon",
                                 "image": "cinnamon.jpg"
                             },
                             {
                                 "id": 1116,
                                 "name": "yogurt",
                                 "localizedName": "yogurt",
                                 "image": "plain-yogurt.jpg"
                             },
                             {
                                 "id": 19296,
                                 "name": "honey",
                                 "localizedName": "honey",
                                 "image": "honey.png"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 5,
                         "step": "Then, pour the yogurt mixture over the fruit and toss to coat.",
                         "ingredients": [
                             {
                                 "id": 1116,
                                 "name": "yogurt",
                                 "localizedName": "yogurt",
                                 "image": "plain-yogurt.jpg"
                             },
                             {
                                 "id": 9431,
                                 "name": "fruit",
                                 "localizedName": "fruit",
                                 "image": "mixed-fresh-fruit.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 6,
                         "step": "Share and enjoy!",
                         "ingredients": [],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/chobani-harvest-fruit-salad-638779"
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
         "weightWatcherSmartPoints": 112,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 42,
         "healthScore": 23,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 436.17,
         "extendedIngredients": [
             {
                 "id": 1053,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "fluid-cream.jpg",
                 "consistency": "LIQUID",
                 "name": "cream",
                 "nameClean": "cream",
                 "original": "2 cups cream",
                 "originalName": "cream",
                 "amount": 2.0,
                 "unit": "cups",
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
                 "id": 98861,
                 "aisle": "Nut butters, Jams, and Honey;Ethnic Foods;Frozen;Baking",
                 "image": "dulce-de-leche.png",
                 "consistency": "SOLID",
                 "name": "dulce de leche",
                 "nameClean": "dulce de leche",
                 "original": "3 tablespoons Dulce de leche",
                 "originalName": "Dulce de leche",
                 "amount": 3.0,
                 "unit": "tablespoons",
                 "meta": [],
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
                 "id": 19335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "sugar",
                 "nameClean": "sugar",
                 "original": "1/2 cup sugar",
                 "originalName": "sugar",
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
                 "id": 1125,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "egg-yolk.jpg",
                 "consistency": "SOLID",
                 "name": "egg yolks",
                 "nameClean": "egg yolk",
                 "original": "5 large egg yolks",
                 "originalName": "egg yolks",
                 "amount": 5.0,
                 "unit": "large",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 5.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     },
                     "metric": {
                         "amount": 5.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     }
                 }
             }
         ],
         "id": 641727,
         "title": "Dulce De Leche Crème Brûlée",
         "readyInMinutes": 45,
         "servings": 1,
         "sourceUrl": "https://www.foodista.com/recipe/T6DWSM6W/dulce-de-leche-creme-brulee",
         "image": "https://spoonacular.com/recipeImages/641727-556x370.jpg",
         "imageType": "jpg",
         "summary": "If you want to add more <b>gluten free and lacto ovo vegetarian</b> recipes to your repertoire, Dulce De Leche Crème Brûlée might be a recipe you should try. This recipe serves 1 and costs $4.36 per serving. One serving contains <b>2277 calories</b>, <b>27g of protein</b>, and <b>195g of fat</b>. This recipe from Foodista has 42 fans. From preparation to the plate, this recipe takes around <b>45 minutes</b>. A mixture of cream, dulce de leche, sugar, and a handful of other ingredients are all it takes to make this recipe so yummy. A few people really liked this main course. Overall, this recipe earns an <b>excellent spoonacular score of 83%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/alfajores-dulce-de-leche-sandwich-crme-cookies-170895\">Alfajores (Dulce de Leche Sandwich Crème Cookies)</a>, <a href=\"https://spoonacular.com/recipes/russian-dulce-de-leche-waffle-cake-and-instant-pot-dulce-de-leche-1062236\">Russian Dulce De Leche Waffle Cake and Instant Pot Dulce De Leche</a>, and <a href=\"https://spoonacular.com/recipes/dulce-de-leche-milkshake-malteada-de-arequipe-o-dulce-de-leche-226960\">Dulce de Leche Milkshake (Malteada de Arequipe o Dulce de Leche)</a>.",
         "cuisines": [],
         "dishTypes": [
             "lunch",
             "main course",
             "main dish",
             "dinner"
         ],
         "diets": [
             "gluten free",
             "lacto ovo vegetarian"
         ],
         "occasions": [],
         "instructions": "Oven: 325F\nPlace six ramekins in a water bath. Whisk eggs and sugar until pale, then slowly pour the hot cream into the yolks, whisking thoroughly. Pour custards into ramekins and bake ~35 min. until set. Chill at least 3 hours before serving.\nTo serve, sprinkle ~2 tsp sugar evenly over each custard and heat with a kitchen torch until a burnt crust forms atop each custard.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Oven: 325F",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg",
                                 "temperature": {
                                     "number": 325.0,
                                     "unit": "Fahrenheit"
                                 }
                             }
                         ]
                     },
                     {
                         "number": 2,
                         "step": "Place six ramekins in a water bath.",
                         "ingredients": [
                             {
                                 "id": 14412,
                                 "name": "water",
                                 "localizedName": "water",
                                 "image": "water.png"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404781,
                                 "name": "ramekin",
                                 "localizedName": "ramekin",
                                 "image": "ramekin.jpg"
                             }
                         ]
                     },
                     {
                         "number": 3,
                         "step": "Whisk eggs and sugar until pale, then slowly pour the hot cream into the yolks, whisking thoroughly.",
                         "ingredients": [
                             {
                                 "id": 1053,
                                 "name": "cream",
                                 "localizedName": "cream",
                                 "image": "fluid-cream.jpg"
                             },
                             {
                                 "id": 19335,
                                 "name": "sugar",
                                 "localizedName": "sugar",
                                 "image": "sugar-in-bowl.png"
                             },
                             {
                                 "id": 1125,
                                 "name": "egg yolk",
                                 "localizedName": "egg yolk",
                                 "image": "egg-yolk.jpg"
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
                                 "id": 404661,
                                 "name": "whisk",
                                 "localizedName": "whisk",
                                 "image": "whisk.png"
                             }
                         ]
                     },
                     {
                         "number": 4,
                         "step": "Pour custards into ramekins and bake ~35 min. until set. Chill at least 3 hours before serving.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg"
                             },
                             {
                                 "id": 404781,
                                 "name": "ramekin",
                                 "localizedName": "ramekin",
                                 "image": "ramekin.jpg"
                             }
                         ],
                         "length": {
                             "number": 215,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 5,
                         "step": "To serve, sprinkle ~2 tsp sugar evenly over each custard and heat with a kitchen torch until a burnt crust forms atop each custard.",
                         "ingredients": [
                             {
                                 "id": 19170,
                                 "name": "custard",
                                 "localizedName": "custard",
                                 "image": "custard.png"
                             },
                             {
                                 "id": 0,
                                 "name": "crust",
                                 "localizedName": "crust",
                                 "image": ""
                             },
                             {
                                 "id": 19335,
                                 "name": "sugar",
                                 "localizedName": "sugar",
                                 "image": "sugar-in-bowl.png"
                             }
                         ],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/dulce-de-leche-crme-brle-641727"
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
         "weightWatcherSmartPoints": 11,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 112,
         "healthScore": 39,
         "creditsText": "foodista.com",
         "sourceName": "foodista.com",
         "pricePerServing": 299.64,
         "extendedIngredients": [
             {
                 "id": 10211821,
                 "aisle": "Produce",
                 "image": "bell-pepper-orange.png",
                 "consistency": "SOLID",
                 "name": "bell peppers",
                 "nameClean": "bell pepper",
                 "original": "4 bell peppers (choose your favorite color!)",
                 "originalName": "bell peppers (choose your favorite color!)",
                 "amount": 4.0,
                 "unit": "",
                 "meta": [
                     "your favorite",
                     "(choose color!)"
                 ],
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
                 "id": 1002030,
                 "aisle": "Spices and Seasonings",
                 "image": "pepper.jpg",
                 "consistency": "SOLID",
                 "name": "pepper",
                 "nameClean": "black pepper",
                 "original": "1 tsp black pepper",
                 "originalName": "black pepper",
                 "amount": 1.0,
                 "unit": "tsp",
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
                 "id": 11549,
                 "aisle": "Pasta and Rice",
                 "image": "tomato-sauce-or-pasta-sauce.jpg",
                 "consistency": "SOLID",
                 "name": "tomato sauce",
                 "nameClean": "canned tomato sauce",
                 "original": "1 (8oz) can tomato sauce",
                 "originalName": "tomato sauce",
                 "amount": 8.0,
                 "unit": "oz",
                 "meta": [
                     "canned"
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
                 "id": 10011693,
                 "aisle": "Canned and Jarred",
                 "image": "tomatoes-canned.png",
                 "consistency": "SOLID",
                 "name": "canned tomatoes",
                 "nameClean": "canned tomatoes",
                 "original": "1 (8oz) can diced tomatoes",
                 "originalName": "diced tomatoes",
                 "amount": 8.0,
                 "unit": "oz",
                 "meta": [
                     "diced",
                     "canned"
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
                 "id": 2029,
                 "aisle": "Spices and Seasonings",
                 "image": "dried-parsley.png",
                 "consistency": "SOLID",
                 "name": "parsley",
                 "nameClean": "dried parsley",
                 "original": "2 tbsp dried parsley",
                 "originalName": "dried parsley",
                 "amount": 2.0,
                 "unit": "tbsp",
                 "meta": [
                     "dried"
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
                 "id": 1123,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "egg.png",
                 "consistency": "SOLID",
                 "name": "eggs",
                 "nameClean": "egg",
                 "original": "2 eggs",
                 "originalName": "eggs",
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
                 "id": 11215,
                 "aisle": "Produce",
                 "image": "garlic.png",
                 "consistency": "SOLID",
                 "name": "garlic",
                 "nameClean": "garlic",
                 "original": "1 tbsp minced garlic",
                 "originalName": "minced garlic",
                 "amount": 1.0,
                 "unit": "tbsp",
                 "meta": [
                     "minced"
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
                 "id": 10023572,
                 "aisle": "Meat",
                 "image": "fresh-ground-beef.jpg",
                 "consistency": "SOLID",
                 "name": "ground beef",
                 "nameClean": "ground chuck",
                 "original": "1/2 lb ground beef",
                 "originalName": "ground beef",
                 "amount": 0.5,
                 "unit": "lb",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 0.5,
                         "unitShort": "lb",
                         "unitLong": "pounds"
                     },
                     "metric": {
                         "amount": 226.796,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             },
             {
                 "id": 5662,
                 "aisle": "Meat",
                 "image": "meat-ground.jpg",
                 "consistency": "SOLID",
                 "name": "ground turkey",
                 "nameClean": "ground turkey",
                 "original": "1/2 lb ground turkey",
                 "originalName": "ground turkey",
                 "amount": 0.5,
                 "unit": "lb",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 0.5,
                         "unitShort": "lb",
                         "unitLong": "pounds"
                     },
                     "metric": {
                         "amount": 226.796,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "1 onion, diced",
                 "originalName": "onion, diced",
                 "amount": 1.0,
                 "unit": "",
                 "meta": [
                     "diced"
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
                 "id": 1032,
                 "aisle": "Cheese",
                 "image": "parmesan.jpg",
                 "consistency": "SOLID",
                 "name": "parmesan cheese",
                 "nameClean": "grated parmesan cheese",
                 "original": "1/4 cup grated parmesan cheese",
                 "originalName": "grated parmesan cheese",
                 "amount": 0.25,
                 "unit": "cup",
                 "meta": [
                     "grated"
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
                 "id": 20444,
                 "aisle": "Pasta and Rice",
                 "image": "uncooked-white-rice.png",
                 "consistency": "SOLID",
                 "name": "rice",
                 "nameClean": "rice",
                 "original": "1/2 cup uncooked rice",
                 "originalName": "uncooked rice",
                 "amount": 0.5,
                 "unit": "cup",
                 "meta": [
                     "uncooked"
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
                 "id": 19335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "sugar",
                 "nameClean": "sugar",
                 "original": "1 heaping tbsp sugar",
                 "originalName": "heaping tbsp sugar",
                 "amount": 1.0,
                 "unit": "tbsp",
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
                 "id": 10011693,
                 "aisle": "Canned and Jarred",
                 "image": "tomatoes-canned.png",
                 "consistency": "SOLID",
                 "name": "tomato soup",
                 "nameClean": "canned tomatoes",
                 "original": "1 (8oz) can tomato soup",
                 "originalName": "tomato soup",
                 "amount": 8.0,
                 "unit": "oz",
                 "meta": [
                     "canned"
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
                 "id": 6971,
                 "aisle": "Condiments",
                 "image": "dark-sauce.jpg",
                 "consistency": "LIQUID",
                 "name": "worcestershire sauce",
                 "nameClean": "worcestershire sauce",
                 "original": "1 tbsp Worcestershire sauce",
                 "originalName": "Worcestershire sauce",
                 "amount": 1.0,
                 "unit": "tbsp",
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
             }
         ],
         "id": 645978,
         "title": "Ground Turkey Stuffed Peppers",
         "readyInMinutes": 45,
         "servings": 4,
         "sourceUrl": "http://www.foodista.com/recipe/VKY3BZ5J/ground-turkey-stuffed-peppers",
         "image": "https://spoonacular.com/recipeImages/645978-556x370.jpg",
         "imageType": "jpg",
         "summary": "Ground Turkey Stuffed Peppers might be just the main course you are searching for. Watching your figure? This gluten free recipe has <b>463 calories</b>, <b>34g of protein</b>, and <b>17g of fat</b> per serving. This recipe serves 4 and costs $3.0 per serving. 112 people were glad they tried this recipe. A mixture of bell peppers, garlic, onion, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 94%</b>, which is spectacular. Try <a href=\"https://spoonacular.com/recipes/ground-turkey-stuffed-peppers-1311407\">Ground Turkey Stuffed Peppers</a>, <a href=\"https://spoonacular.com/recipes/ground-turkey-stuffed-peppers-1227903\">Ground Turkey Stuffed Peppers</a>, and <a href=\"https://spoonacular.com/recipes/ground-turkey-stuffed-peppers-1353987\">Ground Turkey Stuffed Peppers</a> for similar recipes.",
         "cuisines": [],
         "dishTypes": [
             "lunch",
             "main course",
             "main dish",
             "dinner"
         ],
         "diets": [
             "gluten free"
         ],
         "occasions": [],
         "instructions": "<ol><li>Cook rice then knead it together with remaining filling ingredients. Cut tops off peppers and fill each one. Place in your slow cooker or a large stove-top pot. Mix together sauce ingredients. Top each stuffed pepper with sauce and pour remaining sauce all around the stuffed peppers. Cook on medium/low for about an hour. Top with grated parmesan cheese and a little parsley for looks and serve warm.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Cook rice then knead it together with remaining filling ingredients.",
                         "ingredients": [
                             {
                                 "id": 20444,
                                 "name": "rice",
                                 "localizedName": "rice",
                                 "image": "uncooked-white-rice.png"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 2,
                         "step": "Cut tops off peppers and fill each one.",
                         "ingredients": [
                             {
                                 "id": 10111333,
                                 "name": "peppers",
                                 "localizedName": "peppers",
                                 "image": "green-pepper.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 3,
                         "step": "Place in your slow cooker or a large stove-top pot.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404718,
                                 "name": "slow cooker",
                                 "localizedName": "slow cooker",
                                 "image": "slow-cooker.jpg"
                             },
                             {
                                 "id": 404794,
                                 "name": "stove",
                                 "localizedName": "stove",
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
                         "number": 4,
                         "step": "Mix together sauce ingredients. Top each stuffed pepper with sauce and pour remaining sauce all around the stuffed peppers. Cook on medium/low for about an hour. Top with grated parmesan cheese and a little parsley for looks and serve warm.",
                         "ingredients": [
                             {
                                 "id": 1032,
                                 "name": "grated parmesan cheese",
                                 "localizedName": "grated parmesan cheese",
                                 "image": "parmesan.jpg"
                             },
                             {
                                 "id": 11297,
                                 "name": "parsley",
                                 "localizedName": "parsley",
                                 "image": "parsley.jpg"
                             },
                             {
                                 "id": 10111333,
                                 "name": "peppers",
                                 "localizedName": "peppers",
                                 "image": "green-pepper.jpg"
                             },
                             {
                                 "id": 1002030,
                                 "name": "pepper",
                                 "localizedName": "pepper",
                                 "image": "pepper.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
                             }
                         ],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/ground-turkey-stuffed-peppers-645978"
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
         "weightWatcherSmartPoints": 5,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 48,
         "healthScore": 3,
         "creditsText": "Lisa's Vegetarian Kitchen",
         "license": "CC BY 2.5 CA",
         "sourceName": "Food and Spice",
         "pricePerServing": 56.71,
         "extendedIngredients": [
             {
                 "id": 12195,
                 "aisle": "Nut butters, Jams, and Honey",
                 "image": "nut-butter.png",
                 "consistency": "SOLID",
                 "name": "almond butter",
                 "nameClean": "nut butter",
                 "original": "4 tablespoons of almond butter",
                 "originalName": "almond butter",
                 "amount": 4.0,
                 "unit": "tablespoons",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 4.0,
                         "unitShort": "Tbsps",
                         "unitLong": "Tbsps"
                     },
                     "metric": {
                         "amount": 4.0,
                         "unitShort": "Tbsps",
                         "unitLong": "Tbsps"
                     }
                 }
             },
             {
                 "id": 93740,
                 "aisle": "Gluten Free;Health Foods",
                 "image": "almond-meal-or-almond-flour.jpg",
                 "consistency": "SOLID",
                 "name": "almond flour",
                 "nameClean": "almond meal",
                 "original": "1/2 cup of almond flour",
                 "originalName": "almond flour",
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
                 "id": 18369,
                 "aisle": "Baking",
                 "image": "white-powder.jpg",
                 "consistency": "SOLID",
                 "name": "baking powder",
                 "nameClean": "baking powder",
                 "original": "2 teaspoons of baking powder",
                 "originalName": "baking powder",
                 "amount": 2.0,
                 "unit": "teaspoons",
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
                 "id": 18372,
                 "aisle": "Baking",
                 "image": "white-powder.jpg",
                 "consistency": "SOLID",
                 "name": "baking soda",
                 "nameClean": "baking soda",
                 "original": "1/8 teaspoon of baking soda",
                 "originalName": "baking soda",
                 "amount": 0.125,
                 "unit": "teaspoon",
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
                 "id": 9050,
                 "aisle": "Produce",
                 "image": "blueberries.jpg",
                 "consistency": "SOLID",
                 "name": "blueberries",
                 "nameClean": "blueberries",
                 "original": "1/2 cup of blueberries",
                 "originalName": "blueberries",
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
                 "id": 9070,
                 "aisle": "Produce",
                 "image": "cherries.jpg",
                 "consistency": "SOLID",
                 "name": "cherries",
                 "nameClean": "cherries",
                 "original": "1 cup of pitted cherries, roughly chopped",
                 "originalName": "pitted cherries, roughly chopped",
                 "amount": 1.0,
                 "unit": "cup",
                 "meta": [
                     "pitted",
                     "roughly chopped"
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
                 "id": 1123,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "egg.png",
                 "consistency": "SOLID",
                 "name": "eggs",
                 "nameClean": "egg",
                 "original": "2 eggs",
                 "originalName": "eggs",
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
                 "name": "lemon juice",
                 "nameClean": "lemon juice",
                 "original": "1 tablespoon of lemon juice",
                 "originalName": "lemon juice",
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
                 "id": 9156,
                 "aisle": "Produce",
                 "image": "zest-lemon.jpg",
                 "consistency": "SOLID",
                 "name": "lemon zest",
                 "nameClean": "lemon peel",
                 "original": "2 teaspoons of lemon zest",
                 "originalName": "lemon zest",
                 "amount": 2.0,
                 "unit": "teaspoons",
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
                 "id": 1012047,
                 "aisle": "Spices and Seasonings",
                 "image": "salt.jpg",
                 "consistency": "SOLID",
                 "name": "sea salt",
                 "nameClean": "coarse sea salt",
                 "original": "1/2 teaspoon of sea salt",
                 "originalName": "sea salt",
                 "amount": 0.5,
                 "unit": "teaspoon",
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
                 "id": 19335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "sugar",
                 "nameClean": "sugar",
                 "original": "1/4 cup of sugar",
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
                 "id": 10020081,
                 "aisle": "Baking",
                 "image": "flour.png",
                 "consistency": "SOLID",
                 "name": "unbleached flour",
                 "nameClean": "unbleached flour",
                 "original": "1 1/2 cups of unbleached white flour",
                 "originalName": "unbleached white flour",
                 "amount": 1.5,
                 "unit": "cups",
                 "meta": [
                     "white"
                 ],
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
             },
             {
                 "id": 1052050,
                 "aisle": "Baking",
                 "image": "vanilla.jpg",
                 "consistency": "SOLID",
                 "name": "vanilla",
                 "nameClean": "vanilla",
                 "original": "2 teaspoons of vanilla",
                 "originalName": "vanilla",
                 "amount": 2.0,
                 "unit": "teaspoons",
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
                 "id": 1106,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "milk.png",
                 "consistency": "LIQUID",
                 "name": "yogurt",
                 "nameClean": "goat milk",
                 "original": "1 cup of yogurt (I used goat milk yogurt)",
                 "originalName": "yogurt (I used goat milk yogurt)",
                 "amount": 1.0,
                 "unit": "cup",
                 "meta": [
                     "(I used goat milk yogurt)"
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
         "id": 716211,
         "title": "Cherry Blueberry Muffins",
         "readyInMinutes": 45,
         "servings": 12,
         "sourceUrl": "http://foodandspice.blogspot.com/2009/07/cherry-blueberry-muffins.html",
         "image": "https://spoonacular.com/recipeImages/716211-556x370.jpg",
         "imageType": "jpg",
         "summary": "Cherry Blueberry Muffins might be just the breakfast you are searching for. One portion of this dish contains approximately <b>6g of protein</b>, <b>7g of fat</b>, and a total of <b>170 calories</b>. For <b>57 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. This recipe serves 12. If you have sea salt, vanilla, unbleached flour, and a few other ingredients on hand, you can make it. 48 people have made this recipe and would make it again. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. It is brought to you by foodandspice.blogspot.com. With a spoonacular <b>score of 39%</b>, this dish is not so spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cherry-and-blueberry-muffins-497142\">Cherry and Blueberry Muffins</a>, <a href=\"https://spoonacular.com/recipes/blueberry-muffins-with-blueberry-jam-535789\">Blueberry Muffins with Blueberry Jam</a>, and <a href=\"https://spoonacular.com/recipes/amazingly-blueberry-ey-blueberry-muffins-510119\">Amazingly Blueberry-ey Blueberry Muffins</a>.",
         "cuisines": [],
         "dishTypes": [
             "morning meal",
             "brunch",
             "breakfast"
         ],
         "diets": [
             "lacto ovo vegetarian"
         ],
         "occasions": [],
         "instructions": "<p>Grease twelve regular sized muffin cups well with butter or oil.In a large bowl, combine the flours, baking powder, baking soda, sugar, lemon zest and salt. Make a well in the center of the ingredients and set aside.In another bowl, combine the yogurt with the lemon juice. Add the eggs, one at a time, whisking well after each addition. Now add the vanilla and almond butter and whisk until well combined. Pour this mixture into the dry ingredients and stir just to combine. Gently fold in the cherries and blueberries.Divide the batter evenly into the prepared muffin cups and bake in a preheat 350 degree oven for 20 - 25 minutes, or until a cake tester or toothpick comes out clean. Leave the muffins in the pan for 10 minutes and then transfer to a wire rack to cool.Yields 12 berry filled muffins.</p>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Grease twelve regular sized muffin cups well with butter or oil.In a large bowl, combine the flours, baking powder, baking soda, sugar, lemon zest and salt. Make a well in the center of the ingredients and set aside.In another bowl, combine the yogurt with the lemon juice.",
                         "ingredients": [
                             {
                                 "id": 18369,
                                 "name": "baking powder",
                                 "localizedName": "baking powder",
                                 "image": "white-powder.jpg"
                             },
                             {
                                 "id": 18372,
                                 "name": "baking soda",
                                 "localizedName": "baking soda",
                                 "image": "white-powder.jpg"
                             },
                             {
                                 "id": 9152,
                                 "name": "lemon juice",
                                 "localizedName": "lemon juice",
                                 "image": "lemon-juice.jpg"
                             },
                             {
                                 "id": 9156,
                                 "name": "lemon zest",
                                 "localizedName": "lemon zest",
                                 "image": "zest-lemon.jpg"
                             },
                             {
                                 "id": 1001,
                                 "name": "butter",
                                 "localizedName": "butter",
                                 "image": "butter-sliced.jpg"
                             },
                             {
                                 "id": 1116,
                                 "name": "yogurt",
                                 "localizedName": "yogurt",
                                 "image": "plain-yogurt.jpg"
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
                                 "id": 404676,
                                 "name": "muffin liners",
                                 "localizedName": "muffin liners",
                                 "image": "muffin-or-cupcake-forms.png"
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
                         "number": 2,
                         "step": "Add the eggs, one at a time, whisking well after each addition. Now add the vanilla and almond butter and whisk until well combined.",
                         "ingredients": [
                             {
                                 "id": 12195,
                                 "name": "almond butter",
                                 "localizedName": "almond butter",
                                 "image": "almond-butter.jpg"
                             },
                             {
                                 "id": 1052050,
                                 "name": "vanilla",
                                 "localizedName": "vanilla",
                                 "image": "vanilla.jpg"
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
                                 "id": 404661,
                                 "name": "whisk",
                                 "localizedName": "whisk",
                                 "image": "whisk.png"
                             }
                         ]
                     },
                     {
                         "number": 3,
                         "step": "Pour this mixture into the dry ingredients and stir just to combine. Gently fold in the cherries and blueberries.Divide the batter evenly into the prepared muffin cups and bake in a preheat 350 degree oven for 20 - 25 minutes, or until a cake tester or toothpick comes out clean. Leave the muffins in the pan for 10 minutes and then transfer to a wire rack to cool.Yields 12 berry filled muffins.",
                         "ingredients": [
                             {
                                 "id": 9050,
                                 "name": "blueberries",
                                 "localizedName": "blueberries",
                                 "image": "blueberries.jpg"
                             },
                             {
                                 "id": 9070,
                                 "name": "cherries",
                                 "localizedName": "cherries",
                                 "image": "cherries.jpg"
                             },
                             {
                                 "id": 1009054,
                                 "name": "berries",
                                 "localizedName": "berries",
                                 "image": "berries-mixed.jpg"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404676,
                                 "name": "muffin liners",
                                 "localizedName": "muffin liners",
                                 "image": "muffin-or-cupcake-forms.png"
                             },
                             {
                                 "id": 404644,
                                 "name": "toothpicks",
                                 "localizedName": "toothpicks",
                                 "image": "toothpicks.jpg"
                             },
                             {
                                 "id": 405900,
                                 "name": "wire rack",
                                 "localizedName": "wire rack",
                                 "image": "wire-rack.jpg"
                             },
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg"
                             },
                             {
                                 "id": 404645,
                                 "name": "frying pan",
                                 "localizedName": "frying pan",
                                 "image": "pan.png"
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
         "spoonacularSourceUrl": "https://spoonacular.com/cherry-blueberry-muffins-716211"
     },
     {
         "vegetarian": true,
         "vegan": false,
         "glutenFree": false,
         "dairyFree": true,
         "veryHealthy": false,
         "cheap": false,
         "veryPopular": false,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 13,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 10,
         "healthScore": 17,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 172.36,
         "extendedIngredients": [
             {
                 "id": 1124,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "egg-white.jpg",
                 "consistency": "SOLID",
                 "name": "egg whites",
                 "nameClean": "egg whites",
                 "original": "3 Large egg whites (about 130g or slightly more)",
                 "originalName": "Large egg whites (about 130g or slightly more)",
                 "amount": 3.0,
                 "unit": "",
                 "meta": [],
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
                 "id": 19335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "sugar",
                 "nameClean": "sugar",
                 "original": "60g Sugar",
                 "originalName": "Sugar",
                 "amount": 60.0,
                 "unit": "g",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 2.116,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 60.0,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             },
             {
                 "id": 12120,
                 "aisle": "Baking",
                 "image": "hazelnuts.jpg",
                 "consistency": "SOLID",
                 "name": "ground hazelnut",
                 "nameClean": "hazelnuts",
                 "original": "90g Ground hazelnut",
                 "originalName": "Ground hazelnut",
                 "amount": 90.0,
                 "unit": "g",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 3.175,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 90.0,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "30g Brown sugar",
                 "originalName": "Brown sugar",
                 "amount": 30.0,
                 "unit": "g",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.058,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 30.0,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "25g Plain flour",
                 "originalName": "Plain flour",
                 "amount": 25.0,
                 "unit": "g",
                 "meta": [
                     "plain"
                 ],
                 "measures": {
                     "us": {
                         "amount": 0.882,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 25.0,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             },
             {
                 "id": 20080,
                 "aisle": "Baking",
                 "image": "flour.png",
                 "consistency": "SOLID",
                 "name": "wholemeal flour",
                 "nameClean": "whole wheat flour",
                 "original": "60g Wholemeal flour",
                 "originalName": "Wholemeal flour",
                 "amount": 60.0,
                 "unit": "g",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 2.116,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 60.0,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             },
             {
                 "id": 2050,
                 "aisle": "Baking",
                 "image": "vanilla-extract.jpg",
                 "consistency": "LIQUID",
                 "name": "butter",
                 "nameClean": "vanilla extract",
                 "original": "65g Melted butter with 1/2 tsp vanilla extract",
                 "originalName": "Melted butter with 1/2 tsp vanilla extract",
                 "amount": 65.0,
                 "unit": "g",
                 "meta": [
                     "with 1/2 tsp vanilla extract",
                     "melted"
                 ],
                 "measures": {
                     "us": {
                         "amount": 2.293,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 65.0,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             },
             {
                 "id": 9021,
                 "aisle": "Produce",
                 "image": "apricot.jpg",
                 "consistency": "SOLID",
                 "name": "apricots and cranberries - cut to smaller pieces",
                 "nameClean": "apricot",
                 "original": "20g each Dried apricots and dried cranberries - cut to smaller pieces",
                 "originalName": "each Dried apricots and dried cranberries - cut to smaller pieces",
                 "amount": 20.0,
                 "unit": "g",
                 "meta": [
                     "dried"
                 ],
                 "measures": {
                     "us": {
                         "amount": 0.705,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 20.0,
                         "unitShort": "g",
                         "unitLong": "grams"
                     }
                 }
             }
         ],
         "id": 665303,
         "title": "Wholemeal Cake",
         "readyInMinutes": 45,
         "servings": 4,
         "sourceUrl": "https://www.foodista.com/recipe/JDYXYDJY/wholemeal-cake",
         "image": "https://spoonacular.com/recipeImages/665303-556x370.jpg",
         "imageType": "jpg",
         "summary": "Wholemeal Cake takes around <b>45 minutes</b> from beginning to end. For <b>$1.72 per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. Watching your figure? This dairy free and lacto ovo vegetarian recipe has <b>362 calories</b>, <b>9g of protein</b>, and <b>14g of fat</b> per serving. It works well as a rather cheap dessert. A couple people made this recipe, and 10 would say it hit the spot. A mixture of egg whites, sugar, flour, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 49%</b>. This score is good. Try <a href=\"https://spoonacular.com/recipes/seeded-wholemeal-loaf-1094894\">Seeded wholemeal loaf</a>, <a href=\"https://spoonacular.com/recipes/wholemeal-steam-bun-665306\">Wholemeal Steam Bun</a>, and <a href=\"https://spoonacular.com/recipes/cinnamon-coffee-wholemeal-muffins-494087\">Cinnamon & Coffee Wholemeal Muffins</a> for similar recipes.",
         "cuisines": [],
         "dishTypes": [
             "dessert"
         ],
         "diets": [
             "dairy free",
             "lacto ovo vegetarian"
         ],
         "occasions": [],
         "instructions": "In a large bowl, mix ground hazelnut, brown sugar, plain flour and wholemeal flour together and set aside.\nWhisk egg whites and sugar at medium high speed till firm and smooth.\nUse hand to fold one quarter of beaten egg whites to the flour mixture evenly and remaining egg white in two batches.\nLastly add in melted butter in two batches and mix well with a rubber spatula follow by the dried apricots and dried cranberries.\nPour mixture into a 7 inch (lined) round cake pan and sprinkle more dried apricots and dried cranberries over it.\nBake at preheated oven 170C for about 30-35 minutes or until skewer inserted comes out clean. Leave cake to cool in pan for 15 minutes and remove to wire rack to cool down completely.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "In a large bowl, mix ground hazelnut, brown sugar, plain flour and wholemeal flour together and set aside.",
                         "ingredients": [
                             {
                                 "id": 20080,
                                 "name": "whole wheat flour",
                                 "localizedName": "whole wheat flour",
                                 "image": "flour.png"
                             },
                             {
                                 "id": 19334,
                                 "name": "brown sugar",
                                 "localizedName": "brown sugar",
                                 "image": "dark-brown-sugar.png"
                             },
                             {
                                 "id": 20081,
                                 "name": "all purpose flour",
                                 "localizedName": "all purpose flour",
                                 "image": "flour.png"
                             },
                             {
                                 "id": 12120,
                                 "name": "hazelnuts",
                                 "localizedName": "hazelnuts",
                                 "image": "hazelnuts.jpg"
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
                         "step": "Whisk egg whites and sugar at medium high speed till firm and smooth.",
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
                         "equipment": [
                             {
                                 "id": 404661,
                                 "name": "whisk",
                                 "localizedName": "whisk",
                                 "image": "whisk.png"
                             }
                         ]
                     },
                     {
                         "number": 3,
                         "step": "Use hand to fold one quarter of beaten egg whites to the flour mixture evenly and remaining egg white in two batches.",
                         "ingredients": [
                             {
                                 "id": 1124,
                                 "name": "egg whites",
                                 "localizedName": "egg whites",
                                 "image": "egg-white.jpg"
                             },
                             {
                                 "id": 20081,
                                 "name": "all purpose flour",
                                 "localizedName": "all purpose flour",
                                 "image": "flour.png"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 4,
                         "step": "Lastly add in melted butter in two batches and mix well with a rubber spatula follow by the dried apricots and dried cranberries.",
                         "ingredients": [
                             {
                                 "id": 9079,
                                 "name": "dried cranberries",
                                 "localizedName": "dried cranberries",
                                 "image": "dried-cranberries.jpg"
                             },
                             {
                                 "id": 9032,
                                 "name": "dried apricots",
                                 "localizedName": "dried apricots",
                                 "image": "dried-apricots.jpg"
                             },
                             {
                                 "id": 1001,
                                 "name": "butter",
                                 "localizedName": "butter",
                                 "image": "butter-sliced.jpg"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404642,
                                 "name": "spatula",
                                 "localizedName": "spatula",
                                 "image": "spatula-or-turner.jpg"
                             }
                         ]
                     },
                     {
                         "number": 5,
                         "step": "Pour mixture into a 7 inch (lined) round cake pan and sprinkle more dried apricots and dried cranberries over it.",
                         "ingredients": [
                             {
                                 "id": 9079,
                                 "name": "dried cranberries",
                                 "localizedName": "dried cranberries",
                                 "image": "dried-cranberries.jpg"
                             },
                             {
                                 "id": 9032,
                                 "name": "dried apricots",
                                 "localizedName": "dried apricots",
                                 "image": "dried-apricots.jpg"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404747,
                                 "name": "cake form",
                                 "localizedName": "cake form",
                                 "image": "cake-pan.png"
                             }
                         ]
                     },
                     {
                         "number": 6,
                         "step": "Bake at preheated oven 170C for about 30-35 minutes or until skewer inserted comes out clean. Leave cake to cool in pan for 15 minutes and remove to wire rack to cool down completely.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 405900,
                                 "name": "wire rack",
                                 "localizedName": "wire rack",
                                 "image": "wire-rack.jpg"
                             },
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg",
                                 "temperature": {
                                     "number": 170.0,
                                     "unit": "Celsius"
                                 }
                             },
                             {
                                 "id": 3065,
                                 "name": "skewers",
                                 "localizedName": "skewers",
                                 "image": "wooden-skewers.jpg"
                             },
                             {
                                 "id": 404645,
                                 "name": "frying pan",
                                 "localizedName": "frying pan",
                                 "image": "pan.png"
                             }
                         ],
                         "length": {
                             "number": 50,
                             "unit": "minutes"
                         }
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/wholemeal-cake-665303"
     },
     {
         "vegetarian": true,
         "vegan": false,
         "glutenFree": false,
         "dairyFree": true,
         "veryHealthy": false,
         "cheap": false,
         "veryPopular": false,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 3,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 13,
         "healthScore": 2,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 19.16,
         "extendedIngredients": [
             {
                 "id": 18369,
                 "aisle": "Baking",
                 "image": "white-powder.jpg",
                 "consistency": "SOLID",
                 "name": "baking powder",
                 "nameClean": "baking powder",
                 "original": "1 teaspoon Baking Powder",
                 "originalName": "Baking Powder",
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
                 "id": 9040,
                 "aisle": "Produce",
                 "image": "bananas.jpg",
                 "consistency": "SOLID",
                 "name": "bananas",
                 "nameClean": "banana",
                 "original": "3 mashed very ripe bananas (approximately 1 cup)",
                 "originalName": "mashed very ripe bananas (approximately 1 cup)",
                 "amount": 3.0,
                 "unit": "",
                 "meta": [
                     "very ripe",
                     "mashed",
                     "(approximately 1 cup)"
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
                 "id": 9078,
                 "aisle": "Produce",
                 "image": "cranberries.jpg",
                 "consistency": "SOLID",
                 "name": "cranberries",
                 "nameClean": "cranberries",
                 "original": "1 cup fresh or frozen cranberries, cut in half",
                 "originalName": "fresh or frozen cranberries, cut in half",
                 "amount": 1.0,
                 "unit": "cup",
                 "meta": [
                     "fresh",
                     "cut in half"
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
                 "id": 1123,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "egg.png",
                 "consistency": "SOLID",
                 "name": "eggs",
                 "nameClean": "egg",
                 "original": "2 eggs",
                 "originalName": "eggs",
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
                 "id": 20081,
                 "aisle": "Baking",
                 "image": "flour.png",
                 "consistency": "SOLID",
                 "name": "flour",
                 "nameClean": "wheat flour",
                 "original": "1 1/2 cups Flour",
                 "originalName": "Flour",
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
             },
             {
                 "id": 12511111,
                 "aisle": "Baking",
                 "image": "extract.png",
                 "consistency": "LIQUID",
                 "name": "orange extract",
                 "nameClean": "orange extract",
                 "original": "1 tsp pure orange extract",
                 "originalName": "pure orange extract",
                 "amount": 1.0,
                 "unit": "tsp",
                 "meta": [
                     "pure"
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
                 "id": 9216,
                 "aisle": "Produce",
                 "image": "orange-zest.png",
                 "consistency": "SOLID",
                 "name": "orange zest",
                 "nameClean": "orange zest",
                 "original": "1 Tbsp. Orange Zest",
                 "originalName": "Orange Zest",
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
                 "id": 2047,
                 "aisle": "Spices and Seasonings",
                 "image": "salt.jpg",
                 "consistency": "SOLID",
                 "name": "salt",
                 "nameClean": "table salt",
                 "original": "1/2 teaspoon Salt",
                 "originalName": "Salt",
                 "amount": 0.5,
                 "unit": "teaspoon",
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
                 "id": 19335,
                 "aisle": "Baking",
                 "image": "sugar-in-bowl.png",
                 "consistency": "SOLID",
                 "name": "sugar",
                 "nameClean": "sugar",
                 "original": "1/2 cup Sugar",
                 "originalName": "Sugar",
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
                 "id": 9019,
                 "aisle": "Canned and Jarred",
                 "image": "applesauce.png",
                 "consistency": "SOLID",
                 "name": "applesauce",
                 "nameClean": "applesauce",
                 "original": "1/2 cup unsweetened applesauce",
                 "originalName": "unsweetened applesauce",
                 "amount": 0.5,
                 "unit": "cup",
                 "meta": [
                     "unsweetened"
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
                 "id": 2050,
                 "aisle": "Baking",
                 "image": "vanilla-extract.jpg",
                 "consistency": "LIQUID",
                 "name": "vanilla extract",
                 "nameClean": "vanilla extract",
                 "original": "1 teaspoon Vanilla Extract",
                 "originalName": "Vanilla Extract",
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
                 "id": 20080,
                 "aisle": "Baking",
                 "image": "flour.png",
                 "consistency": "SOLID",
                 "name": "flour",
                 "nameClean": "whole wheat flour",
                 "original": "1/2 cup whole wheat flour",
                 "originalName": "whole wheat flour",
                 "amount": 0.5,
                 "unit": "cup",
                 "meta": [
                     "whole wheat"
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
             }
         ],
         "id": 640389,
         "title": "Cranberry Orange Banana Bread",
         "readyInMinutes": 75,
         "servings": 18,
         "sourceUrl": "http://www.foodista.com/recipe/NF8TZYG4/cranberry-orange-banana-bread",
         "image": "https://spoonacular.com/recipeImages/640389-556x370.jpg",
         "imageType": "jpg",
         "summary": "Cranberry Orange Banana Bread might be just the breakfast you are searching for. One serving contains <b>102 calories</b>, <b>2g of protein</b>, and <b>1g of fat</b>. This recipe serves 18. For <b>19 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>1 hour and 15 minutes</b>. It is a good option if you're following a <b>dairy free and lacto ovo vegetarian</b> diet. 13 people found this recipe to be yummy and satisfying. A mixture of flour, vanillan extract, sugar, and a handful of other ingredients are all it takes to make this recipe so flavorful. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so super. Similar recipes include <a href=\"https://spoonacular.com/recipes/cranberry-orange-banana-bread-1789943\">Cranberry Orange Banana Bread</a>, <a href=\"https://spoonacular.com/recipes/cranberry-banana-tea-bread-with-orange-glaze-588394\">Cranberry banana tea bread with orange glaze</a>, and <a href=\"https://spoonacular.com/recipes/cranberry-orange-bread-with-a-light-orange-glaze-620089\">Cranberry Orange Bread with a Light Orange Glaze</a>.",
         "cuisines": [],
         "dishTypes": [
             "morning meal",
             "dessert",
             "brunch",
             "breakfast"
         ],
         "diets": [
             "dairy free",
             "lacto ovo vegetarian"
         ],
         "occasions": [],
         "instructions": "<ol><li>Mix together dry ingredients until well combined.</li><li>In a separate bowl, mix eggs, applesauce, vanilla extract, orange extract, orange zest and mashed bananas.</li><li>Stir banana mixture into flour mixture, and then add cranberries.</li><li>Stir carefully</li><li>Bake in a greased loaf pan or (3 mini pans for 30 minutes) for approximately one hour at 350F.</li><li>Bread is done when a toothpick comes out clean.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Mix together dry ingredients until well combined.In a separate bowl, mix eggs, applesauce, vanilla extract, orange extract, orange zest and mashed bananas.Stir banana mixture into flour mixture, and then add cranberries.Stir carefully",
                         "ingredients": [
                             {
                                 "id": 2050,
                                 "name": "vanilla extract",
                                 "localizedName": "vanilla extract",
                                 "image": "vanilla-extract.jpg"
                             },
                             {
                                 "id": 1009040,
                                 "name": "mashed banana",
                                 "localizedName": "mashed banana",
                                 "image": "bananas.jpg"
                             },
                             {
                                 "id": 12511111,
                                 "name": "orange extract",
                                 "localizedName": "orange extract",
                                 "image": "extract.png"
                             },
                             {
                                 "id": 9078,
                                 "name": "cranberries",
                                 "localizedName": "cranberries",
                                 "image": "cranberries.jpg"
                             },
                             {
                                 "id": 9216,
                                 "name": "orange zest",
                                 "localizedName": "orange zest",
                                 "image": "orange-zest.png"
                             },
                             {
                                 "id": 9019,
                                 "name": "applesauce",
                                 "localizedName": "applesauce",
                                 "image": "applesauce.png"
                             },
                             {
                                 "id": 9040,
                                 "name": "banana",
                                 "localizedName": "banana",
                                 "image": "bananas.jpg"
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
                                 "id": 404783,
                                 "name": "bowl",
                                 "localizedName": "bowl",
                                 "image": "bowl.jpg"
                             }
                         ]
                     },
                     {
                         "number": 2,
                         "step": "Bake in a greased loaf pan or (3 mini pans for 30 minutes) for approximately one hour at 350F.Bread is done when a toothpick comes out clean.",
                         "ingredients": [
                             {
                                 "id": 18064,
                                 "name": "bread",
                                 "localizedName": "bread",
                                 "image": "white-bread.jpg"
                             }
                         ],
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
                                     "number": 350.0,
                                     "unit": "Fahrenheit"
                                 }
                             },
                             {
                                 "id": 404715,
                                 "name": "loaf pan",
                                 "localizedName": "loaf pan",
                                 "image": "loaf-pan.png"
                             }
                         ],
                         "length": {
                             "number": 90,
                             "unit": "minutes"
                         }
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/cranberry-orange-banana-bread-640389"
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
         "weightWatcherSmartPoints": 23,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 7,
         "healthScore": 3,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 171.08,
         "extendedIngredients": [
             {
                 "id": 12071,
                 "aisle": "Baking",
                 "image": "marzipan-or-almond-paste.jpg",
                 "consistency": "SOLID",
                 "name": "almond paste",
                 "nameClean": "almond paste",
                 "original": "3 ounces almond paste, crumbled",
                 "originalName": "almond paste, crumbled",
                 "amount": 3.0,
                 "unit": "ounces",
                 "meta": [
                     "crumbled"
                 ],
                 "measures": {
                     "us": {
                         "amount": 3.0,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 85.049,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "1/2 cup - Brown Sugar",
                 "originalName": "Brown Sugar",
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
                 "id": 1123,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "egg.png",
                 "consistency": "SOLID",
                 "name": "brown eggs",
                 "nameClean": "egg",
                 "original": "4 large brown eggs",
                 "originalName": "brown eggs",
                 "amount": 4.0,
                 "unit": "large",
                 "meta": [],
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
                 "id": 1053,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "fluid-cream.jpg",
                 "consistency": "LIQUID",
                 "name": "heavy cream",
                 "nameClean": "cream",
                 "original": "2 cups heavy cream",
                 "originalName": "heavy cream",
                 "amount": 2.0,
                 "unit": "cups",
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
                 "id": 10018338,
                 "aisle": "Refrigerated;Frozen",
                 "image": "dough.jpg",
                 "consistency": "SOLID",
                 "name": "pastry crust",
                 "nameClean": "shortcrust pastry",
                 "original": "Pastry crust",
                 "originalName": "Pastry crust",
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
                 "id": 9236,
                 "aisle": "Produce",
                 "image": "peach.png",
                 "consistency": "SOLID",
                 "name": "cut up peaches",
                 "nameClean": "peach",
                 "original": "3 cups cut up peaches, large chunks",
                 "originalName": "cut up peaches, large chunks",
                 "amount": 3.0,
                 "unit": "cups",
                 "meta": [],
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
                 "id": 2050,
                 "aisle": "Baking",
                 "image": "vanilla-extract.jpg",
                 "consistency": "LIQUID",
                 "name": "vanilla extract",
                 "nameClean": "vanilla extract",
                 "original": "1 tablespoon vanilla extract",
                 "originalName": "vanilla extract",
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
             }
         ],
         "id": 655145,
         "title": "Peach Pie",
         "readyInMinutes": 45,
         "servings": 6,
         "sourceUrl": "http://www.foodista.com/recipe/V45YG86D/peach-pie",
         "image": "https://spoonacular.com/recipeImages/655145-556x370.jpg",
         "imageType": "jpg",
         "summary": "Peach Pie might be a good recipe to expand your dessert recipe box. One serving contains <b>547 calories</b>, <b>10g of protein</b>, and <b>37g of fat</b>. This recipe serves 6 and costs $1.71 per serving. Not a lot of people made this recipe, and 7 would say it hit the spot. A mixture of almond paste, vanillan extract, pastry crust, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. Overall, this recipe earns a <b>rather bad spoonacular score of 34%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/freezer-peach-pie-filling-and-pie-freezing-method-135405\">Freezer Peach Pie Filling and Pie Freezing Method</a>, <a href=\"https://spoonacular.com/recipes/peach-pie-recipe-lattice-top-pie-69160\">Peach Pie Recipe (lattice-top Pie)</a>, and <a href=\"https://spoonacular.com/recipes/peach-pie-69683\">Peach Pie</a>.",
         "cuisines": [],
         "dishTypes": [
             "dessert"
         ],
         "diets": [
             "lacto ovo vegetarian"
         ],
         "occasions": [],
         "instructions": "<ol><li>Preheat the oven at 375. Place the pastry dough on a 9 inch round pie plate. Poke lightly the pastry and prebake for 8 minutes in the hot oven. Remove and set aside.</li><li>In a large bowl mix together the eggs, almond paste, heavy cream, brown sugar and vanilla extract.</li><li>Add the cut up peaches to the pastry shell, cover with the eggs mixture.</li><li>Bake at 350 for 45 minutes, or until the middle is solid firm.</li></ol>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Preheat the oven at 37",
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
                         "step": "Place the pastry dough on a 9 inch round pie plate. Poke lightly the pastry and prebake for 8 minutes in the hot oven.",
                         "ingredients": [
                             {
                                 "id": 10018338,
                                 "name": "pastry dough",
                                 "localizedName": "pastry dough",
                                 "image": "dough.jpg"
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
                             "number": 8,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 3,
                         "step": "Remove and set aside.In a large bowl mix together the eggs, almond paste, heavy cream, brown sugar and vanilla extract.",
                         "ingredients": [
                             {
                                 "id": 2050,
                                 "name": "vanilla extract",
                                 "localizedName": "vanilla extract",
                                 "image": "vanilla-extract.jpg"
                             },
                             {
                                 "id": 12071,
                                 "name": "almond paste",
                                 "localizedName": "almond paste",
                                 "image": "marzipan-or-almond-paste.jpg"
                             },
                             {
                                 "id": 19334,
                                 "name": "brown sugar",
                                 "localizedName": "brown sugar",
                                 "image": "dark-brown-sugar.png"
                             },
                             {
                                 "id": 1053,
                                 "name": "heavy cream",
                                 "localizedName": "heavy cream",
                                 "image": "fluid-cream.jpg"
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
                                 "id": 404783,
                                 "name": "bowl",
                                 "localizedName": "bowl",
                                 "image": "bowl.jpg"
                             }
                         ]
                     },
                     {
                         "number": 4,
                         "step": "Add the cut up peaches to the pastry shell, cover with the eggs mixture.",
                         "ingredients": [
                             {
                                 "id": 0,
                                 "name": "pastry shells",
                                 "localizedName": "pastry shells",
                                 "image": "tartlet-shells.jpg"
                             },
                             {
                                 "id": 9236,
                                 "name": "peach",
                                 "localizedName": "peach",
                                 "image": "peach.png"
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
                         "number": 5,
                         "step": "Bake at 350 for 45 minutes, or until the middle is solid firm.",
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
                             "number": 45,
                             "unit": "minutes"
                         }
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/peach-pie-655145"
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
         "weightWatcherSmartPoints": 14,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 13,
         "healthScore": 0,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 52.21,
         "extendedIngredients": [
             {
                 "id": 1001,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "butter-sliced.jpg",
                 "consistency": "SOLID",
                 "name": "butter",
                 "nameClean": "butter",
                 "original": "125g Butter, softened",
                 "originalName": "Butter, softened",
                 "amount": 125.0,
                 "unit": "g",
                 "meta": [
                     "softened"
                 ],
                 "measures": {
                     "us": {
                         "amount": 4.409,
                         "unitShort": "oz",
                         "unitLong": "ounces"
                     },
                     "metric": {
                         "amount": 125.0,
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
                 "original": "220g (1 cup) Sugar",
                 "originalName": "220g Sugar",
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
                 "id": 1123,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "egg.png",
                 "consistency": "SOLID",
                 "name": "eggs",
                 "nameClean": "egg",
                 "original": "2 Large eggs",
                 "originalName": "Large eggs",
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
                 "id": 20129,
                 "aisle": "Baking",
                 "image": "flour.png",
                 "consistency": "SOLID",
                 "name": "self raising flour",
                 "nameClean": "self rising flour",
                 "original": "160g (1 1/4cup) Self raising flour",
                 "originalName": "160g Self raising flour",
                 "amount": 1.25,
                 "unit": "cup",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.25,
                         "unitShort": "cups",
                         "unitLong": "cups"
                     },
                     "metric": {
                         "amount": 295.735,
                         "unitShort": "ml",
                         "unitLong": "milliliters"
                     }
                 }
             },
             {
                 "id": 12104,
                 "aisle": "Produce",
                 "image": "coconut.jpg",
                 "consistency": "SOLID",
                 "name": "dessicated coconut",
                 "nameClean": "coconut",
                 "original": "30g (1/4 cup) Dessicated coconut",
                 "originalName": "30g Dessicated coconut",
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
                 "id": 1001116,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "plain-yogurt.jpg",
                 "consistency": "LIQUID",
                 "name": "natural yoghurt",
                 "nameClean": "plain yogurt",
                 "original": "100ml (1/2 cup) Natural yoghurt",
                 "originalName": "100ml Natural yoghurt",
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
                 "id": 9152,
                 "aisle": "Produce",
                 "image": "lemon-juice.jpg",
                 "consistency": "LIQUID",
                 "name": "juice of lemon",
                 "nameClean": "lemon juice",
                 "original": "finely grated rind and juice of 1 lemon (35-38g lemon juice)",
                 "originalName": "finely grated rind and juice of lemon (35-38g lemon juice)",
                 "amount": 1.0,
                 "unit": "",
                 "meta": [
                     "finely grated",
                     "(35-38g lemon juice)"
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
                 "id": 9316,
                 "aisle": "Produce",
                 "image": "strawberries.png",
                 "consistency": "SOLID",
                 "name": "strawberries",
                 "nameClean": "strawberries",
                 "original": "150g Fresh strawberries, cut into quarters",
                 "originalName": "Fresh strawberries, cut into quarters",
                 "amount": 150.0,
                 "unit": "g",
                 "meta": [
                     "fresh",
                     "cut into quarters"
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
         "id": 649504,
         "title": "Lemon and Strawberry Loaf",
         "readyInMinutes": 45,
         "servings": 8,
         "sourceUrl": "https://www.foodista.com/recipe/4QX66SGC/lemon-and-strawberry-loaf",
         "image": "https://spoonacular.com/recipeImages/649504-556x370.jpg",
         "imageType": "jpg",
         "summary": "Need a <b>lacto ovo vegetarian side dish</b>? Lemon and Strawberry Loaf could be an outstanding recipe to try. This recipe makes 8 servings with <b>320 calories</b>, <b>5g of protein</b>, and <b>16g of fat</b> each. For <b>52 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 13 fans. It is perfect for <b>Mother's Day</b>. If you have butter, natural yoghurt, self raising flour, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 19%</b>, which is rather bad. Similar recipes are <a href=\"https://spoonacular.com/recipes/strawberry-lemon-loaf-cake-1729277\">Strawberry Lemon Loaf Cake</a>, <a href=\"https://spoonacular.com/recipes/glazed-strawberry-lemon-loaf-858918\">Glazed Strawberry Lemon Loaf</a>, and <a href=\"https://spoonacular.com/recipes/lemon-poppy-seed-loaf-with-vanilla-lemon-glaze-769978\">Lemon Poppy Seed Loaf with Vanilla Lemon Glaze</a>.",
         "cuisines": [],
         "dishTypes": [
             "side dish"
         ],
         "diets": [
             "lacto ovo vegetarian"
         ],
         "occasions": [
             "mother's day"
         ],
         "instructions": "Preheat the oven to 180C. Line a 23cm x 12cm loaf tin with baking paper.\nBeat butter and sugar until pale and creamy. Add eggs, one at a time beating well after each addition. Then add lemon rind and juice.\nStir in flour, dessicated coconut, yoghurt and strawberries with a rubber spatula.\nPour mixture into loaf tin and smooth the top.\nBake for 50-60 minutes or until a skewer inserted in the centre comes out clean.\nCool in the tin for 10 minutes, then turn out onto a wire rack to cool completely.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Preheat the oven to 180C. Line a 23cm x 12cm loaf tin with baking paper.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404770,
                                 "name": "baking paper",
                                 "localizedName": "baking paper",
                                 "image": "baking-paper.jpg"
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
                         ]
                     },
                     {
                         "number": 2,
                         "step": "Beat butter and sugar until pale and creamy.",
                         "ingredients": [
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
                         "equipment": []
                     },
                     {
                         "number": 3,
                         "step": "Add eggs, one at a time beating well after each addition. Then add lemon rind and juice.",
                         "ingredients": [
                             {
                                 "id": 9156,
                                 "name": "lemon peel",
                                 "localizedName": "lemon peel",
                                 "image": "zest-lemon.jpg"
                             },
                             {
                                 "id": 1019016,
                                 "name": "juice",
                                 "localizedName": "juice",
                                 "image": "apple-juice.jpg"
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
                         "number": 4,
                         "step": "Stir in flour, dessicated coconut, yoghurt and strawberries with a rubber spatula.",
                         "ingredients": [
                             {
                                 "id": 9316,
                                 "name": "strawberries",
                                 "localizedName": "strawberries",
                                 "image": "strawberries.png"
                             },
                             {
                                 "id": 12104,
                                 "name": "coconut",
                                 "localizedName": "coconut",
                                 "image": "coconut.jpg"
                             },
                             {
                                 "id": 1116,
                                 "name": "yogurt",
                                 "localizedName": "yogurt",
                                 "image": "plain-yogurt.jpg"
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
                                 "id": 404642,
                                 "name": "spatula",
                                 "localizedName": "spatula",
                                 "image": "spatula-or-turner.jpg"
                             }
                         ]
                     },
                     {
                         "number": 5,
                         "step": "Pour mixture into loaf tin and smooth the top.",
                         "ingredients": [],
                         "equipment": []
                     },
                     {
                         "number": 6,
                         "step": "Bake for 50-60 minutes or until a skewer inserted in the centre comes out clean.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 404784,
                                 "name": "oven",
                                 "localizedName": "oven",
                                 "image": "oven.jpg"
                             },
                             {
                                 "id": 3065,
                                 "name": "skewers",
                                 "localizedName": "skewers",
                                 "image": "wooden-skewers.jpg"
                             }
                         ],
                         "length": {
                             "number": 60,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 7,
                         "step": "Cool in the tin for 10 minutes, then turn out onto a wire rack to cool completely.",
                         "ingredients": [],
                         "equipment": [
                             {
                                 "id": 405900,
                                 "name": "wire rack",
                                 "localizedName": "wire rack",
                                 "image": "wire-rack.jpg"
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
         "spoonacularSourceUrl": "https://spoonacular.com/lemon-and-strawberry-loaf-649504"
     },
     {
         "vegetarian": true,
         "vegan": false,
         "glutenFree": false,
         "dairyFree": false,
         "veryHealthy": true,
         "cheap": false,
         "veryPopular": true,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 15,
         "gaps": "no",
         "preparationMinutes": 5,
         "cookingMinutes": 0,
         "aggregateLikes": 689,
         "healthScore": 64,
         "creditsText": "Jen West",
         "sourceName": "Pink When",
         "pricePerServing": 206.79,
         "extendedIngredients": [
             {
                 "id": 1009040,
                 "aisle": "Produce",
                 "image": "bananas.jpg",
                 "consistency": "SOLID",
                 "name": "banana",
                 "nameClean": "mashed banana",
                 "original": "¼ cup mashed banana",
                 "originalName": "mashed banana",
                 "amount": 0.25,
                 "unit": "cup",
                 "meta": [
                     "mashed"
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
                 "id": 10018617,
                 "aisle": "Sweet Snacks;Baking",
                 "image": "graham-crackers.jpg",
                 "consistency": "SOLID",
                 "name": "graham cracker crumbs",
                 "nameClean": "graham cracker crumbs",
                 "original": "2 tbsp graham cracker crumbs",
                 "originalName": "graham cracker crumbs",
                 "amount": 2.0,
                 "unit": "tbsp",
                 "meta": [],
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
                 "id": 16223,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "soy-milk.jpg",
                 "consistency": "LIQUID",
                 "name": "soy milk",
                 "nameClean": "soymilk",
                 "original": "1 cup soy milk",
                 "originalName": "soy milk",
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
                 "id": 9316,
                 "aisle": "Produce",
                 "image": "strawberries.png",
                 "consistency": "SOLID",
                 "name": "strawberries",
                 "nameClean": "strawberries",
                 "original": "½ cup strawberries",
                 "originalName": "strawberries",
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
                 "id": 1119,
                 "aisle": "Milk, Eggs, Other Dairy",
                 "image": "vanilla-yogurt.png",
                 "consistency": "LIQUID",
                 "name": "vanilla yogurt",
                 "nameClean": "vanilla yogurt",
                 "original": "1 container vanilla yogurt",
                 "originalName": "vanilla yogurt",
                 "amount": 1.0,
                 "unit": "container",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 1.0,
                         "unitShort": "container",
                         "unitLong": "container"
                     },
                     "metric": {
                         "amount": 1.0,
                         "unitShort": "container",
                         "unitLong": "container"
                     }
                 }
             }
         ],
         "id": 715497,
         "title": "Berry Banana Breakfast Smoothie",
         "readyInMinutes": 5,
         "servings": 1,
         "sourceUrl": "http://www.pinkwhen.com/berry-banana-breakfast-smoothie/",
         "image": "https://spoonacular.com/recipeImages/715497-556x370.jpg",
         "imageType": "jpg",
         "summary": "If you want to add more <b>lacto ovo vegetarian</b> recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about <b>21g of protein</b>, <b>10g of fat</b>, and a total of <b>457 calories</b>. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is brought to you by Pink When. Overall, this recipe earns a <b>super spoonacular score of 99%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145\">Berry Banana Breakfast Smoothie</a>, <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583\">Berry Banana Breakfast Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311\">Berry Banana Breakfast Smoothie</a>.",
         "cuisines": [],
         "dishTypes": [
             "morning meal",
             "brunch",
             "beverage",
             "breakfast",
             "drink"
         ],
         "diets": [
             "lacto ovo vegetarian"
         ],
         "occasions": [],
         "instructions": "<p>Take some yogurt in your favorite flavor and add 1 container to your blender. Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.</p>",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Take some yogurt in your favorite flavor and add 1 container to your blender.",
                         "ingredients": [
                             {
                                 "id": 1116,
                                 "name": "yogurt",
                                 "localizedName": "yogurt",
                                 "image": "plain-yogurt.jpg"
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
                         "number": 2,
                         "step": "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.",
                         "ingredients": [
                             {
                                 "id": 10018617,
                                 "name": "graham cracker crumbs",
                                 "localizedName": "graham cracker crumbs",
                                 "image": "graham-crackers.jpg"
                             },
                             {
                                 "id": 16223,
                                 "name": "soymilk",
                                 "localizedName": "soymilk",
                                 "image": "soy-milk.jpg"
                             },
                             {
                                 "id": 1009054,
                                 "name": "berries",
                                 "localizedName": "berries",
                                 "image": "berries-mixed.jpg"
                             },
                             {
                                 "id": 9040,
                                 "name": "banana",
                                 "localizedName": "banana",
                                 "image": "bananas.jpg"
                             }
                         ],
                         "equipment": []
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/berry-banana-breakfast-smoothie-715497"
     },
     {
         "vegetarian": false,
         "vegan": false,
         "glutenFree": false,
         "dairyFree": true,
         "veryHealthy": true,
         "cheap": false,
         "veryPopular": false,
         "sustainable": false,
         "lowFodmap": false,
         "weightWatcherSmartPoints": 14,
         "gaps": "no",
         "preparationMinutes": -1,
         "cookingMinutes": -1,
         "aggregateLikes": 6,
         "healthScore": 59,
         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
         "license": "CC BY 3.0",
         "sourceName": "Foodista",
         "pricePerServing": 289.53,
         "extendedIngredients": [
             {
                 "id": 10013346,
                 "aisle": "Meat",
                 "image": "beef-brisket.png",
                 "consistency": "SOLID",
                 "name": "corned beef brisket",
                 "nameClean": "corned beef brisket",
                 "original": "2 pounds corned beef brisket",
                 "originalName": "corned beef brisket",
                 "amount": 2.0,
                 "unit": "pounds",
                 "meta": [],
                 "measures": {
                     "us": {
                         "amount": 2.0,
                         "unitShort": "lb",
                         "unitLong": "pounds"
                     },
                     "metric": {
                         "amount": 907.185,
                         "unitShort": "g",
                         "unitLong": "grams"
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
                 "original": "1 pound carrots, roughly chopped",
                 "originalName": "carrots, roughly chopped",
                 "amount": 1.0,
                 "unit": "pound",
                 "meta": [
                     "roughly chopped"
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
                 "id": 11298,
                 "aisle": "Produce",
                 "image": "parsnip.jpg",
                 "consistency": "SOLID",
                 "name": "parsnips",
                 "nameClean": "parsnip",
                 "original": "1 pound parsnips, roughly chopped",
                 "originalName": "parsnips, roughly chopped",
                 "amount": 1.0,
                 "unit": "pound",
                 "meta": [
                     "roughly chopped"
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
                 "id": 11352,
                 "aisle": "Produce",
                 "image": "potatoes-yukon-gold.png",
                 "consistency": "SOLID",
                 "name": "potatoes",
                 "nameClean": "potato",
                 "original": "3 large potatoes, peeled and quartered",
                 "originalName": "potatoes, peeled and quartered",
                 "amount": 3.0,
                 "unit": "large",
                 "meta": [
                     "peeled",
                     "quartered"
                 ],
                 "measures": {
                     "us": {
                         "amount": 3.0,
                         "unitShort": "large",
                         "unitLong": "larges"
                     },
                     "metric": {
                         "amount": 3.0,
                         "unitShort": "large",
                         "unitLong": "larges"
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
                 "original": "2 cloves garlic, minced",
                 "originalName": "garlic, minced",
                 "amount": 2.0,
                 "unit": "cloves",
                 "meta": [
                     "minced"
                 ],
                 "measures": {
                     "us": {
                         "amount": 2.0,
                         "unitShort": "cloves",
                         "unitLong": "cloves"
                     },
                     "metric": {
                         "amount": 2.0,
                         "unitShort": "cloves",
                         "unitLong": "cloves"
                     }
                 }
             },
             {
                 "id": 93619,
                 "aisle": "Alcoholic Beverages",
                 "image": "guinness.png",
                 "consistency": "LIQUID",
                 "name": "guinness",
                 "nameClean": "stout",
                 "original": "2 cups Guinness",
                 "originalName": "Guinness",
                 "amount": 2.0,
                 "unit": "cups",
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
                 "id": 6008,
                 "aisle": "Canned and Jarred",
                 "image": "beef-broth.png",
                 "consistency": "LIQUID",
                 "name": "beef broth",
                 "nameClean": "beef broth",
                 "original": "2 cups beef broth",
                 "originalName": "beef broth",
                 "amount": 2.0,
                 "unit": "cups",
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
                 "id": 1032027,
                 "aisle": "Spices and Seasonings",
                 "image": "seasoning.png",
                 "consistency": "SOLID",
                 "name": "pickling spice",
                 "nameClean": "seasoning mix",
                 "original": "2 tablespoons pickling spice",
                 "originalName": "pickling spice",
                 "amount": 2.0,
                 "unit": "tablespoons",
                 "meta": [],
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
                 "id": 19334,
                 "aisle": "Baking",
                 "image": "light-brown-sugar.jpg",
                 "consistency": "SOLID",
                 "name": "brown sugar",
                 "nameClean": "golden brown sugar",
                 "original": "1 tablespoon brown sugar",
                 "originalName": "brown sugar",
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
                 "id": 99227,
                 "aisle": "Condiments",
                 "image": "regular-mustard.jpg",
                 "consistency": "LIQUID",
                 "name": "spicy honey mustard",
                 "nameClean": "honey mustard",
                 "original": "3 spicy honey mustard",
                 "originalName": "spicy honey mustard",
                 "amount": 3.0,
                 "unit": "",
                 "meta": [],
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
             }
         ],
         "id": 646034,
         "title": "Guinness Braised Corned Beef and Cabbage",
         "readyInMinutes": 45,
         "servings": 6,
         "sourceUrl": "https://www.foodista.com/recipe/5NNYR6RD/guinness-braised-corned-beef-and-cabbage",
         "image": "https://spoonacular.com/recipeImages/646034-556x370.jpg",
         "imageType": "jpg",
         "summary": "Guinness Braised Corned Beef and Cabbage might be a good recipe to expand your main course recipe box. This recipe serves 6. Watching your figure? This dairy free recipe has <b>585 calories</b>, <b>29g of protein</b>, and <b>23g of fat</b> per serving. For <b>$2.9 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. It is perfect for <b>st. patrick day</b>. This recipe from Foodista requires corned beef brisket, guinness, bay leaf, and brown sugar. 6 people found this recipe to be flavorful and satisfying. It is a <b>budget friendly</b> recipe for fans of European food. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns an <b>amazing spoonacular score of 89%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/guinness-corned-beef-and-cabbage-555600\">Guinness Corned Beef and Cabbage</a>, <a href=\"https://spoonacular.com/recipes/guinness-corned-beef-and-cabbage-431963\">Guinness Corned Beef and Cabbage</a>, and <a href=\"https://spoonacular.com/recipes/guinness-corned-beef-with-cabbage-602471\">Guinness Corned Beef with Cabbage</a>.",
         "cuisines": [
             "European",
             "Irish"
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
         "occasions": [
             "father's day",
             "st patricks day"
         ],
         "instructions": "Season both sides of the corned beef liberally with pepper. The corning of the beef makes the beef salty enough, so no need to add more.\nHeat 1 TBSP oil in a large, shallow oven-safe pot over medium-high heat. Add beef and sear each side for about 3 minutes, just to develop a nice brown crust. This will seal in the beef's juices.\nRemove beef to a plate. Pour guinness into the pot to deglaze. Scrape up any browned bits. Add beef broth, pickling spice, brown sugar, bay leaf, and minced garlic. Bring mixture up to a simmer.\nReturn the beef to the pot with any additional juices that have accumulated on the plate.\nCover the pot and place on the bottom rack in your oven. Bake for 2 1/2 - 3 hours, or until a fork can easily be inserted into the meat.\nBaste the meat with the surrounding juices every 30 minutes or so.\nAfter 2 hours, add carrots, parsnips, and potatoes to the pot. They will only take about 25-30 minutes of simmering to cook.\nRemove pot from the oven. Place beef on a cutting board and let it rest for 15 minutes before carving into thin slices (cut against the grain of the meat). Remove vegetables and arrange them on a serving platter. Cover with foil. Place the pot on the burner and bring sauce to a boil. Add cabbage and cook for about 7 minutes, until it has softened. Place the cabbage on the serving platter with the other vegetables.\nStrain the sauce in the pot and stir in 2 or 3 TBSP of spicy honey mustard until dissolved. Place in a small dish or gravy boat with a ladle and serve alongside the beef.\nAfter slicing the beef and arranging it on the serving platter, ladle the guinness mustard sauce over the top to rehydrate and glaze the beef and vegetables.",
         "analyzedInstructions": [
             {
                 "name": "",
                 "steps": [
                     {
                         "number": 1,
                         "step": "Season both sides of the corned beef liberally with pepper. The corning of the beef makes the beef salty enough, so no need to add more.",
                         "ingredients": [
                             {
                                 "id": 13346,
                                 "name": "corned beef",
                                 "localizedName": "corned beef",
                                 "image": "corned-beef.png"
                             },
                             {
                                 "id": 1002030,
                                 "name": "pepper",
                                 "localizedName": "pepper",
                                 "image": "pepper.jpg"
                             },
                             {
                                 "id": 23572,
                                 "name": "beef",
                                 "localizedName": "beef",
                                 "image": "beef-cubes-raw.png"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 2,
                         "step": "Heat 1 TBSP oil in a large, shallow oven-safe pot over medium-high heat.",
                         "ingredients": [
                             {
                                 "id": 4582,
                                 "name": "cooking oil",
                                 "localizedName": "cooking oil",
                                 "image": "vegetable-oil.jpg"
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
                         "number": 3,
                         "step": "Add beef and sear each side for about 3 minutes, just to develop a nice brown crust. This will seal in the beef's juices.",
                         "ingredients": [
                             {
                                 "id": 0,
                                 "name": "crust",
                                 "localizedName": "crust",
                                 "image": ""
                             },
                             {
                                 "id": 23572,
                                 "name": "beef",
                                 "localizedName": "beef",
                                 "image": "beef-cubes-raw.png"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 3,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 4,
                         "step": "Remove beef to a plate.",
                         "ingredients": [
                             {
                                 "id": 23572,
                                 "name": "beef",
                                 "localizedName": "beef",
                                 "image": "beef-cubes-raw.png"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 5,
                         "step": "Pour guinness into the pot to deglaze. Scrape up any browned bits.",
                         "ingredients": [
                             {
                                 "id": 93619,
                                 "name": "guinness",
                                 "localizedName": "guinness",
                                 "image": "guinness.png"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404752,
                                 "name": "pot",
                                 "localizedName": "pot",
                                 "image": "stock-pot.jpg"
                             }
                         ]
                     },
                     {
                         "number": 6,
                         "step": "Add beef broth, pickling spice, brown sugar, bay leaf, and minced garlic. Bring mixture up to a simmer.",
                         "ingredients": [
                             {
                                 "id": 0,
                                 "name": "minced garlic",
                                 "localizedName": "minced garlic",
                                 "image": "garlic.png"
                             },
                             {
                                 "id": 19334,
                                 "name": "brown sugar",
                                 "localizedName": "brown sugar",
                                 "image": "dark-brown-sugar.png"
                             },
                             {
                                 "id": 6008,
                                 "name": "beef broth",
                                 "localizedName": "beef broth",
                                 "image": "beef-broth.png"
                             },
                             {
                                 "id": 2004,
                                 "name": "bay leaves",
                                 "localizedName": "bay leaves",
                                 "image": "bay-leaves.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 7,
                         "step": "Return the beef to the pot with any additional juices that have accumulated on the plate.",
                         "ingredients": [
                             {
                                 "id": 23572,
                                 "name": "beef",
                                 "localizedName": "beef",
                                 "image": "beef-cubes-raw.png"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404752,
                                 "name": "pot",
                                 "localizedName": "pot",
                                 "image": "stock-pot.jpg"
                             }
                         ]
                     },
                     {
                         "number": 8,
                         "step": "Cover the pot and place on the bottom rack in your oven.",
                         "ingredients": [],
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
                         "number": 9,
                         "step": "Bake for 2 1/2 - 3 hours, or until a fork can easily be inserted into the meat.",
                         "ingredients": [
                             {
                                 "id": 1065062,
                                 "name": "meat",
                                 "localizedName": "meat",
                                 "image": "whole-chicken.jpg"
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
                             "number": 180,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 10,
                         "step": "Baste the meat with the surrounding juices every 30 minutes or so.",
                         "ingredients": [
                             {
                                 "id": 1065062,
                                 "name": "meat",
                                 "localizedName": "meat",
                                 "image": "whole-chicken.jpg"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 30,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 11,
                         "step": "After 2 hours, add carrots, parsnips, and potatoes to the pot. They will only take about 25-30 minutes of simmering to cook.",
                         "ingredients": [
                             {
                                 "id": 11298,
                                 "name": "parsnip",
                                 "localizedName": "parsnip",
                                 "image": "parsnip.jpg"
                             },
                             {
                                 "id": 11352,
                                 "name": "potato",
                                 "localizedName": "potato",
                                 "image": "potatoes-yukon-gold.png"
                             },
                             {
                                 "id": 11124,
                                 "name": "carrot",
                                 "localizedName": "carrot",
                                 "image": "sliced-carrot.png"
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
                             "number": 150,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 12,
                         "step": "Remove pot from the oven.",
                         "ingredients": [],
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
                         "number": 13,
                         "step": "Place beef on a cutting board and let it rest for 15 minutes before carving into thin slices (cut against the grain of the meat).",
                         "ingredients": [
                             {
                                 "id": 0,
                                 "name": "grains",
                                 "localizedName": "grains",
                                 "image": ""
                             },
                             {
                                 "id": 23572,
                                 "name": "beef",
                                 "localizedName": "beef",
                                 "image": "beef-cubes-raw.png"
                             },
                             {
                                 "id": 1065062,
                                 "name": "meat",
                                 "localizedName": "meat",
                                 "image": "whole-chicken.jpg"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404716,
                                 "name": "cutting board",
                                 "localizedName": "cutting board",
                                 "image": "cutting-board.jpg"
                             }
                         ],
                         "length": {
                             "number": 15,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 14,
                         "step": "Remove vegetables and arrange them on a serving platter. Cover with foil.",
                         "ingredients": [
                             {
                                 "id": 11583,
                                 "name": "vegetable",
                                 "localizedName": "vegetable",
                                 "image": "mixed-vegetables.png"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404765,
                                 "name": "aluminum foil",
                                 "localizedName": "aluminum foil",
                                 "image": "aluminum-foil.png"
                             }
                         ]
                     },
                     {
                         "number": 15,
                         "step": "Place the pot on the burner and bring sauce to a boil.",
                         "ingredients": [
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404752,
                                 "name": "pot",
                                 "localizedName": "pot",
                                 "image": "stock-pot.jpg"
                             }
                         ]
                     },
                     {
                         "number": 16,
                         "step": "Add cabbage and cook for about 7 minutes, until it has softened.",
                         "ingredients": [
                             {
                                 "id": 11109,
                                 "name": "cabbage",
                                 "localizedName": "cabbage",
                                 "image": "cabbage.jpg"
                             }
                         ],
                         "equipment": [],
                         "length": {
                             "number": 7,
                             "unit": "minutes"
                         }
                     },
                     {
                         "number": 17,
                         "step": "Place the cabbage on the serving platter with the other vegetables.",
                         "ingredients": [
                             {
                                 "id": 11583,
                                 "name": "vegetable",
                                 "localizedName": "vegetable",
                                 "image": "mixed-vegetables.png"
                             },
                             {
                                 "id": 11109,
                                 "name": "cabbage",
                                 "localizedName": "cabbage",
                                 "image": "cabbage.jpg"
                             }
                         ],
                         "equipment": []
                     },
                     {
                         "number": 18,
                         "step": "Strain the sauce in the pot and stir in 2 or 3 TBSP of spicy honey mustard until dissolved.",
                         "ingredients": [
                             {
                                 "id": 99227,
                                 "name": "honey mustard",
                                 "localizedName": "honey mustard",
                                 "image": "regular-mustard.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404752,
                                 "name": "pot",
                                 "localizedName": "pot",
                                 "image": "stock-pot.jpg"
                             }
                         ]
                     },
                     {
                         "number": 19,
                         "step": "Place in a small dish or gravy boat with a ladle and serve alongside the beef.",
                         "ingredients": [
                             {
                                 "id": 6997,
                                 "name": "gravy",
                                 "localizedName": "gravy",
                                 "image": "gravy.jpg"
                             },
                             {
                                 "id": 23572,
                                 "name": "beef",
                                 "localizedName": "beef",
                                 "image": "beef-cubes-raw.png"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 405912,
                                 "name": "gravy boat",
                                 "localizedName": "gravy boat",
                                 "image": "gravy-boat.jpg"
                             },
                             {
                                 "id": 404630,
                                 "name": "ladle",
                                 "localizedName": "ladle",
                                 "image": "ladle.jpg"
                             }
                         ]
                     },
                     {
                         "number": 20,
                         "step": "After slicing the beef and arranging it on the serving platter, ladle the guinness mustard sauce over the top to rehydrate and glaze the beef and vegetables.",
                         "ingredients": [
                             {
                                 "id": 11583,
                                 "name": "vegetable",
                                 "localizedName": "vegetable",
                                 "image": "mixed-vegetables.png"
                             },
                             {
                                 "id": 93619,
                                 "name": "guinness",
                                 "localizedName": "guinness",
                                 "image": "guinness.png"
                             },
                             {
                                 "id": 2046,
                                 "name": "mustard",
                                 "localizedName": "mustard",
                                 "image": "regular-mustard.jpg"
                             },
                             {
                                 "id": 0,
                                 "name": "glaze",
                                 "localizedName": "glaze",
                                 "image": ""
                             },
                             {
                                 "id": 0,
                                 "name": "sauce",
                                 "localizedName": "sauce",
                                 "image": ""
                             },
                             {
                                 "id": 23572,
                                 "name": "beef",
                                 "localizedName": "beef",
                                 "image": "beef-cubes-raw.png"
                             }
                         ],
                         "equipment": [
                             {
                                 "id": 404630,
                                 "name": "ladle",
                                 "localizedName": "ladle",
                                 "image": "ladle.jpg"
                             }
                         ]
                     }
                 ]
             }
         ],
         "originalId": null,
         "spoonacularSourceUrl": "https://spoonacular.com/guinness-braised-corned-beef-and-cabbage-646034"
     }
 ]
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

getRecipes();

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
         const dishTypeGroup = document.createElement("div");
         recipe.classList.add('recipe-header');
         recipe.innerHTML = ` <h3 class = "recipe-title"> ${title}</h3>   
                             <div class = "other-header-info">
                               <h4>${servings} Servings</h4>
                               <h4>${makeTime} Minutes</h4>
                             </div>
                             <i class = "fa-heart fas"></i>   `
         for (const val of dishType) {
             dishTypeGroup.classList.add('dishTypeGroup');
             recipe.dataset.dishtype = val;
             const dishTypePill = document.createElement("div");
             dishTypePill.innerText = val;
             dishTypePill.classList.add('dishtype', 'pill');
             dishTypeGroup.appendChild(dishTypePill);
         }
         recipe.appendChild(dishTypeGroup);
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


