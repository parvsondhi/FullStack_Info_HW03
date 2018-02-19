$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li> <button> Click to do it! </button>" + " " + user_input + "</li>");
    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());

        $(this).html("Click when done!");

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);

        //Add another button for 
});

$("#list_doing").on('click', "button", function() {
        // move back from list_doing container to list_todo container
        $(this).html("Done! Click then doing again.");

        var completedItem = $(this).parent()
        $("#list_done").prepend(completedItem);

});

$("#list_done").on('click', "button", function() {
        // move back from list_doing container to list_todo container
        $(this).html("Click when done.");

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);

});
