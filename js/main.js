// alert ('Hello world!');
// a = prompt ('Напишите значение переменной а');
// b = 35;
// if (a == 5) {
//     alert ('Ok');
// }
// else {
//     alert ('Что-то другое');
// }
// for (var a = 0;a < 5;a++) {
//     alert (a);
// }

var user = {
    'name': 'Galina',
    'surname': 'Nosova',
    'age': '22',
}
// alert (user.name);

// var mas = ['Galina', 'Nosova', 22];
// alert (mas[2]);

function doMagic (a, bcd) {
//     alert (a + bcd);
// }

// doMagic (7, 25);
// doMagic (13, 5);
// doMagic (19, 22);
}
var btn = document.getElementById('btn');
btn.onclick = function () {
    var text = document.querySelector('p.text');
    text.classList.add('red');
    // alert('кнопка кликнута!');

var img = document.querySelector('.card');
img.style.display = 'none';
}


$(function () {
	$(window).scroll(function() {
	    $('.skills-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.wrapper').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.title-form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("slideInDown");
	        }
	    });
	});
    $(window).scroll(function() {
	    $('.end').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("pulse");
	        }
	    });
	});
})