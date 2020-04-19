$(function(){

	var header = document.getElementById('header1');
	var headroom = new Headroom(header);
	headroom.init();

	/*Menu responsive*/

	var ancho = $(window).width(),
		enlaces = $('#enlaces')
		btnMenu = $('#btnMenu'),
		icono = $('btnMenu .icono');

		if (ancho < 700){
			enlaces.hide();
		}

});