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
    else if (Object.keys(req.query).length === 2) {
        console.log('here!')
        var id = req.query.id
        var favorite = req.query.fav
        console.log("favorite: "+favorite)
        var ary = data.recipes
        for (var i = 0; i < ary.length; ++i){
            if (ary[i].id == id) {
                console.log('foundhere')
                console.log(ary[i])
                ary[i].fav = favorite;
                console.log(ary[i])
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
            fav : req.query.fav,
            steps: req.query.steps
        }

        console.log(newrecipe);
        data.recipes.push(newrecipe);
        
    };
  res.render('view-all-recipes', data);
};
