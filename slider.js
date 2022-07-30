const prLine = document.querySelector(".pr__line");
const leftBtn = document.querySelector(".slide__left");
const rightBtn = document.querySelector(".slide__right");
let prOffset = 0;

let prTimer = setInterval(() => {
    prOffset += 722;
    if (prOffset > 2100) {
        prOffset = 0
    }
    prLine.style.left = -prOffset + 'px';
}, 10000);

leftBtn.addEventListener("click",(e) => {
    prOffset += -722;
    if (prOffset < 0) {
        prOffset = 1444
    }
    prLine.style.left = -prOffset + 'px';

})

rightBtn.addEventListener("click",(e) => {
    prOffset += 722;
    if (prOffset > 2100) {
        prOffset = 0
    }
    prLine.style.left = -prOffset + 'px';

})






