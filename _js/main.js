var lists = ['list_todo', 'list_doing', 'list_done']
// dictionary of buttons for each list item and what list each button moves the item to
var btn_names = {
    [lists[0]] : [['Start doing', lists[1]]],
    [lists[1]] : [['Add to to-do', lists[0]], ['Mark as done', lists[2]]],
    [lists[2]] : [['Undo', lists[1]]]
}

// create new item in list with value
function add_list(list, value){
    buttons = "";
    for (var i = 0; i < btn_names[list].length; i++) {
        buttons += "<button tolist='" + btn_names[list][i][1] + "'>" + 
            btn_names[list][i][0] + "</button> ";
    }
    $('#'+list + " ul").prepend("<li>" + buttons + "<span>" + value +"</span>" + "</li>");
}

// add a new item from the textbox
function addText() {
    var user_input = $('#todo-item-input').val();
    add_list(lists[0], user_input);
}

$(document).ready(function (){
    // add event listeners for buttons
    $(".list").on('click', "button", function() {
        var tolist = $(this).attr('tolist');
        var completedItem = $(this).parent();
        add_list(tolist, completedItem.find('span').text());
        completedItem.remove();
    });

    // event listener for add box
    $('#todo-item-input').keyup(function(e){
        if(e.keyCode == 13) {
            addText();
        }
    });
    $("#new-item").on('click', addText);
});
