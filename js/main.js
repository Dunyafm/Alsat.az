
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

  //------- Active Nice Select --------//

    $('select').niceSelect();


    $('.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    // Search Toggle
    $("#search_input_box").hide();
    $("#search").on("click", function () {
        $("#search_input_box").slideToggle();
        $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
        $('#search_input_box').slideUp(500);
    });

    /*==========================
		javaScript for sticky header
		============================*/
			$(".sticky-header").sticky();

    /*=================================
    Javascript for banner area carousel
    ==================================*/
    $(".active-banner-slider").owlCarousel({
        items:1,
        autoplay:false,
        autoplayTimeout: 5000,
        loop:true,
        nav:true,
        navText:["<img src='img/banner/prev.png'>","<img src='img/banner/next.png'>"],
        dots:false
    });

    /*=================================
    Javascript for product area carousel
    ==================================*/
    $(".active-product-area").owlCarousel({
        items:1,
        autoplay:false,
        autoplayTimeout: 5000,
        loop:true,
        nav:true,
        navText:["<img src='img/product/prev.png'>","<img src='img/product/next.png'>"],
        dots:false
    });

    /*=================================
    Javascript for single product area carousel
    ==================================*/
    $(".s_Product_carousel").owlCarousel({
      items:1,
      autoplay:false,
      autoplayTimeout: 5000,
      loop:true,
      nav:false,
      dots:true
    });
    
    /*=================================
    Javascript for exclusive area carousel
    ==================================*/
    $(".active-exclusive-product-slider").owlCarousel({
        items:1,
        autoplay:false,
        autoplayTimeout: 5000,
        loop:true,
        nav:true,
        navText:["<img src='img/product/prev.png'>","<img src='img/product/next.png'>"],
        dots:false
    });

    //--------- Accordion Icon Change ---------//

    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".lnr-arrow-right").removeClass("lnr-arrow-right").addClass("lnr-arrow-left");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".lnr-arrow-left").removeClass("lnr-arrow-left").addClass("lnr-arrow-right");
    });

  // Select all links with hashes
  $('.main-menubar a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top-70
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });



      // -------   Mail Send ajax

         $(document).ready(function() {
            var form = $('#booking'); // contact form
            var submit = $('.submit-btn'); // submit button
            var alert = $('.alert-msg'); // alert div for show alert message

            // form submit event
            form.on('submit', function(e) {
                e.preventDefault(); // prevent default form submit

                $.ajax({
                    url: 'booking.php', // form action url
                    type: 'POST', // form submit method get/post
                    dataType: 'html', // request type html/json/xml
                    data: form.serialize(), // serialize form data
                    beforeSend: function() {
                        alert.fadeOut();
                        submit.html('Sending....'); // change submit button text
                    },
                    success: function(data) {
                        alert.html(data).fadeIn(); // fade in response data
                        form.trigger('reset'); // reset form
                        submit.attr("style", "display: none !important");; // reset submit button text
                    },
                    error: function(e) {
                        console.log(e)
                    }
                });
            });
        });




    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });   



     if(document.getElementById("js-countdown")){

        var countdown = new Date("October 17, 2018");

        function getRemainingTime(endtime) {
            var milliseconds = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor(milliseconds / 1000 % 60);
            var minutes = Math.floor(milliseconds / 1000 / 60 % 60);
            var hours = Math.floor(milliseconds / (1000 * 60 * 60) % 24);
            var days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

        return {
            'total': milliseconds,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
            };
        }

        function initClock(id, endtime) {
            var counter = document.getElementById(id);
            var daysItem = counter.querySelector('.js-countdown-days');
            var hoursItem = counter.querySelector('.js-countdown-hours');
            var minutesItem = counter.querySelector('.js-countdown-minutes');
            var secondsItem = counter.querySelector('.js-countdown-seconds');

        function updateClock() {
            var time = getRemainingTime(endtime);

            daysItem.innerHTML = time.days;
            hoursItem.innerHTML = ('0' + time.hours).slice(-2);
            minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
            secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

            if (time.total <= 0) {
              clearInterval(timeinterval);
            }
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }

        initClock('js-countdown', countdown);

  };



      $('.quick-view-carousel-details').owlCarousel({
          loop: true,
          dots: true,
          items: 1,
      })



    //----- Active No ui slider --------//



    $(function(){

        if(document.getElementById("price-range")){
        
        var nonLinearSlider = document.getElementById('price-range');
        
        noUiSlider.create(nonLinearSlider, {
            connect: true,
            behaviour: 'tap',
            start: [ 100, 4000 ],
            range: {
                // Starting at 500, step the value by 500,
                // until 4000 is reached. From there, step by 1000.
                'min': [ 0 ],
                '10%': [ 500, 0 ],
                '50%': [ 4000, 0 ],
                'max': [ 10000 ]
            }
        });


        var nodes = [
            document.getElementById('lower-value'), // 0
            document.getElementById('upper-value')  // 1
        ];

        // Display the slider value and how far the handle moved
        // from the left edge of the slider.
        nonLinearSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
            nodes[handle].innerHTML = values[handle];
        });

        }

    });

    
    //-------- Have Cupon Button Text Toggle Change -------//

    $('.have-btn').on('click', function(e){
        e.preventDefault();
        $('.have-btn span').text(function(i, text){
          return text === "Have a Coupon?" ? "Close Coupon" : "Have a Coupon?";
        })
        $('.cupon-code').fadeToggle("slow");
    });

    $('.load-more-btn').on('click', function(e){
        e.preventDefault();
        $('.load-product').fadeIn('slow');
        $(this).fadeOut();
    });
    




  //------- Start Quantity Increase & Decrease Value --------//




    var value,
        quantity = document.getElementsByClassName('quantity-container');

    function createBindings(quantityContainer) {
        var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
        var increase = quantityContainer.getElementsByClassName('increase')[0];
        var decrease = quantityContainer.getElementsByClassName('decrease')[0];
        increase.addEventListener('click', function () { increaseValue(quantityAmount); });
        decrease.addEventListener('click', function () { decreaseValue(quantityAmount); });
    }

    function init() {
        for (var i = 0; i < quantity.length; i++ ) {
            createBindings(quantity[i]);
        }
    };

    function increaseValue(quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        console.log(quantityAmount, quantityAmount.value);

        value = isNaN(value) ? 0 : value;
        value++;
        quantityAmount.value = value;
    }

    function decreaseValue(quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        value = isNaN(value) ? 0 : value;
        if (value > 0) value--;

        quantityAmount.value = value;
    }

  init();

//------- End Quantity Increase & Decrease Value --------//

  /*----------------------------------------------------*/
  /*  Google map js
    /*----------------------------------------------------*/

    if ($("#mapBox").length) {
        var $lat = $("#mapBox").data("lat");
        var $lon = $("#mapBox").data("lon");
        var $zoom = $("#mapBox").data("zoom");
        var $marker = $("#mapBox").data("marker");
        var $info = $("#mapBox").data("info");
        var $markerLat = $("#mapBox").data("mlat");
        var $markerLon = $("#mapBox").data("mlon");
        var map = new GMaps({
          el: "#mapBox",
          lat: $lat,
          lng: $lon,
          scrollwheel: false,
          scaleControl: true,
          streetViewControl: false,
          panControl: true,
          disableDoubleClickZoom: true,
          mapTypeControl: false,
          zoom: $zoom,
          styles: [
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#dcdfe6"
                }
              ]
            },
            {
              featureType: "transit",
              stylers: [
                {
                  color: "#808080"
                },
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#dcdfe6"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff"
                }
              ]
            },
            {
              featureType: "road.local",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#ffffff"
                },
                {
                  weight: 1.8
                }
              ]
            },
            {
              featureType: "road.local",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#d7d7d7"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#ebebeb"
                }
              ]
            },
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  color: "#a7a7a7"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff"
                }
              ]
            },
            {
              featureType: "landscape",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#efefef"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#696969"
                }
              ]
            },
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#737373"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#d6d6d6"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {},
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#dadada"
                }
              ]
            }
          ]
        });
      }


  

 });
 

document.addEventListener("DOMContentLoaded", function () {
  var mainSwiper = new Swiper(".main-swiper", {
    loop: true,               // Enable looping
    autoplay: {
      delay: 5000,            // Time between slides in milliseconds
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
    navigation: {
      nextEl: ".button-next", // Next button selector
      prevEl: ".button-prev", // Previous button selector
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var mainSwiper = new Swiper(".swiper-container", {
    loop: true,               // Enable looping
    autoplay: {
      delay: 2000,            // Time between slides in milliseconds
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
    navigation: {
      nextEl: ".swiper-button-next", // Next button selector
      prevEl: ".swiper-button-prev", // Previous button selector
    },
  });
});
var morebtn = document.getElementById('mybtn');
var moreSection = document.getElementById('more'); // Change this to the appropriate ID

morebtn.addEventListener("click", function() {
  if (!moreSection.classList.contains("active")) {
    moreSection.classList.add("active");
    morebtn.style.display = "none"; 
  }
});
// open cart modal
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector ('#close-button');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// end of close cart modal

// add products to cart

const productRow = document.getElementsByClassName('product-row-bas');
const addToCartButtons = document.querySelectorAll('.ti-bag');

for (let i = 0; i < addToCartButtons.length; i++) {
  const button = addToCartButtons[i];
  button.addEventListener('click', addToCartClicked);
}

function addToCartClicked(event) {
  const button = event.target;
  const cartItem = button.closest('.single-product');
  const price = cartItem.querySelector('.real-price').innerText;
  const imageSrc = cartItem.querySelector('.img-fluid').src;
  addItemToCart(price, imageSrc);
  updateCartPrice();
}

function addItemToCart (price, imageSrc) {
  var productRow = document.createElement('div');
  productRow.classList.add('product-row-bas');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image-bas');
  
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  
  var cartRowItems = `
  <div class="product-row-bas">
        <img class="cart-image-bas" src="${imageSrc}" alt="">
        <span class ="cart-price-bas">${price}</span>
        <input class="product-quantity-bas" type="number" value="1">
        <button class="remove-btn-bas">Çıxar</button>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn-bas')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity-bas')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn-bas');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity-bas')[0];

for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
// end of update quantity input

// update total price
function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price-bas')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity-bas')[0]
  var price = parseFloat(priceElement.innerText.replace('$', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =  '$' + total

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector('.purchase-button');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
  alert ('Thank you for your purchase');
  cartModalOverlay.style.transform= 'translateX(-100%)'
 var cartItems = document.getElementsByClassName('product-rows')[0]
 while (cartItems.hasChildNodes()) {
   cartItems.removeChild(cartItems.firstChild)
   
 }
  updateCartPrice()
}
$(document).ready(function() {
  $("#imageInput").on("change", function(event) {
    const fileInput = event.target;
    const imagePreview = $("#imagePreview");

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function(e) {
        imagePreview.attr("src", e.target.result);
      };

      reader.readAsDataURL(fileInput.files[0]);
    } else {
      imagePreview.attr("src", "");
    }
  });
});

function validateForm() {
  var name = document.forms["myForm"]["fname"].value;
  var username = document.forms["myForm"]["fusername"].value;
  var email = document.forms["myForm"]["femail"].value;
  var phone = document.forms["myForm"]["fphone"].value;
  var price = document.forms["myForm"]["fprice"].value;
  
  if (name === "" || name === null) {
    alert("Name must be filled out");
    return false;
  }
  
  if (price === "" || price === null) {
    alert("Price must be filled out");
    return false;
  }
  
  if (email === "" || email === null) {
    alert("Email must be filled out");
    return false;
  } else {
    // Regular expression for basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email format");
        return false;
    }
}
  
  if (username === "" || username === null) {
    alert("Username must be filled out");
    return false;
  }
  
  if (phone === "" || phone === null) {
    alert("Phone must be filled out");
    return false;
  }
  
  return true;
}