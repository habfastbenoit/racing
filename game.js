var p = 1, n = 1;



  $(document).on('keypress',function(event) {
    if (p < $('#player1_race td').length && n < $('#player1_race td').length ) {
      if(event.keyCode == 97) {
        $('#player1_race td').removeClass("active");
        n += 1;
        $('#player1_race td:nth-child('+n+')').addClass("active");
      };
      if(event.keyCode == 112) {
        $('#player2_race td').removeClass("active");
        p += 1;
        $('#player2_race td:nth-child('+p+')').addClass("active");
      };
    }
    if (n == $('#player1_race td').length) {

      $('#player1_race td').removeClass("active");
      $('#player1_race td:nth-child('+n+')').addClass("active");
      alert('player 1 WON!');

    };
    if (p == $('#player2_race td').length) {
      $('#player2_race td').removeClass("active");
      alert('player 2 WON!');

    };

});

  $('#slider').on('click',function(){

  $('#counting').css("opacity", "1");

var counter = 3;

  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    // Display 'counter' wherever you want to display it.
    if (counter === 0) {
        $('html, body').animate({
   scrollTop: $('.button-box').offset().top
   //scrollTop: $('#your-id').offset().top
   //scrollTop: $('.your-class').offset().top
}, 'slow');;
        clearInterval(counter);
    }

  }, 1000);
});





