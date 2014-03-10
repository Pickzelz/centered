(function($){
	$.fn.fipos = function(options) {
			
		options = $.extend({}, $.fn.fipos.defaultOptions, options);     
		var fielement = $(this); //Mendefinisikan Elemen
		var fitinggi = $(window).height();//Height Window
		var fiobj = fielement.outerHeight();//Height ELEMENT
		var fitop = (fitinggi - fiobj)/2;//Top
		var filebar = $(window).width();//Width window
		var fil_obj = fielement.outerWidth();//width objek
		var fileft = (filebar-fil_obj)/2;
		// Center Height
		fielement.css('top',fitop);

		//Center Width
		fielement.css('left',fileft);
	}
})(jQuery);