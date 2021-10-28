// ШАПКА ПРИ СКРОЛЕ


window.onscroll = function() {myFunction()};

const header = document.querySelector(".header"); 
const headerWrap = document.querySelector('#first-screen');
const sticky = header.offsetTop; 

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("header--fixed");
		headerWrap.style.paddingTop="75px";
	} else {
		header.classList.remove("header--fixed");
		headerWrap.style.paddingTop="0px";
	}
};


// ==========