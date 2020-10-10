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
