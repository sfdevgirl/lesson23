$( document ).ready(function() {
	$(".add").on('click', function() {
		var newTodo = $('.new-todo input').val();
		var newListItem = '<li>' + newTodo + '</li><button class="checkoff"></button><button class="delete"></button>';
		$('.list').append(newListItem);
		$('.new-todo input').val('');
	})
	$(".delete").on('click', function(){
		('li').remove();
	})
});