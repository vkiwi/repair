var button = document.querySelector('#button')
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function(){
  modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});

function autoClose(){
  modal.classList.remove('modal_active');
}

setInterval(autoClose, 5000);