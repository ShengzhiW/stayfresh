var data = require('../data.json');

exports.view = function(req, res){
    if (Object.keys(req.query).length !== 0)  {
        cat = req.query.category
        var newfood = {
            name: req.query.food, 
            imageURL: req.query.image, 
            quantity: req.query.quantity
        }
        console.log(JSON.stringify(newfood));
        if (cat == "fresh") 
            data.ingredients_fresh.push(newfood);
        else if (cat == "okay") 
            data.ingredients_ok.push(newfood);
        else if (cat == "soon") 
            data.ingredients_soon.push(newfood);
    };
    res.render('view-all-ingredients', data);
};