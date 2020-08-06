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

function sendMail() {
  Email.send({
        Host: "smtp.gmail.com",
        Username : "anuragxprime@gmail.com",
        Password : "anuragtitan",
        To : 'anuragxprime@gmail.com',
        From : document.getElementById("smail").value,
        Subject : "Test mail",
        Body : document.getElementById("sbody").value,
      })
      .then(function(message){
        alert("mail sent successfully")
      });
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