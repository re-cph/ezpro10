$(document).ready(function() {
  //////////////|\\\\\\\\\\\\\\\
  //|  Resize Buy box left   |\\
  //| or right, so they are  |\\
  //|     the same size.     |\\
  //////////////|\\\\\\\\\\\\\\\
  var buyBoxSize = function () {
    var boxLeft = $('.buybox-left');
    var boxRight = $('.buybox-right');
    var boxLeftText = boxLeft.find('.buybox-text');
    var boxRightText = boxRight.find('.buybox-text');

    originalBoxLeftSize = boxLeftText.attr('data-org-box-left');
    originalBoxRightSize = boxRightText.attr('data-org-box-right');
    
    if (!originalBoxLeftSize && !originalBoxRightSize) {
      originalBoxLeftSize = boxLeftText.height();
      originalBoxRightSize = boxRightText.height();
      boxLeftText.attr('data-org-box-left', originalBoxLeftSize);
      boxRightText.attr('data-org-box-right', originalBoxRightSize);
    }

    // Reset height to original
    boxLeftText.height(originalBoxLeftSize);
    boxRightText.height(originalBoxRightSize);
    
    if (boxLeft.height() > boxRight.height()) {
      var leftHeight = boxRightText.height();
      boxRightText.height(leftHeight);
    } else {
      var rightHeight = boxRightText.height();
      boxLeftText.height(rightHeight);
    }
  }

  buyBoxSize();
  $(window).bind('resize', buyBoxSize);
});
