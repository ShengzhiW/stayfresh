var data = require('../data.json');

exports.view = function(req, res){
    if (Object.keys(req.query).length === 1) {
        var id = req.query.id
        console.log('here')
        var ary = data.ingredients_soon
        console.log(ary)
        console.log('nexe')
        for (var i = 0; i < ary.length; ++i){
            console.log(ary[i]+ " : " +ary[i].id)
            if (ary[i].id == id) {
                console.log('found!')
                ary.splice(i, 1);
                data.ingredients_soon = ary;
                console.log(data.ingredients_soon)
                break;
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