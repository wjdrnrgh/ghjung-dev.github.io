const headerBtn = document.querySelector(".header_btn");
const headerTxt = document.querySelector(".header_btn_txt");
const headerIconFirst = document.getElementById("line_first");
const headerIconSecond = document.getElementById("line_second");
const headerMenu = document.querySelector(".header_menu_view");
const headerAnchor = document.querySelectorAll(".menu_item");

const handleBtnActive = () => {
  headerTxt.innerText = "CLOSE";
  headerIconFirst.style.transform = "rotate(-45deg)";
  headerIconFirst.style.top = "11px";
  headerIconSecond.style.transform = "rotate(45deg)";
  headerIconSecond.style.bottom = "10px";
  headerMenu.style.transform = "translate3d(0, 0, 0)";
  headerMenu.style.opacity = "1";
  headerBtn.removeEventListener("click", handleBtnActive);
  headerBtn.addEventListener("click", handleBtnRemove);
};
const handleBtnRemove = () => {
  headerTxt.innerText = "MENU";
  headerIconFirst.style.transform = "";
  headerIconFirst.style.top = "";
  headerIconSecond.style.transform = "";
  headerIconSecond.style.bottom = "";
  headerMenu.style.transform = "";
  headerMenu.style.opacity = "";
  headerBtn.removeEventListener("click", handleBtnRemove);
  headerBtn.addEventListener("click", handleBtnActive);
};

const handleAnchor = (event) => {
  event.preventDefault();
  handleBtnRemove();
  const targetAttr = event.target.getAttribute("href");
  const targetPositon = document.getElementById(targetAttr.replace("#", ""));
  targetPositon.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
};

headerBtn.addEventListener("click", handleBtnActive);

headerAnchor.forEach((item) => {
  item.addEventListener("click", handleAnchor);
});
