$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li class='item'> <button class='libtn'> 🔘 </button>" + user_input + "</li>");
    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());

        $(this).html("✅");

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);
});

$("#list_doing").on('click', "button", function() {
        // move back from list_doing container to list_todo container
        $(this).html("🔘");

        var completedItem = $(this).parent()
        $("#list_todo").prepend(completedItem);
});

var colors = ["#FFCECE", "#FFC8F2", "#FFC8E3", "#FFCAF9", "#F5CAFF", "#F0CBFE", "#DDCEFF", "#ACF3FD", "#B5FFFC", "#A5FEE3", "#B5FFC8"];

$('#new-item').click(function() {
    //this sjust changes the "add item" button color every time you click
    $(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
});