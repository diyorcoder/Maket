var elButton = document.querySelector('.item2');
var elMenu = document.querySelector('.list2');
       elButton.addEventListener('click', function(evt){
	evt.preventDefault();
	elMenu.classList.toggle('show');
});

