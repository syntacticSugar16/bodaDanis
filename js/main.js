const observer = new IntersectionObserver((entries) =>{
	entries.forEach((entry) => {
		console.log(entry);
		if(entry.isIntersecting){
			entry.target.classList.add('show');
		}else{
			entry.target.classList.remove('show');
		}
	});
});

window.onload = function(){
	
	const parent = document.getElementById("parent");
	const child = document.getElementById("centrado");
	//const throwawayNode = parent.removeChild(child);
}

const hiddenelements = document.querySelectorAll('.hidden');
hiddenelements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -80,
    shift: 5,
    padding: 5,
    numVisible: 3,
    indicators: true,
    nowrap: false
  });
});	

// Obtén la imagen por su ID (asegúrate de que tu imagen tenga un ID en tu HTML)
const miImagen = document.getElementById('miImagen');

// Agrega un event listener para el evento 'click'
miImagen.addEventListener('click', function() {
  // Aquí va la acción que quieres realizar cuando se presiona la imagen
  alert('¡La imagen ha sido presionada!');
  console.log('¡Se hizo clic en la imagen!');
  // Por ejemplo, podrías cambiar el tamaño de la imagen, mostrar otro elemento, etc.
});
