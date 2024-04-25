let pos = 0;
let imgCount = document.querySelectorAll(".imageContainer img").length;
let radios = document.querySelectorAll('.slider-buttons input[type = "radio"]');
let rek;
//die Breite von ImgCointainer wird angepasst
document.querySelector(".imageContainer").style.width = (imgCount * 800)+"px";

radios.forEach((e, i) => {
    e.addEventListener("click", () => {
        clearTimeout(rek); // Timeout stoppen
        move(i);
        autoMove(); // Timeout neu starten
    });
});
let move = (i) => {
    document.querySelector(".imageContainer").style.marginLeft = -(i*800) + "px";
    radios[i].checked = true;
    pos = i;

}

let autoMove = () => {
    rek = setTimeout(() => {
        pos ++;
        if (pos > imgCount-1){
            pos = 0;
        }
        move(pos);
        autoMove();
    }, 5000);
};

autoMove();

//for(i = 0; i<imgCount; i++) {
//     let radio = document.createElement("input type='radio'");
//     document.querySelector('.slider-buttons').
// }