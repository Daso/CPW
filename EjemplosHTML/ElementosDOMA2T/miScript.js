$(document).ready(function(){
  $('#libros > li').addClass('horizontal');
  $('#libros li:not(.horizontal)').addClass('subNivel');
  
  $('a[href^=mailto:]').addClass('mailto');
  $('a[href$=.pdf]').addClass('pdflink');
  $('a[href*=gaston]').addClass('gastonlink');
  
  $('a').filter(function(){
    return this.hostname && this.hostname != location.hostname;}).addClass('externo');
  
  $('td:contains(Carlos)').nextAll().andSelf().addClass('resaltado');
  
 // $('tr:odd').addClass('resaltado');
 // $('tr:even').addClass('alternativo');

//  $('td:contains(Terror)').siblings().andSelf().addClass('resaltado');



});