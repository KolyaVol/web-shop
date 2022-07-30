const hdLine = document.querySelector(".hd__line");
const dot1 = document.querySelector(".hot__deal__point1");
const dot2 = document.querySelector(".hot__deal__point2");
const dot3 = document.querySelector(".hot__deal__point3");
const dot4 = document.querySelector(".hot__deal__point4");
const allDots = Array.from(document.querySelectorAll(".dot"));

const disactive = () => {
    allDots.map((dot) => {
        dot.classList.remove("active");
    });
};

const choice = (number,dot) => {
    offset == number ? dot.classList.add("active") : dot.classList.remove("active");
};

const choose = (number,dot) => {
    dot.classList.add("active");
    offset = number
    hdLine.style.left = -offset + 'px';
}

let offset = 0;

let timer = setInterval(() => {
    offset += 910;
    if (offset > 3240) {
        offset = 0
    }
    hdLine.style.left = -offset + 'px';
    
    disactive()

    choice(0,dot1);
    choice(910,dot2);
    choice(1820,dot3);
    choice(2730,dot4);
}, 6000);

dot1.addEventListener("click", (e) => {
    disactive();
    choose(0,dot1);
});

dot2.addEventListener("click", (e) => {
    disactive();
    choose(910,dot2);
});

dot3.addEventListener("click", (e) => {
    disactive();
    choose(1820,dot3);
});

dot4.addEventListener("click", (e) => {
    disactive();
    choose(2730,dot4);
});

