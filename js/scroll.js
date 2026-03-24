/*$( "#tri" ).click(function() {
     function scrollWin() {
    window.scroll(0, 800 );
}
  scrollWin();

});

$( "#triangle" ).click(function() {
     function scrollWin() {
    window.scrollBy(0, -900 );
}
  scrollWin();

});*/
$(document).ready(function() {

  $('#tri').click(function() {
    $('html, body').animate({scrollTop:880}, 'slow');
    return false;
  });
  $('#triangle').click(function() {
    $('html, body').animate({scrollTop:800}, 'slow');
    return false;
  });
});
