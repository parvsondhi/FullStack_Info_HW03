function genCard(btn, msg) {
    var icon = $('<div>').addClass("col s2 card-icon").append($('<a>').addClass("btn-floating btn-medium waves-effect waves-light blue").append($('<i>').addClass("material-icons").text(btn)));
    
    var text = $('<div>').addClass("col s10").append($('<p>').addClass("card-text").text(msg));
    
    var dom = $('<div>').addClass("card").append($('<div>').addClass("row card-content black-text valign-wrapper").append(icon).append(text));
    return dom;
}

$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        $('#todo-item-input').val("");
        var newCard = genCard('check', user_input);
        $('#list_todo').prepend(newCard);
    })
);

$("#list_todo .card-icon").on('click', function() {
        // move from list_todo container to list_doing container
         alert("list todo clicked!");

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);
});

$("#list_doing a").on('click', function() {
        // move back from list_doing container to list_todo container
});
