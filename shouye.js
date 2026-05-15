/**
 * 精肴 MERAKI — 首页
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("sy-search");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
      });
    }

    var viewAll = document.getElementById("sy-board-more");
    if (viewAll) {
      viewAll.addEventListener("click", function () {});
    }
  });
})();
