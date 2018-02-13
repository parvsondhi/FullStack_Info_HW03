$(document).ready(
    setup()
);

function setup() {
    $('#new-item-button').on('click', addItem)
    $('#todo-item-input').keypress(function (e) {
        let ENTER_KEY = 13;
        var key = e.which;
        if(key == ENTER_KEY) {
            addItem();
        }
    }); 
}

function addItem() {
    // once the document loads, create new item with this function
    var user_input = $('#todo-item-input').val();
    $('#todo-item-input').val('');

    $('#list_todo').prepend(
    `
        <li> 
            <button class="start" title="Start"></button>
            <div>
                <span class="actions hidden">
                    Stop
                </span>
                <span>
        `  
                + user_input + 
        `   
                </span>
            </div>
        </li>
    `);
}

$('#list_todo').on('click', 'button', function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());

        $(this).parent().find('.actions').removeClass('hidden');
        $(this).parent().find('.actions').text('Stop');

        $(this).removeClass('start');
        $(this).addClass('finish');
        $(this).prop('title', 'Finish');

        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);
});

$('#list_doing').on('click', '.actions', function() {
    // move back from list_doing container to list_todo container

    $(this).addClass('hidden');
    $(this).parent().parent().find('button').removeClass('finish');
    $(this).parent().parent().find('button').addClass('start');
    $(this).parent().parent().find('button').prop('title', 'Start');

    var backlogItem = $(this).parent().parent()
    $('#list_todo').prepend(backlogItem);
});

$('#list_doing').on('click', 'button', function() {
    // move from list_todo container to list_doing container
    // console.log($(this).parent());

    $(this).parent().find('.actions').removeClass('hidden');
    $(this).parent().find('.actions').text('Reopen');

    $(this).removeClass('finish');
    $(this).addClass('reopen');
    $(this).prop('title', 'Reopen');

    var completedItem = $(this).parent()
    $("#list_done").prepend(completedItem);
});

$('#list_done').on('click', '.actions', function() {
    // move back from list_doing container to list_todo container

    $(this).text('Stop');
    $(this).parent().parent().find('button').removeClass('reopen');
    $(this).parent().parent().find('button').addClass('finish');
    $(this).parent().parent().find('button').prop('title', 'Finish');

    var backlogItem = $(this).parent().parent()
    $('#list_doing').prepend(backlogItem);
});

// $("#list_doing").on('click', "button", function() {
//         
// });

