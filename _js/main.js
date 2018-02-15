$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li> <button> Move me! </button>" + user_input + "</li>");
    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());
        $(this).parent().slideDown("slow");
        $(this).html("Add to To-Do");

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);
});

$("#list_doing").on('click', "button", function() {
        // move back from list_doing container to list_todo container
        var completedItem = $(this).parent()
        $("#list_todo").prepend(completedItem);
});

$("#list_todo").on('click', "backward", function() {
        console.log($(this).parent());
        $(this).parent().slideUp();

        // add the delete link
        var spanDelete = document.createElement("span");
        spanDelete.setAttribute("id", todoItem.id);
        spanDelete.setAttribute("class", "delete");
        spanDelete.innerHTML = "&nbsp;&#10007;&nbsp;";
});

$("#list_doing").on('click', "backward", function() {
        // alert(user_input);
        $(this).html("Complete");
        $("forward").CompleteClass("hide");

        var completedItem = $(this).parent();
        $("#list_todo").prepend(completedItem);
});

$("#list_doing").on('click', "forward", function() {
        // alert(user_input);
        $(this).html("forward");
        $(this).addClass("hide");
        var completedItem = $(this).parent();
        $("#list_done").prepend(completedItem);
});

$("#list_done").on('click', "backward", function() {
        // alert(user_input);
        $("forward").CompleteClass("hide");
        $(this).html("Complete");

        var uncompletedItem = $(this).parent();
        $("#list_doing").prepend(uncompletedItem);
});


$(document).ready(
$("#forward").on('click', function() {
        // alert(user_input);
        $(this).html("Still working on it");
        var uncompletedItem = $(this).parent();
        $("#list_done").prepend(uncompletedItem);
    })
);
