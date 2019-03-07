var favStatus;
var idStatus;
$(document).ready(function () {
    // $(".favBTNrecipe").each(function(index) {
    //     favStatus = $(this).closest($(".var-card")).find(".fav_statss").val();
    //     if (favStatus == "true") {            
    //         $("#rcp-fav").css({"background": "#FC0041", "color": "white"})
    //         $("#rcp-fav").html("<img src='/images/fav-button-cross.png'> Remove from Favorites")
    //     }
    // });
    console.log('??')    
    
})


function favRecipe() {
    idStatus = $(this).closest($(".var-card")).find(".h_v_r").val();
    // alert(favStatus);
    // if (favStatus == "true"){
    //     favStatus = "false";
    //     $("#rcp-fav").css({"background": "#F2F2F2", "color": "#FC0041"})
    //     $("#rcp-fav").html("<img src='/images/fav-button-pink.png' width='20px'><br>Add to Favorites")
    // }
    // else{
    //     favStatus = "true";
    //     $("#rcp-fav").css({"background": "#FC0041", "color": "white"})
    //     $("#rcp-fav").html("<img src='/images/fav-button.png' width='20px'><br>Favorited")
    // }

    var json_data = {
        id: idStatus,
        fav: "false"
    }
    alert(JSON.stringify(json_data))
    $.get("/view-all-recipes", json_data, function(data){});
    var card = $(this).closest($(".var-card"))
    card.hide('slow', function(){ $(this).remove(); });
}
