
let imgs = [
    "img/img1.jpg",
    "img/bild1.jpg",
    "img/bild2.jpg",
    "img/bild3.jpg"
];

let counter = 0;

let changeImg = () => {
    document.querySelector('header img').src = imgs[counter]
}

document.querySelector('.btnRight').addEventListener("click", () => {
    counter++;
    if (counter >= imgs.length) {
        counter = 0;
    }
    changeImg();
});
document.querySelector('.btnLeft').addEventListener("click", () => {
    counter--;
    if (counter < 0) {
        counter = imgs.length - 1;
    }
    changeImg();
});