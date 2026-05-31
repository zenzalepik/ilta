(function () {
  function setMenu(open) {
    var drawer = document.querySelector("[data-mobile-menu]");
    var openButton = document.querySelector("[data-mobile-menu-open]");
    if (!drawer) return;

    drawer.classList.toggle("hidden", !open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    if (openButton) openButton.setAttribute("aria-expanded", open ? "true" : "false");
    document.documentElement.classList.toggle("overflow-hidden", open);
    document.body.classList.toggle("overflow-hidden", open);
  }

  document.addEventListener("click", function (event) {
    if (event.target.closest("[data-mobile-menu-open]")) {
      setMenu(true);
      return;
    }
    if (event.target.closest("[data-mobile-menu-close]") || event.target.closest("[data-mobile-menu-link]")) {
      setMenu(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenu(false);
  });
})();
