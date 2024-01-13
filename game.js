const body = document.querySelector("body");
const mainContainer = createAndAppend("div", "class", "mainContainer", body);
const container1 = createAndAppend("div", "class", "container1", mainContainer);
const container2 = createAndAppend("div", "class", "container2", mainContainer);
const img = createAndAppend(
  "img",
  "src",
  "https://freesvg.org/img/top-down-bike-racing-monsterbraingames.png",
  mainContainer
);
img.setAttribute("class", "bikeImg");
// ----container1

const video = createAndAppend(
  "video",
  "src",
  "https://media.istockphoto.com/id/472414271/video/rolling-street.mp4?s=mp4-640x640-is&k=20&c=3MNJlLytI5Ac-8qivr4vO2ySOQ3x7gslKH5ieMhZwzA=",
  container1
);

// ----container2

const handelContainer = createAndAppend("div", "class", "handel", container2);
const controler = createAndAppend("div", "class", "controler", container2);

// handel

const btnContainerOfHandel = createAndAppend(
  "div",
  "class",
  "buttonConteinerHandel",
  handelContainer
);
const btnLeft = createAndAppend(
  "button",
  "class",
  "left",
  btnContainerOfHandel,
  "click"
);
const btnRight = createAndAppend(
  "button",
  "class",
  "right",
  btnContainerOfHandel,
  "click"
);

// controller
const btnContainerOfController = createAndAppend(
  "div",
  "class",
  "buttonContainerController",
  controler
);
const btnBreak = createAndAppend(
  "button",
  "class",
  "break",
  btnContainerOfController,
  "click"
);
const btnAccelerator = createAndAppend(
  "button",
  "class",
  "accelerator",
  btnContainerOfController,
  "click"
);

function createAndAppend(tag, attType, attName, parent, event) {
  const element = document.createElement(tag);
  if (!!(attType && attName)) {
    element.setAttribute(attType, attName);
  }
  if (!!parent) {
    parent.append(element);
  }

  let translationValue = 0;
  let currentValue = 0;
  if (!!event) {
    element.addEventListener(event, (e) => {
      if (!!(e.type === "click")) {
        if (e.target.classList[0] === "right") {
          translationValue += 15;
          console.log(translationValue);
          if (translationValue < 135) {
            img.style.transform = `translate(${translationValue}%,${1}%)`;
          }
        }
        if (e.target.classList[0] === "left") {
          translationValue -= 15;
          if (translationValue > -140) {
            img.style.transform = `translate(${translationValue}%,-${1}%)`;
          }
        }
        if (e.target.classList[0] === "accelerator") {
          video.play();
          // video.playbackRate = 1;
          video.setAttribute("loop", "");
          video.setAttribute("autoplay", "");
        }
        if (e.target.classList[0] === "break") {
          video.pause();
        }
      }
    });
  }
  return element;
}
