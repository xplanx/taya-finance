$(window).scroll(function() {
    if ($(window).scrollTop() > 20) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
  $(document).ready(function(){
    $(window).scroll(function(){
      $("img").each(function(){		
       var position = $(this).offset().left;
        var screenHeight = $(window).height();
        var scroll = $(window).scrollTop();
  
        if (position < scroll + screenHeight) {
          $(this).animate({'opacity': '1', 'left': '0'}, 500);		
        }
      });
    });
  });
    $('.navbar-toggler').click(function() {
      if ($('.navbar-collapse').is(':visible')) {
        $('#toggle-icon').removeClass('bi-x').addClass('bi-list');
      } else {
        $('#toggle-icon').removeClass('bi-list').addClass('bi-x');
      }
    });