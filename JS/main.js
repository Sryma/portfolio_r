

var typed3 = new Typed('.element', {
    strings: ['Hi I am: <i style="color:rgb(79, 219, 76)">web developer</i>', 'I love to: <strong style="color:rgb(178, 76, 219)">make website</strong>', 'Welcome to my <i style="color:rgb(79, 219, 76)">portfolio</i>'],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: false, // this is a default
    loop: true
  });
var typed4 = new Typed('.element_1', {
    strings: ['I am good at: <i style="color:rgb(79, 219, 76)">HTML5</i> ', 'I am good at: <i style="color:rgb(178, 76, 219)">CSS3</i> ','I am good at: <i style="color:rgb(79, 219, 76)">Bootstrap</i>','I am good at: <strong style="color:rgb(178, 76, 219)">JavaScript</strong> ','I am good at: <em style="color:rgb(178, 76, 219)">Jquery</em>',
    'I am good at: <em style="color:rgb(79, 219, 76)">MySQL</em>',
    'I am good at: <em style="color:rgb(178, 76, 219)">PHP</em>',
    'I am good at: <em style="color:rgb(79, 219, 76)">Wordpress</em>'],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true
  });
    
  $('.carousel').slick({
    
    autoplay: true,
    arrows: false,
    // dots:true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
