const secondLi = document.querySelector('nav');
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		secondLi.classList.add('gundong');
	} else {
		secondLi.classList.remove('gundong');
	}
});




// const chakan = document.getElementById('chakan');
const button1 = document.getElementById('button1');
const closeModalBtn = document.getElementById('closeModalBtn');
const overlay = document.getElementById('overlay');



// chakan.addEventListener('click', () => {
// 	overlay.style.display = 'flex';
// });

button1.addEventListener('click', () => {
	overlay.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
	overlay.style.display = 'none';
});

overlay.addEventListener('click', (event) => {
	if (event.target === overlay) {
		overlay.style.display = 'none';
	}
});







document.getElementById('jikeyvyue').addEventListener('click', function() {
	document.getElementById('sidebar').classList.toggle('open');
	document.getElementById('modalOverlay').style.display = 'block';
});

document.getElementById('button2').addEventListener('click', function() {
	document.getElementById('sidebar').classList.toggle('open');
	document.getElementById('modalOverlay').style.display = 'block';
});

function closeSidebar() {
	document.getElementById('sidebar').classList.remove('open');
	document.getElementById('modalOverlay').style.display = 'none';
}











document.getElementById('userInfoForm').addEventListener('submit', function(event) {


	const newExitBtn = document.getElementById('new-exit-btn');
	const newDialog = document.getElementById('new-dialog');
	newExitBtn.addEventListener('click', () => {
		newDialog.style.display = 'none';
	});
	
	event.preventDefault();
	var name = document.getElementById('name').value;
	var idNumber = document.getElementById('idNumber').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var namePattern = /^[\u4e00-\u9fa5]+$/;
	var idNumberPattern = /^\d{17}[\dXx]$/;
	var phonePattern = /^\d{11}$/;
	var emailPattern = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

	var nameError = document.getElementById('nameError');
	var idNumberError = document.getElementById('idNumberError');
	var phoneError = document.getElementById('phoneError');
	var emailError = document.getElementById('emailError');

	nameError.style.display = "none";
	idNumberError.style.display = "none";
	phoneError.style.display = "none";
	emailError.style.display = "none";

	var errors = [];

	if (name.trim() === "") {
		nameError.textContent = "姓名不能为空";
		nameError.style.display = "block";
		errors.push("姓名");
	} else if (!namePattern.test(name)) {
		nameError.textContent = "姓名格式不正确";
		nameError.style.display = "block";
		errors.push("姓名");
	}

	if (idNumber.trim() === "") {
		idNumberError.textContent = "身份证号不能为空";
		idNumberError.style.display = "block";
		errors.push("身份证号");
	} else if (!idNumberPattern.test(idNumber)) {
		idNumberError.textContent = "身份证号格式不正确";
		idNumberError.style.display = "block";
		errors.push("身份证号");
	}

	if (phone.trim() === "") {
		phoneError.textContent = "手机号不能为空";
		phoneError.style.display = "block";
		errors.push("手机号");
	} else if (!phonePattern.test(phone)) {
		phoneError.textContent = "手机号格式不正确";
		phoneError.style.display = "block";
		errors.push("手机号");
	}

	if (email.trim() === "") {
		emailError.textContent = "邮箱不能为空";
		emailError.style.display = "block";
		errors.push("邮箱");
	} else if (!emailPattern.test(email)) {
		emailError.textContent = "邮箱格式不正确";
		emailError.style.display = "block";
		errors.push("邮箱");
	}

	if (errors.length > 0) {
		return;
	}
	newDialog.style.display = 'block';
	document.getElementById('userInfoForm').reset();
});


