$(document).ready(function() {
  originalBoxLeftSize = $('.buybox-left').height();
  originalBoxRightSize = $('.buybox-Right').height();

  // Resize Buy box left or right, so they are the same size.
  var buyBoxSize = function () {
    var boxLeft = $('.buybox-left');
    var boxRight = $('.buybox-right');

    // Reset height
    boxLeft.height(originalBoxLeftSize);
    boxRight.height(originalBoxRightSize);
    
    if (boxLeft.height() > boxRight.height()) {
      boxRight.find('.buybox-text').height(boxLeft.find('.buybox-text').height());
      boxRight.css('height','auto');
    } else {
      boxLeft.find('.buybox-text').height(boxRight.find('.buybox-text').height());
      boxLeft.css('height','auto');
    }
  }

  buyBoxSize();
  $(window).bind('resize', buyBoxSize);
});
