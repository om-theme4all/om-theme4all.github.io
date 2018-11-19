(function($) {
	
	"use strict";
	
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	

	/*
		Vars
	*/
	
	var width = $(window).width();
	var height = $(window).height();
	
	
	$(".typed").typed({
		strings: ["UI/UX Designer", "Full stack developer", "Blogger", "Data Enthusiast"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
	
	/*
		Header Menu Desktop
	*/
	
	var container = $('.container');
	var animation_in = container.data('animation-in');
	var animation_out = container.data('animation-out');
	
	$('.main-menu').on('click', 'a', function(){

		/* vars */
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		var card_item = $(id);
		var menu_items = $('.main-menu li');
		var menu_item_home = $('.main-menu li.home');
		var menu_item = $(this).closest('li');
		var d_lnk = $('.lnks .lnk.discover');
		
		/* if desktop */
		if(!menu_item.hasClass('active') & $('#home').length) {

			/* close card items */
			menu_items.removeClass('active');
			container.find(card_items).removeClass('animated '+animation_in);

			if($(container).hasClass('opened')) {
				container.find(card_items).addClass('animated '+animation_out);
			}

			/* open card item */
			menu_item.addClass('active');
			container.addClass('opened');
			container.find(card_item).removeClass('animated '+animation_out);
			container.find(card_item).addClass('animated '+animation_in);
			
			$(card_items).addClass('hide-item');
			
			$(card_item).removeClass('hide-item');
			$(card_item).addClass('active');
		}
		
		/* if mobile */
		if((width < 1024) & $('#home').length) {

			/* scroll to section */
			$('body,html').animate({
				scrollTop: h - 76
			}, 800);
		}

		if(!menu_item_home.hasClass('active')) {
			$(innerbox).addClass('active');
		}else {
			$(innerbox).removeClass('active');
		}
		
		return false;
	});


	//Side Content Toggle
	if($('.header .outer-box .toggler-btn').length){
		//Show Form
		$('.header .outer-box .toggler-btn').on('click', function(e) {
			e.preventDefault();
			$('body').addClass('side-content-visible');
		});
		//Hide Form
		$('.appointment-box .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
			e.preventDefault();
			$('body').removeClass('side-content-visible');
		});
		//Dropdown Menu
		$('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
			$(this).next('ul').slideToggle(500);
		});
	}
	

	//Jquery Knob animation 
	if($('.dial').length){
	   $('.dial').appear(function(){
          var elm = $(this);
          var color = elm.attr('data-fgColor');  
          var perc = elm.attr('value');  
 
          elm.knob({ 
               'value': 0, 
                'min':0,
                'max':100,
                'skin':'tron',
                'readOnly':true,
                'thickness':0.12,
				'dynamicDraw': true,
				'displayInput':false
          });

          $({value: 0}).animate({ value: perc }, {
			  duration: 2000,
              easing: 'swing',
              progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
              }
          });

          },{accY: 0});
    }
	
	
	//Jquery Knob animation Two 
	function knobAnimate() {
	if($('.round-dial').length){
	   $('.round-dial').each(function(){
          var elm = $(this);
          var color = elm.attr('data-fgColor');  
          var perc = elm.attr('value');  
 
          elm.knob({ 
               'value': 0, 
                'min':0,
                'max':100,
                'skin':'tron',
                'readOnly':true,
                'thickness':0.12,
				'dynamicDraw': true,
				'displayInput':false
          });

          $({value: 0}).animate({ value: perc }, {
			  duration: 0,
              easing: 'swing',
              progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
              }
          });

          });
    }
	}
	
	knobAnimate();
	
	

    //Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.col-md-4'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	enableMasonry();
	

	//Gallery With Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	

	//Progress Bar / Levels
	if($('.progress-levels .progress-box .bar-fill').length){
		$(".progress-box .bar-fill").each(function() {
			var progressWidth = $(this).attr('data-percent');
			$(this).css('width',progressWidth+'%');
			$(this).children('.percent').html(progressWidth+'%');
		});
	}
	
	
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}
	
	//Bottom Parallax
	function bottomParallax() {
		if($('.bottom-parallax').length){
			var windowpos = $(window).scrollTop();
			var siteFooter = $('.main-footer').height();
			var sitebodyHeight = $('.page-wrapper').height();
			var finalHeight = sitebodyHeight - siteFooter - 1100;
			if (windowpos >= finalHeight) {
				$('body').addClass('parallax-visible');
			} else {
				$('body').removeClass('parallax-visible');
			}
		}
	}
	
	bottomParallax();
	
	//Make Content Sticky
	if($('.sticky-box').length){
		var a = new StickySidebar('.portfolio-single .content-column .inner', {
			topSpacing: 80,
			bottomSpacing: 0,
			containerSelector: '.sticky-container',
			innerWrapperSelector: '.sticky-box'
		});
	}
	
	//Split Scroll (Home 7)	
	if($('#scroll-container').length){
		$('#scroll-container').multiscroll({
			navigation: true,
			css3:true
		});
	}
	

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		bottomParallax();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
	});


/* ==========================================================================
   When page is resized
   ========================================================================== */
	
	$(window).on('resize', function() {
		
	});

/* ==========================================================================
   When document is Resize, do
   ========================================================================== */
	

})(window.jQuery);

