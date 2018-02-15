$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li> <button class='libtn'> Move me! </button>" + user_input + "</li>");
    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());

        $(this).html("Add To To-Do");

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);
});

$("#list_doing").on('click', "button", function() {
        // move back from list_doing container to list_todo container
        $(this).html("Add To Doing");

        var completedItem = $(this).parent()
        $("#list_todo").prepend(completedItem);
});

var colors = ['red', 'green', 'blue', 'orange', 'yellow'];

$('#new-item').click(function() {
    //Now just reference this button and change CSS
    $(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
});