// Dynamically creates a new li element with red button after user puts in text and clicks 'Add a card'
$(document).ready(
  $("#new-item").on('click', function() {
    // once the document loads, create new item with this function
    var text = $('#task').val();
    if (text != '') {
      $('#todo-list').prepend("<li class='addedTask unmark'> <button id='started' value='on'>Move</button>" + text + '</li>');
    }

  })
);

// Clicking on the green button will move the task from 'todo-list' to 'doing-listred
$("#todo-list").on('click', "button", function() {

  var completedItem = $(this).parent();
  change(completedItem, true);
  $('#doing-list').prepend($(completedItem));
});

// Clicking on the green button will moe the task back from 'doing-list' to 'todo-list'
$("#doing-list").on('click', "button", function() {
    var completedItem = $(this).parent();
    change(completedItem, false);
    $('#todo-list').prepend($(completedItem));
});

// Changes the task button as it switches between the two columns
function change(selector, isMarked) {
    if(isMarked) {
        $(selector).removeClass('unmark');
        $(selector).addClass('mark');
    } else {
        $(selector).removeClass('mark');
        $(selector).addClass('unmark');
    }
};