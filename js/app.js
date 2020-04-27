// Smooth Scroll conJS Native
document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
		enlace.addEventListener('click', (e) => {
			e.preventDefault();

		document.querySelector(enlace.getAttribute('href') ).scrollIntoView( {
			behavior: 'smooth',
			block: 'end'
		});
	});
});



//Cambia los colores de fondo al hacer scroll

window.onscroll= (e) => {
	const scroll = window.scrollY;

	const header = document.querySelector('#navegacion-principal');

	if (scroll > 300) {
		header.classList.add('bg-success');
	}
	else {
		header.classList.remove('bg-success');
	}
}



//Jquery Countdown
$(document).ready(function() {

	$('#fecha').countdown('2020/11/23', function(e) {
		$(this).html(e.strftime('<span>%D Dias</span> <span>%H Horas</span> <span>%M Minutos</span> <span>%S Segundos</span>'));
	});
});