function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show');
  document.querySelector('.content').classList.toggle('flex');
}

function hamburger(hide) {
	document.querySelector('.hamburger').classList.toggle('one', hide);  
}

document.querySelector('.hamburger').addEventListener('click', function(el) {
  el.preventDefault();
  toggleMenu();
  hamburger();
  
});


function clickSingleButton(ul)
{
    items = document.querySelectorAll('.sidebar-menu.active');

    if(items.length) 
    {
        items[0].className = 'sidebar-menu';
    }

    ul.className = 'sidebar-menu active';
}

function addNew() {
    var table = document.getElementById("linker");
    var row = table.insertRow(0);   
    
}


function charts() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [{
        label: 'Signups',
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      }, 
      {
        label: "FTD",
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
      }, 
      {
        label: "Earned",
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
        hidden: true,          
      }]    
    },
  });
}

charts();





/*------------------------------Ajax------------------------------*/

document.getElementById("general").addEventListener("click", load_general);
document.getElementById("links").addEventListener("click", load_links);
document.getElementById("details").addEventListener("click", load_details);


function load_general (e) {
   (e || window.event).preventDefault();
   var con = document.getElementById('content'),
       xhr = new XMLHttpRequest();

   xhr.onload = function (e) {    
    con.innerHTML = xhr.responseText;
    charts();   
   }

 xhr.open("GET", "general.html", true);
 xhr.setRequestHeader('Content-type', 'text/html');
 xhr.send();
}

function load_links (e) {
   (e || window.event).preventDefault();
   var con = document.getElementById('content'),
       xhr = new XMLHttpRequest();

   xhr.onload = function (e) {     
     con.innerHTML = xhr.responseText;  
     document.getElementById("addLink").addEventListener("click", openModal);    
   }

 xhr.open("GET", "links.html", true);
 xhr.setRequestHeader('Content-type', 'text/html');
 xhr.send();
}


function load_details (e) {
   (e || window.event).preventDefault();
   var con = document.getElementById('content'),
       xhr = new XMLHttpRequest();

   xhr.onload = function (e) {     
     con.innerHTML = xhr.responseText;  
   }

 xhr.open("GET", "details.html", true);
 xhr.setRequestHeader('Content-type', 'text/html');
 xhr.send();
}


/*-------------------------Canvas-----------------------*/


function closeModal() {
  document.getElementById('overlay').classList.remove('showModal')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('showModal')
  })
  document.querySelector('#overlay').classList.add('showModal')
  document.querySelector('.modal').classList.add('showModal')
}