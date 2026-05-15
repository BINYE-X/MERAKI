(function () {
  "use strict";

  var COLORS = ["#F28B8B", "#F4A261", "#E9C46A", "#8AB17D"];
  var MIN_COUNT = 12;
  var MAX_COUNT = 18;

  var CYCLE_MIN = 2.55;
  var CYCLE_MAX = 3.35;

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function readHeartDistPx(deviceEl, name, fallback) {
    if (!deviceEl) return fallback;
    var raw = getComputedStyle(deviceEl).getPropertyValue(name).trim();
    var n = parseFloat(raw);
    return Number.isFinite(n) ? n : fallback;
  }

  function buildHearts() {
    var field = document.getElementById("heart-field");
    if (!field) return;

    var device = field.closest(".device");
    var distMin = readHeartDistPx(device, "--heart-dist-min", 112);
    var distMax = readHeartDistPx(device, "--heart-dist-max", 168);
    if (distMax < distMin) {
      var t = distMin;
      distMin = distMax;
      distMax = t;
    }

    var n = Math.round(rand(MIN_COUNT, MAX_COUNT));
    var frag = document.createDocumentFragment();

    for (var i = 0; i < n; i++) {
      var angleDeg = rand(0, 360);
      var rad = (angleDeg * Math.PI) / 180;
      var dist = rand(distMin, distMax);
      var tx = Math.cos(rad) * dist;
      var ty = Math.sin(rad) * dist;
      var driftX = rand(-7, 7);
      var driftY = rand(-10, 7);
      var cycle = rand(CYCLE_MIN, CYCLE_MAX);
      var delay = rand(-cycle * 0.35, cycle * 0.55);
      var size = rand(6, 12);
      var rotStart = rand(-14, 14);
      var rotEnd = rotStart + rand(-16, 20);

      var wrap = document.createElement("span");
      wrap.className = "heart-particle heart-particle--animate";
      wrap.setAttribute("aria-hidden", "true");

      wrap.style.setProperty("--tx", (tx + driftX).toFixed(2) + "px");
      wrap.style.setProperty("--ty", (ty + driftY).toFixed(2) + "px");
      wrap.style.setProperty("--delay", delay.toFixed(3) + "s");
      wrap.style.setProperty("--cycle", cycle.toFixed(3) + "s");
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

  /** slogan 播完后静止再跳转；时间须与 style.css 中 `.slogan` 的 delay + duration 一致 */
  var SPLASH_END_MS = 1820 + 950;
  var HOLD_BEFORE_LOGIN_MS = 1000;

  function scheduleRedirectToLogin() {
    window.setTimeout(function () {
      window.location.href = "denglu.html";
    }, SPLASH_END_MS + HOLD_BEFORE_LOGIN_MS);
  }

  function init() {
    buildHearts();
    scheduleRedirectToLogin();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
