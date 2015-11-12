 
  function statusChangeCallback(response) {
    
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      callAPI();
    } else if (response.status === 'not_authorized') {
    
    } else {
      
    }
  }

 
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '161465090871702',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });

 

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function callAPI() {
    
    FB.api('/me?fields=first_name,last_name,email', function(response) {
      
      if (response.email == "")
        alert ("sorry you can't login without providing the email");
      else
        social_ajax_login(response.first_name,response.last_name,response.email);
    });
  }

function fblogin()
{
   FB.login(function(response) {
   
   if (response.status === 'connected') {
 
      callAPI();
    } else if (response.status === 'not_authorized') {
 
    } else {
       

    }

   }, {scope: 'public_profile,email'});
}

function social_ajax_login(firstname,lastname,email) {
  
  jQuery("#ajax-target").load("node/get/ajax/11?firstname="+firstname+"&lastname="+lastname+"&email="+email);
}

