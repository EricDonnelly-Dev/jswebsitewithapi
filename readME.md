### 🛠 Requirements:

1. Fetch data from an API (resource provided below) and display up to 30 items from that request in your HTML.
   - [x] In your HTML you will display the array of data you get back (i.e. if it was an array of movies, you would display the list of movies).
   - [x] Display a minimum of 3 values from the object in the array of data you get back for each item. (i.e. movie name, movie description, cover image).
2. - [x]  HTML for each item should be created programmatically. 
    - This means the html is created  based on the data received from the API - if 10 items are fetched, 10 blocks of HTML are created to display the data, etc.
3. - [x] Build a function to add selected items from the array of data to a "favorites" list. i.e.:
        - You fetch a list of 30 movies from an API and display it in a "collection" in your HTML.
        - When a user selects an item(s) from the "collection" to add to the "favorites" list, the item(s) are removed from the collection and added to the "favorites" list.
4. - [x] Build a function to remove an item from the "favorites" list.
     - When a user removes an item from the "favorites" list, the item is added back to the "collection" of items.
5. - [x] Build a toggle function that sorts the items in the collection and "favorites" list alphabetically (A-Z) and vice versa (Z-A).
6.  - [x] You must display the total sum of some piece of data from the list. (i.e. if you had a list of pokemon, you could total the number of common, rare and legendary pokemon in the list). You cannot total the number of items in the array, it must be a value from the data object.
7.  - [x] The website must be built with pure HTML, CSS and JavaScript (no third party css or js libraries).
8. - [x] The items retrieved from the API must be displayed in styled HTML. (i.e. if you were working with the pokeAPI you could display the data in a "card" design with the image, attack, hitpoints, etc).
9.  - [x] The website must be mobile responsive across desktop, ipad/tablet and mobile phones.


### 💡 Tips:
> Fetching data from an API can take a few milliseconds. This means you cannot create the HTML items from your API data until it is done fetching. This also means you cannot add click events to the HTML items before they're created.
    Flow: Fetch data => build HTML items from data => add click events when HTML is done being built.


### 📁 Resources
[Free Public APIs](https://github.com/public-apis/public-apis)

[Element Append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)