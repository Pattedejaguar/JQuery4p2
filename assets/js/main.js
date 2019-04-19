$(document).ready(function () {
  $(".color").click(function () {
  var colorName = $(this).attr('class').split (" ") [1];
  $("#text").css("color", colorName);
});
});
