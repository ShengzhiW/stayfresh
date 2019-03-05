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
                var addbutton = $(this).closest('.row').find('.qaf-add').css("background-color", "#000");
        }
    });
    $('.CB-okay').change(function() {
        if($(this).is(":checked")) {
            $(this).closest('.row').find('.CB-eatsoon').prop('checked', false);
            $(this).closest('.row').find('.CB-fresh').prop('checked', false);
            var quant = $(this).closest('.row').find('.qaf-quantity');
            if (quant.html() > 0)
                var addbutton = $(this).closest('.row').find('.qaf-add').css("background-color", "#000");
        }
    });
    $('.CB-fresh').change(function() {
        if($(this).is(":checked")) {
            $(this).closest('.row').find('.CB-okay').prop('checked', false);
            $(this).closest('.row').find('.CB-eatsoon').prop('checked', false);
            var quant = $(this).closest('.row').find('.qaf-quantity');
            if (quant.html() > 0)
                var addbutton = $(this).closest('.row').find('.qaf-add').css("background-color", "#000");
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
    var foodName = $(this).closest('.row').closest('.qaf-container').closest('.search-list-item').find('.add-ingredient-name').text();
    var img = $(this).closest('.row').closest('.qaf-container').closest('.search-list-item').find('.icon-add').attr("src");
    if (!quant > 0)
        return;
    else if(!(cbEat ||cbOkay||cbFresh)){
         return;
    }
    if(cbEat)
        var cat = "soon";
    else if (cbOkay)
        var cat = "okay";
    else if (cbFresh)
        var cat = "fresh";
    var randID = Math.floor(Math.random() * (1000000-9000000) + 1000000)


    var json_data = {
        id: randID,
        category: cat,
        food: foodName, 
        image: img, 
        quantity: quant,

    }
    // alert(JSON.stringify(json_data));

    $.get("view-all-ingredients", json_data, function(data){
            // alert("Data: " + data + "\nStatus: " + status);
            // $(window).html(data);
        });

    
    var addcount = $("#add-ingredients-added-count").html();
    addcount++;
    $("#add-ingredients-added-count").html(addcount);
}