function genCard(btn, msg) {
    var icon = $('<div>').addClass("col s2 card-icon").append($('<a>').addClass("btn-floating btn-medium waves-effect waves-light blue").append($('<i>').addClass("material-icons").text(btn)));
    
    var text = $('<div>').addClass("col s10").append($('<p>').addClass("card-text").text(msg));
    
    var dom = $('<div>').addClass("card").append($('<div>').addClass("row card-content black-text valign-wrapper").append(icon).append(text));
    return dom;
}

$(document).ready(function () {
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        $('#todo-item-input').val("");
        var newCard = genCard('check', user_input);
        $('#list_todo').prepend(newCard);
    });
});

$("#list_todo").on('click', '.card a', function() {
    var card = $(this).closest('.card');
    card.removeClass();
    card.addClass('card green lighten-4');
    card.find('.material-icons').text('arrow_back');
    $("#list_doing").prepend(card);
});

$("#list_doing").on('click', '.card a', function() {
    var card = $(this).closest('.card');
    card.removeClass();
    card.addClass('card white');
    card.find('.material-icons').text('check');
    $("#list_todo").prepend(card);
});
