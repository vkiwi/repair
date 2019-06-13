var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');



button.addEventListener('click', function(){
  modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});

function autoClose(){
  modal.classList.remove('modal_active');
}

setInterval(autoClose, 5000);

$(document).ready(function(){
//   $('h2').css('border', 'solid 3px red');
// });

// // p нет, абзатцев нет на странице
// $(function(){
//   $('p').css('border', 'solid 3px red');

// показывать карту только когда докрутили до 

  var brif = $('.steps');
  var brifTop = brif.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop >= brifTop) {
      console.log('докрутили');
      $('#map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A77b7da777b7b914974b60677f22834c6abc6dc155c3e364c5b83576b324c1bbd&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll');
    }
  });
});



