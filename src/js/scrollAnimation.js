const scrollIcon = document.getElementById("icon-scroll");

const mainSection = document.querySelector(".mainVisual");
const mainHeight = mainSection.getBoundingClientRect().height;

const contentList = document.querySelectorAll(".contents_wrap");
const firstcontent =
  window.pageYOffset + contentList[0].getBoundingClientRect().top;

const about = document.getElementById("about");
const aboutPosition = window.pageYOffset + about.getBoundingClientRect().top;
const aboutTitles = about.querySelectorAll(".point_bg");

const skills = document.getElementById("mySkills");
const skillsPosition = window.pageYOffset + skills.getBoundingClientRect().top;
const skillsTitles = skills.querySelectorAll(".point_bg");

const works = document.getElementById("myWorks");
const worksPosition = window.pageYOffset + works.getBoundingClientRect().top;
const worksTitles = works.querySelectorAll(".point_bg");

const titleBox = document.getElementById("contentTitle_box");
const titleText = document.getElementById("contentTitle");

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
  } else {
    scrollIcon.style.opacity = 1;
  }
};

const handleTitleAdd = (text) => {
  titleBox.classList.add("fix_active");
  titleText.innerText = text;
};
const handleTitleRemove = () => {
  titleBox.classList.remove("fix_active");
};
