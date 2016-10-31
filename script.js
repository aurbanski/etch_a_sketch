$(document).ready(function(){
  // Button works on click

  var setGrid = function(px_n) {
    //Set the grid up
    for (var row = 0; row < px_n; row++) {
      $(".container").append('<div class="no_margin row' + row + '" ></div>');
      for (var col = 0; col < px_n; col++) {
        $(".row" + row).append('<div class="grid_element grid' + col + '"></div>');
      }
    }
    var px_l = 960 / px_n;
    //Change the height and width of the grid elements
    $(".grid_element").height(px_l + "px");
    $(".grid_element").width(px_l + "px");
  };
  var changeColor = function(){
    $(".grid_element").mouseenter(function(){
      $(this).css("background-color", "blue");
    });
  };
  //Sets up initial grid
  setGrid(40);
  changeColor();


  $(".button").click(function(){
    //Had to add in to remove the previous grid so there aren't left over
    //squares
    $(".container").remove();
    $("body").append('<div class="container"></div>');
    //Ask the user the number of pixels they want and store value
    var px_num = prompt("How many pixels per row would you like?");
    setGrid(px_num);
    changeColor();
  });

});
