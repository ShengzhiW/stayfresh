var data = require('../data.json');

exports.view = function(req, res){
  var name = req.params.recipeName;
  res.render('recipe-info', {
      "recipeName" : name,

    });
};
