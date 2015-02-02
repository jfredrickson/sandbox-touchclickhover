/*global $, jQuery, console */

(function () {
  "use strict";
  
  $(document).ready(function () {
    var $panel = $(".panel");
    var $trigger = $(".trigger");
    
    $panel.hide();
    
    $trigger.bind("touchstart mouseover", function (event) {
      console.log("event: " + event.type);
      $panel.show();
      event.preventDefault();
    });
    
    $trigger.bind("mouseout", function (event) {
      console.log("event: " + event.type);
      $panel.hide();
      event.preventDefault();
    });
    
    $trigger.click(function (event) {
      console.log("event: " + event.type);
    });
    
  });
  
}());
