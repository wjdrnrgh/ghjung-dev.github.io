const profileBtn = document.getElementById("introduce_viewBtn");
const profile = document.getElementById("profile_box");

let profileTimeout = null;
let profileMovementTimeout = null;

const profileVisible = () => {
  profile.classList.add("showing");
};
const profileHide = () => {
  profile.classList.remove("showing");
};

const handleMouseMove = () => {
  if (profileTimeout) {
    clearTimeout(profileTimeout);
    profileTimeout = null;
  }
  /*
  if (profileMovementTimeout) {
    profileMovementTimeout = null;
  }
  */
  profileVisible();
  //profileMovementTimeout = setTimeout(profileHide, 3000);
};
const handleMouseLeave = () => {
  profileTimeout = setTimeout(profileHide, 3000);
};
profileBtn.addEventListener("click", profileVisible);

profile.addEventListener("mousemove", handleMouseMove);
profile.addEventListener("mouseleave", handleMouseLeave);
//profile.addEventListener("mouseleave", profileHide);
