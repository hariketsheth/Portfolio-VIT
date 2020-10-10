jQuery(document).ready(function($) {

	'use strict';

        $('.owl-carousel').owlCarousel({
            items:4,
            lazyLoad:true,
            dots:true,
            responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    650:{
                        items:2,
                    },
                    900:{
                        items:3,
                    },
                    1200:{
                        items:4,
                    }
                }
        });

       $(function() {
            $( "#tabs" ).tabs();
        });


        $(function(){
        
            $('#thumbnail li').click(function(){
                var thisIndex = $(this).index()
                    
                if(thisIndex < $('#thumbnail li.active').index()){
                    prevImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
                }else if(thisIndex > $('#thumbnail li.active').index()){
                    nextImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
                }
                    
                $('#thumbnail li.active').removeClass('active');
                $(this).addClass('active');

                });
            });
	var width = $('#image-slider').width();

        function nextImage(newIndex, parent){
            parent.find('li').eq(newIndex).addClass('next-img').css('left', width).animate({left: 0},600);
            parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({left: -width},600);
            parent.find('li.next-img').attr('class', 'active-img');
        }
   function prevImage(newIndex, parent){
            parent.find('li').eq(newIndex).addClass('next-img').css('left', -width).animate({left: 0},600);
            parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({left: width},600);
            parent.find('li.next-img').attr('class', 'active-img');
        }

	 var ThumbailsWidth = ($('#image-slider').width() - 18.5)/7;
        $('#thumbnail li').find('img').css('width', ThumbailsWidth);

	
	 $(".seq-preloader").fadeOut(); 
        $(".sequence").delay(500).fadeOut("slow"); 
            
        
        $(function() {
  
        function showSlide(n) {
     
          
            $body.unbind("mousewheel");
          
            currSlide = Math.min(Math.max(0, currSlide + n), $slide.length-1);
            
            var displacment = window.innerWidth*currSlide;
         
            $slides.css('transform', 'translateX(-' + displacment + 'px)');
         
            setTimeout(bind, 700);
            
            $('nav a.active').removeClass('active');
            $($('a')[currSlide]).addClass('active');
            
        }
      
        function bind() {
             $body.bind('false', mouseEvent);
          }
      
        function mouseEvent(e, delta) {
      
            showSlide(delta >= 0 ? -1 : 1);
            e.preventDefault();
        }
        
        $('nav a, .main-btn a').click(function(e) {
     
            var newslide = parseInt($(this).attr('href')[1]);

            var diff = newslide - currSlide - 1;
            showSlide(diff); 
            e.preventDefault();
        });
      
        $(window).resize(function(){
     
          var displacment = window.innerWidth*currSlide;
          $slides.css('transform', 'translateX(-'+displacment+'px)');
        });
		var $body = $('body');
        var currSlide = 0;
        var $slides = $('.slides');
        var $slide = $('.slide');
      
        $($('nav a')[0]).addClass('active');
        

        $body.bind('false', mouseEvent);
    })        


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
             
               $(".header").removeClass("active");
            }
        });


});

