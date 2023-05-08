// Associa clique nos botões a rolagem na página
$(document).ready(function(){
  
  // Obtém o elemento <html>
  var el = $('html')[0];
  
  // Rolagem para baixo
  $('.navdown').click(function(event){
    
    // Define a rolagem como sendo a altura da página
    let scrl = $( window ).height();
    
    // Efetua a rolagem
    el.scrollBy({
      top: scrl,
      left: 0,
      behavior: "smooth",
    });
    
  });
  
  // Rolagem para cima
  $('.navup').click(function(event){
    
    // Define a rolagem como sendo a altura da página
    let scrl = $( window ).height();
    
    // Efetua a rolagem
    el.scrollBy({
      top: -scrl,
      left: 0,
      behavior: "smooth",
    });
    
  });
  
});