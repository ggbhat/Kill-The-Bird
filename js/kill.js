$(document).ready(function() {
	var loop = 0;
  var bIn = 0;
  var id = setInterval(function() {
    loop++;
    if(loop === 5)
    {
      clearInterval(id);
    }
    $('.outer').append('<div class="bird">dr</div><div class="bad">dr</div><div class="bird">dr</div><div class="bad">dr</div> <div class="bird">dr</div>' );
    bIn = bIn+2;

    $('.sc, .lsc').text(bIn);
// $('.left').html(bIn); 
}, 1000);

  $(document).on("click", '.bad', function() {

    $(this).removeClass('bad');
    $(this).addClass('explode');
    // shot.play();
    var br = $(this);
    setTimeout(function() {
      $(br).remove();
    }, 200);
    
    var j = $('.bad').length;
    $('.lsc').text(j);
    if ( $('.bad').length <= 0 ) {
     // do something          
     $('#overlay').fadeIn('fast', function () {
      $('h2').text('Yeah You did it!!!');

      $('#box').animate({
        'top': '160px'
      }, 500);
    });
   }
 });

  var bb = 0;
  $(document).on("click", '.bird', function() {
   bb++;
   if(bb == 2){
    $('#overlay').fadeIn('fast', function () {
      $('h2').text('Bad Guy');

      $('#box').animate({
        'top': '160px'
      }, 500);
    });
  }
});

  var doUpdate = function() {
    $('.countdown').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
        $(this).html(count - 1);
      }
      if(count == 0){
       var l = $('.bad').length;
            // alert(l);
            $('#overlay').fadeIn('fast', function () {
              $('h2').text('Game Over');
              $('#box').animate({
                'top': '160px'
              }, 500);
            });
          }

        });
  };
  // Schedule the update to happen once every second
  setInterval(doUpdate, 600);

  $('#box').on('click', '.tr', function(){
    window.location.reload(true);
  });
  
  var ow = $(window).width();
  var oh = $(window).height();
  $('body, .outer').css({
    'max-width':ow,
    'max-height':oh,
    'min-width':ow,
    'min-height':oh
  });

// var snd1  = new Audio();
// var src1  = document.createElement("source");
// src1.type = "audio/mpeg";
// src1.src  = "ow.mp3";
// snd1.appendChild(src1);
// snd1.play();


// var sound = new Howl({
//   urls: ['file:///sounds/ow.mp3'],
//   autoplay: true,
//   loop: true,
//   volume: 0.5,
// }).play();

// var shot = new Howl({
//   urls: ['file:///sounds/shot.mp3'],
// });


// $('#play').on('click', '.p', function(){
//      $('audio').play();
//   });

//  $('#mute').on('click', '.m', function(){
//      $('audio').pause();

//    });

 });
