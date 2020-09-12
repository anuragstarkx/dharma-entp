function getYear() {
	var d = new Date();
	var n = d.getFullYear();
	document.getElementById("year").innerHTML = n-2016;
}

function readJson() {
	var blog_data = data;
	var count = 0;
	var design_data = "";
	for (var i = blog_data.length - 1; i >= 0; i--) {
		if(count<3){
			design_data += '<div class="card"><div class="card-body">' +
							'<img class="card-img-top" src="' + blog_data[i].image + '" alt="Card image">' + 
							'<div class="card-img-overlay">' + 
							'<p class="card-text"><h2 class="text-center blog-card text-light"><b>' + blog_data[i].date + '</b></h2></p>' + 
							'</div>' + 
							'<h3 class="card-title">' + blog_data[i].title + '</h3>' + 
							'<p class="card-text">' + blog_data[i].desc + '</p>' + 
							'</div></div>';
						}
						else{
							break;
						}
		count++;
	}
	var divtag = document.createElement('div');
	divtag.className = "card-deck";
	divtag.innerHTML = design_data;
	document.getElementById("blogit").appendChild(divtag);
}

function readCat() {
	var cat = category;
	var design_data = "";
	for (var i = 0; i < cat.length; i++) {
		design_data += '<div class="column"> \
						<div class="card cat-card"> \
							<img src="' + cat[i].img + '" alt="Category Image" class="card-img-top">\
							<div class="card-body">\
							<h4><b>' + cat[i].type + '</b></h4>\
							<p>' + cat[i].desc + '</p>\
							</div>\
							<button class="btn btn-dark" data-toggle="modal" data-target="#product-mod" onclick="viewProduct('+i+')"><b>SHOW</b></button>\
						</div>\
					</div>';
	}
	design_data += '<div class="column text-center mt-auto mb-auto text-light"><h4><b>& more...</b></h4></div>';
	var divtag =document.createElement('div');
	divtag.className = "row";
	divtag.innerHTML = design_data;
	document.getElementById("cat").appendChild(divtag);
}

function readClient() {
	var client = clients;
	var design_data = "";
	for (var i = 0; i < client.length; i+=2) {
		design_data += '<div class="col-lg-3 cli-col" data-toggle="tooltip" data-placement="top" title="' + client[i].Detail + '">\
						<img src="' + client[i].img + '" class="img-client">\
						<p><h4><b>' + client[i].Client + '</b></h4></p>\
						</div>\
						<div class="col-lg-3 cli-col" data-toggle="tooltip" data-placement="top" title="' + client[i+1].Detail + '">\
							<img src="' + client[i+1].img + '" class="img-client">\
							<p><h4><b>' + client[i+1].Client + '</b></h4></p>\
						</div>';
	}
	var divtag =document.createElement('div');
	divtag.className = "row";
	divtag.innerHTML = design_data;
	document.getElementById("cli").appendChild(divtag);
}

function start() {
	getYear();
	readJson();
	readCat();
	readClient();
	$(document).ready(function(){
			$('[data-toggle="tooltip"]').tooltip();
		});
}

function moreBlog() {
	var blog_data = data;
	var design_data = "";
	for (var i = blog_data.length - 1; i >= 0; i--) {
		design_data += '<div class="card"><div class="card-body">' +
						'<img class="card-img-top" src="' + blog_data[i].image + '" alt="Card image">' + 
						'<div class="card-img-overlay">' + 
						'<p class="card-text"><h2 class="text-center blog-card1 text-light"><b>' + blog_data[i].date + '</b></h2></p>' + 
						'</div>' + 
						'<h3 class="card-title">' + blog_data[i].title + '</h3>' + 
						'<p class="card-text">' + blog_data[i].desc + '</p>' + 
						'</div></div>'; 
	}

	var divtag = document.createElement('div');
	divtag.className = "container flex-container";
	divtag.innerHTML = design_data;
	document.getElementById("blog-body").appendChild(divtag);
}

function emptyBlog() {
	document.getElementById("blog-body").innerHTML = "";
}

function viewProduct(type) {
	var product = products;
	var design_data = "";
	for (var i = 0; i < product.length; i++) {
		if (type == product[i].id) {
			cat = product[i].Category;
			console.log(product[i].Product);
			design_data += '<div class="column"> \
								<div class="card pro-card"> \
									<img src="' + product[i].img + '" alt="' + product[i].Product + ' Image" class="card-img-top pro-img">\
									<div class="card-body">\
										<h4><b>' + product[i].Product + '</b></h4>\
									</div>\
								</div>\
							</div>';
		}
	}
	document.getElementById("pro-title").innerHTML = cat;
	var divtag = document.createElement('div');
	divtag.className = "row";
	divtag.innerHTML = design_data;
	document.getElementById("product-body").appendChild(divtag);
}

function emptyProduct() {
	document.getElementById("product-body").innerHTML = "";
	document.getElementById("pro-title").innerHTML = "";
}