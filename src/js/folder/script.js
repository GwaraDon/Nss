
$('.col-three ').owlCarousel({
    items:1,
    margin:10,
    pagination: false,
    smartSpeed:1000,
    nav:false,
    lazyLoad:true,
    loop:false,
    navRewind:false,
    dots:true,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1328:{
            items:3
        },
        1400:{
            items:3
        }
    }
});
//
//jQuery for hide and show the comments in review section
$(function() {
    $('article.reviews').slice(0,3).show();
    $('.show-more').on('click',function(){
        $('article:hidden').slice(0,3).slideDown();
        if($('article:hidden').length === 0){
            $('.show-more').fadeOut('slow');
        }
    });
});

//jquer for the cart update

$(document).ready(function() {

    /* Set rates + misc */
    var taxRate = 0.15;
    var shippingRate = 15.00;
    var fadeTime = 300;


    /* Assign actions */
    $('.product-quantity input').change( function() {
        updateQuantity(this);
    });

    $('.product-removal button').click( function() {
        removeItem(this);
    });


    /* Recalculate cart */
    function recalculateCart()
    {
        var subtotal = 0;

        /* Sum up row totals */
        $('.product').each(function () {
            subtotal += parseFloat($(this).children('.product-line-price').text());
        });

        /* Calculate totals */
        var tax = subtotal * taxRate;
        var shipping = (subtotal > 0 ? shippingRate : 0);
        var total = subtotal + tax + shipping;

        /* Update totals display */
        $('.totals-value').fadeOut(fadeTime, function() {
            $('#cart-subtotal').html(subtotal.toFixed(2));
            $('#cart-tax').html(tax.toFixed(2));
            $('#cart-shipping').html(shipping.toFixed(2));
            $('#cart-total').html(total.toFixed(2));
            if(total == 0){
                $('.checkout').fadeOut(fadeTime);
            }else{
                $('.checkout').fadeIn(fadeTime);
            }
            $('.totals-value').fadeIn(fadeTime);
        });
    }


    /* Update quantity */
    function updateQuantity(quantityInput)
    {
        /* Calculate line price */
        var productRow = $(quantityInput).parent().parent();
        var price = parseFloat(productRow.children('.product-price').text());
        var quantity = $(quantityInput).val();
        var linePrice = price * quantity;

        /* Update line price display and recalc cart totals */
        productRow.children('.product-line-price').each(function () {
            $(this).fadeOut(fadeTime, function() {
                $(this).text(linePrice.toFixed(2));
                recalculateCart();
                $(this).fadeIn(fadeTime);
            });
        });
    }


    /* Remove item from cart */
    function removeItem(removeButton)
    {
        /* Remove row from DOM and recalc cart total */
        var productRow = $(removeButton).parent().parent();
        productRow.slideUp(fadeTime, function() {
            productRow.remove();
            recalculateCart();
        });
    }

});

//jquery for mobile menu
jQuery('#menu').metisMenu().show();


//jquery for main slider

$(document).ready(function () {
    $('.banner').owlCarousel({
        // rtl: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoPlaySpeed: 3000,
        loop: true,
        nav: false,
        dots:false,
        items: 1
    });
});

// javascript for time laps
var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

var countDown = new Date('Dec 14, 2018 00:00:00').getTime(),
    x = setInterval(function() {

        var now = new Date().getTime(),
            distance = countDown - now;
        // console.log(distance,now);
        // document.getElementById('days').innerText = Math.floor(distance / (day));
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    }, second);

//
//deal of thE DAY
$('.dealofday-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    items:4,
    pagination: false,
    autoplay:false,
    smartSpeed:1000,
    navText : ["<i class='fa fa-chevron-left fa-1x'></i>","<i class='fa fa-chevron-right fa-1x'></i>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        375:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


//jquery for category slider


$(document).ready(function () {
    $('.category--slider').owlCarousel({
        loop: true,
        animateOut: 'fadeIn',
        margin: 10,
        autoPlay: true,
        autoPlaySpeed: 2000,
        nav: true,
        dots:false,
        responsive: {
            0:{items:2},
            480:{items:3},
            768:{items:4},
            992:{items:5},
            1200:{items:5},
            1366:{items:6},
             1440:{items:7}
            }
    });
});

