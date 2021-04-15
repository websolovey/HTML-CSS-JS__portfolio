$(".send-mail").hide();
$(".error").hide();
$(".contact-form__btn").click(function () {
  // validate and process form here

  $(".error").hide();
  var name = $("input.contact-form__name").val();
  if (name == "") {
    $("label#name_error").show();
    $("input.contact-form__name").focus();
    return false;
  }
  var email = $("input.contact-form__email").val();
  if (email == "") {
    $("label#email_error").show();
    $("input.contact-form__email").focus();
    return false;
  }
  var msg = $(".contact-form__msg").val();
  if (msg == "") {
    $("#user_msg_error").show();
    $(".contact-form__msg").focus();
    return false;
  }

  

  var dataString = "name=" + name + "&email=" + email + "&msg=" + msg;
  //  alert (dataString);return false;
  $.ajax({
    type: "POST",
    url: "https://formfor.site/send/Dgk8D8BId49Z1cuRvHcfEaJithqouH",
    data: dataString,
    success: function () {
      //  $('#contact-form').html("<div id='message'></div>");
      //  $('#message').html("<h2>Contact Form Submitted!</h2>")
      //  .append("<p>We will be in touch soon.</p>")
      //  .hide()
      //  .fadeIn(1500, function() {
      //  $('#message').append("<img id='checkmark' src='images/check.png' />");
      //  });
      $(".contact-form__btn").hide();
      $(".send-mail").show();
      $(name).val('');
      $(email).val('');
      $(msg).val('');

      console.log("Успешно");
    },
  });
  return false;
});
