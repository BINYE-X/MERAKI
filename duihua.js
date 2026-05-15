/**
 * 精肴 MERAKI — 对话 TiKLi
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var back = document.getElementById("dh-back");
    if (back) {
      back.addEventListener("click", function () {
        window.location.href = "xiaoxi.html";
      });
    }

    var form = document.getElementById("dh-input");
    var send = document.getElementById("dh-send");

    function trySend() {
      if (!form || !form.value.trim()) return;
      form.value = "";
    }

    if (send) send.addEventListener("click", trySend);
    if (form) {
      form.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          trySend();
        }
      });
    }

    ["dh-call", "dh-voice", "dh-emoji", "dh-more"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener("click", function () {});
    });
  });
})();
