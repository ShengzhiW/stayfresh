var foods = [];

$(document).ready(function () {

    enableSelectors(foods);
    $("#rcp-add").click(addRecipe);
    
})


function enableSelectors() {

    $('#callbacks').multiSelect({
        afterSelect: function (values) {
            // console.log('adding: ' + values)
            foods.push(values);
            // console.log(foods);
        },
        afterDeselect: function (values) {
            // console.log('removing' + values)
            foods = foods.filter(e => e != values.toString());
            // console.log(foods);
        }
    });

    $('#callbacks2').multiSelect({
        afterSelect: function (values) {
            // console.log('adding: ' + values)
            foods.push(values);
            // console.log(foods);
        },
        afterDeselect: function (values) {
            // console.log('removing' + values)
            foods = foods.filter(e => e != values.toString());
            // console.log(foods);
        }
    });

    $('#callbacks3').multiSelect({
        afterSelect: function (values) {
            // console.log('adding: ' + values)
            foods.push(values);
            // console.log(foods);
        },
        afterDeselect: function (values) {
            // console.log('removing' + values)
            foods = foods.filter(e => e != values.toString());
            // console.log(foods);
        }
    });

    $('#callbacks4').multiSelect({
        afterSelect: function (values) {
            // console.log('adding: ' + values)
            foods.push(values);
            // console.log(foods);
        },
        afterDeselect: function (values) {
            // console.log('removing' + values)
            foods = foods.filter(e => e != values.toString());
            // console.log(foods);
        }
    });

}


$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
}


function addRecipe() {
    if ($('#recipe-name-edit').val() == '') { $('#recipe-name-loc').scrollView(); $('#recipe-name-edit').css('border', 'solid red 1px'); return;} else { $('#recipe-name-edit').css('border', 'solid 0 black'); }
    if ($('#nre-cooking-instructions').val() == '') { $('#nre-cooking-instructions-loc').scrollView(); $('#nre-cooking-instructions').css('border', 'solid red 1px'); return;} else { $('#nre-cooking-instructions').css('border', 'solid 0 black'); }
    if ($('#nre-cooking-time').val() == '') { $('#nre-cooking-time').scrollView(); $('#nre-cooking-time').css('border', 'solid red 1px'); return;} else { $('#nre-cooking-time').css('border', 'solid 0 black'); }
    if ($('#nre-serving-size').val() == '') { $('#nre-serving-size').scrollView(); $('#nre-serving-size').css('border', 'solid red 1px'); return;} else { $('#nre-serving-size').css('border', 'solid 0 black'); }
    var rcpName = $('#recipe-name-edit').val();
    var recipeID = Math.floor(Math.random() * (1000000-9000000) + 1000000);
    var image = "/images/user-recipe.jpg";
    var ingredients = foods;
    var time = $('#nre-cooking-time').val();
    var serving = $('#nre-serving-size').val();;
    var instructions = $('#nre-cooking-instructions').val(); 

    var json_data = {
        id: recipeID,
        name: rcpName, 
        imageURL: image, 
        recipeIngredients: ingredients,
        cookingTime: time,
        servingSize: serving,
        fav : "false",
        steps: [instructions]
    }
    // alert(JSON.stringify(json_data))
    $.get("view-all-recipes", json_data, function(data){
        // alert("Data: " + data + "\nStatus: " + status);
        // $(window).html(data);
    });
    window.location.href = "/view-all-recipes";
}
