$(document).ready(function() {

  $('#login').submit((e) => {
    e.preventDefault();
    const password = $('#password').val();
    // reset the value in the form
    $('#password').val('');
    // validate password
    if (password !== 'mypassword') {
      return alert('invalid password');
    }
    $('.login-form__padlock-bolt').addClass('open');
  });
});
