const mainForm = document.querySelector('#form');
const inputName1 = document.querySelector('#input-name1');
const inputPhone1 = document.querySelector('#input-phone1');

const bannerForm = document.querySelector('#form2');
const inputName2 = document.querySelector('#input-name2');
const inputPhone2 = document.querySelector('#input-phone2');


// const secondForm = document.querySelector('#form2');
// const inputName2 = document.querySelector('#input-name2');
// const inputPhone2 = document.querySelector('#input-phone2');


// const inputMail = document.querySelector('#input-mail');
// const inputPassword1 = document.querySelector('#input-password1');
// const inputPassword2 = document.querySelector('#input-password2');




// Проверка поля

function checkRequired(inputArr) {
	inputArr.forEach(function(input) {
		if (input.value.trim() === '') {
			showError(input, 'Ошибка');
		} else {
			showSuccess(input)
		}
	});
}

function checkRequiredOne(input) {
	if (input.value.trim() === '') {
		showError(input, 'Ошибка');
	} else {
		showSuccess(input)
	}
}



// Проверка длины

function checkLength(input, min, max) {
	if ( input.value.length < min) {
		showError(input, 'Коротко')
	} else if ( input.value.length > max) {
		showError(input, 'Много')
	} else {
		showSuccess(input);
	}
}




// Показать ошибку

function showError (input, message) {
	const formControl =  input.parentElement;
	formControl.classList.add('error');
	const small = formControl.querySelector('small');
	small.innerText = message;
}




// Показать успех

function showSuccess (input, message) {
	const formControl =  input.parentElement;
	if (formControl.classList.contains('error')) {
		formControl.classList.remove('error')
	} else {
		formControl.classList.add('success');
	}
}




// Проверка почты

// function checkEmail(input) {
// 	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	if (re.test(input.value)) {
// 		showSuccess(input);
// 	} else {
// 		showError(input, 'Недопустимо')
// 	}
// }




// Проверка пароля

// function checkPasswordsMatch(input1, input2) {
// 	if (input1.value !== input2.value) {
// 		showError(input2, 'Не совпадает')
// 	}
// }




mainForm.addEventListener('submit', function(e) {
	e.preventDefault();

	checkRequired([inputName1, inputPhone1]);
	checkLength(inputName1, 2, 20);
	checkLength(inputPhone1, 16, 20);
	
	// checkEmail(inputMail);
	// checkPasswordsMatch(inputPassword1, inputPassword2);

});


bannerForm.addEventListener('submit', function(e) {
	e.preventDefault();

	checkRequired([inputName2, inputPhone2]);
	checkLength(inputName2, 2, 20);
	checkLength(inputPhone2, 16, 20);
	
	// checkEmail(inputMail);
	// checkPasswordsMatch(inputPassword1, inputPassword2);

});
