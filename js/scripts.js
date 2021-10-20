function galToLit(gal) {
  return gal / 0.26;
}

$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    $("#output").text("Submitted!")
  })

  $("form#conversion").submit(function(event) {
    event.preventDefault();
    const result = parseFloat($("#gallons").val());
    const ans = galToLit(result);
    $("#output2").text(ans);
  })
})