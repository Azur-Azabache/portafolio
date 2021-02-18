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

$('#mockup2').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();

    // Fresco API code goes here
    Fresco.show([
		{url: 'assets/images/home2.png', caption: 'Home - Intranet Universidad Continental', options:{
			overflow: true,
		}
		 },
		{ url: 'assets/images/lista_eventos.png', caption: 'Lista de Eventos', options:{
			overflow: true,
		} },
		{ url: 'assets/images/recomendaciones.png', caption: 'Inicio y recomendaciones', options:{
			overflow: true,
		} },
		{ url: 'assets/images/evento-detalles.png', caption: 'Detalles de los eventos', options:{
			overflow: true,
		} },
	]);
  });

  $('#mockup1').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();

    // Fresco API code goes here
    Fresco.show([
		{url: 'assets/images/home1.png', caption: 'Home - Plataforma web CargaExpress', options:{
			overflow: true,
		}
		 },
		{ url: 'assets/images/registro.png', caption: 'Vista de registro para transportistas', options:{
			overflow: true,
		} },
		{ url: 'assets/images/seguimiento.png', caption: 'Vista de seguimiento vía Google Maps', options:{
			overflow: true,
		} },
		{ url: 'assets/images/ofertas.png', caption: 'Ofertas de clientes potenciales', options:{
			overflow: true,
		} },
		{ url: 'assets/images/conductores.png', caption: 'Vista de lista de conductores', options:{
			overflow: true,
		} },
	]);
  });
  $('#mockupDelosi').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();

    // Fresco API code goes here
    Fresco.show([
		{url: 'assets/images/delosiChilis.png', caption: 'Home - Portal Laboral Chilis', options:{
			overflow: true,
		}
		 },
		{ url: 'assets/images/kfc.png', caption: 'Home - Portal Laboral Kentucky Friend Chicken', options:{
			overflow: true,
		} },
		{ url: 'assets/images/kfc1.png', caption: 'Oportunidades Mapa - Portal Kentucky Fried Chicken', options:{
			overflow: true,
		} },
		{ url: 'assets/images/mtt.png', caption: 'Home - Madam Tusan', options:{
			overflow: true,
		} },
	]);
  });
  $('#mockupPlace').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();

    // Fresco API code goes here
    Fresco.show([
		{url: 'assets/images/homePlace.jpg', caption: 'Home - PlaceMaking México', options:{
			overflow: true,
		}},
	]);
	});
	$('#mockupMaster').on('click', function(event) {
    // the page will scroll up without this
    event.preventDefault();

    // Fresco API code goes here
    Fresco.show([
		{url: 'assets/images/OnboardingG.jpg', caption: 'Onboarding - Maestros App', options:{
			overflow: true,
		}},
		{url: 'assets/images/Home.jpg', caption: 'Login - Maestros App', options:{
			overflow: true,
		}},
		{url: 'assets/images/Registro.jpg', caption: 'Registro - Maestros App', options:{
			overflow: true,
		}},
	]);
  });