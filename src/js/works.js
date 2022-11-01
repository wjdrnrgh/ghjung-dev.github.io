const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const worksInput1 = document.getElementById("works1");
const worksInput2 = document.getElementById("works2");
const worksInput3 = document.getElementById("works3");
const worksInput4 = document.getElementById("works4");
const worksInput5 = document.getElementById("works5");
const inputArr = document.querySelectorAll("input[type=radio]");

const firstCard = document.getElementById("portfolioCard");
const cardFrontBtn = document.querySelectorAll(".frontBtn");
const cardBackBtn = document.querySelectorAll(".backBtn");

let cardActiveCheck = null;

let worksInput1Status = null;
let worksInput2Status = null;
let worksInput3Status = null;
let worksInput4Status = null;
let worksInput5Status = null;

const statusCheck = () => {
  worksInput1Status = worksInput1.checked;
  worksInput2Status = worksInput2.checked;
  worksInput3Status = worksInput3.checked;
  worksInput4Status = worksInput4.checked;
  worksInput5Status = worksInput5.checked;
};

const handleNextBtn = () => {
  statusCheck();
  let nextInput = null;
  if (worksInput1Status) {
    worksInput2.checked = true;
    nextInput = worksInput2;
  }
  if (worksInput2Status) {
    worksInput3.checked = true;
    nextInput = worksInput3;
  }
  if (worksInput3Status) {
    worksInput4.checked = true;
    nextInput = worksInput4;
  }
  if (worksInput4Status) {
    worksInput5.checked = true;
    nextInput = worksInput5;
  }
  if (worksInput5Status) {
    worksInput1.checked = true;
    nextInput = worksInput1;
  }
  handleCardTitle(null, nextInput);
};
const handlePrevBtn = () => {
  statusCheck();
  let preInput = null;
  if (worksInput1Status) {
    worksInput5.checked = true;
    preInput = worksInput5;
  }
  if (worksInput2Status) {
    worksInput1.checked = true;
    preInput = worksInput1;
  }
  if (worksInput3Status) {
    worksInput2.checked = true;
    preInput = worksInput2;
  }
  if (worksInput4Status) {
    worksInput3.checked = true;
    preInput = worksInput3;
  }
  if (worksInput5Status) {
    worksInput4.checked = true;
    preInput = worksInput4;
  }
  handleCardTitle(null, preInput);
};

const handleFlipActive = (event) => {
  event.target.parentElement.parentElement.parentElement.parentElement.style.transform =
    "rotateY(-180deg)";
};
const handleFlipActiveN = (event) => {
  event.target.parentElement.parentElement.parentElement.parentElement.style.transform =
    "";
};

const handleCardTitle = (event, item) => {
  let target = null;
  if (!cardActiveCheck) {
    cardActiveCheck = firstCard.querySelector(".front_content");
    cardActiveCheck.classList.remove("card_active");
  } else {
    cardActiveCheck.classList.remove("card_active");
  }
  if (!event) {
    target = item.labels[0].querySelector(".front_content");
  } else {
    target = event.target.labels[0].querySelector(".front_content");
  }
  target.classList.add("card_active");
  cardActiveCheck = target;
};

statusCheck();

nextBtn.addEventListener("click", handleNextBtn);
prevBtn.addEventListener("click", handlePrevBtn);
cardFrontBtn.forEach((item) => {
  item.addEventListener("click", handleFlipActive);
});
cardBackBtn.forEach((item) => {
  item.addEventListener("click", handleFlipActiveN);
});
inputArr.forEach((item) => {
  item.addEventListener("change", handleCardTitle);
});
