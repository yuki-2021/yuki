//checks if element it is called on is visible (only checks horizontally
(function($) {
  var $window = $(window);

  $.fn.isVisible = function(){
    var $this = $(this),
      Left = $this.offset().left,
      visibleWidth = $window .width();

    return Left < visibleWidth;
  }
})(jQuery);

(function($){
  var list = $('.portfo-items'),
      showVisibleItems = function(){
      list.children('.portfo-item:not(.falldown)').each(function(el, i){
          var $this = $(this);
          if($this.isVisible()){
            $this.addClass('falldown');
          }
        });
      };

  //initially show all visible items before any scroll starts
  showVisibleItems();

  //then on scroll check for visible items and show them
  list.scroll(function(){
    showVisibleItems();
  });

  //image hover pan effect
  list.on('mousemove','img', function(ev){
      var $this = $(this),
          posX = ev.pageX,
          posY = ev.pageY,
          data = $this.data('cache');
    //cache necessary variables
        if(!data){
          data = {};
          data.marginTop = - parseInt($this.css('top')),
          data.marginLeft = - parseInt($this.css('left')),
          data.parent = $this.parent('.view'),
          $this.data('cache', data);
          console.log(data);
        }

    var originX = data.parent.offset().left,
        originY =  data.parent.offset().top;

       //move image
       $this.css({
          'left': -( posX - originX ) / data.marginLeft,
          'top' : -( posY - originY ) / data.marginTop
       });
  });


  list.on('mouseleave','.portfo-item', function(e){
    $(this).find('img').css({
      'left': '0',
      'top' : '0'
    });
  });

  //add mouse wheel support with the jquery.mousewheel plugin
  list.mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 60);

      event.preventDefault();

   });

   var listY = document.getElementsByClassName('portfo-items')[0];
   var scroWidthPerMin = -3;
   var lastScroLeft = 0;
   var interval;
   var auotScroll = function(){
     if(lastScroLeft == listY.scrollLeft){
       scroWidthPerMin = -scroWidthPerMin;
     }
     lastScroLeft = listY.scrollLeft;
     listY.scrollLeft += scroWidthPerMin;
     console.log(listY.scrollLeft);
   }

   //定时
   interval = window.setInterval(auotScroll,10);

   list.mouseenter(function(event){
     window.clearInterval(interval);
   })

   list.mouseleave(function(){
     interval = window.setInterval(auotScroll,10);
   })

})(jQuery);
