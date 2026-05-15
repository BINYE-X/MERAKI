/**
 * 精肴 MERAKI — 全站底部导航
 * data-active-tab on body: 0 首页 | 1 广场 | 2 消息 | 3 我的
 */
(function () {
  "use strict";

  var TAB_ROUTES = {
    0: "shouye.html",
    1: "guangchang.html",
    2: "xiaoxi.html",
    3: "me.html",
  };

  function layoutTabPill() {
    var rail = document.getElementById("mk-tab-rail");
    var pill = document.getElementById("mk-tab-pill");
    var active = document.querySelector(".mk-tab.mk-tab--active");
    if (!rail || !pill || !active) return;

    var rb = rail.getBoundingClientRect();
    var ab = active.getBoundingClientRect();
    var pad = 5;
    var w = Math.max(32, ab.width - pad * 2);
    var x = ab.left - rb.left + (ab.width - w) / 2;

    pill.style.width = w + "px";
    pill.style.transform = "translate3d(" + x + "px, 0, 0)";
  }

  function setActiveTab(index, updatePill) {
    document.querySelectorAll(".mk-tab").forEach(function (btn) {
      var raw = btn.getAttribute("data-tab");
      var i = raw == null ? -1 : parseInt(raw, 10);
      var on = i === index;
      btn.classList.toggle("mk-tab--active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    if (updatePill !== false) {
      requestAnimationFrame(function () {
        requestAnimationFrame(layoutTabPill);
      });
    }
  }

  function onTabClick(e) {
    var btn = e.currentTarget;
    var raw = btn.getAttribute("data-tab");
    var index = raw == null ? -1 : parseInt(raw, 10);
    if (isNaN(index) || index < 0) return;

    var route = TAB_ROUTES[index];
    if (route) {
      var current = document.body.getAttribute("data-active-tab");
      if (String(index) !== String(current)) {
        window.location.href = route;
      }
      return;
    }
    setActiveTab(index);
  }

  function init() {
    var tabbar = document.getElementById("mk-tabbar");
    var activeRaw = document.body.getAttribute("data-active-tab");
    var active = activeRaw == null ? 0 : parseInt(activeRaw, 10);

    setActiveTab(active, false);

    document.querySelectorAll(".mk-tab").forEach(function (btn) {
      btn.addEventListener("click", onTabClick);
    });

    var fab = document.getElementById("mk-fab-camera");
    if (fab) fab.addEventListener("click", function () {});

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        layoutTabPill();
        if (tabbar) tabbar.classList.add("mk-tabbar--in");
      });
    });

    window.addEventListener("resize", layoutTabPill);
    window.addEventListener("orientationchange", function () {
      window.setTimeout(layoutTabPill, 120);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
