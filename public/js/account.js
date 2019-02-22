// $(document).ready(function() {
//   setTimeout(loadAfterTime, 1000);
//   var htm = "<div class='logoutbtn'><a href='#'' onclick='facebookLogout()'>Log Out</a></div>";
//   $(".login-main").html(htm);
// })



function facebookLogout(){
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            FB.logout(function(response) {
                window.location = "/";
            });
        }
    });
    window.location = "/";    
}