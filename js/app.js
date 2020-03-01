$(document).ready(function($) {
	var item;
	var hideTime = 1000;
	var showTime = 1000;
	// Cambiar sección
	$("a", '.mainmenu').click(function(){
		if( ! $(this).hasClass('active') ) {
			item = this;
			// Desaparecer todas las secciones con efecto fade
			$('.section:visible').fadeOut( hideTime, function() {
				$('a', '.mainmenu').removeClass( 'active' );
				$(item).addClass( 'active' );
				// Añadir seccion elegida
				var newSection = $( $(item).attr('href') );
				newSection.fadeIn( showTime );
			} );
		}
	});

});

$("#watcher").click(function(){
	$(".fr-content-element").addClass("zoom");
	vacalola();
});

$('.zoom').hover(function vacalola() {
	$(this).addClass('transition');
}, function() {
	$(this).removeClass('transition');
});

$('#mockup2').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();

    // Fresco API code goes here
    Fresco.show([
		{url: 'assets/images/home2.png', caption: 'Home - Intranet Universidad Continental' },
		{ url: 'assets/images/lista_eventos.png', caption: 'Lista de Eventos' },
		{ url: 'assets/images/recomendaciones.png', caption: 'Inicio y recomendaciones' },
		{ url: 'assets/images/evento-detalles.png', caption: 'Detalles de los eventos' },
	]);
  });