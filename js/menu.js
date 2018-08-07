function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show', visible)
}

function hamburger(hide) {
	document.querySelector('.hamburger').classList.toggle('one', hide)
}

document.querySelector('.hamburger').addEventListener('click', function(el) {
  el.preventDefault();
  toggleMenu();
  hamburger();
});


document.getElementById("general").addEventListener("click", load_general);


document.getElementById("links").addEventListener("click", load_links);
function load_links() {
     document.getElementById("content").innerHTML='<object type="text/html" data="links.html" ></object>';     
  
}

function load_general (e) {
   (e || window.event).preventDefault();
   var con = document.getElementById('content')
   ,   xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function (e) { 
    if (xhr.readyState == 4 && xhr.status == 200) {
     con.innerHTML = xhr.responseText;
    }
   }

 xhr.open("GET", "general.html", true);
 xhr.setRequestHeader('Content-type', 'text/html');
 xhr.send();
}

function load_links (e) {
   (e || window.event).preventDefault();
   var con = document.getElementById('content')
   ,   xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function (e) { 
    if (xhr.readyState == 4 && xhr.status == 200) {
     con.innerHTML = xhr.responseText;
    }
   }

 xhr.open("GET", "links.html", true);
 xhr.setRequestHeader('Content-type', 'text/html');
 xhr.send();
}