
// var phoneMask = IMask(
// 	document.getElementById('input-phone'), {
// 	  mask: '+{7}(000)000-00-00'
// });


var inpPhones = document.getElementsByClassName("input-phone");
for (var i = 0; i < inpPhones.length; i++) {
    new IMask(inpPhones[i], {
        mask: '+{7}(000)000-00-00',
        placeholder: {
            show: 'always'
        }
    });
}