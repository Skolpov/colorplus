// ЗАГРУЗКА ШРИФТОВ


const head = window.document.getElementsByTagName('head')[0]

function includeCSS(aFile, aRel){
	const style = window.document.createElement('link')
	style.href = aFile
	style.rel = aRel || 'stylesheet'
	if (aFile === 'https://fonts.gstatic.com') {
		style.rel = aRel || 'preconnect'

	}
	head.appendChild(style)
}

includeCSS('https://fonts.gstatic.com');
includeCSS('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;800&display=swap');
includeCSS('https://fonts.gstatic.com');
includeCSS('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap');



// ==========