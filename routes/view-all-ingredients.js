var data = require('../data.json');

exports.view = function(req, res){
  res.render('view-all-ingredients', data);
};