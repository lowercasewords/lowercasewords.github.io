let attach_collapse = () => {
  const expand_button = document.querySelector("button.expandButton");
  const expand_area = document.querySelector("div.expandArea");
  expand_button.textContent = "Hide Resume PDF";
  expand_area.style.display = "none";
  expand_button.addEventListener("click", () => {
    if (expand_area.style.display === "none") {
      expand_area.style.display = "block";
      expand_button.textContent = "Hide Resume PDF";
    } else {
      expand_area.style.display = "none";
      expand_button.textContent = "View Resume PDF";
    }
  });
};
document.addEventListener("DOMContentLoaded", function () {
  attach_collapse();
});
