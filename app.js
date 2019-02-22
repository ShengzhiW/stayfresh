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
app.get('/recipe-info', recipeInfo.view);
app.get('/recipe-rate', recipeRate.view);
app.get('/view-all-ingredients', vAIng.view);
app.get('/view-all-recipes', vARecipe.view);
app.get('/sign-up', signup.view);
app.get("/recipe-info/:recipeName", recipeInfo.view);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});


var hbs = handlebars.create({
      // Specify helpers which are only registered on this instance.
      helpers: {
        each_upto: function (ary, max, options) {
          if (!ary || ary.length == 0)
            return options.inverse(this);

          var result = [];
          for (var i = 0; i < max && i < ary.length; ++i)
            result.push(options.fn(ary[i]));
          return result.join('');
        },
        math: function (lvalue, operator, rvalue) {
            lvalue = parseFloat(lvalue);
            rvalue = parseFloat(rvalue);

            return {
              "+": lvalue + rvalue,
              "-": lvalue - rvalue,
              "*": lvalue * rvalue,
              "/": lvalue / rvalue,
              "%": lvalue % rvalue
            }[operator];
          }
        }
      });

    app.engine('handlebars', hbs.engine);