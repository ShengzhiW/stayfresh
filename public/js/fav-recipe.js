var favStatus;
var idStatus;
$(document).ready(function () {
    favStatus = $('#fav_stats').val();
    // alert("favStatus: "+favStatus)
    idStatus = $('#id_stats').val();
    if (favStatus == "true") {
        $("#rcp-fav").css({"background": "#FC0041", "color": "white"})
        $("#rcp-fav").html("<img src='/images/fav-button.png' width='20px'><br>Favorited")
    }
    $("#rcp-fav").click(favRecipe);
})


function favRecipe() {
    // alert(favStatus);
    if (favStatus == "true"){
        favStatus = "false";
        $("#rcp-fav").css({"background": "#F2F2F2", "color": "#FC0041"})
        $("#rcp-fav").html("<img src='/images/fav-button-pink.png' width='20px'><br>Add to Favorites")
    }
    else{
        favStatus = "true";
        $("#rcp-fav").css({"background": "#FC0041", "color": "white"})
        $("#rcp-fav").html("<img src='/images/fav-button.png' width='20px'><br>Favorited")
    }

    var json_data = {
        id: idStatus,
        fav: favStatus
    }
    // alert(JSON.stringify(json_data))
    $.get("/view-all-recipes", json_data, function(data){});
}
