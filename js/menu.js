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

document.getElementById("general").addEventListener("click", function(){
  loadPages(event, "general.html", charts);
});
document.getElementById("links").addEventListener("click", function(){
  loadPages(event, "links.html", function(){
    document.getElementById("addLinks").addEventListener("click", function() {
      showModal(event);
      document.getElementById("modalLinks").classList.add('showModal');
    });
  });  
});

document.getElementById("details").addEventListener("click", function() {
  loadPages(event, "details.html");
});

document.getElementById("personal").addEventListener("click", function() {
  loadPages(event, "personal.html");
});

document.getElementById("banners").addEventListener("click", function() {
  loadPages(event, "banners.html", function(){
    document.getElementById("addBanners").addEventListener("click", function(){
      showModal(event);
      document.getElementById("modalBanners").classList.add('showModal');
    });
  });
});

document.getElementById("payout").addEventListener("click", function () {
  loadPages(event, "payout.html");
});

document.getElementById("postback").addEventListener("click", function () {
  loadPages(event, "postback.html");
});


function loadPages (event, pages, callback) {
   (event || window.event).preventDefault();
   var con = document.getElementById('content'),
       xhr = new XMLHttpRequest();

   xhr.onload = function (event) {     
     con.innerHTML = xhr.responseText;
    if (callback) {
     callback();
    }
   }

 xhr.open("GET", pages, true);
 xhr.setRequestHeader('Content-type', 'text/html');
 xhr.send();
}


/*function loadModal (idButton, idModal){
  document.getElementById(idButton).addEventListener("click", function(){
    showModal(event);
    document.getElementById(idModal).classList.add('showModal');
  });
}*/

var showModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.add('showModal');
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
  event.preventDefault(); 
  document.querySelector('#modal-overlay').classList.remove('showModal');
  
  var closeModal = document.querySelectorAll('.modal');
  
  for(var i = 0; i < closeModal.length; i++){
    closeModal[i].classList.remove('showModal');
  }
};

document.addEventListener('keyup', function(event) {
  if(event.keyCode === 27) {
    hideModal(event);
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
}