let pastId = "1";
let currentId = 0;
let infoImgs = document.getElementsByClassName("info-img");
let nextInfo = document.getElementById("nextInfo");
let prevInfo = document.getElementById("prevInfo");

const clickedId = (repliedId) => {
  currentId = repliedId;
  return repliedId;
};

const makeActive = (repliedId) => {
  document
    .getElementById(clickedId(repliedId))
    .querySelector("button")
    .classList.add("slider-active");
};

const makeDeactive = (repliedId) => {
  document
    .getElementById(pastId)
    .querySelector("button")
    .classList.remove("slider-active");
  clickedId(repliedId);
  pastId = currentId;
};

const switchSlide = () => {
  document
    .getElementById("description" + " " + currentId)
    .classList.remove("hidden");
  document.getElementById("description" + " " + pastId).classList.add("hidden");
};

const switchSliderAndSlide = (repliedId) => {
  makeActive(repliedId);
  if (pastId !== currentId) {
    switchSlide();
    makeDeactive(repliedId);
  }
};

const nextSlide = () => {
  currentId = Number(pastId) + 1;
  if (currentId === 9) {
    document.getElementById("nextSlide").classList.add("hidden");
  } else {
    document.getElementById("prevSlide").classList.remove("hidden");
  }
  document
    .getElementById("news" + " " + String(currentId))
    .classList.remove("hidden");
  document
    .getElementById("news" + " " + String(pastId))
    .classList.add("hidden");
  pastId = Number(pastId) + 1;
};

const prevSlide = () => {
  currentId = Number(pastId);
  if (currentId - 1 === 1) {
    document.getElementById("prevSlide").classList.add("hidden");
  } else {
    document.getElementById("nextSlide").classList.remove("hidden");
  }
  document
    .getElementById("news" + " " + String(pastId - 1))
    .classList.remove("hidden");
  document
    .getElementById("news" + " " + String(currentId))
    .classList.add("hidden");
  pastId = Number(pastId) - 1;
};

const switchInfo = (infoNumber) => {
  for (let i = 0; i < infoImgs.length; i++) {
    console.log(i);
    if (i !== infoNumber) {
      infoImgs[i].classList.add("hidden");
    } else {
      infoImgs[i].classList.remove("hidden");
    }
  }
};
const validNumberOfInfo = (infoNumber) => {
  let validNumber = infoNumber;
  if (infoNumber < 0) {
    validNumber = infoImgs.length - 1;
  } else if (infoNumber > infoImgs.length - 1) {
    validNumber = 0;
  }
  currentId = validNumber;
  return currentId;
};
prevInfo.onclick = function () {
  let newInfo = currentId - 1;
  switchInfo(validNumberOfInfo(newInfo));
};
nextInfo.onclick = function () {
  let newInfo = currentId + 1;
  switchInfo(validNumberOfInfo(newInfo));
};
