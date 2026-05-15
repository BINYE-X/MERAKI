/**
 * 精肴 MERAKI — 个人主页
 * 入场节奏、页面内交互占位（底栏见 meraki-tabbar.js）
 */
(function () {
  "use strict";

  function runEnterAnimations() {
    var topbar = document.getElementById("me-topbar");
    var hero = document.getElementById("me-hero");
    var sheet = document.getElementById("me-sheet");

    requestAnimationFrame(function () {
      if (topbar) topbar.classList.add("me-topbar--in");
      if (hero) hero.classList.add("me-hero--in");
    });

    window.setTimeout(function () {
      if (sheet) sheet.classList.add("me-sheet--in");
    }, 180);
  }

  document.addEventListener("DOMContentLoaded", function () {
    runEnterAnimations();

    var avatar = document.getElementById("me-avatar");
    if (avatar) avatar.addEventListener("click", function () {});

    var edit = document.getElementById("me-edit");
    if (edit) edit.addEventListener("click", function () {});

    var bell = document.getElementById("me-bell");
    if (bell) bell.addEventListener("click", function () {});

    var banner = document.getElementById("me-banner");
    if (banner) banner.addEventListener("click", function () {});

    document.querySelectorAll("[data-me-quick]").forEach(function (el) {
      el.addEventListener("click", function () {});
    });

    document.querySelectorAll("[data-me-row]").forEach(function (row) {
      row.addEventListener("click", function () {});
    });
  });
})();
