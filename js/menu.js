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








/*------------------------------Ajax------------------------------*/


document.getElementById("general").addEventListener("click", load_general);
document.getElementById("links").addEventListener("click", load_links);


function load_general (e) {
   (e || window.event).preventDefault();
   var con = document.getElementById('content'),
       xhr = new XMLHttpRequest();

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
   var con = document.getElementById('content'),
       xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function (e) { 
    if (xhr.readyState == 4 && xhr.status == 200) {
     con.innerHTML = xhr.responseText;
    }
   }

 xhr.open("GET", "links.html", true);
 xhr.setRequestHeader('Content-type', 'text/html');
 xhr.send();
}


function save_links (e) {
   (e || window.event).preventDefault();
   var con = document.getElementById('content'),
       xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function (e) { 
    if (xhr.readyState == 4 && xhr.status == 200) {
     con.innerHTML = xhr.responseText;
    }
   }

 xhr.open("POST", "content", true);
 xhr.setRequestHeader('Content-type', 'text/html');
 xhr.send(links.html);
}


/*-------------------------Canvas-----------------------*/

var ctx = document.getElementById('myChart').getContext('2D');  

  new Chart(ctx, {
      // 1
      type: 'bar',
      data: {
          // 2
          labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
          // 3
          datasets: [{
              // 4
              label: "Signups",
              // 5
              backgroundColor: '#8DBEC8',
              borderColor: '#8DBEC8',
              // 6
              data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
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
              // 7
              hidden: true,
          }]
      },
  });
