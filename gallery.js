var images = jQuery('#galeria-miniatury-lista .shadow'); 
for (var i = 0; i < images.length; i++) {
	jQuery(images[i]).on('mouseover', function() { 
		var pic = jQuery(this);
		var thumb = pic.attr('src');
		var full = thumb.replace("k11", "p");
		jQuery('.powiekszenie').attr('src', full); 
	});
}