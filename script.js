function estimate() {
  var inEmpty = 1.78; // radius from center to beginning of filament, inches
  var inFull = 2.55;  // measured width of filament when full, inches
  var gFull = 900;    // mass of filament when full, grams

  var I = (2 * inEmpty * inFull + inFull * inFull) / gFull;

  var inRemain = parseFloat($("#input-number").val());

  if (!inRemain) {
    return;
  }

  if ((inRemain < 0) || (inRemain > inFull)) {
    alert("Only from 0 to " + inFull + " inches of filament can be remaining.");
  } else {
    var x = parseInt((2 * inEmpty * inRemain + inRemain * inRemain) / I);
    alert("There are approximately " + x + " grams of filament left.");
  }
}

$(document).ready(function() {
  $("#input-button").click(estimate);
  $("form").submit(function(event) {
    event.preventDefault();
    estimate();
  });
});
