var data = require('../data.json');

exports.view = function(req, res){
    if (Object.keys(req.query).length === 1) {
        var id = req.query.id
        var ary = data.recipes
        for (var i = 0; i < ary.length; ++i){
            if (ary[i].id == id) {
                ary.splice(i, 1);
                data.recipes = ary;
                break;
            }
        }
    }
    else if (Object.keys(req.query).length !== 0)  {
        var newrecipe = {
            id: req.query.id,
            name: req.query.name,
            imageURL: req.query.imageURL,
            recipeIngredients: req.query.recipeIngredients,
            cookingTime: req.query.cookingTime,
            servingSize: req.query.servingSize,
            steps: req.query.steps

        }           
        console.log(newrecipe);
        data.recipes.push(newrecipe);
        
    };
  res.render('view-all-recipes', data);
};
