$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li> <button id='undone'> Add to Doing </button>" + user_input + "<button id='done-btn'> Done! </button> </li>");
        $('#done-btn').hide()
    })
);

$("#list_todo").on('click', "button", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());

        $(this).html("Add To To-Do");

        var completedItem = $(this).parent()
        $('#list_doing').prepend(completedItem);
        $('#done-btn').show()
});

$("#list_doing").on('click', "button", function() {
        // move back from list_doing container to list_todo container

        if (this.id === 'done-btn') {

        	$('#undone').html("Not Done")

        	var doneItem = $(this).parent()
        	$('#list_done').prepend(doneItem)
        	$('#done-btn').hide()

        } else {

	        $(this).html("Add to Doing");

	        var todoItem = $(this).parent()
	        $('#list_todo').prepend(todoItem);
	        $('#done-btn').hide()

	    }
});

$("#list_done").on('click', "button", function() {
        // move back from list_doing container to list_todo container

		$(this).html("Add To To-Do");

		var undoneItem = $(this).parent()
        $('#list_doing').prepend(undoneItem);
        $('#done-btn').show()

});