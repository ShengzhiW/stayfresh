var data = require('../data.json');

exports.view = function(req, res){
    var found = false;
    if (Object.keys(req.query).length === 1) {
        var id = req.query.id
        var ary = data.ingredients_soon
        for (var i = 0; i < ary.length; ++i){
            if (ary[i].id == id) {
                ary.splice(i, 1);
                data.ingredients_soon = ary;
                found = true;
                break;
            }
        }
        if (!found){
            ary = data.ingredients_ok
            for (var i = 0; i < ary.length; ++i){
                if (ary[i].id == id) {
                    ary.splice(i, 1);
                    data.ingredients_ok = ary;
                    found = true;
                    break;
                }
            }
        }
        if (!found){
            ary = data.ingredients_fresh
            for (var i = 0; i < ary.length; ++i){
                if (ary[i].id == id) {
                    ary.splice(i, 1);
                    data.ingredients_fresh = ary;
                    found = true;
                    break;
                }
            }
        }
    }

    else if (Object.keys(req.query).length !== 0)  {
        cat = req.query.category;
        var newfood = {
            id: req.query.id,
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