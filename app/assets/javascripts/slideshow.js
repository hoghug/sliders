$(document).ready(function(){

	SS = {

		slideshowParentClass: 'slideshow-entry',
		slideShowParentSelector: '.slideshow-entry',

		init: function(){
			SS.addSlideInfo();
			SS.prevSlide();
			SS.nextSlide();
			SS.thumbnailClick();
			SS.ignoreHashAnchor();
		},

		ignoreHashAnchor: function() {
			$('body').on('click', 'a[href="#"]', function() {
				event.preventDefault();
			});
		},

		addSlideInfo: function(){
			$('.slideshow').each(function() {
				slideCount = $(this).find('.slide').length;
				var thumbnails = '';

				for (x = 0; x < slideCount; x++) {
					thumbnails += '<a href="#" class="thumbnail"></a>';
				}

				var slideInfo = '<div class="slideshow-info grid-6 column last"><h4></h4><p></p><div class="controls"><a href="#" class="prev">PREV</a><span class="thumbs">' + thumbnails + '</span><a href="#" class="next">NEXT</a></div></div>'

				$(this).parent().addClass(SS.slideshowParentClass);
				$(this).after(slideInfo);
				SS.startSlideshow($(this));
			});
		},

		startSlideshow: function(ele){
			ele.find('.slide:first-child').addClass('active');
			ele.next().find('.thumbnail:first-child').addClass('current');
			SS.updateCurrentTitle(ele.closest(SS.slideShowParentSelector));
			SS.updateCurrentDesc(ele.closest(SS.slideShowParentSelector));
		},	

		thumbnailClick: function(){
			$('body').on('click', '.thumbnail', function() {
				var curSlide = SS.findCurrentSlide($(this).closest(SS.slideShowParentSelector));
				SS.removeCurrentThumb($(this).parent());
				curSlide.removeClass('active');

				var newSlide = $(this).index() + 1;
				$(this).closest(SS.slideShowParentSelector).find('.slide:nth-child(' + newSlide + ')').addClass('active');
				SS.addCurrentThumb($(this))
				SS.updateCurrentTitle($(this).closest(SS.slideShowParentSelector));
				SS.updateCurrentDesc($(this).closest(SS.slideShowParentSelector));
			});
		},

		prevSlide: function() {
			$('body').on('click', '.prev', function() {
				var curSlide = SS.findCurrentSlide($(this).closest(SS.slideShowParentSelector));
				SS.removeCurrentThumb($(this).parent());
				if (SS.checkForFirst(curSlide)) {
					SS.addCurrentThumb($(this).next().find('.thumbnail:last-child'));
					curSlide.removeClass('active').closest('.slideshow').find('.slide:last-child').addClass('active');
				} else {
					curSlide.removeClass('active').prev('.slide').addClass('active');
					SS.addCurrentThumb($(this).next().find('.thumbnail:nth-child(' + curSlide.index() + ')'));
				}
				SS.updateCurrentTitle($(this).closest(SS.slideShowParentSelector));
				SS.updateCurrentDesc($(this).closest(SS.slideShowParentSelector));
			});
		},

		nextSlide: function(){
			$('body').on('click', '.next', function() {
				var curSlide = SS.findCurrentSlide($(this).closest(SS.slideShowParentSelector));
				SS.removeCurrentThumb($(this).parent());
				if (SS.checkForLast(curSlide)) {
					SS.addCurrentThumb($(this).prev().find('.thumbnail:first-child'));
					curSlide.removeClass('active').closest('.slideshow').find('.slide:first-child').addClass('active');
				} else {
					curSlide.removeClass('active').next('.slide').addClass('active');
					SS.addCurrentThumb($(this).prev().find('.thumbnail:nth-child(' + (curSlide.index() + 2) + ')'));
				}
				SS.updateCurrentTitle($(this).closest(SS.slideShowParentSelector));
				SS.updateCurrentDesc($(this).closest(SS.slideShowParentSelector));
			});
		},

		findCurrentSlide: function(ele){
			return ele.find('.active');
		},

		checkForLast: function(slide){
			return slide.is(':last-child');
		},

		checkForFirst: function(slide){
			return slide.is(':first-child');
		},

		addCurrentThumb: function(ele){
			ele.addClass('current');
		},

		removeCurrentThumb: function(ele){
			ele.find('.current').removeClass('current');
		},

		updateCurrentTitle: function(ele){
			ele.find('h4').text(SS.findCurrentSlide(ele).data('slidetitle'));
		},
		
		updateCurrentDesc: function(ele){
			ele.find('p').text(SS.findCurrentSlide(ele).data('slidedesc'));
		}


	}

	SS.init();


});