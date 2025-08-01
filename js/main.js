const backgroundMusic = document.getElementById('audio');
const muteToggleButton = document.getElementById('mute-toggle-button');
const muteIcon = muteToggleButton.querySelector('.material-icons');

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
document.addEventListener('DOMContentLoaded', function() {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const backgroundImage = document.querySelector('.background-image');
    const letterContainer = document.querySelector('.letter-container');
    const invitacion = document.querySelector('.invitacion');
    const indicacion = document.querySelector('.indicacion');
    var audio = document.getElementById("audio");
    const fabContainer = document.querySelector('.fab-container');
    

    envelopeWrapper.addEventListener('click', function() {
        if (!this.classList.contains('open')) {
            this.classList.add('open');

            setTimeout(() => {
                envelopeWrapper.classList.add('expand');
            }, 1000);

            setTimeout(() => {
                indicacion.style.display = 'none';
            }, 500);

            setTimeout(() => {
                envelopeWrapper.style.display = 'none';
                backgroundImage.style.opacity = '1';
            }, 5000);

            setTimeout(() => {
                letterContainer.style.display = 'none';
                invitacion.style.position = 'relative';
                indicacion.style.display = 'none';
                fabContainer.style.position = 'fixed';
                audio.play();
            }, 4700);
            
        }
    });
});



// Función para actualizar el icono basado en el estado de mute
function updateMuteIcon() {
    if (backgroundMusic.muted) {
        muteIcon.textContent = 'volume_off'; // Mute activado
    } else {
        muteIcon.textContent = 'volume_up'; // Mute desactivado
    }
}

// Establecer el estado inicial del icono al cargar la página
document.addEventListener('DOMContentLoaded', () => {
// Asegurarse de que la música esté silenciada al inicio para el autoplay
    updateMuteIcon();

    // Intentar reproducir la música (puede requerir interacción del usuario en algunos navegadores)
    backgroundMusic.play().catch(error => {
        console.log("La reproducción automática de la música fue bloqueada. El usuario deberá interactuar para reproducirla.", error);
        // Si la reproducción automática es bloqueada, el botón aún funcionará para desmutearla.
    });
});

// Añadir el event listener al botón
muteToggleButton.addEventListener('click', () => {
    backgroundMusic.muted = !backgroundMusic.muted; // Alternar el estado de mute
    updateMuteIcon(); // Actualizar el icono
});