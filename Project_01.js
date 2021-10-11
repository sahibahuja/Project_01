// Scroll arrow function
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
      } else {
        $('#toTopBtn').fadeOut();
      }
    });
  
    $('#toTopBtn').click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 500);
      return false;
    });

// Nav bar link hover function
    $(".linktop a").hover(function(){
      $(this).css("background-image", "linear-gradient(rgb(53, 53, 53), rgb(27, 27, 27))");
      }, function(){
      $(this).css("background-image", "none ");
    });
    $(".linktop a").hover(function(){
      $(this).css("color", "white");
      }, function(){
      $(this).css("color", "none ");
    });
// Artwork hover function
    $(".children1").hover(function(){
      $(this).css("box-shadow", "0 0 20px rgb(7, 7, 7)");
      }, function(){
      $(this).css("box-shadow", "none ");
    });
    $(".children1").hover(function(){
      $(this).css("transform", "scale(1.2)");
      }, function(){
      $(this).css("transform", "none ");
    });
    $(".children1").hover(function(){
      $(this).css("z-index", "2");
      }, function(){
      $(this).css("z-index", "none ");
    });
    $(".children1").hover(function(){
      $(this).css("transition", "0.3s");
      }, function(){
      $(this).css("transition", "none ");
    });
    $(".children1").hover(function(){
      $(this).css("border-radius", "20px");
      }, function(){
      $(this).css("border-radius", "none ");
    });

    // Submit button hover function
    $("#buttonid").hover(function(){
      $(this).css("box-shadow", "0 0 20px rgb(7, 7, 7)");
      }, function(){
      $(this).css("box-shadow", "none ");
    });
    $("#buttonid").hover(function(){
      $(this).css("transform", "scale(1.08)");
      }, function(){
      $(this).css("transform", "none ");
    });
    $("#buttonid").hover(function(){
      $(this).css("z-index", "120");
      }, function(){
      $(this).css("z-index", "none ");
    });
    $("#buttonid").hover(function(){
      $(this).css("transition", "0.3s");
      }, function(){
      $(this).css("transition", "none ");
    });
    $("#buttonid").hover(function(){
      $(this).css("border-radius", "10px");
      }, function(){
      $(this).css("border-radius", "none ");
    });
    
    // Heading hover function
    $("h1").hover(function(){
      $(this).css("box-shadow", "0 0 20px rgb(7, 7, 7)");
      }, function(){
      $(this).css("box-shadow", "none ");
    });
    $("h1").hover(function(){
      $(this).css("transform", "scale(1.08)");
      }, function(){
      $(this).css("transform", "none ");
    });
    $("h1").hover(function(){
      $(this).css("z-index", "120");
      }, function(){
      $(this).css("z-index", "none ");
    });
    $("h1").hover(function(){
      $(this).css("transition", "0.3s");
      }, function(){
      $(this).css("transition", "none ");
    });
    $("h1").hover(function(){
      $(this).css("border-radius", "10px");
      }, function(){
      $(this).css("border-radius", "none ");
    });

    // Arrow hover function
    $("#toTopBtn").hover(function(){
      $(this).css("box-shadow", "0 0 2px rgb(7, 7, 7)");
      }, function(){
      $(this).css("box-shadow", "none ");
    });
    $("#toTopBtn").hover(function(){
      $(this).css("transform", "scale(1.2)");
      }, function(){
      $(this).css("transform", "none ");
    });
    $("#toTopBtn").hover(function(){
      $(this).css("z-index", "230");
      }, function(){
      $(this).css("z-index", "none ");
    });
    $("#toTopBtn").hover(function(){
      $(this).css("transition", "0.3s");
      }, function(){
      $(this).css("transition", "none ");
    });
    $("#toTopBtn").hover(function(){
      $(this).css("border-radius", "30px");
      }, function(){
      $(this).css("border-radius", "none ");
    });
    // NavBar hover Function
    $(".topbar").hover(function(){
      $(this).css("box-shadow", "0 0 20px rgb(7, 7, 7)");
      }, function(){
      $(this).css("box-shadow", "0 0 8px rgb(7, 7, 7) ");
    });
    $(".topbar").hover(function(){
      $(this).css("transform", "scale(1.01)");
      }, function(){
      $(this).css("transform", "none ");
    });
    $(".topbar").hover(function(){
      $(this).css("z-index", "220");
      }, function(){
      $(this).css("z-index", "210 ");
    });
    $(".topbar").hover(function(){
      $(this).css("transition", "0.3s");
      }, function(){
      $(this).css("transition", "none ");
    });
    $(".topbar").hover(function(){
      $(this).css("border-radius", "10px");
      }, function(){
      $(this).css("border-radius", "none ");
    });

    // form hover function
    $(".form").hover(function(){
      $(this).css("box-shadow", "0 0 12px rgb(7, 7, 7)");
      }, function(){
      $(this).css("box-shadow", "0 0 8px rgb(7, 7, 7) ");
    });
    $(".form").hover(function(){
      $(this).css("transform", "scale(1.003)");
      }, function(){
      $(this).css("transform", "none ");
    });
    $(".form").hover(function(){
      $(this).css("z-index", "120");
      }, function(){
      $(this).css("z-index", "none ");
    });
    $(".form").hover(function(){
      $(this).css("transition", "0.3s");
      }, function(){
      $(this).css("transition", "none ");
    });
    $(".form").hover(function(){
      $(this).css("border-radius", "10px");
      }, function(){
      $(this).css("border-radius", "none ");
    });

    // Footer hover function
    $(".footerchild").hover(function(){
      $(this).css("box-shadow", "0 0 20px rgb(7, 7, 7)");
      }, function(){
      $(this).css("box-shadow", "0 0 8px rgb(7, 7, 7) ");
    });
    $(".footerchild").hover(function(){
      $(this).css("transform", "scale(1.02)");
      }, function(){
      $(this).css("transform", "none ");
    });
    $(".footerchild").hover(function(){
      $(this).css("z-index", "2");
      }, function(){
      $(this).css("z-index", "none ");
    });
    $(".footerchild").hover(function(){
      $(this).css("transition", "0.2s");
      }, function(){
      $(this).css("transition", "none ");
    });
    $(".footerchild").hover(function(){
      $(this).css("margin", "10px 20px 40px 20px");
      }, function(){
      $(this).css("margin", "5px 10px 20px 10px ");
    });
  
  });
   