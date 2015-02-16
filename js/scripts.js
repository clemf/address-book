$("#show-contact").hide();

$("form#new-contact").submit(function(event) {
  var firstName = $("input#new-first-name").val(),
      lastName = $("input#new-last-name").val(),
      address = $("input#new-address").val();

  var newContact = { firstName: firstName, lastName: lastName, address: address };

  $("ul#contacts").append("<li class='list-group-item'><span class='contact'>" + newContact.firstName + " "
    + newContact.lastName + "</span></li>");

  $("li#first-name").text("First Name: " + newContact.firstName);
  $("li#last-name").text("Last Name: " + newContact.lastName);
  $("li#address").text("Address: " + newContact.address);

  $(".contact").last().click(function() {
    $("#show-contact").show("slow");
  });

  $("#new-contact").trigger("reset");

  event.preventDefault();
});
