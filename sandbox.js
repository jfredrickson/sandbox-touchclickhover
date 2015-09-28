/*global $, jQuery, console */

(function () {
  "use strict";

  $(document).ready(function () {
    var $panel = $(".panel");
    var $trigger = $(".trigger");
    var active = false;

    $panel.hide();

    $trigger.bind("touchstart", function (event) {
      console.log("event: " + event.type);
      active ? $panel.hide() : $panel.show();
      active = !active;
      event.preventDefault();
    });

    $trigger.bind("mouseover", function (event) {
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
