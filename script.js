$( document ).ready(function() {
	$(".add").on('click', function() {
		var newTodo = $('.new-todo input').val();
		var newListItem = '<li>' + newTodo + '<input type="checkbox"><button class="delete">X</button></li>';
		$('.list').append(newListItem);
		$('.new-todo input').val('');
	})
	$(".list li .delete").on('click', function(){
		console.log("hello");
		var listItem = $(this).parent();
		listItem.remove();
	})
});