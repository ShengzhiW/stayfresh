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

function goBack() {
  window.history.back();
}


function addFood(e) {
    var quant = $(this).closest('.row').find('.qaf-quantity').html();
    var cbEat = $(this).closest('.row').find('.CB-eatsoon').is(":checked");
    var cbOkay = $(this).closest('.row').find('.CB-okay').is(":checked");
    var cbFresh = $(this).closest('.row').find('.CB-fresh').is(":checked");
    var foodName = $(this).closest('.row').closest('.qaf-container').closest('.search-list-item').find('.add-ingredient-name').html();
    var img = $(this).closest('.row').closest('.qaf-container').closest('.search-list-item').find('.icon-add').attr("src");
    if (!quant > 0)
        return;
    else if(cbEat ||cbOkay||cbFresh){
        // window.location.replace("view-all-ingredients");
    }


    var json_data = {
        food: foodName, 
        image: img, 
        quantity: quant,

    }
    alert(JSON.stringify(json_data));

    $.get("view-all-ingredients", json_data,
        function(data){
            alert("Data: " + data + "\nStatus: " + status);
            $(window).html(data);
        });
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

$.fn.extend({
    createBtn: function () {
        var elmWidth = $("li", $(this)).width(),
            listType = $(this).listview("option", "inset") ? true : false,
            btnWidth = elmWidth < 300 && listType ? "35%" : elmWidth > 300 && !listType ? "25%" : "20%";
        $("li", $(this)).each(function () {
            var text = $(this).html();
            $(this).html($("<div/>", {
                class: "wrapper"
            }).append($("<div/>", {
                class: "go"
            }).text("Save").width(btnWidth)).append($("<div/>", {
                class: "item"
            }).text(text)).append($("<div/>", {
                class: "del"
            }).text("Delete").width(btnWidth)).css({
                left: "-" + btnWidth
            }).on("swipeleft swiperight vclick tap", function (e) {

                $(this).revealBtn(e, btnWidth);
            }) /**/ );
        });
    },
    revealBtn: function (e, x) {
        var check = this.check(x),
            swipe = e.type;
        if (check == "closed") {
            swipe == "swiperight" ? this.open(e, x, "left") : swipe == "swipeleft" ? this.open(e, x, "right") : setTimeout(function () {
                this.close(e);
            }, 0);
            e.stopImmediatePropagation();
        }
        if (check == "right" || check == "left") {
            swipe == "swiperight" ? this.open(e, "left") : swipe == "swipeleft" ? this.open(e, x, "right") : setTimeout(function () {
                this.close(e);
            }, 0);
            e.stopImmediatePropagation();
        }
        if (check !== "closed" && e.isImmediatePropagationStopped() && (swipe == "vclick" || swipe == "tap")) {
            this.close(e);
        }
    },
    close: function (e) {
        var check = this.check();
        this.css({
            transform: "translateX(0)"
        });
    },
    open: function (e, x, dir) {
        var posX = dir == "left" ? x : "-" + x;
        $(this).css({
            transform: "translateX(" + posX + ")"
        });
    },
    check: function (x) {
        var matrix = this.css("transform").split(" "),
            posY = parseInt(matrix[matrix.length - 2], 10),
            btnW = (this.width() * parseInt(x) / 100) / 1.1;
        return isNaN(posY) ? "closed" : posY >= btnW ? "left" : posY <= "-" + btnW ? "right" : "closed";
    }
});

$(document).on("pagecreate", function () {
    $("ul").createBtn();
});