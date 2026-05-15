/**
 * 精肴 MERAKI — 注册页
 * 品牌区入场动画、表单提交占位、协议链接占位
 */
(function () {
  "use strict";

  function onSubmit(e) {
    e.preventDefault();
    window.location.href = "me.html";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var brand = document.getElementById("zhuce-brand");
    if (brand) {
      requestAnimationFrame(function () {
        brand.classList.add("zhuce-brand--in");
      });
    }

    var form = document.getElementById("zhuce-form");
    if (form) form.addEventListener("submit", onSubmit);

    ["link-terms", "link-privacy"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el)
        el.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
    });
  });
})();
