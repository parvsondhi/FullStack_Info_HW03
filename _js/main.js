$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li> <button id='listbutton'> Move me! </button> <button id='done'> Add to Done </button>" + user_input + "</li>");
        $('#list_todo #done').hide();
    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());
        $(this).html("Add To To-Do");

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);
        $('#list_doing #done').show().css("background-color", "#279ec1");
});


$("#list_doing").on('click', "button", function() {
        // move back from list_doing container to list_todo container
    if (this.id === 'listbutton') {
        $(this).html("Move me!");

        var completedItem = $(this).parent()
        $("#list_todo").prepend(completedItem);
    } else {
        $(this).hide();

        var completedItem = $(this).parent();
        $("#list_done").prepend(completedItem);

        $(this).parent().children('#listbutton').html("Add to Doing");
    }

    $('#list_todo #done').hide();
});

$("#list_done").on('click', "button", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());
        $(this).html("Add to To-Do");

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);
        $(this).parent().children('#done').show().css("background-color", "#279ec1");
});
