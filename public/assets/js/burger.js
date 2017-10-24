$(function() {
$("#click").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#ca").val().trim(),
    };
    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


$(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    var devouredCondition = {
      devoured: devoured
    };
  // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredCondition
    }).then(
      function() {
        console.log("devoured", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  });
  
  
  
    