var main = function() {
	var images = jQuery('#galeria-miniatury-lista .shadow'); 
	for (var i = 0; i < images.length; i++) {
		jQuery(images[i]).on('mouseover', function() { 
			var thumbnailUrl = jQuery(this).attr('src');
			var fullUrl = thumbnailUrl.replace("k11", "p");
			jQuery('.powiekszenie').attr('src', fullUrl); 
		});
	}
}

var script = document.createElement('script');
script.type = "text/javascript";
script.textContent = '(' + main.toString() + ')();';
document.body.appendChild(script);