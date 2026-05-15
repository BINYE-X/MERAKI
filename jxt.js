/**
 * 精肴 MERAKI — 对话 今天还活着
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var back = document.getElementById("jxt-back");
    if (back) {
      back.addEventListener("click", function () {
        window.location.href = "xiaoxi.html";
      });
    }

    var form = document.getElementById("jxt-input");
    var send = document.getElementById("jxt-send");

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

    document.querySelectorAll(".jxt-share").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
      });
    });

    ["jxt-call", "jxt-voice", "jxt-emoji", "jxt-more"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener("click", function () {});
    });
  });
})();
