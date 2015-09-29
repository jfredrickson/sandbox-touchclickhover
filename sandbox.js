/*global $, jQuery, console */

(function () {
  "use strict";

  $(document).ready(function () {
    var $panel = $(".panel");
    var $trigger = $(".trigger");
    var $toggle = $(".toggle");
    var active = false;

    $panel.hide();

    var showPanel = function () {
      $panel.show();
      active = true;
      $toggle.html("&laquo;");
      event.preventDefault();
    };

    var hidePanel = function () {
      $panel.hide();
      active = false;
      $toggle.html("&raquo;");
      event.preventDefault();
    };

    $toggle.on("click", function (event) {
      active ? hidePanel() : showPanel();
    });

    $trigger.on("touchstart", function (event) {
      if (!active) {
        showPanel();
      }
    });

    $toggle.on("mouseover", function (event) {
      showPanel();
    });

    $trigger.on("mouseover", function (event) {
      showPanel();
    });

    $toggle.on("mouseout", function (event) {
      hidePanel();
    });

    $trigger.on("mouseout", function (event) {
      hidePanel();
    });

    $trigger.on(function (event) {
      console.log("event: " + event.type);
    });

  });

}());
