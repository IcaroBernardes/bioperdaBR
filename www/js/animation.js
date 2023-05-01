// Binds animations to elements of the page

// Binds an animation loop to the first navigation button 
$(document).ready(function(){
  
  var ANIMnavdown = anime({
    targets: '#cover-text .navdown',
    translateY: 10,
    duration: 600,
    easing: 'easeInOutBack',
    autoplay: true,
    loop: true,
    direction: 'alternate'
  });
  
});