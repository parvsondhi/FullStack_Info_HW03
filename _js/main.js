var id = 0;

$(document).ready(
    $("#new-item").on('click', function() {
        var user_input = $('#todo-item-input').val();

        var card_content = '<p>' + user_input + '</p>';
        var newcard = '<div class="card todo-color" id=card_' + id + '>' + card_content + '<button>Doing</button><button>Done</button></div>';
        $('#list_todo').prepend(newcard);
        id++;
    })
);

$("#list_todo").on('click', "button", function() {
    // move back from list_todo container to list_doing container
    if ($(this).html() == "Doing") {
        adjustButton("Doing", $(this), $(this).next());
        var currentCard = $(this).parent()
        currentCard.attr('class', 'card doing-color');
        $("#list_doing").prepend(currentCard);
    }
    // move back from list_todo container to list_done container
    else {
        adjustButton("Done", $(this).prev(), $(this));
        var currentCard = $(this).parent()
        currentCard.attr('class', 'card done-color');
        $("#list_done").prepend(currentCard);
    }   
});

$("#list_doing").on('click', "button", function() {
    // move back from list_doing container to list_todo container
    if ($(this).html() == "To-Do") {
        adjustButton("To-Do", $(this), $(this).next());
        var currentCard = $(this).parent()
        currentCard.attr('class', 'card todo-color');
        $("#list_todo").prepend(currentCard);
    }
    // move back from list_doing container to list_done container
    else {
        adjustButton("Done", $(this).prev(), $(this));
        var currentCard = $(this).parent();
        currentCard.attr('class', 'card done-color');
        $("#list_done").prepend(currentCard);
    }
});

$("#list_done").on('click', "button", function() {
    // move back from list_done container to list_todo container
    if ($(this).html() == "To-Do") {
        adjustButton("To-Do", $(this), $(this).next());
        var currentCard = $(this).parent();
        currentCard.attr('class', 'card todo-color');
        $("#list_todo").prepend(currentCard);
    }
    // move back from list_done container to list_doing container
    else {
        adjustButton("Doing", $(this).prev(), $(this));
        var currentCard = $(this).parent()
        currentCard.attr('class', 'card doing-color');
        $("#list_doing").prepend(currentCard);
    }
});

// adjust the button text to corresponding text 
function adjustButton(listType, firstButton, secondButton) {
    if (listType == "To-Do") {
        firstButton.html("Doing");
        secondButton.html("Done");
    }
    else if (listType == "Doing") {
        firstButton.html("To-Do");
        secondButton.html("Done");
    }
    else if (listType == "Done") {
        firstButton.html("To-Do");
        secondButton.html("Doing");
    }
    else {
        console.log("button adjustment error");
    }
}