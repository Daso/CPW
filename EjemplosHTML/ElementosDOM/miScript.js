$(document).ready(function(){
 $('#libros>li').addClass('horizontal');
 $('#libros li:not(.horizontal)').addClass('subNivel');

 $('td:contains(Carlos)').parent().parent().addClass('alternativo'); 
 
 
 $('a[href^=mailto:]').addClass('mailto');
 $('a[href$=.pdf]').addClass('pdflink');
 $('a[href*=gaston]').addClass('gastonlink');
/* 

 $('td:contains(Carlos)').nextAll().andSelf().addClass('resaltado');
$('tr:odd').addClass('resaltado');
 $('tr:even').addClass('alternativo');
 $('td:contains(Terror)').siblings().andSelf().addClass('resaltado');
*/


});