$(document).ready(function() {
    console.log('here..')
    initializePage();
})

function initializePage() {
    $(".edit-delete-button").click(removeItem);
}

function removeItem(e) { 
    var removeID = $(this).closest('.home-freshness-col-3').closest('.row').find('.h_v').val();
    console.log('removeID is '+ removeID);
    var json_data = {
        id: removeID
    }

    $.get("view-all-ingredients", json_data, function(data){
            
    });

    $(this).closest('.home-freshness-col-3').closest('.row')
}