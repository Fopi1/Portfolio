let currentId = 0;
let pastId = 1;
// Imgs
const infoImgs = document.getElementsByClassName("info-img");
const nextInfo = document.getElementById("nextInfo");
const prevInfo = document.getElementById("prevInfo");
// News
const newsBlocks = document.getElementsByClassName("news-block_inner");
const nextNews = document.getElementById("nextNews");
const prevNews = document.getElementById("prevNews");
// Info
const switchInfo = (infoNumber) => {
  for (let i = 0; i < infoImgs.length; i++) {
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
// Slide
const switchSlide = (slideId) => {
  if (slideId !== pastId) {
    document
      .getElementById(slideId)
      .querySelector("button")
      .classList.add("slider-active");
    document
      .getElementById("description" + " " + slideId)
      .classList.remove("hidden");
    document
      .getElementById(pastId)
      .querySelector("button")
      .classList.remove("slider-active");
    document
      .getElementById("description" + " " + pastId)
      .classList.add("hidden");
    pastId = slideId;
  }
};
// News-Block
const switchNews = (newsNumber) => {
  for (let i = 0; i < newsBlocks.length; i++) {
    if (i !== newsNumber) {
      newsBlocks[i].classList.add("hidden");
    } else {
      newsBlocks[i].classList.remove("hidden");
    }
  }
};
const validNumberOfNews = (newsNumber) => {
  if (newsNumber <= 0) {
    prevNews.classList.add("hidden");
  } else if (newsNumber >= newsBlocks.length - 1) {
    nextNews.classList.add("hidden");
  } else {
    prevNews.classList.remove("hidden");
    nextNews.classList.remove("hidden");
  }
  currentId = newsNumber;
  return currentId;
};
prevNews.onclick = function () {
  let newNews = currentId - 1;
  switchNews(validNumberOfNews(newNews));
};
nextNews.onclick = function () {
  let newNews = currentId + 1;
  switchNews(validNumberOfNews(newNews));
};
