// $(document).ready(function() {
//   setTimeout(loadAfterTime, 1000);
//   var htm = "<div class='logoutbtn'><a href='#'' onclick='facebookLogout()'>Log Out</a></div>";
//   $(".login-main").html(htm);
// })


function facebookLogout(){
    FB.logout(function(response) {
        FB.Auth.setAuthResponse(null, 'unknown');
    });
    // FB.getLoginStatus(function(response) {
    //     if (response.session) {
    //         FB.logout(function(response) {
    //             window.location = "/";
    //         });
    //     }
    // });
}