const scrollIcon = document.getElementById("icon-scroll");

const mainSection = document.querySelector(".mainVisual");
const mainHeight = mainSection.getBoundingClientRect().height;

const contentList = document.querySelectorAll(".contents_wrap");

const about = document.getElementById("about");
const aboutTitles = about.querySelectorAll(".point_bg");

const skills = document.getElementById("mySkills");
const skillsTitles = skills.querySelectorAll(".point_bg");

const works = document.getElementById("myWorks");
const worksTitles = works.querySelectorAll(".point_bg");

const contact = document.getElementById("contact");
const contactTitles = contact.querySelectorAll(".point_bg");

const footer = document.querySelector("footer");

const titleBox = document.getElementById("contentTitle_box");
const titleText = document.getElementById("contentTitle");

let firstcontent = null;
let aboutPosition = null;
let skillsPosition = null;
let worksPosition = null;
let contactPosition = null;
let footerPosition = null;

const handleResized = () => {
  firstcontent =
    window.pageYOffset + contentList[0].getBoundingClientRect().top;
  aboutPosition = window.pageYOffset + about.getBoundingClientRect().top;
  skillsPosition = window.pageYOffset + skills.getBoundingClientRect().top;
  worksPosition = window.pageYOffset + works.getBoundingClientRect().top;
  contactPosition = window.pageYOffset + contact.getBoundingClientRect().top;
  footerPosition = window.pageYOffset + footer.getBoundingClientRect().top;
};

const handleBarAnimation = (items) => {
  items.forEach((item) => {
    item.classList.add("point_bg_animation");
  });
};

export const handleScroll = () => {
  let scrollY = document.documentElement.scrollTop;
  if (scrollY !== 0) {
    scrollIcon.style.opacity = 0;
    if (scrollY < firstcontent - mainHeight) {
      handleTitleRemove();
    }
    if (scrollY > aboutPosition - mainHeight) {
      handleTitleAdd("About");
      handleBarAnimation(aboutTitles);
    }
    if (scrollY > skillsPosition - mainHeight) {
      handleTitleAdd("Skills");
      handleBarAnimation(skillsTitles);
    }
    if (scrollY > worksPosition - mainHeight) {
      handleTitleAdd("Works");
      handleBarAnimation(worksTitles);
    }
    if (scrollY > contactPosition - mainHeight) {
      handleTitleAdd("Contact");
      handleBarAnimation(contactTitles);
    }
    if (scrollY > footerPosition - mainHeight) {
      handleTitleRemove();
    }
  } else {
    scrollIcon.style.opacity = 1;
  }
};

const handleTitleAdd = (text) => {
  titleBox.style.display = "";
  titleBox.classList.add("fix_active");
  titleText.innerText = text;
};
const handleTitleRemove = () => {
  titleBox.style.display = "none";
  titleBox.classList.remove("fix_active");
};

handleResized();

window.addEventListener("resize", handleResized);
