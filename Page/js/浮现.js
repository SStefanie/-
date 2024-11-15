document.addEventListener("DOMContentLoaded", function() {
	const titleContainer = document.getElementById('title-container');
	const boxes = document.querySelectorAll(".box");

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
				const content = entry.target.querySelector('.box-content');
				if (content) {
					content.classList.add("visible");
				}
			}
		});
	}, {
		threshold: 0.1
	});

	observer.observe(titleContainer);
	boxes.forEach(box => {
		observer.observe(box);
	});
});


const nav = document.querySelector('nav');
const sb2 = document.querySelector('.sb2');
const sb4 = document.querySelector('.sb4');

function updateNavStyle() {
	const navBottom = nav.getBoundingClientRect().bottom;
	const sb2Top = sb2.getBoundingClientRect().top;
	const sb2Bottom = sb2.getBoundingClientRect().bottom;
	const sb4Top = sb4.getBoundingClientRect().top;
	const sb4Bottom = sb4.getBoundingClientRect().bottom;

	if ((navBottom >= sb2Top && navBottom <= sb2Bottom) ||
		(navBottom >= sb4Top && navBottom <= sb4Bottom)) {
		nav.classList.add('whiteStyle');
	} else {
		nav.classList.remove('whiteStyle');
	}
}

window.addEventListener('scroll', updateNavStyle);
window.addEventListener('resize', updateNavStyle);
updateNavStyle();














document.addEventListener("DOMContentLoaded", function() {
	const sb3Boxes = document.querySelectorAll('.sb3');

	sb3Boxes.forEach(sb3 => {
		const imgBox = sb3.querySelector('.imgBox');
		const textBox = sb3.querySelector('.textBox');
		const pTags = sb3.querySelectorAll('p');
		const chanPinYouShiBox = sb3.querySelector('.chanPinYouShiBox');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					if (entry.target === imgBox) {
						imgBox.style.opacity = '1';
						imgBox.style.animation = 'fadeInLeft50 1s forwards';
					} else if (entry.target === textBox) {
						textBox.style.opacity = '1';
						textBox.style.animation = 'fadeInRight50 1s forwards';
					} else if (Array.from(pTags).includes(entry.target)) {
						entry.target.classList.add('animate');
					}
				}
			});
		}, {
			threshold: 0.1
		});

		observer.observe(chanPinYouShiBox);
		observer.observe(imgBox);
		observer.observe(textBox);
		pTags.forEach(p => observer.observe(p));
	});
});


document.addEventListener('DOMContentLoaded', function() {
	var sb2button1 = document.getElementById('sb2button1');
	var sb2button2 = document.getElementById('sb2button2');
	var sb2button3 = document.getElementById('sb2button3');
	var sb2button4 = document.getElementById('sb2button4');
	sb2button1.addEventListener('click', function() {
		window.location.href = "肢体反馈.html";
	});
	sb2button2.addEventListener('click', function() {
		window.location.href = "电动站立.html";
	});
	sb2button3.addEventListener('click', function() {
		window.location.href = "下肢穿戴.html";
	});
	sb2button4.addEventListener('click', function() {
		window.location.href = "外骨骼.html";
	});

});
const scrollToTopBtn = document.getElementById('scrollToTopBtn');



window.onscroll = function() {
	const scrollHeight = document.documentElement.scrollHeight;
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	const clientHeight = document.documentElement.clientHeight;

	if (scrollTop / (scrollHeight - clientHeight) > 0.2) {
		scrollToTopBtn.classList.add('show');
	} else {
		scrollToTopBtn.classList.remove('show');
	}
};

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}
