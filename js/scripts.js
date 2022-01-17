$('.slider-cont').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover:false
});

$('.slider-serv').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:false,
  dots:true
});

$('.slider-projects').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  fade: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
});

$('.burguer').click(function () {
  $('.menu').toggleClass('active');
  $('.burguer').toggleClass('active');
});

//funcion para cambiar de color el nav cuando pasa la clase "ancla"

var lastScrollTop = 0;
$(window).scroll(function (e) {
  $altoportada = $('.ancla').height();
  var st = $(this).scrollTop();
  if (st > $altoportada) {
    $('nav').addClass('activo')
  } else {
    $('nav').removeClass('activo')
  }
  if ($(".responsive-menu").hasClass("activo")) {
    $('nav').addClass('scrolldown')
  }
  lastScrollTop = st;
  resizeMenn()

});


//funcion para cambiar el contenido de los recuadros mision vision
$content =  $('#inner');
$('#inner a').hover(function () {
    onHover = $(this).data('hover');
    $content.removeClass();
    $content.addClass(onHover);     
});


//animacion flechita
gsap.from('.lineas',{repeat:-1,yoyo:true,y:"20",ease:Power4.easeOut,duration:1})
//termina animaicon flechita


// gsap.to(".anim-title", {
//   scrollTrigger:{
//       trigger: ".anim-title",
//       toggleActions:"restart restart none none",
//       scrub:true
//   },
//   ease: Power4.easeOut,
//   y:"0",
//   duration:.8,
//   delay:.5
// });

/***** empieza timeline para los iconos ******/

let tmline = gsap.timeline({
  scrollTrigger:{
    trigger:".objetivos",
    toggleActions:"play none none none" ,
    start:"top center"
    //markers: true
  }
});

tmline.from(".icon",{ 
  opacity:0, 
  scale:0,
  duration: .8
});

tmline.from(".puntos",{ 
  rotation:"360",
  transformOrigin: '50% 50%',
  repeat:-1,
  duration: 15,
  ease: "linear"
});


/***** termina timeline para los iconos ******/

/***** empieza timeline para los testimonios ******/

let test = gsap.timeline({
  scrollTrigger:{
    trigger:".testimonios",
    toggleActions:"restart restart none reverse" ,
    start:"top center",
    //ease: Power4.easeInOut

    //markers: true
  }
});

test.from(".test",{ 
  opacity:0, 
  scale:0,
  duration: .8
});

/***** termina timeline para los iconos ******/


let masks = document.querySelectorAll('.mask');

  masks.forEach( mask => {
    let image = mask.querySelector('img');

    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: mask,
        toggleActions:"restart none none reset",
        start:"top 80%",
        //markers:true
      }
    });

    tl.set(mask, {autoAlpha:1});


    tl.fromTo(mask,1, { 
      clipPath: "inset(100% 0% 0% 0%)"},{ clipPath: "inset(0% 0% 0% 0%)", //hay que usar porcentajes en los ceros también
      duration: 1,
      ease: Power3.easeOut,
    });

    tl.from(image, 3, {
      scale:1.4,
      delay:-1.5,
      ease: Power2.out
    });

  })

 /*  
  gsap.fromTo(".reveal", { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"},{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",duration:1,ease: easeInOut,
    scrollTrigger:{
      trigger: ".contacto",
      toggleActions:"restart restart none none" 
    },
    ease: Power3.Out,
  }); */

/***** ANIMACION PARA TODOS LOS TEXTOS ******/

  const textos = gsap.utils.toArray('.text');
  textos.forEach(text => {
    gsap.from(text, { 
      opacity:0,
      y:-50, 
      delay:.3,
      ease: Expo.easeOut,
      duration: 1,
      scrollTrigger: {
        trigger: text,
        toggleActions:"restart none none reverse",
        start:"top 80%",
        //markers:true
      }
    })
  });

  

  const cuadros = gsap.utils.toArray('.cuadroazul');
  cuadros.forEach(cuadro => {
    gsap.from(cuadro, { 
      opacity:0,
      y:-100,
      //delay:.3,
      ease: Power4.easeOut,
      duration: 1,

      scrollTrigger: {
        trigger: cuadro,
        toggleActions:"restart none none reverse",
        start:"top center",
        //markers:true
      }
    })
  });


  gsap.from(".width",{
    width:"0px",
    opacity:0,
    ease: Power4.easeOut,
    duration: 1,
    scrollTrigger:{
      trigger: ".width",
        toggleActions:"restart none none reverse",
        start:"top 80%",
        //markers:true
    }
  })
  
  

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(".item").click(function () {
  $(".item").removeClass("active");
  
  $(this).addClass("active");   
});