function getYear() {
	var d = new Date();
	var n = d.getFullYear();
	document.getElementById("year").innerHTML = n-2016;
}

function readJson() {
	var blog_data = data;
	var design_data = "";
	console.log("here" + blog_data[0].title);
	for (var i = blog_data.length - 1; i >= blog_data.length-3; i--) {
		design_data += '<div class="card"><div class="card-body">' +
						'<img class="card-img-top" src="' + blog_data[i].image + '" alt="Card image">' + 
						'<div class="card-img-overlay">' + 
						'<p class="card-text"><h2 class="text-center blog-card text-light"><b>' + blog_data[i].date + '</b></h2></p>' + 
						'</div>' + 
						'<h3 class="card-title">' + blog_data[i].title + '</h3>' + 
						'<p class="card-text">' + blog_data[i].desc + '</p>' + 
						'</div></div>';
	}
	var divtag = document.createElement('div');
	divtag.className = "card-deck";
	divtag.innerHTML = design_data;
	document.getElementById("blogit").appendChild(divtag);
}

function start() {
	getYear();
	readJson();
}