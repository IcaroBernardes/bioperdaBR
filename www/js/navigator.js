// Binds clicking on the navigation buttons to scrolling behaviour on the page
$(document).ready(function(){
  
  // Gets the html tag
  var el = $('html')[0];
  
  // Scrolling down
  $('.navdown').click(function(event){
    
    // Sets the scroll amount to the window height
    let scrl = $( window ).height();
    
    // Scrolls down
    el.scrollBy({
      top: scrl,
      left: 0,
      behavior: "smooth",
    });
    
  });
  
  // Scrolling up
  $('.navup').click(function(event){
    
    // Sets the scroll amount to the window height
    let scrl = $( window ).height();
    
    // Scrolls down
    el.scrollBy({
      top: -scrl,
      left: 0,
      behavior: "smooth",
    });
    
  });
  
});