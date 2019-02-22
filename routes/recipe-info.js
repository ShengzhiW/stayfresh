var data = require('../data.json');


exports.view = function(req, res){
    var found;
    var recipeid = req.params.recipeID;
    console.log(recipeid)
    recipeDetail = data.recipes;
    recipeDetail.forEach( function(element, index) {
        // console.log(element)
        if(element.id == recipeid){
            found = element;
            console.log('found!')
        }
    });
    res.render('recipe-info', {
        'name': found.name,
        'imageURL': found.imageURL,
        'recipeIngredients': found.recipeIngredients,
        'cookingTime': found.cookingTime,
        'servingSize' : found.servingSize,
        'steps' : found.steps
    });
};
