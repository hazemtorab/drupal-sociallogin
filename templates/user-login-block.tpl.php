<div id="user-login-block-container">
 
  <div id="user-login-block-form-fields">
    <?php print $name; // Display username field ?>
    <?php print $pass; // Display Password field ?>
    <?php print $submit; // Display submit button ?>
          <a href = "javascript:fblogin()"  class="social-icon-fb"></a>
    <?php print $rendered; // Display hidden elements (required for successful login) ?> 
  </div>
   
</div>

<div id="ajax-target"></div>