$(document).ready(function(){
  var $review = $('div.review');
  var $original = $review.css('fontSize');
  $('#switcher button').click(function(){
    var numero = parseFloat($review.css('fontSize'),10);
    switch(this.id){
      case 'switcher-large':
        numero *= 1.6;
        break;
      case 'switcher-small':
        numero /= 1.6;
        break;
      default:
       numero = parseFloat($original,10);      
    }
    $review.animate({fontSize:numero + 'px'},1000);
  });
  



});