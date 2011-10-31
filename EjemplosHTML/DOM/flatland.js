$(document).ready(function(){

  $('div.chapter a').each(function(index){
    var $thisLink = $(this);
    $(this).attr({
      'rel':'external',
      'id' :'wikilink-'+index,
      'title':'more about '+ $thisLink.text()+' at Wikipedia' 
    });
  });  
});

$(document).ready(function(){
  $('p').each(function(index){
    var currentClass = $(this).attr('class');
    $(this).attr('class', currentClass + ' texto');  
  });
});

$(document).ready(function(){
  $('<a href="#top">back to top</a>').insertAfter('div.chapter p:gt(3)');
  $('<a id="top" name="top"></a>').prependTo('body');
});

$(document).ready(function(){
  $('<ol id="notes"></ol>').insertAfter('div.chapter');
  $('span.footnote').each(function(index){
    $(this)
      .before(
        ['<a href="#foot-note-',
         index+1,
         '"id="context-',
         index+1,
         '"class="context">',
         '<sup>'+(index+1)+'</sup>',
         '</a>'
        ].join('')            
      )
      .appendTo('#notes')
      .append('&nbsp;(<a href="#context-'+(index+1)+'">context</a>)')
      .wrap('<li id="foot-note-'+(index+1)+'"></li>');
  });
});


$(document).ready(function(){
  $('span.pull-quote').each(function(index){
    var $parentParagraph = $(this).parent('p');
    $parentParagraph.css('position','relative');
    
    $(this).clone()
      .addClass('pulled')
      .prependTo($parentParagraph)
  
  });


});











