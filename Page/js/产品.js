const nav1 = document.querySelector('.nav1')
const h1 = document.querySelector('h1');


function updateNavStyle() {
	const navBottom = nav1.getBoundingClientRect().bottom;
	const h1Top = h1.getBoundingClientRect().top;


	if (navBottom >= h1Top) {
		nav1.classList.add('navStyle');
	} else {
		nav1.classList.remove('navStyle');
	}
}

window.addEventListener('scroll', updateNavStyle);
window.addEventListener('resize', updateNavStyle);
updateNavStyle();



window.onload = function() {
				var suolueTuList = document.querySelectorAll('.suoluetu');
				for (var i = 0; i < suolueTuList.length; i++) {
					suolueTuList[i].addEventListener('click', function() {
						var mainImage = document.getElementById('main-image');
						mainImage.src = this.src;
			 	});
				}
			};
