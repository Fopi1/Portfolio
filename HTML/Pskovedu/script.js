var pastId = "1";
var currentId;

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
