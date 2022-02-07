const playBtn = document.querySelector('.play');
const backImg = document.querySelector('.main');
const audio = new Audio();
let isPlay = false;

function playAudio() {
    if(isPlay === false) {
        if(playNum < 0){
            playNum = 4;
        }else if(playNum > 4){
            playNum = 0;
        }
        audio.src = arr[playNum];
        audio.currentTime = 0;
        backImg.style.backgroundImage = arr2[playNum];
        audio.play();
        isPlay = true;
    }else{
        audio.pause();
        isPlay = false;
    }
}
const button = document.querySelector('.play');

function toggleBtn() {
    button.classList.toggle('pause');
}
button.addEventListener('click', toggleBtn);
playBtn.addEventListener('click', playAudio);


let playNum = 0;
let arr = ['./assets/audio/solovey.mp3','./assets/audio/drozd.mp3','./assets/audio/zarynka.mp3',
    './assets/audio/javoronok.mp3','./assets/audio/slavka.mp3'];
let nextBtn = document.querySelector('.play-next');
let prevBtn = document.querySelector('.play-prev');

function playNext() {
    playNum++;
    playAudio();
    toggleBtn();
}
nextBtn.addEventListener('click', playNext);

function playPrev() {
    playNum--;
    playAudio();
    toggleBtn();
}
prevBtn.addEventListener('click', playPrev);

let arr2 = ["url(./assets/img/solovey.jpg)","url(./assets/img/drozd.jpg)","url(./assets/img/zarynka.jpg)",
    "url(./assets/img/javoronok.jpg)","url(./assets/img/slavka.jpg)"];

const changeMusicByBtn = document.querySelector('.nav-list');

function changeMusic(event){
    const elem = event.target.getAttribute("data-item");
    if(elem === "solovey"){
        toggleBtn();
        playNum = 0;
        playAudio();
    }else if(elem === "drozd"){
        toggleBtn();
        playNum = 1;
        playAudio();
    }else if(elem === "zarynka"){
        toggleBtn();
        playNum = 2;
        playAudio();
    }else if(elem === "javoronok"){
        toggleBtn();
        playNum = 3;
        playAudio();
    }else if(elem === "slavka"){
        toggleBtn();
        playNum = 4;
        playAudio();
    }
}

changeMusicByBtn.addEventListener('click',(event) =>changeMusic(event));
