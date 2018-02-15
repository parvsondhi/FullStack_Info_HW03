
$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);
        $('#list_todo').prepend("<li id='line'> <button class='moveC' id='move'> Move me! </button> <button class='addC' id='add'> Add to Done! </button>" + user_input + "</li>");
        $('#list_todo #add').hide();
        
    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_doing container
         //console.log($(this).parent());
                                                                //changing the label of the button 
        $(this).html("Add To To-Do");                           //once clicked, then move it to the 
                                                                //doing list and make second button visible
        var completedItem = $(this).parent();
        $("#list_doing").prepend(completedItem);
        $('#list_doing #add').show();
});

$("#list_doing").on('click', "button", function() {
        // move back from list_doing container to list_todo container
    if(this.id === 'move') {
        $(this).html("Move Me!");              //similar process but for moving to the done list
        var uncompletedItem = $(this).parent();     //same process as before but we hide the second button
        $("#list_todo").prepend(uncompletedItem); //instead of showing
        
    } else {
        $(this).hide();
        var uncompletedItem = $(this).parent();
        $("#list_done").prepend(uncompletedItem);
        $(this).parent().children('#move').html("Add to Doing");

    }

    $('#list_todo #add').hide();
});

$("#list_done").on('click', "button", function() {  //similar to the To Do functionality but from done list
    
    $(this).html("Add To To-Do");
    var uncompletedItem = $(this).parent();
    $("#list_doing").prepend(uncompletedItem);
    $(this).parent().children('#add').show();
        
});

