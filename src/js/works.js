const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const worksInput1 = document.getElementById("works1");
const worksInput2 = document.getElementById("works2");
const worksInput3 = document.getElementById("works3");
const worksInput4 = document.getElementById("works4");
const worksInput5 = document.getElementById("works5");
const inputArr = document.querySelectorAll("input[type=radio]");

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
  if (worksInput1Status) {
    worksInput2.checked = true;
  }
  if (worksInput2Status) {
    worksInput3.checked = true;
  }
  if (worksInput3Status) {
    worksInput4.checked = true;
  }
  if (worksInput4Status) {
    worksInput5.checked = true;
  }
  if (worksInput5Status) {
    worksInput1.checked = true;
  }
};
const handlePrevBtn = () => {
  statusCheck();
  if (worksInput1Status) {
    worksInput5.checked = true;
  }
  if (worksInput2Status) {
    worksInput1.checked = true;
  }
  if (worksInput3Status) {
    worksInput2.checked = true;
  }
  if (worksInput4Status) {
    worksInput3.checked = true;
  }
  if (worksInput5Status) {
    worksInput4.checked = true;
  }
};

statusCheck();

nextBtn.addEventListener("click", handleNextBtn);
prevBtn.addEventListener("click", handlePrevBtn);
