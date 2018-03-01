# Pantry Pal

[Pantry Pal](https://pantrypal-aa.herokuapp.com) is a web application designed for users to search through a collection of recipes collected through the web, matching based on their ingredients.

# Technologies used:
* Frontend: Angular
* Backend: Node/Express
* Database: MongoDB
* External API: [Spoonacular](https://spoonacular.com/food-api)

# Features

## Ingredient Search
Users are able to add ingredients in their house. The results are updated every time the user adds or deletes an ingredient from their list. Recipes are sorted based on the least ingredients they are missing.

![alt text](https://i.imgur.com/dkVsGBd.gif "search ingredients")

## Backend API
One concern during the creation of our web application was the security of the API key. The JSON Web Token key was already stored securely in the backend as a environment variable.

Originally, the Angular frontend handled the external API requests, but risked malicious users grabbing the API key for their own purposes. The application was then refactored to use a backend route which has access to `process.env` variables to keep the API key safe. Because GET requests do not normally carry bodies, recipe IDs and ingredients were sent through wild card params and queries.

For example:
```typescript
// recipe.service.ts
  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`api/recipes/${id}`);
  }
```

The backend receives this and sends out a request to the external API, keeping the API key secret through config variables:

```javascript
// routes/recipes.js
const request = axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/',
  headers: {
    'Accept': 'application/json',
    'X-Mashape-Key': process.env.SPOON || 'insertapikeyhere'
  }
});

router.get('/:id', (req, res) => {
  request.get(`${req.params.id}/information?includeNutrition=true`)
    .then(recipe => res.send(recipe.data))
    .catch(e => res.status(400).json({
      message: 'Request to Spoonacular failed/unauthorized'
    }));
});
```
## Modular Angular Components
A particular issue we ran into while building our Angular components was Data Binding. Coming from a React-Redux background, passing data and functions between components without a global state or a container mapping props and dispatches was troublesome at first.  After sifting through documentation and clearing out bugs, we had fully functional modular components.

# Future Plans
* Users can favorite recipes for future use
* More accurate filtering of recipes
* Excluding recipes
* Recipe "wishlist" - Ingredients needed for recipes on wishlist can be saved so they can be remembered when grocery shopping

# Team Members
#### [Steven Wang](https://github.com/swangs/)
#### [Katie Noonan](https://github.com/c-noonan)
#### [Jonathan Abantao](https://github.com/jonabantao)
