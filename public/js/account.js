$("#logout-ff").click(facebookLogout());
window.fbAsyncInit = function () {
    FB.init({
        appId: '786299908399210',
        cookie: true,
        xfbml: true,
        version: 'v3.2'
    });

    FB.AppEvents.logPageView();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function facebookLogout(){
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            FB.logout(function(response) {
                window.location = "/";
            });
        }
        else{
            window.location = "/";
        }
    });

}