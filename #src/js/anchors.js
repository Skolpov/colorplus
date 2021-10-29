// ЯКОРЯ ДЛЯ МЕНЮ //


function smoothScroll(target, duration) {
	const targetItem = document.querySelector(target);
	const targetItemPosition = targetItem.getBoundingClientRect().top + window.pageYOffset;
	const targetStartPosition = window.pageYOffset;
	let distance = targetItemPosition - targetStartPosition;
	let startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		let timeElapsed = currentTime - startTime;
		let run = ease(timeElapsed, targetStartPosition, distance, duration);
		window.scroll(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);

}


// Это кнопки меню, которые скролят до нужного блока

const mainAnchor = document.querySelector('.main-anchor');
const aboutusAnchor = document.querySelector('.aboutus-anchor');
const projectsAnchor = document.querySelector('.projects-anchor');
const reviewsAnchor = document.querySelector('.reviews-anchor');
const stepsAnchor = document.querySelector('.steps-anchor');
const contactsAnchor = document.querySelector('.contacts-anchor');

mainAnchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.main-target', 1000);
});

aboutusAnchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.aboutus-target', 1000);
});

projectsAnchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.projects-target', 1000);
});

reviewsAnchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.reviews-target', 1000);
});

stepsAnchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.steps-target', 1000);
});

contactsAnchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.contacts-target', 1000);
});


// // ==========
