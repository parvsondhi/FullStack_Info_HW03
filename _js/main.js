$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li> <button class='waves-effect waves-light btn listbutt'> Start </button><p>" + user_input + "</p></li>");
    })
);


$("#list_todo").on('click', '.listbutt', function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());

        // $(this).html("Stop");
        $(this).parent().remove();

        console.log($(this).parent().find("p").html());

        var text = $(this).parent().find("p").html();

        $('#list_doing').prepend("<li> <button class='waves-effect waves-light btn listbutt'> Pause </button><button class=' waves-effect waves-light btn donebutt'> Done </button><p>" + text + "</p></li>");  

        // var completedItem = $(this).parent()
        // $("#list_doing").prepend(completedItem);


        
});

$("#list_doing").on('click', '.donebutt', function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());

        // $(this).html("Stop");
        $(this).parent().remove();

        var text = $(this).parent().find("p").html();

        $('#list_done').prepend("<li> <p>" + text + "</p></li>");  

        // var completedItem = $(this).parent()
        // $("#list_doing").prepend(completedItem);


        
});

$("#list_doing").on('click', '.listbutt', function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());

        // $(this).html("Stop");
        $(this).parent().remove();

        var text = $(this).parent().find("p").html();

        $('#list_todo').prepend("<li><button class='waves-effect waves-light btn listbutt'> Continue </button><p>" + text + "</p></li>");  

        // var completedItem = $(this).parent()
        // $("#list_doing").prepend(completedItem);


        
});


