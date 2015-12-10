var SQUARES_DEFAULT = 16;

$(document).ready(function() {
  generate_grid(SQUARES_DEFAULT);
  add_paint_behavior();
  $("button#clear").click(clear_grid);
  $("button#size").click(change_grid);
});

function generate_grid(squares) {
  for (var i=0;i<squares*squares;i++) {
    add_box(squares);
  }
}

function add_paint_behavior() {
  $(".box").mouseenter(paint);
}

function add_box(squares) {
  var $box = $("<div>", {class: "box"});
  var width = 960/squares;
  $box.width(width).height(width);
  $('#sketch-container').append($box);
}

function paint() {
  $(this).addClass("painted");
}

function clear_grid() {
  $(".box").removeClass("painted");
}

// Change grid dimensons
function change_grid() {
  var squares = prompt("How many squares per side?", "16");
  $(".box").remove();
  if (squares === null || squares.trim() === "") {
    squares = SQUARES_DEFAULT;
  }
  generate_grid(squares);
  add_paint_behavior();
}