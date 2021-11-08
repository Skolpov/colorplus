

let stepBtn = Array.prototype.slice.call(document.querySelectorAll('.step-btn'));
let stepText = Array.prototype.slice.call(document.querySelectorAll('.step-text'));

// stepBtn.forEach(function(elem) {
// 	elem.addEventListener('mouseover', function() {
// 		stepText.classList.toggle('step--active');
// 	})
// })


stepBtn.forEach(function(el) {
	el.addEventListener('click', function() {
		stepText.forEach(function(elem) {
			elem.classList.toggle('step--active')
		})
	})
})