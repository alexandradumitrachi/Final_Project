let i = 0;
let images = [];
let time = 3000;

images[0] = "/img/pic1.jpeg";
images[1] = "/img/pic2.jpeg";
images[2] = "/img/pic3.jpeg";
images[3] = "/img/pic4.jpeg";
images[4] = "/img/pic5.jpeg";

let changeImg = () => {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
};

window.onload = changeImg;
