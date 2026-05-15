/**
 * 精肴 MERAKI — 登录页序列
 * 1) logo1 浮现 ~0.5s（立即开始）
 * 2) 爱心单次散射
 * 3) 登录区淡入
 */
(function () {
  "use strict";

  var LOGO_MS = 500;
  var HEART_MS = 1280;

  var COLORS = ["#f8c4d4", "#fff1b8", "#ffd4b8", "#c8e8c8"];
  var HEART_MIN = 10;
  var HEART_MAX = 16;
  var DIST_MIN = 72;
  var DIST_MAX = 118;

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function pick(arr) {
    return arr[(Math.random() * arr.length) | 0];
  }

  function spawnHeartsOnce() {
    var field = document.getElementById("heart-field");
    if (!field) return;

    var n = Math.round(rand(HEART_MIN, HEART_MAX));
    var frag = document.createDocumentFragment();

    for (var i = 0; i < n; i++) {
      var angleDeg = rand(0, 360);
      var rad = (angleDeg * Math.PI) / 180;
      var dist = rand(DIST_MIN, DIST_MAX);
      var tx = Math.cos(rad) * dist;
      var ty = Math.sin(rad) * dist;
      var driftX = rand(-6, 6);
      var driftY = rand(-9, 6);
      var delay = rand(0, 0.12);
      var dur = rand(0.95, 1.12);
      var size = rand(6, 11);
      var rotStart = rand(-12, 12);
      var rotEnd = rotStart + rand(-14, 16);

      var wrap = document.createElement("span");
      wrap.className = "heart-particle heart-particle--once";
      wrap.setAttribute("aria-hidden", "true");

      wrap.style.setProperty("--tx", (tx + driftX).toFixed(2) + "px");
      wrap.style.setProperty("--ty", (ty + driftY).toFixed(2) + "px");
      wrap.style.setProperty("--delay", delay.toFixed(3) + "s");
      wrap.style.setProperty("--dur", dur.toFixed(3) + "s");
      wrap.style.setProperty("--rot", rotStart.toFixed(2));
      wrap.style.setProperty("--rot-end", rotEnd.toFixed(2));

      var heart = document.createElement("span");
      heart.className = "css-heart";
      heart.style.setProperty("--sz", size.toFixed(2) + "px");
      heart.style.setProperty("--c", pick(COLORS));

      wrap.appendChild(heart);
      frag.appendChild(wrap);
    }

    field.appendChild(frag);
  }

  function runSequence() {
    var logo = document.getElementById("logo1");
    var loginZone = document.getElementById("login-zone");
    var loginFooter = document.getElementById("login-footer");

    if (logo) logo.classList.add("logo1--in");

    window.setTimeout(function () {
      spawnHeartsOnce();
    }, LOGO_MS);

    window.setTimeout(function () {
      if (loginZone) loginZone.classList.add("login-zone--in");
      if (loginFooter) loginFooter.classList.add("login-footer--in");
    }, LOGO_MS + HEART_MS);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    window.location.href = "shouye.html";
  }

  function onAuxClick(e) {
    e.preventDefault();
  }

  document.addEventListener("DOMContentLoaded", function () {
    runSequence();

    var form = document.getElementById("login-form");
    if (form) form.addEventListener("submit", onFormSubmit);

    var forgot = document.getElementById("link-forgot");
    if (forgot) forgot.addEventListener("click", onAuxClick);
  });
})();
