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

    envelopeWrapper.addEventListener('click', function() {
        if (!this.classList.contains('open')) {
            this.classList.add('open');

            setTimeout(() => {
                envelopeWrapper.classList.add('expand');
            }, 1000);

            setTimeout(() => {
                envelopeWrapper.style.display = 'none';
                backgroundImage.style.opacity = '1';
            }, 5000);

            setTimeout(() => {
                letterContainer.style.display = 'none';
                invitacion.style.position = 'relative';
            }, 4700);
            
        }
    });
});
