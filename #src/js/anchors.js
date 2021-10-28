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
const block2Anchor = document.querySelector('.block2-anchor');
const block3Anchor = document.querySelector('.block3-anchor');
const block4Anchor = document.querySelector('.block4-anchor');
const block5Anchor = document.querySelector('.block5-anchor');
const block6Anchor = document.querySelector('.block6-anchor');

mainAnchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.main-target', 1000);
});

block2Anchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.block2-target', 1000);
});

block3Anchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.block3-target', 1000);
});

block4Anchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.block4-target', 1000);
});

block5Anchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.block5-target', 1000);
});

block6Anchor.addEventListener('click', function() {
	// Тут вставляешь название блока куда скролить
	smoothScroll('.block6-target', 1000);
});


// // ==========
