// Associa animações a elementos da página

// Associa um loop de animação ao primeiro botão de navegação
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