// ИНПУТ ВЫБОРА (SELECT)


const butSel = document.querySelector('#button');
const select = document.querySelector('#dropdown');
const options = Array.prototype.slice.call(document.querySelectorAll('.option'));
const selectLabel = document.querySelector('#select-label');

butSel.addEventListener('click', function(e) {
	e.preventDefault();
	toggleHidden();
});

options.forEach(function(option) {
	option.addEventListener('click', function(e) {
		setSelectTitle(e);
	})
});

function toggleHidden() {
	select.classList.toggle('hidden');
};

function setSelectTitle(e) {
	const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
	selectLabel.innerText = labelElement;
	toggleHidden();
}


// ==========