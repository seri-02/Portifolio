const btnSideMenu = document.getElementById("btn-side-menu");
const sideMenu = document.querySelector("nav");

btnSideMenu.addEventListener("click", ()=>{
  sideMenu.classList.toggle("hide");
});

document.getElementById("go-top").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});