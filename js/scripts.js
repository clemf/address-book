$("#show-contact").hide();

$("form#new-contact").submit(function(event) {
  var firstName = $("input#new-first-name").val(),
      lastName = $("input#new-last-name").val(),
      address = $("input#new-address").val();

  var newContact = { firstName: firstName, lastName: lastName, address: address };

  $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " "
    + newContact.lastName + "</span></li>");

  $("li#first-name").append(newContact.firstName);
  $("li#last-name").append(newContact.lastName);
  $("li#address").append(newContact.address);

// $(".contact").last().click(function())
  $("#show-contact").show("slow");
  event.preventDefault();
});
