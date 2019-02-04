$(document).ready(function() {
    initializePage();
})

function initializePage() {
    $('.freshness-buttons').click(function(e) {
        e.preventDefault();
        $('freshness-buttons').toggleClass('freshness-active');
    })
}

