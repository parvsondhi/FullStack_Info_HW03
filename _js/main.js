$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li> <button> Doing? </button>" + user_input + "</li>").css(
            {
                backgroundColor:'red', 
                width:'150px'
            });
    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());

        $(this).html("Completed?");

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem).css(
            {
                backgroundColor:'green', 
                width:'150px'
            });;
});

$("#list_doing").on('click', "button", function() {
        // move back from list_doing container to list_todo container
        $(this).html("Doing?");

        var doingItem = $(this).parent()
        $("#list_todo").prepend(doingItem);
});
