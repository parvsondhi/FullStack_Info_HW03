$(document).ready(
    $("#new-item").on('click', function () {
        // once the document loads, create new item with this function
        var user_input = $('#new-item-input').val();
        if (user_input == "") {
            return;
        }
        
        var new_entry = $("<li>")
        new_entry.html(" " + user_input + " ");
        new_entry.append("<input class='move-right' type='image' src='images/move_right.png' alt='Move Right' width='16px'>");
        new_entry.prepend("<input class='move-left' type='image' src='images/move_left.png' alt='Move Left' width='16px'>");
        new_entry.find(".move-left").hide();
        
        $('#list-todo').prepend(new_entry);
    })
);

$(".column").on('click', '.move-right', function () {
    var completed_item = $(this).parent();
    completed_item.find(".move-left").show();
    
    var next_column = getNextColumn(completed_item);
    
    if (isLastColumn(next_column)) {
        completed_item.find(".move-right").hide();
    }
    
    getNextColumn(completed_item).find(".column-entries").prepend(completed_item);
});

$(".column").on('click', '.move-left', function () {
    var completed_item = $(this).parent();
    completed_item.find(".move-right").show();
    
    var prev_column = getPrevColumn(completed_item);
    
    if (isFirstColumn(prev_column)) {
        completed_item.find(".move-left").hide();
    }
    
    getPrevColumn(completed_item).find(".column-entries").prepend(completed_item);
});

function getNextColumn (element) {
    return getColumn(element).next();
}

function getPrevColumn (element) {
    return getColumn(element).prev();
}

function getColumn (element) {
    while (element.attr("class") != "column") {
        element = element.parent();
    }
    return element;
}

function isLastColumn (column) {
    return column.is(":last-child");
}

function isFirstColumn (column) {
    return column.is(":first-child");
}