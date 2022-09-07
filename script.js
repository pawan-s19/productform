if (window.outerWidth <= "645") {
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach(function (Elem) {
    Elem.textContent = "Add";
  });
}
