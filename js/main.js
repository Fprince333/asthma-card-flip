function moveWaves() {
  var wavesSvg = $("#wavesSvg");
  var height = wavesSvg.parent().outerHeight();
  var currentHeight = wavesSvg.outerHeight();
  var animationTime = 2000;
  
  wavesSvg.animate({ height: height * 4 }, animationTime, function() {
    $("#wavesButton").hide();
    $("#wavesAnswer").fadeIn(animationTime);
    $(this).animate({ height: currentHeight }, animationTime);
  });
}