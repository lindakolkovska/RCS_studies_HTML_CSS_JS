// $('#some-btn').click(function () {
//     $('.super-p').toggle(2000);
// }
// )
// $('#some-other-btn').click(function () {
//     $('#idBar').hide(2000);
// }
// )

//function compare() {
//  $()
//var a = document.getElementById('lauks1');
//var b = document.getElementById('lauks2');
//var c = document.getElementById('pp')
//if (a == b) {
//  c = "yay!";
//} else {
//  c = "oh no..."
//}
//}

$('#pp').keyup(function () {
  if($('#lauks1').val() === $('#lauks2').val()) {
    $('#pp').html("yay!")
  } else {
    $('#pp').html("oh no..")
  }
});