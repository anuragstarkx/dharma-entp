window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("mynav").style.fontSize = "15px";
    document.getElementById("logo").style.width = "50px";
    document.getElementById("logo").style.height = "50px";
  } 
  else {
    document.getElementById("mynav").style.fontSize = "20px";
    document.getElementById("logo").style.width = "70px";
    document.getElementById("logo").style.height = "70px";
  }
}

function openChat() {
	document.getElementById("myChat").style.display = "block";
}

function closeChat() {
	document.getElementById("myChat").style.display = "none";
}

function getYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n-2016;
}

function initMap() {
  var test= {lat: 28.510693, lng: 77.521802}; 
  var map = new google.maps.Map(document.getElementById('mymap'), { 
    zoom: 17, 
    center: test,
    disableDefaultUI: true, 
  }); 
  var marker = new google.maps.Marker({ 
    position: test, 
    map: map 
  }); 
}