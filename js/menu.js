function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show', visible)
}

function hamburger(hide) {
	document.querySelector('.hamburger').classList.toggle('one', hide)
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
  hamburger();
});