/*var showModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.add('showModal');
  document.querySelector('.modal').classList.add('showModal');
};

var modalLinks = document.querySelectorAll('.show-modal');

modalLinks.forEach(function(element) {
  element.addEventListener("click", function() {
      document.querySelector(event.target.getAttribute("href")).classList.add('showModal');
    });
}); 

for(var i = 0; i < modalLinks.length; i++){
  modalLinks[i].addEventListener('click', showModal);
}

var hideModal = function(event){
event.preventDefault();   //??
  document.querySelector('#modal-overlay .btn-close').classList.remove('showModal');
  
  var closeModal = document.querySelectorAll('.modal');
  
  for(var i = 0; i < closeModal.length; i++){
    closeModal[i].classList.remove('showModal');
  }
};

document.addEventListener('keyup', function(event) {
  if(event.keyCode === 27) {
    hideModal();
  }
})

var closeButtons = document.querySelectorAll('.modal .close');

for(var i = 0; i < closeButtons.length; i++){
  closeButtons[i].addEventListener('click', hideModal);
} 

document.querySelector('#modal-overlay').addEventListener('click', hideModal);  

var modals = document.querySelectorAll('.modal');

for(var i = 0; i < modals.length; i++){
  modals[i].addEventListener('click', function(event){
    event.stopPropagation();
  });
}*/