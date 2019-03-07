var data = require('../data.json');


exports.view = function(req, res){
    var found;
    var recipeid = req.params.recipeID;
    console.log(recipeid)
    recipeDetail = data.recipes;
    recipeDetail.forEach( function(element, index) {
        if(element.id == recipeid){
            found = element;
            console.log('found!')
        }
    });
    jjsondata = {
        'id' : found.id,
        'name': found.name,
        'imageURL': found.imageURL,
        'recipeIngredients': found.recipeIngredients,
        'cookingTime': found.cookingTime,
        'servingSize' : found.servingSize,
        'fav' : found.fav,
        'steps' : found.steps
    }
    console.log( jjsondata)
    res.render('recipe-info',  jjsondata);
};
