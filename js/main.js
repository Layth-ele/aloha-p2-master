$('.product-slider').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  prevNextButtons: false,
  wrapAround: true
});

$('form.singUp').on("submit",function(event){
  event.preventDefault();
  var userEmail = $('input [type="email"]').val();
  if (userEmail){
    alert ("thank you for subsucribing")

  }else{

    alert("please provide an email address")
  }

});
