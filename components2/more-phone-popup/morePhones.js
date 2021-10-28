// ВЫПАДАШКА ДЛЯ МЕНЮ


const phoneArrow = document.querySelector('.icon-arrow');
const morePhones = document.querySelector('.more-numbers');


morePhones.addEventListener('mouseleave', () => {
	morePhones.classList.remove('show-morePhones');
	phoneArrow.classList.remove('act-more-phones');
});

document.addEventListener('click', function(e) {
	if(e.target === phoneArrow) {
		phoneArrow.classList.toggle('act-more-phones');
		morePhones.classList.toggle('show-morePhones');
	} 
	if (e.target !== phoneArrow && e.target !== morePhones) {
		phoneArrow.classList.remove('act-more-phones');
		morePhones.classList.remove('show-morePhones');
	}

});

// ==========

