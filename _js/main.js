$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // create two buttons for each task to move it across the lists
        $('#list_todo').prepend("<li> <button id='to_left'> << </button>" + user_input + " <button id='to_right'> >> </button> </li>");
        
        
//        var w = $('#list_todo').width();
//        $("button").siblings().css({"color": "red", "width": "w"});
//        console.log(w);
        
        // hide the left pointing arrow from to-do list
        $('#to_left').css('display', 'none');
    })
);

$("#list_todo").on('click', 'button', function() {
        // move from list_todo container to list_doing container
    var takenItem = $(this).parent()
    $("#list_doing").prepend(takenItem);
    $('#to_left').css('display', 'inline'); //show left pointing arrow
});

$("#list_doing").on('click', '#to_right', function() {
        //move from list doing to list done
    
    //console.log($(this).parent());
    var completedItem = $(this).parent()
    $("#list_done").prepend(completedItem);
    $('#to_right').css('display', 'none');
});

$("#list_doing").on('click', '#to_left', function() {
        // move back from list_doing container to list_todo container
    var nottakenItem = $(this).parent()
    $("#list_todo").prepend(nottakenItem);
    $('#to_left').css('display', 'none');
});


$("#list_done").on('click', 'button', function() {
   // move back from list_done container to list_doing container
    var uncompletedItem = $(this).parent()
    $("#list_doing").prepend(uncompletedItem);
    $('#to_right').css('display', 'inline');
});

