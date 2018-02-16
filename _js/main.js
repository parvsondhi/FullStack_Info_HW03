$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li> <button id='doing'> Add to Doing </button> <button id='done'> Add to Done </button>"  + " " + user_input+ " "+  "</li>");
        $('#list_todo').addClass("class_todo");
        $('#list_todo #done').hide();
        // $('#list_todo').prepend("<img src='asset/checkbox.png'>");

    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_doing container

        $(this).html("Add To To-Do");
        //var completedItem1 = $(this)
        var completedItem = $(this).parent()
        // $("#list_doing").prepend(completedItem);
        completedItem.attr('src', 'asset/uncheck.png');
        $("#list_doing").addClass("class_doing")
        // $("#list_doing").prepend("<img src='asset/checkbox.png'>")
        $("#list_doing").prepend(completedItem);
        $('#list_doing #done').show().css("background-color", "green");
        
        //$("#list_doing").prepend(completedItem1);
});

$("#list_doing").on('click', "button", function() {
        if(this.id == 'doing'){

        // move back from list_doing container to list_todo container
        //$(this).html("Test");
        $(this).html("Add to Doing");
        //var completedItem1 = $(this)
        var todoItem = $(this).parent()
        $("#list_todo").prepend(todoItem);
        $('#list_todo #done').hide()
    }

    else{
        $(this).hide();
        var doneItem = $(this).parent();
        
        $("#list_done").prepend(doneItem);
        $(this).parent().children("#doing").html("Add to Doing");
        

    }


});

$("#list_done").on('click', "button", function() {
        // move back from list_doing container to list_todo container
        //$(this).html("Test");
        $(this).html("Add To To-Do");
        //var completedItem1 = $(this)
        var doingItem = $(this).parent()
        $("#list_doing").prepend(doingItem);
        // $('#list_done #doing').css("background-color", "yello");
        $('#list_doing #done').show();
});


