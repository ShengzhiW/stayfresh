$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $(".favBTNrecipe").each(function(index) {
            favStatus = $(this).closest($(".var-card")).find(".h_v_ff").val();
            if (favStatus == "true"){
         $(this).css({"background": "#FC0041", "color": "#fff"})
        $(this).html("<img src='/images/fav-button.png'>Added to Favorites")
    }
        });
    console.log('here!')
    $(".deleteBTNrecipe").click(removeItem);
    $(".favBTNrecipe").click(favRecipe);
}

function removeItem(e) { 
    var removeID = $(this).closest('.var-card').find('.h_v_r').val();
    console.log('removeID is '+ removeID);
    var json_data = {
        id: removeID
    }

    $.get("view-all-recipes", json_data, function(data){
            
    });

    var card = $(this).closest(".var-card");
    card.hide('slow', function(){ $(this).remove(); });
}


function favRecipe() {
    idStatus = $(this).closest($(".var-card")).find(".h_v_r").val();
    favStatus = $(this).closest($(".var-card")).find(".h_v_ff").val();
    if (favStatus == "true"){
        $(this).closest($(".var-card")).find(".h_v_ff").val("false");
        $(this).css({"background": "#fff", "color": "#FC0041"})
        $(this).html("<img src='/images/fav-button-pink.png'> Add to Favorites")
    }
    else{
        $(this).closest($(".var-card")).find(".h_v_ff").val("true");
         $(this).css({"background": "#FC0041", "color": "#fff"})
        $(this).html("<img src='/images/fav-button.png'>Added to Favorites")
    }
    
    var json_data = {
        id: idStatus,
        fav: $(this).closest($(".var-card")).find(".h_v_ff").val()
    }
    // alert(JSON.stringify(json_data))
    $.get("/view-all-recipes", json_data, function(data){});
    var card = $(this).closest($(".var-card"))
    if (!$(".favBTNrecipe").hasClass("favBTNrecipe-2"))
        card.hide('slow', function(){ $(this).remove(); });
}
