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


document.addEventListener('DOMContentLoaded', function() {
	var sb2button1 = document.getElementById('sb2button1');
	var sb2button2 = document.getElementById('sb2button2');
	var sb2button3 = document.getElementById('sb2button3');
	var sb2button4 = document.getElementById('sb2button4');
	sb2button1.addEventListener('click', function() {
		window.location.href = "../医疗机器人/肢体反馈.html";
	});
	sb2button2.addEventListener('click', function() {
		window.location.href = "../医疗机器人/电动站立.html";
	});
	sb2button3.addEventListener('click', function() {
		window.location.href = "../医疗机器人/下肢穿戴.html";
	});
	sb2button4.addEventListener('click', function() {
		window.location.href = "../医疗机器人/外骨骼.html";
	});

});
window.onload = function() {
				var suolueTuList = document.querySelectorAll('.suoluetu');
				for (var i = 0; i < suolueTuList.length; i++) {
					suolueTuList[i].addEventListener('click', function() {
						var mainImage = document.getElementById('main-image');
						mainImage.src = this.src;
			 	});
				}
			};
