var foods = [];

$(document).ready(function () {

    enableSelectors(foods);
    $("#rcp-add").click(addRecipe);
})


function enableSelectors() {

    $('#callbacks').multiSelect({
        afterSelect: function (values) {
            console.log('adding: ' + values)
            foods.push(values);
            console.log(foods);
        },
        afterDeselect: function (values) {
            console.log('removing' + values)
            foods = foods.filter(e => e != values.toString());
            console.log(foods);
        }
    });

    $('#callbacks2').multiSelect({
        afterSelect: function (values) {
            console.log('adding: ' + values)
            foods.push(values);
            console.log(foods);
        },
        afterDeselect: function (values) {
            console.log('removing' + values)
            foods = foods.filter(e => e != values.toString());
            console.log(foods);
        }
    });

    $('#callbacks3').multiSelect({
        afterSelect: function (values) {
            console.log('adding: ' + values)
            foods.push(values);
            console.log(foods);
        },
        afterDeselect: function (values) {
            console.log('removing' + values)
            foods = foods.filter(e => e != values.toString());
            console.log(foods);
        }
    });

    $('#callbacks4').multiSelect({
        afterSelect: function (values) {
            console.log('adding: ' + values)
            foods.push(values);
            console.log(foods);
        },
        afterDeselect: function (values) {
            console.log('removing' + values)
            foods = foods.filter(e => e != values.toString());
            console.log(foods);
        }
    });

}


function addRecipe() {
    var rcpName = $('#recipe-name-edit').val();
    var recipeID = Math.floor(Math.random() * (1000000-9000000) + 1000000);
    var image = "/images/user-recipe.jpg";
    var ingredients = foods;
    var time = $('#nre-cooking-time').val();
    var serving = 1;
    var instructions = $('#nre-cooking-instructions').val(); 

    var json_data = {
        id: recipeID,
        name: rcpName, 
        imageURL: image, 
        recipeIngredients: ingredients,
        cookingTime: time,
        servingSize: serving,
        steps: instructions
    }
    alert(JSON.stringify(json_data))
    $.get("view-all-recipes", json_data, function(data){
        // alert("Data: " + data + "\nStatus: " + status);
        // $(window).html(data);
    });
    window.location.href = "/view-all-recipes";
}
