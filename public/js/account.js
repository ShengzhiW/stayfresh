// $(document).ready(function() {
//   setTimeout(loadAfterTime, 1000);
//   var htm = "<div class='logoutbtn'><a href='#'' onclick='facebookLogout()'>Log Out</a></div>";
//   $(".login-main").html(htm);
// })



function facebookLogout(){
    try {
        FB.logout();
    } catch(e) {
        console.log(e);
    }
    // FB.getLoginStatus(function(response) {
    //     if (response.session) {
    //         FB.logout(function(response) {
    //             window.location = "/";
    //         });
    //     }
    // });
}