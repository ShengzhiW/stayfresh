$(document).ready(function() {
    initializePage();
})

function initializePage() {
    console.log('here!')
    $(".deleteBTNrecipe").click(removeItem);
}

function removeItem(e) { 
    var removeID = $(this).closest('.var-card').find('.h_v_r').val();
    console.log('removeID is '+ removeID);
    var json_data = {
        id: removeID
    }

    $.get("view-all-recipes", json_data, function(data){
            
    });

    // var card = $(this).closest(".var-card");
    // card.hide('slow', function(){ $(this).remove(); });
}