$(document).ready(function() {

$('#form').submit(function(e) {
    e.preventDefault();
    var name = $('#username').val();
    var first_name = $('#first_name').val();
    var password = $('#password').val();
    var password2 = $('#password_retype').val();

    $(".error").remove();
    
    if (name.length < 1) {
      $('#username').after('<span class="error">Laukam jābūt aizpildītam</span>');
    } else if (first_name.length < 1) {
      $('#first_name').after('<span class="error">Laukam jābūt aizpildītam</span>');
    } else if (password.length < 8) {
      $('#password').after('<span class="error">Parolei jābūt vismaz 8 simboliem garai</span>');
    } else if (password !== password2) {
        $('#password_retype').after('<span class="error">Parolēm jāsakrīt</span>'); 
    } else if (!($('#terms').is(':checked'))) {
        error = 1
        $('#rules').after('<span class="error">Atzīmējiet, ka esat piekritis lietošanas noteikumiem</span>');
    } else {
        alert("Paldies!");
    }
    
  });

});
