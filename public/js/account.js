// $(document).ready(function() {
//   setTimeout(loadAfterTime, 1000);
//   var htm = "<div class='logoutbtn'><a href='#'' onclick='facebookLogout()'>Log Out</a></div>";
//   $(".login-main").html(htm);
// })



function facebookLogout(){
    try {
        FB.logout(function(response) {});
    } catch(e) {
        console.log(e);
    }
    // if( FB.getLoginStatus() === undefined){
    //     window.location = "/";
    //     return;
    // }
    // FB.getLoginStatus(function(response) {
    //     if (response.status === 'connected') {
    //         FB.logout(function(response) {});
    //     }
    // });

}