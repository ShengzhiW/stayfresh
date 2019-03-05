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




$(document).ready(function() {
  setTimeout(function(){
    var htm = "<form action='index'><input class='login-input' type='email' name='email' placeholder='Email' required><br><input class='login-input' type='password' name='password' placeholder='Password' required><br><input id='login-submit' type='submit' value='Login'></form><br><br><div class='login-new-account'>Don't have an account? <a href='sign-up'>Sign Up</a></div>"
    $(".login-main").html(htm);
    initializePage();
  }, 2000);
  
})

function initializePage() {
  checkLoginState();
}


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}


function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
 }

function changeUser(response) {
  $(".login-welcome").remove();
  $(".fbloginbtn").remove();
  var html ="<span id='name' class='login_greet'>Hello, "+response.name+"</span><br><img id='photo' class='login_greet_img' src="+response.picture.data.url+">"+"<a href='/index'><div class='login-proceed'>></div></a>";
  $(".login-main").html(html);
}

