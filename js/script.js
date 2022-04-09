window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
  //hamburger
  
  function toggleNav() {
    let hamburger = document.querySelector('.hamburger');
    let navigation = document.querySelector('.navbar');
    
    if(window.innerWidth<1024) {
      hamburger.classList.toggle('active');
      navigation.classList.toggle('active');
      return false;
    }
  }
  
  //section1 (title)
  
  $(".split").each(function () {
    let text = $(this).text();
    let split = text.split('').join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
  
    $(this).html(split).attr("aria-label", text);
  });
  
  setTimeout(function () {
    gsap.to(".split span", {
        duration: 0.3,
        opacity: 1,
        y: 0,
        stagger: 0.1
    })
  }, 4000)
  
  //Skills section (keyword)
  
  function count() {
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
  
    const sec2 = document.getElementById('skills');
    const skill = document.querySelector('.skill');
    const skillTop = sec2.offsetTop + skill.offsetTop - 150;
    const skillHeight = sec2.offsetTop + skill.offsetTop + skill.offsetHeight;
  
    if (scrollTop >= skillTop && scrollTop <= skillHeight) {
        const counters = document.querySelectorAll('.counter')
  
        counters.forEach(counter => {
            counter.innerText = '0'
  
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target')
                const c = +counter.innerText
  
                const increment = target / 300
  
                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`
                    setTimeout(updateCounter, 50)
                } else {
                    counter.innerText = target;
                }
            }
            updateCounter()
            // 
        })
        window.removeEventListener('scroll', count);
    }
  }
  window.addEventListener('scroll', count);

  //Accordian
  (function ($) {
    'use strict';
    $('.item').on("click", function () {
      if($(window).width() < 1024) {
        $(this).next().slideToggle(100);
        $('.desc').not($(this).next()).slideUp('fast');
      } 
    });
}(jQuery));
  
  //owal Carousel
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:3,
          },
          1024:{
              items:5,
              loop:false
          }
      }
  }) 
});
  
  
  //REveal 
  function reveals() {
      var reveals = document.querySelectorAll(".reveals");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveals);
  
  