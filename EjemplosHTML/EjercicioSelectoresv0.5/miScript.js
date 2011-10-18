$(document).ready(function(){
  
  $('#switcher .button').hover(
    function(){
      $(this).addClass('hover')},
    function(){
      $(this).removeClass('hover');});
  
  $('#switcher h3').click(function(){
    $('#switcher .button').toggleClass('hidden');
  });
  
  $('#switcher .button').click(function(){
    $('body').removeClass();
    if(this.id == 'switcher-mujeres'){
      $('body').addClass('mujer');
      
    }else if(this.id == 'switcher-hombres'){
      $('body').addClass('hombre');
    }
    $('#switcher .button').removeClass('selected');
    $(this).addClass('selected');
  });
});