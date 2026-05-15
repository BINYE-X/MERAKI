/**
 * 精肴 MERAKI — 消息
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.querySelectorAll(".xx-tabs__item[data-xx-tab]");
    var panelDm = document.getElementById("xx-panel-dm");
    var panelSys = document.getElementById("xx-panel-sys");

    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-xx-tab");
        var isDm = key === "dm";

        tabs.forEach(function (t) {
          var on = t === btn;
          t.classList.toggle("xx-tabs__item--active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });

        if (panelDm) {
          panelDm.classList.toggle("xx-list--hidden", !isDm);
          panelDm.hidden = !isDm;
        }
        if (panelSys) {
          panelSys.classList.toggle("xx-list--hidden", isDm);
          panelSys.hidden = isDm;
        }
      });
    });

    document.querySelectorAll(".xx-chat").forEach(function (row) {
      row.addEventListener("click", function () {
        var href = row.getAttribute("data-href");
        if (href) window.location.href = href;
      });
    });

    var scan = document.getElementById("xx-scan");
    if (scan) scan.addEventListener("click", function () {});
  });
})();
