$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // add this item to to-do list, apply styling and add button
        $('#list_todo').prepend("<li class='task'> " + user_input + "<button class='to_right'> >> </button></li>");
        $(".task").css({"color": "darkblue", "text-aligne": "justify"});
    })
);

$("#list_todo").on('click', ".to_right", function() {
        // move from list_todo container to list_doing container, 
        //apply new style and add another button
        var takenItem = $(this).parent();
        $("#list_doing").prepend(takenItem);
        $("button.to_left", $("#list_doing")).remove();
        $("li.task", $("#list_doing")).prepend("<button class='to_left'> << </button>");
        $("li.task", $("#list_doing")).css({"color": "blue"});
});

$("#list_doing").on('click', ".to_left", function() {
        // move back from list_doing container to list_todo container
        // return "to-do" styling and the button
        var droppedItem = $(this).parent()    
        $("#list_todo").prepend(droppedItem);
        $("button.to_left", $("#list_todo")).remove();
        $("li.task", $("#list_todo")).css({"color": "darkblue"});
});

$("#list_doing").on('click', ".to_right", function() {
        // move forward from list_doing container to list_done container
        // apply new styling and adjust buttons
        var completedItem = $(this).parent()    
        $("#list_done").prepend(completedItem);
        $("button.to_right", $("#list_done")).remove();
        $("li.task", $("#list_done")).css({"color": "lightgrey"});
});

$("#list_done").on('click', ".to_left", function() {
        // move back from list_done container to list_doing container
        // return the "doing" styling and adjust buttons
        var incompleteItem = $(this).parent()    
        $("#list_doing").prepend(incompleteItem);
        $("button.to_right", $("#list_doing")).remove();
        $("li.task", $("#list_doing")).append("<button class='to_right'> >> </button>");
        $("li.task", $("#list_doing")).css({"color": "blue"});
});


