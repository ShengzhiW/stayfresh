$(document).ready(function() {
    initializePage();
})


function initializePage(){
    checkEmptyList();
}

function checkEmptyList(){
    if ($("#x-more-items-soon").text().includes("... 0 more entries"))
        $("#x-more-items-soon").remove()
    if ($("#x-more-items-ok").text().includes("... 0 more entries"))
        $("#x-more-items-ok").remove()
    if ($("#x-more-items-fresh").text().includes("... 0 more entries"))
        $("#x-more-items-fresh").remove()
}