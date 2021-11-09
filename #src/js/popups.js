// модальные окна

// ДОБАВЛЯЕТ ИЛИ УБИРАЕТ ОТСТУП СПРАВА
// при октрытии формы, чтобы избежать скачка контента
// На viewport больше 1320 добавляет отступы
// На viewport меньше 992 (мобильном) убирает вообще такую возможность

const popupBodys = Array.prototype.slice.call(document.querySelectorAll('.popup-op'));
const btnUp = document.querySelector('.btnUp-container');
const mainHeader = document.querySelector('.header');


function paddingRight() {

	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	if (viewport_width >= 1320) {
		document.body.classList.add('paddingRight');

		if (mainHeader.classList.contains('header--fixed')) {
			mainHeader.classList.add('paddingRight');
		} else {
			mainHeader.classList.remove('paddingRight');
		};

		btnUp.classList.add('paddingRight');
		popupBodys.forEach(function(item) {
			item.classList.add('marginLeftPop');
		})
	}	

	if (viewport_width <= 992) {
		document.body.classList.remove('paddingRight');
		mainHeader.classList.remove('paddingRight');
		btnUp.classList.remove('paddingRight');
		popupBodys.forEach(function(item) {
			item.classList.remove('marginLeftPop');
		})
	}

}


function removePaddingRight() {

	document.body.classList.remove('paddingRight');
	mainHeader.classList.remove('paddingRight');
	btnUp.classList.remove('paddingRight');
	popupBodys.forEach(function(item) {
		item.classList.remove('marginLeftPop');

	})
}


const popups = () => {
	
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const triggers = Array.prototype.slice.call(document.querySelectorAll(triggerSelector));
		const modal = document.querySelector(modalSelector);
		const btnsclose = Array.prototype.slice.call(document.querySelectorAll(closeSelector));
		
		btnsclose.forEach(function(item) {
			item.addEventListener('click', closeModal)
		});

		triggers.forEach(function(item) {
			item.addEventListener('click', openModal)
		});
		
		popupBodys.forEach(function(item) {
			item.addEventListener('click', (e) => {
				if(e.target === item) {
					closeModal()
				}
			})
		})

		document.body.addEventListener('keyup', function (e) {
			const key = e.keyCode;
	
			if (key == 27) {
				closeModal()
			};
		}, false);

		function openModal() {
			modal.classList.add('popup--opened');
			document.body.classList.add('overflow-hidden');
			paddingRight()
		}

		function closeModal() {
			modal.classList.remove('popup--opened');
			document.body.classList.remove('overflow-hidden');
			removePaddingRight()
		};

	}

	bindModal('.header__call-form-btn', '.popup-callback', '.popup-close');
	bindModal('.burger__call-btn', '.popup-callback', '.popup-close');
	bindModal('.order-btn-project', '.popup-callback', '.popup-close');
	bindModal('.btn-signup', '.popup-callback', '.popup-close');
	// bindModal('.project__btn-open', '.popup-content__project', '.popup-close');

};


// ==========