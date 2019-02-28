var data = require('../data.json');

exports.view = function(req, res){
    if (Object.keys(req.query).length !== 0)  {
        var newrecipe = {
            id: req.query.id,
            name: req.query.name,
            imageURL: req.query.imageURL,
            recipeIngredients: req.query.recipeIngredients,
            cookingTime: req.query.cookingTime,
            servingSize: req.query.servingSize,
            steps: req.query.steps

        }           
        data.recipes.push(newrecipe);
        
    };
  res.render('view-all-recipes', data);
};
