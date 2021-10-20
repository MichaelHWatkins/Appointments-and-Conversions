$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    $("#output").text("Submitted!")
  })
})