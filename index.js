

// This function takes the id's "salePrice" and "cash" and produces the change.
$(document).ready(function() {
  $(".button").on("click", function() {
    var salePrice = $("#salePrice").val();
    var cash = $("#cash").val();
    var change = cash - salePrice;

    //Gets the change in dollars
    var dollarChange = Math.floor(change);
    change = change - dollarChange;
    //Converts remaining change to cents
    change = change * 100;
    //Gets the remaining quarters 
    var quarterChange = Math.floor(change / 25);
    change = change % 25;
    //Gets the remaining dimes
    var dimeChange = Math.floor(change / 10);
    change = change % 10;
    //Gets the remaining nickels
    var nickelChange = Math.floor(change / 5);
    change = change % 5;
    //Gets the remaining pennies 
    var result = Math.round(change * 100) / 100;
    var pennyChange = result;
    
    $("#dollarChange").html(dollarChange);
    $("#quarterChange").html(quarterChange);
    $("#dimeChange").html(dimeChange);
    $("#nickelChange").html(nickelChange);
    $("#pennyChange").html(pennyChange);

  })
});

// AS, RN JL