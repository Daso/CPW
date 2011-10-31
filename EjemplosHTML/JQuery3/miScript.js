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
  $review.animate({fontSize:numero+'px'},'slow');
 });

 var $parrafoOculto = $('p:eq(1)');
 $parrafoOculto.hide();
 $('a.more').click(function(){
  $parrafoOculto.animate({
    opacity:'toggle',
    height:'toggle'},'slow');
  
  var $link = $(this);
  if($link.text()=='Leer Más'){    
    $link.text('Leer Menos');   
  }else{    
    $link.text('Leer Más');   
  }
 });
 
 $('div.label').click(function(){
  
  var paraWidth = $('div.review p').outerWidth();
  var $switcher = $(this).parent();
  var switcherWidth = $switcher.outerWidth();
  $switcher
    .fadeTo('fast',0.5)
    .animate({'left':paraWidth - switcherWidth},'slow')
    .fadeTo('slow',1.0)
    .slideUp('slow',function(){
      
      $switcher
        .css('backgroundColor','#0f0');
      
    })
    .slideDown('slow');
 
 });
 
return false;
});
	