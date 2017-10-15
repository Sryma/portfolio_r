
// var typed = new Typed(".element", {
//   strings: ["This is a JavaScript library", "This is an ES6 module"],
//   smartBackspace: true // Default value
// });
// var typed6 = new Typed('.element', {
//     //strings: ['I am front end web developer^1000\n `I am good at` ^1000\n `HTML ^1000\n `CSS3 ^1000\n` JavaScript ^1000\n`Jquery ^1000\n'],
    
//     typeSpeed: 40,
//     backSpeed: 0,
//     loop: true
//   });
// 
var typed3 = new Typed('.element', {
    strings: ['Hi I am: <i style="color:maroon">web developer</i>', 'I love to: <strong style="color:maroon">make website</strong>', 'Welcome to my <i style="color:maroon">portfolio</i>'],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true
  });
var typed4 = new Typed('.element_1', {
    strings: ['I am good at: <i style="color:maroon">HTML5</i> ', 'I am good at: <i style="color:maroon">CSS3</i> ','I am good at: <i style="color:maroon">Bootstrap</i>','I am good at: <strong style="color:maroon">JavaScript</strong> ','I am good at: <em style="color:maroon">Jquery</em>'],
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
