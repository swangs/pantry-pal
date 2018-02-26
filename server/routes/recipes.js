const express = require('express');
const router = express.Router();
const axios = require('axios');
const _ = require('lodash');

const request = axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/',
  headers: {
    'Accept': 'application/json',
    'X-Mashape-Key': process.env.SPOON || 'getyourownapikeyatmashape'
  }
});

// Get recipes
router.get('/findByIngredients', (req, res) => {
  request.get(`findByIngredients?fillIngredients=false&ingredients=${req.query.ingredients}&limitLicense=true&number=25&ranking=2`)
    .then(recipes => res.send(recipes.data))
    .catch(e => res.status(400).json({
      message: 'Request to Spoonacular failed/unauthorized'
    }));
});

router.get('/:id', (req, res) => {
  request.get(`${req.params.id}/information?includeNutrition=true`)
    .then(recipe => res.send(recipe.data))
    .catch(e => res.status(400).json({
      message: 'Request to Spoonacular failed/unauthorized'
    }));
});


module.exports = router;