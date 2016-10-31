$(document).ready(function(){
  for (var row = 0; row < 4; row++) {
    $(".container").append('<div class="row' + row + '"></div>');
    for (var col = 0; col < 4; col++) {
      $(".row" + row).append('<div class="grid_element" class="grid' + col + '"></div>');
    }
  }
  $(".grid_element").mouseenter(function(){
    $(this).css("background-color", "blue");
  });

});
