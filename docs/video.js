var video1 = document.getElementById("yoga-video1");
var video2 = document.getElementById("yoga-video2");
var video3 = document.getElementById("yoga-video3");
var video4 = document.getElementById("yoga-video4");
var video5 = document.getElementById("yoga-video5");

//For Video 1
video1.addEventListener("click", () => {
    if (video1.paused) {
        video1.play();
    } else {
        video1.pause();
    }
});

video1.addEventListener("ended", () =>{
    video1.pause();
    video1.currentTime() = 0;
});
//For Video 2
video2.addEventListener("click", () => {
    if (video2.paused) {
        video2.play();
    } else {
        video2.pause();
    }
});

video2.addEventListener("ended", () =>{
    video2.pause();
    video2.currentTime() = 0;
});

video3.addEventListener("click", () => {
    if (video3.paused) {
        video3.play();
    } else {
        video3.pause();
    }
});

video3.addEventListener("ended", () =>{
    video3.pause();
    video3.currentTime() = 0;
});

video4.addEventListener("click", () => {
    if (video4.paused) {
        video4.play();
    } else {
        video4.pause();
    }
});

video4.addEventListener("ended", () =>{
    video4.pause();
    video4.currentTime() = 0;
});

video5.addEventListener("click", () => {
    if (video5.paused) {
        video5.play();
    } else {
        video5.pause();
    }
});

video5.addEventListener("ended", () =>{
    video5.pause();
    video5.currentTime() = 0;
});

video6.addEventListener("click", () => {
    if (video6.paused) {
        video6.play();
    } else {
        video6.pause();
    }
});

video6.addEventListener("ended", () =>{
    video6.pause();
    video6.currentTime() = 0;
});
