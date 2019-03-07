window.onpageshow = function(evt) {
    if (evt.persisted) {
        document.body.style.display = "none";
        location.reload();
    }
};

function goBack(event) {
    window.history.back();
}
