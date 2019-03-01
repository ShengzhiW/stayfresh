var data = require('../data.json');

exports.view = function(req, res){
  res.render('home_page_a', data);
};