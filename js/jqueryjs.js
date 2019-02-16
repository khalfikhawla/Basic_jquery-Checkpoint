
  $('bold').ready(function(){
    $('#bold').click(function(){
        $('#f').css("font-weight", "1000"); 
    });
  });
 /* --------------------------------------*/
  $('italic').ready(function(){
    $('#italic').click(function(){
        $('#f').css({"font-style": "italic"}); 
    });
  });
  /* --------------------------------------*/
  $('underlined').ready(function(){
    $('#underlined').click(function(){
        $('#f').css({"text-decoration": "underline"}); 
    });
  });
  /* --------------------------------------*/
  /* --------------------------------------*/
  $("#of").change(function() {
    $('#f').css("font-family", $(this).val());
});
/* --------------------------------------*/


