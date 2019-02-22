// $(document).ready(function() {
//   init();
// })



// function init(){
//     FB.getLoginStatus(function(response) {
//         if (response.status === 'connected') {
//             var html ="Hello, you are currently logged in";
//             $(".login-main").html(html);
//         }
//         else{
//           window.location = "/";
//         }
//     });
// }



function facebookLogout(){
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            FB.logout(function(response) {
                window.location = "/";
            });
        }
    });
}