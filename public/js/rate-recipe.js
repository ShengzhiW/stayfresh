$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#rate-left").click(rateLeft);
    $("#rate-right").click(rateRight);
}


function rateLeft(e) { 
    e.preventDefault();
    $(this).css('border','2 solid gray');
    $("#rate-right").css('border','0');
}

function rateRight(e) { 
    e.preventDefault();
    $(this).css('border','2 solid gray');
    $("#rate-left").css('border','0');
}