var foodCondition = 0;

$(document).ready(function() {
    initializePage();
})

function initializePage() {
    $(".quantplus").click(quantIncrement);
    $(".quantminus").click(quantDeIncrement);
    $(".qaf-add").click(addFood);
    $('.CB-eatsoon').change(function() {
        if($(this).is(":checked")) {
            $(this).closest('.row').find('.CB-okay').prop('checked', false);
            $(this).closest('.row').find('.CB-fresh').prop('checked', false);
            var quant = $(this).closest('.row').find('.qaf-quantity');
            if (quant.html() > 0)
                var addbutton = $(this).closest('.row').find('.qaf-add').css("background-color", "#7F7F7F");
        }
    });
    $('.CB-okay').change(function() {
        if($(this).is(":checked")) {
            $(this).closest('.row').find('.CB-eatsoon').prop('checked', false);
            $(this).closest('.row').find('.CB-fresh').prop('checked', false);
            var quant = $(this).closest('.row').find('.qaf-quantity');
            if (quant.html() > 0)
                var addbutton = $(this).closest('.row').find('.qaf-add').css("background-color", "#7F7F7F");
        }
    });
    $('.CB-fresh').change(function() {
        if($(this).is(":checked")) {
            $(this).closest('.row').find('.CB-okay').prop('checked', false);
            $(this).closest('.row').find('.CB-eatsoon').prop('checked', false);
            var quant = $(this).closest('.row').find('.qaf-quantity');
            if (quant.html() > 0)
                var addbutton = $(this).closest('.row').find('.qaf-add').css("background-color", "#7F7F7F");
        }
    });
}

function quantIncrement(e) { 
    var quant = $(this).closest('.row').find('.qaf-quantity');
    var num = quant.html();
    if (num < 0) num=0;
    num++;
    var cbEat = $(this).closest('.row').find('.CB-eatsoon').is(":checked");
    var cbOkay = $(this).closest('.row').find('.CB-okay').is(":checked");
    var cbFresh = $(this).closest('.row').find('.CB-fresh').is(":checked");
    if (cbEat || cbOkay || cbFresh)
        $(this).closest('.row').find('.qaf-add').css("background-color", "#7F7F7F");
    quant.html(num);
}

function quantDeIncrement(e) { 
    var quant = $(this).closest('.row').find('.qaf-quantity');
    var num = quant.html();
    if (num > 0)
        num--;
    else 
        num = 0;
    if(num == 0)
        $(this).closest('.row').find('.qaf-add').css("background-color", "#EFEFEF");
    quant.html(num);
}

function addFood(e) {
    var quant = $(this).closest('.row').find('.qaf-quantity').html();
    var cbEat = $(this).closest('.row').find('.CB-eatsoon').is(":checked");
    var cbOkay = $(this).closest('.row').find('.CB-okay').is(":checked");
    var cbFresh = $(this).closest('.row').find('.CB-fresh').is(":checked");
    var foodName = $(this).closest('.row').closest('.qaf-container').closest('.search-list-item').find('.add-ingredient-name').html();
    if (!quant > 0)
        return;
    else if(cbEat ||cbOkay||cbFresh){
        window.location.replace("view-all-ingredients");
    }

    

}

function storeJson(name, fresh, amount){
    var fs = require('fs');
    fs.readFile('/data/test.json', function (err, data) {
        var json = JSON.parse(data);
        console.log('ll');
        // console.log(json);
        json.push('search result: ' + currentSearchResult);    
        fs.writeFile("/data/test.json", JSON.stringify(json), function(err){
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
    });
    })
}