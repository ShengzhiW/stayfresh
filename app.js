/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var index = require('./routes/index');
var addRecipe = require('./routes/add-recipe');
var addIng = require('./routes/add-ingredients');
var confirmation = require('./routes/confirmation');
var editRecipe = require('./routes/edit-recipe');
var login = require('./routes/login');
var recipeInfo = require('./routes/recipe-info');
var recipeRate = require('./routes/recipe-rate');
var vAIng = require('./routes/view-all-ingredients');
var vARecipe = require('./routes/view-all-recipes');
var signup = require('./routes/sign-up');
var favoriteRecipes = require('./routes/favorite-recipes');
// abtest
var verA = require('./routes/home_page_a');
var verB = require('./routes/home_page_b');
// Example route
// var user = require('./routes/user');
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/', login.view);
app.get('/index', index.view);
app.get('/add-recipe', addRecipe.view);
app.get('/add-ingredients', addIng.view);
app.get('/confirmation', confirmation.view);
app.get('/edit-recipe', editRecipe.view);
app.get('/recipe-info', vARecipe.view);
app.get('/recipe-rate', recipeRate.view);
app.get('/view-all-ingredients', vAIng.view);
app.get('/view-all-recipes', vARecipe.view);
app.get('/sign-up', signup.view);
app.get("/recipe-info/:recipeID", recipeInfo.view);
app.get("/favorite-recipes", favoriteRecipes.view);
// abtest
app.get('/home_page_a', verA.view);
app.get('/home_page_b', verB.view);
// Example route
// app.get('/users', user.list);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
var hbs = handlebars.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        each_upto: function(ary, max, options) {
            if (!ary || ary.length == 0) return options.inverse(this);
            var result = [];
            for (var i = 0; i < max && i < ary.length; ++i) result.push(options.fn(ary[i]));
            return result.join('');
        },
        foodtype: function(ary, categoryName, options) {
            if (!ary || ary.length == 0) return options.inverse(this);
            var result = [];
            for (var i = 0; i < ary.length; ++i) {
                // console.log(ary[i]);
                // console.log(ary[i].category);
                if (ary[i]['category'] == categoryName) {
                    console.log('yes')
                    result.push(options.fn(ary[i]));
                }
            }
            // if (ary[i]['category'] == categoryName) {
            //   
            // }            
            return result.join('');
        },
        favorited: function(ary, fav, options) {
            if (!ary || ary.length == 0) return options.inverse(this);
            var result = [];
            for (var i = 0; i < ary.length; ++i) {
                if (ary[i]['fav'] == fav) {
                    console.log('yes')
                    result.push(options.fn(ary[i]));
                }
            }
            return result.join('');
        },
        math: function(lvalue, operator, rvalue) {
            lvalue = parseFloat(lvalue);
            rvalue = parseFloat(rvalue);
            add = (lvalue + rvalue) > 0 ? lvalue + rvalue : 0;
            sub = (lvalue - rvalue) > 0 ? lvalue - rvalue : 0;
            mul = (lvalue * rvalue) > 0 ? lvalue * rvalue : 0;
            div = (lvalue / rvalue) > 0 ? lvalue / rvalue : 0;
            return {
                "+": add,
                "-": sub,
                "*": mul,
                "/": div,
                "%": lvalue % rvalue
            }[operator];
        }
    }
});
app.engine('handlebars', hbs.engine);