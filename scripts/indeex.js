const animation = document.querySelector("lottie-player");

setTimeout(function(){ animation.play(); }, 1000);



/*square
var animation = anime({
  targets: '.square',
  translateX: 250,
  backgroundColor: '#b591f7',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad',
  delay: anime.stagger(100),
  direction: 'alternate',
  loop: 1,
  autoplay: false

});

document.querySelector('.square').onclick = animation.play;



---good--

var targetElm = document.querySelector('.words');

anime({
  duration: 2000,
  delay:2000,
  update: function(){
    targetElm.style.filter = 'grayScale(0)'
  }
});

anime.set('.act', {
  opacity:0,
  scale: 2,
});

  opacity: [
    { value: 0.2, duration: 1000, delay:500, easing: 'easeOutExpo'},
    { value: 1, duration: 2000, delay:500, easing: 'easeOutExpo' }
  ]

  
});
  




 */

anime({
  targets: '.act',
   scale:[
    { value:2.1, duration: 1200, delay:1000, easing: 'easeOutExpo'},
    { value:1, duration: 1200, delay:0, easing: 'easeOutExpo' }]
});


anime({
  targets: '.el path',
  fill: [
    { value: 'rgb(234, 234, 234)', duration: 1200, delay:1000, easing: 'easeOutExpo'},
    { value: 'rgb(234, 97, 89)', duration: 1200, delay:0, easing: 'easeOutExpo' }
  ],
  opacity: [
    { value: 1, duration: 800, delay:1000, easing: 'linear' }
    ],
});



anime.set('.odd', {
  translateX:[function() {
      return anime.random(150, 200);}
      ]
});

anime.set('.ev', {
  translateX:[function() {
      return anime.random(-150, -200);}]
});


anime({
  targets:  '.odd',
  translateX: [
    { value: function() {
      return anime.random(-100, -300);}, duration: 1200, delay:1000, easing: 'easeOutExpo'},
    { value: 0, duration: 1200, delay:0, easing: 'easeOutExpo' }
  ]
});

anime({
  targets:  '.ev',
  translateX: [
    { value: function() {
      return anime.random(100, 200);}, duration: 1200, delay:1000, easing: 'easeOutExpo'},
    { value: 0, duration: 1200, delay:0, easing: 'easeOutExpo' }
  ]
});


anime({
  targets:  '.amodel2', 
  opacity: [{ value: 1, duration: 800, delay:500, easing: 'easeOutExpo' }
  ],
    height:[{ value:'60%', duration: 800, delay:500, easing: 'easeOutExpo' }]

});



