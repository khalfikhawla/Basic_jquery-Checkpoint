
    $('#bold').click(function(){
      $('#f').css("font-weight", "bold"); 
  });
 /* --------------------------------------*/
 $('#italic').click(function(){
  $('#f').css({"font-style": "italic"}); 
});
  /* --------------------------------------*/
  $('#underlined').click(function(){
    $('#f').css({"text-decoration": "underline"}); 
});
  /* --------------------------------------*/
  $('#of').change(function() {
    $('#f').css("font-family", $(this).val());
});
/* --------------------------------------*/
$("#size").change(function() {
  $('#f').css("font-size", $(this).val());
});

