$(document).ready(
    $("#new-item").on('click', function() {
        // once the document loads, create new item with this function
        var user_input = $('#todo-item-input').val();
        // alert(user_input);

        $('#list_todo').prepend("<li> <img id = 'icon' src = 'http://www.clker.com/cliparts/e/q/p/N/s/G/checkbox-unchecked-md.png', width = 20px;>" + user_input + "<img id = 'icon1' src = 'http://clipart-library.com/images/rTjra6dkc.png', width = 20px;></li>");
        document.getElementById('icon1').style='display:none;'
    })
);

$("#list_todo").on('click', "img", function() {
        // move from list_todo container to list_doing container
        // console.log($(this).parent());
        
        this.src = 'https://cdn4.iconfinder.com/data/icons/communication-1-3/48/41-128.png';
        var completedItem = $(this).parent()
        $("#list_doing").prepend(completedItem);
});

$("#list_doing").on('click', "img", function() {
        // move back from list_doing container to list_todo container
        this.src = 'http://www.clker.com/cliparts/e/q/p/N/s/G/checkbox-unchecked-md.png';
        var completedItem = $(this).parent()
        $("#list_todo").prepend(completedItem);
});

