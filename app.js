//Animate smooth scroll to info
$('#view-info').on('click', function() {
  const info = $('#info').position().top;

  $('html, body').animate(
    {
      scrollTop: info
    },
    900
  );
});
