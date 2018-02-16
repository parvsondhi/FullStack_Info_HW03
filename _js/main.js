$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li> <button> </button><p>" + user_input + "</p></li>");
    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());

        // $(this).html("Add To To-Do");
        $(this).removeClass("to_do");
        $(this).addClass("doing");

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);
});


$("#list_doing").on('click', "button", function() {
        // move back from list_doing container to list_todo container
        // $(this).html("JK not done");
        $(this).removeClass("doing");
        $(this).addClass("done");

        var incompleteItem = $(this).parent()
        $("#list_done").prepend(incompleteItem);
});


$("#list_done").on('click', "button", function() {
        // move back from list_doing container to list_todo container
        // $(this).html("JK not done");
        $(this).removeClass("done");
        $(this).addClass("doing");

        var incompleteItem = $(this).parent()
        $("#list_doing").prepend(incompleteItem);
});