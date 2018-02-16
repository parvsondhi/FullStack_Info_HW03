

$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').append("<li> <button class='upgrade'>Upgrade</button>" + "<div class='holder'> " +user_input + " </div>" + "<button class='downgrade'>Remove</button>");
    })
);


$("#list_todo").on('click', ".upgrade", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());
        $(this).parent().slideDown("slow");
        $(this).html("Upgrade");


        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);

});

$("#list_todo").on('click', ".downgrade", function() {
        // remove from list_todo container, slideup 
        $(this).parent().slideUp();

});

$("#list_doing").on('click', ".downgrade", function() {
        // move back from list_doing container to list_todo container
        // alert(user_input);
        $(this).html("Remove");
        $(".upgrade").removeClass("hide");
      
        var completedItem = $(this).parent()
        $("#list_todo").prepend(completedItem);
});

$("#list_doing").on('click', ".upgrade", function() {
        // move back from list_doing container to list_done container, give props
        // alert(user_input);
        $(this).html("Upgrade");
        $(this).addClass("hide");
        var completedItem = $(this).parent()
        $("#list_done").prepend(completedItem);
        alert("Congrats! Now take a break.");

});

$("#list_done").on('click', ".downgrade", function() {
        // move back from list_done container to list_doing container
        // alert(user_input);
        $(".upgrade").removeClass("hide");
        $(this).html("Remove");


        var uncompletedItem = $(this).parent()
        $("#list_doing").prepend(uncompletedItem);
});



 
