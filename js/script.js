
//============ adding-number-product-->
$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

//============ btn-read-more-->
function moreLess(initiallyVisibleCharacters) {
	var visibleCharacters = initiallyVisibleCharacters;
	var paragraph = $(".text-01")

	paragraph.each(function() {
		var text = $(this).text();
		var wholeText = text.slice(0, visibleCharacters) + "<span class='ellipsis'>... </span><a href='#' class='more-01'>بیشتر بخوانید</a>" + "<span style='display:none'>" + text.slice(visibleCharacters, text.length) + "<a href='#' class='less-01'> بستن</a></span>"

		if (text.length < visibleCharacters) {
			return
		} else {
			$(this).html(wholeText)
		}
	});
	$(".more-01").click(function(e) {
		e.preventDefault();
		$(this).hide().prev().hide();
		$(this).next().show();
	});
	$(".less-01").click(function(e) {
		e.preventDefault();
		$(this).parent().hide().prev().show().prev().show();
	});
};
moreLess(280);

//============ scroll by click-->
$(document).ready(function(){
	$('.samelnk').click(function(e){
		e.preventDefault();
		var target = $($(this).attr('href'));
		if(target.length){
			var scrollTo = target.offset().top -60;
			$('body, html').animate({scrollTop: scrollTo+'px'}, 800);
		}
	});
});

// ======== background -->
var canvasDots = function() {
	var canvas = document.querySelector('canvas'),
		ctx = canvas.getContext('2d'),
		colorDot = '#adab86',
		color = '#adab86';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.display = 'block';
	ctx.fillStyle = colorDot;
	ctx.lineWidth = .1;
	ctx.strokeStyle = color;

	var mousePosition = {
		x: 30 * canvas.width / 100,
		y: 30 * canvas.height / 100
	};

	var dots = {
		nb: 600,
		distance: 60,
		d_radius: 100,
		array: []
	};

	function Dot(){
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;

		this.vx = -.5 + Math.random();
		this.vy = -.5 + Math.random();

		this.radius = Math.random();
	}

	Dot.prototype = {
		create: function(){
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			ctx.fill();
		},

		animate: function(){
			for(i = 0; i < dots.nb; i++){

				var dot = dots.array[i];

				if(dot.y < 0 || dot.y > canvas.height){
					dot.vx = dot.vx;
					dot.vy = - dot.vy;
				}
				else if(dot.x < 0 || dot.x > canvas.width){
					dot.vx = - dot.vx;
					dot.vy = dot.vy;
				}
				dot.x += dot.vx;
				dot.y += dot.vy;
			}
		},

		line: function(){
			for(i = 0; i < dots.nb; i++){
				for(j = 0; j < dots.nb; j++){
					i_dot = dots.array[i];
					j_dot = dots.array[j];

					if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
						if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
							ctx.beginPath();
							ctx.moveTo(i_dot.x, i_dot.y);
							ctx.lineTo(j_dot.x, j_dot.y);
							ctx.stroke();
							ctx.closePath();
						}
					}
				}
			}
		}
	};

	function createDots(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for(i = 0; i < dots.nb; i++){
			dots.array.push(new Dot());
			dot = dots.array[i];

			dot.create();
		}

		dot.line();
		dot.animate();
	}

	window.onmousemove = function(parameter) {
		mousePosition.x = parameter.pageX;
		mousePosition.y = parameter.pageY;
	}

	mousePosition.x = window.innerWidth / 2;
	mousePosition.y = window.innerHeight / 2;

	setInterval(createDots, 1000/30);
};
window.onload = function() {
	canvasDots();
};

//============ search-->
$('a[href="#search"]').click(function() {
	event.preventDefault()
	$(".BX-serch").addClass("-open");
	setTimeout(function() {
		inputSearch.focus();
	}, 800);
});
$('a[href="#close"]').click(function() {
	event.preventDefault()
	$(".BX-serch").removeClass("-open");
});
$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		$(".BX-serch").removeClass("-open");
	}
});

//============ back to top-->
$(document).ready(function(){
	$('body').append('<div id="scrollTop" class="btn btn-success"><div class="circle"><div class="wave"><i class="fas fa-angle-double-up"></i><span class="glyphicon glyphicon glyphicon-arrow-up"></span></div></div></div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#scrollTop').fadeIn();
		} else {
			$('#scrollTop').fadeOut();
		}
	});
	$('#scrollTop').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '3000');
	});
});

//============ Multi-Slider-->
$(document).ready(function() {
	$('.owl-carousel.Tak-Sl').owlCarousel({
		rtl:true,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:3000,
		lazyLoad: true,
		loop: true,
		nav: false,
		dots:true,
		margin: 0,
		items: 1
	})
	$('.owl-carousel.sl-01').owlCarousel({
		rtl:true,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:3000,
		lazyLoad: true,
		loop: true,
		nav: false,
		dots:true,
		margin: 0,
		items: 4,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	})
	$('.owl-carousel.sl-02').owlCarousel({
		rtl:true,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:3000,
		lazyLoad: true,
		loop: true,
		nav: true,
		dots:false,
		margin: 0,
		items: 4,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})
	$('.owl-carousel.sl-03').owlCarousel({
		rtl:true,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:3000,
		lazyLoad: true,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots:false,
		margin: 0,
		responsiveClass: true,
		responsive: {
			0: {
				items: 4
			},
			600: {
				items: 6
			},
			1000: {
				items: 8
			}
		}
	})
	$('.owl-carousel.sl-04').owlCarousel({
		rtl:true,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:3000,
		lazyLoad: true,
		loop: true,
		nav: true,
		dots:false,
		margin: 0,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})
	$('.owl-carousel.sl-05').owlCarousel({
		rtl:true,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:3000,
		lazyLoad: true,
		loop: false,
		nav: false,
		dots:true,
		margin: 0,
		items: 4
	})
	$('.owl-carousel.sl-06').owlCarousel({
		rtl:true,
		nav: false,
		dots:false,
		margin: 0,
		items: 1
	})
});

//============ mob-respansive-mwnu-->
$('.bar-menu').click(function () {
	$('.right-head').toggleClass('right-open');
	$('body').toggleClass('open-menu');
});
$('.over-page').click(function () {
	$('.right-head').removeClass('right-open');
	$('body').removeClass('open-menu');
});

//============  LOGIN REGISTER -->
document.querySelector('.img__btn').addEventListener('click', function() {
	document.querySelector('.P-RLogn').classList.toggle('s--signup');
});
//============ wow js   -->
new WOW().init();
wow = new WOW(
	{
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
	}
);
wow.init();

//============ part-scroll  -->
if (matchMedia('only screen and (min-width: 767px)').matches) {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 85) {
			$("body").addClass("new-style");
		} else {
			$("body").removeClass("new-style");
		}
	});
}





