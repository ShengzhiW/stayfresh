var data = require('../data.json');
exports.view = function(req, res){
    if (Object.keys(req.query).length !== 0)  {
        var newfood = {
            name: req.query.food, 
            imageURL: req.query.image, 
            quantity: req.query.quantity
        }
        
        console.log(JSON.stringify(newfood));
        data.ingredients.push(newfood);
    };
    res.render('add-ingredients', data);
};



