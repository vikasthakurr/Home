const navId = document.getElementById("nav_menu"),
 ToggleBtnId = document.getElementById("toggle_btn"),
 CloseBtnId = document.getElementById("close_btn");

ToggleBtnId.addEventListener("click", () => {
 navId.classList.add("show");
});

CloseBtnId.addEventListener("click", () => {
 navId.classList.remove("show");
});