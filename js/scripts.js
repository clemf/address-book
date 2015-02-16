$("#contacts").hide();

$("form#new-contact").submit(function(event) {
  var firstName = $("input#new-first-name").val(),
      lastName = $("input#new-last-name").val(),
      address = $("input#new-address").val();

  var newContact = { firstName: firstName, lastName: lastName, address: address };

  $("li#first-name").append(newContact.firstName);
  $("li#last-name").append(newContact.lastName);
  $("li#address").append(newContact.address);


  $("#contacts").show("slow");
  event.preventDefault();
});
