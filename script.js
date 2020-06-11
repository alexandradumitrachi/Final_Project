let i = 0;
let images = [];
let time = 3000;

images[0] = "/images/pic1.jpg";
images[1] = "/images/pic2.jpg";
images[2] = "/images/pic3.jpg";
images[3] = "/images/pic4.jpg";
images[4] = "/images/pic5.jpg";

let changeImg = () =>{
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else { 
        i=0;
    }
setTimeout("changeImg()", time)
}

window.onload = changeImg;


