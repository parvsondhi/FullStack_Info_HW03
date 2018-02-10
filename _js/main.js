$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // console.log(user_input);
        $('#list_todo').prepend('<div class = "card"><div class = "description">' + user_input 
            + '</div><button class="clickRight"><img src="icon_right.svg" alt="Icon"></button>');
    })
);

$(document).on('click', '.clickRight', function() {
    // check which column they are part of
    var parent_id = $(this).parent().parent()[0].id;
    console.log(parent_id);
    var completedItem = $(this).parent();

    // put the card in the doing column
    if (parent_id == "list_todo") {
        console.log($(this).parent().children()[0]);
        $(this).parent().prepend("<button class='clickLeft'><img src='icon_left.jpg' alt='Icon'></button>");
        $("#list_doing").prepend(completedItem);
    }

    // put the card in the done column
    if (parent_id == "list_doing") {
        console.log(completedItem);
        $("#list_done").prepend(completedItem); 
        $(this).children(":first").remove();         
    }      
});


$(document).on('click', '.clickLeft', function() {
    // check which column they are part of
    var parent_id = $(this).parent().parent()[0].id;
    console.log(parent_id);
    var completedItem = $(this).parent();

    
    // put the card in the to do column
    if (parent_id == "list_doing") {
        $(this).remove(); 
        $("#list_todo").prepend(completedItem); 
                
    }

    // put the card in the doing column
    if (parent_id == "list_done") {
        $("#list_doing").prepend(completedItem);
        $(this).parent().append("<button class='clickRight'><img src='icon_right.svg' alt='Icon'></button>");            
    }            
});

$('#new-item').click(function(){
    console.log('hello');
   $("#new_item").val('');
});

