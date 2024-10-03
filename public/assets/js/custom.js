var $ = jQuery.noConflict(),
    $window = $(window),
    windowWidth = $window.width(),
    headerHeight = $('.header').outerHeight(),
    footerHeight = $('.footer').height()

    $(window).resize(function () {
      var viewWidth1 = $window.width();
      if (viewWidth1 < 992){
        $('.checked').addClass('owl-carousel');
      }else{
        $('.checked').removeClass('owl-carousel');
      }
        
    })

    $(document).ready(function() {
      var viewWidth = $window.width();
      if (viewWidth < 992){
        $('.checked').addClass('owl-carousel');
      }else{
        $('.checked').removeClass('owl-carousel');
      }

      if ($.isFunction($.fn.owlCarousel)) {
        // Side Advertisement page slider
        $('.advertise-box .owl-carousel').owlCarousel({
            loop:true,
            autoplay:true,
            autoplayTimeout:2000,
            smartSpeed:500,
            dots:false,
            nav:false,
            responsive:{
                0:{
                    items:3,
                    stagePadding: 20,
                    margin:0
                },
                767:{
                  items:3,
                  stagePadding: 50,
                  margin:0
               },
                1024:{
                    items:1,
                    stagePadding: 0,
                    margin:10
                }
            }
        })
        // Profile page slider
        $(".content-carousel .owl-carousel").owlCarousel({    
          loop:true,
          items:1,
          margin:15,
          stagePadding: 0,
          //stagePadding: 240,
          navigation : true,
          nav: true,
          autoplay:false,
          responsive:{
              0:{
                  items:1,
                  stagePadding: 0
              },
              600:{
                  items:1,
                  stagePadding: 0
              },
              1000:{
                  items:1,
                  stagePadding: 0
              },
              1180:{
                  items:1
              }
          }
      });

      dotcount = 1;

      jQuery('.content-carousel .owl-dot').each(function() {
          jQuery( this ).addClass( 'dotnumber' + dotcount);
          jQuery( this ).attr('data-info', dotcount);
          dotcount=dotcount+1;
      });

      slidecount = 1;

      jQuery('.content-carousel .owl-item').not('.cloned').each(function() {
          jQuery( this ).addClass( 'slidenumber' + slidecount);
          slidecount=slidecount+1;
      });

      jQuery('.content-carousel .owl-dot').each(function() {	
          grab = jQuery(this).data('info');		
          slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
          jQuery(this).css("background-image", "url("+slidegrab+")");  	
      });

      amount = $('.content-carousel .owl-dot').length;
      gotoheight = 100;			
      jQuery('.content-carousel .owl-dot').css("height", gotoheight+"%");



      }



    })



    

try{
    // Side Menu
    let humMenu = document.getElementById('menuOpen');
    humMenu.addEventListener("click", showMenu);
    function showMenu(){
      let slidemenu = document.getElementById('slideMenu');
      slidemenu.classList.add("menu-open");
    }
    let closeMenu = document.getElementById('menu-close');
    closeMenu.addEventListener("click", hideMenu);
    function hideMenu(){
      let slidemenu = document.getElementById('slideMenu');
      slidemenu.classList.remove("menu-open");
    }

    //Mobile Country list
    let countryMenu = document.getElementById('countryListMenuOpen');
    countryMenu.addEventListener("click", showCountryList);
    function showCountryList(){
      let countryeMenu = document.getElementById('mobileCountryArea');
      countryeMenu.classList.add("country-list-open");
    }
    let closeCountryList = document.getElementById('countryListClose');
    closeCountryList.addEventListener("click", hideCountryList);
    function hideCountryList(){
      let countryeMenu = document.getElementById('mobileCountryArea');
      countryeMenu.classList.remove("country-list-open");
    }
    let closeCountryList2 = document.getElementById('countryListClose2');
    closeCountryList2.addEventListener("click", hideCountryList2);
    function hideCountryList2(){
      let countryeMenu = document.getElementById('mobileCountryArea');
      countryeMenu.classList.remove("country-list-open");
    }

    // MObile Country List 
      //Europe
      function myFunction() {
        var x = document.getElementById("addList");
        var y = document.getElementById("addList2");
        var b2 = document.getElementById("btn2");
        let countryList = document.getElementById('europeCountryList');
        $('#addList').html(countryList);  
        var eleft = document.getElementById("e-left");
        var eright = document.getElementById("e-right");
        if (x.style.display === "block") {
          x.style.display = "none";
          b2.style.display = "block";
          eleft.style.display = "none";
          eright.style.display = "block";
        } else {
          x.style.display = "block";
          y.style.display = "none";
          b2.style.display = "none";
          eleft.style.display = "block";
          eright.style.display = "none";
        }
     }
    // MObile Country List 
    //worlwide
    function myFunction2() {
      var x = document.getElementById("addList");
      var y = document.getElementById("addList2");
      var b1 = document.getElementById("btn1");
      let countryList = document.getElementById('worldWideCountryList');
      $('#addList2').html(countryList);  
      var wleft = document.getElementById("w-left");
      var wright = document.getElementById("w-right");
      if (y.style.display === "block") {
        y.style.display = "none";
        b1.style.display = "block";
        wleft.style.display = "none";
        wright.style.display = "block";
      } else {
        y.style.display = "block";
        x.style.display = "none";
        b1.style.display = "none";
        wleft.style.display = "block";
        wright.style.display = "none";
      }
    }

  } //try end
  catch(err) {
    //error message
  }

  if ($.isFunction($.fn.select2)) {
    $('#single').select2({
      selectOnClose: false,
      
    });
  }

  if ($.isFunction($.fn.magnificPopup)) {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });
  }



$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

// Fancybox.bind("[data-fancybox]", {
  // Your custom options
// });