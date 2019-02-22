var data = require('../data.json');
exports.view = function(req, res){
    res.render('account', data);
};