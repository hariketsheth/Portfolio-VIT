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
