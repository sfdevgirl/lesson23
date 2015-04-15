$( document ).ready(function() {
	list.addItem();
	list.removeItem();
});
	
var list = {	
	addItem: function(){
		$(".add").on('click', function() {
			var newTodo = $('.new-todo input').val();
			var newListItem = '<li>' + newTodo + '<input type="checkbox"><button class="delete">X</button></li>';
			$('.list').append(newListItem);
			$('.new-todo input').val('');
		});
	},
	removeItem: function(){
		$(".list").on('click', function(event){
			var element = event.toElement;
			if(element.className !== 'delete') {return;}
			var listItem = element.parentElement;
			listItem.remove();
		});
	}
};