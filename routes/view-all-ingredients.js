var data = require('../data.json');

exports.view = function(req, res){
    if (Object.keys(req.query).length !== 0)  {
        cat = req.query.category;
        var newfood = {
            name: req.query.food, 
            imageURL: req.query.image, 
            quantity: req.query.quantity
        };
        console.log(JSON.stringify(newfood));
        if (cat == "fresh") {
            console.log(cat);
            data.ingredients_fresh.push(newfood);
        }
        else if (cat == "okay") {
            console.log(cat);
            data.ingredients_ok.push(newfood);
        }
        else if (cat == "soon") {
            console.log(cat);
            data.ingredients_soon.push(newfood);
        }
        // var fs = require('fs');
        // fs.writeFile('../data.json', data, 'utf8', callback);
    };
    res.render('view-all-ingredients', data);
};