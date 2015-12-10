var squares_per_side = 16;

$(document).ready(function() {
  generate_grid();
  var $boxes = $(".box");
  $boxes.mouseenter(function() {
    $(this).css("background-color","black");
  });
  $boxes.mouseleave(function() {
    
  });
});

function generate_grid() {
  for (var i=0;i<squares_per_side*squares_per_side;i++) {
    add_box();
  }
}

function add_box() {
  var $box = $("<div>", {class: "box"});
  var width = 960/squares_per_side;
  $box.width(width).height(width);
  $('#sketch-container').append($box);
}