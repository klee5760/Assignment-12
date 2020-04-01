$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("newburger")
            .val()
            .trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(function() {
            console.log("Added new burger");
            location.reload();
            
        });
    });

    $(".plusburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".minusburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax({
            type: "DELETE",
            url:"/api/burgers/" + id
        }).then(location.reload());
            
            
    });

});