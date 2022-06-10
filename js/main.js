let videoBack = document.getElementById('video_back');
let play = document.getElementById('play');
let playCircle = document.getElementById('circle');
videoBack.addEventListener('click', ()=>{
    videoBack.pause();
    play.classList.add('play-shown');
    playCircle.classList.replace('circle_animation-reverse','circle_animation');
});
playCircle.addEventListener('click', ()=>{
    playCircle.classList.replace('circle_animation','circle_animation-reverse');
    videoBack.play();
    setTimeout(()=>{
        play.classList.remove('play-shown');
    },1200)
    
});


let optionBtn = document.querySelector('.fa-gear');
let optionBar = document.querySelector('.option-bar');
let optionList = document.querySelector('.option-bar__list');
optionBtn.addEventListener('mouseover',()=>{
    optionBar.classList.toggle('option-bar-opened');
    optionList.classList.toggle('option-bar__list-shown');
})



let volume = document.querySelector('.fa-volume-off');
volume.addEventListener('click', ()=>{
    if(!videoBack.muted){
        videoBack.muted = true;
    }else{
        videoBack.muted = false;
    }
    alert(`Звук ${videoBack.muted === true ? 'выключен': 'включен'}`)
});


/////audio player
const audioList = [
    {
        vinylImg: './image-video-audio/vinyl0.png',
        title: 'Moldanazar <span> Mahabbatym </span>',
        song: './image-video-audio/moldanazar0.mp3'

    },
    {
        vinylImg: './image-video-audio/vinyl1.png',
        title: 'Moldanazar <span> Meyrimdi bol </span>',
        song: './image-video-audio/moldanazar1.mp3'

    },
    {
        vinylImg: './image-video-audio/vinyl2.png',
        title: 'Moldanazar <span> Ozin gana </span>',
        song: './image-video-audio/moldanazar2.mp3'

    }
];

let vinylImg = document.getElementById('vinyl');
let audioPlayer = document.querySelector('.audio-player');
let audioTitle = document.querySelector('.intro__title');
let audioProgBar = document.querySelector('.audio-progress-bar');
let audioNext = document.getElementById('audio-next');
let audioPrev = document.getElementById('audio-prev');
let audioPlay = document.getElementById('audio-play');

let index = 0;
let progressCounter = 1;
let progressInterval;
let progressCount = () =>{
    progressCounter = progressCounter + 1;
    audioProgBar.style.width = `${progressCounter}px`;
    
    if(progressCounter >= audioPlayer.duration){
        offAudio()
    }
}


function offAudio(){
    progressCounter = 0;
    audioProgBar.style.width = `${progressCounter}px`;

    audioPlayer.pause();
    audioPlay.className = 'fa-solid fa-play mx-2';
    
    clearInterval(progressInterval);
    vinylImg.classList.remove('vinyl_animation');
}

audioPlay.addEventListener('click', ()=>{
    audioPlay.className = 'fa-play' == audioPlay.classList[1] ? 'fa-solid fa-pause mx-2' : 'fa-solid fa-play mx-2';
    if(audioPlayer.paused){
        audioPlayer.play();
        progressInterval =  setInterval(progressCount,1000);
    }else{
        audioPlayer.pause();
        clearInterval(progressInterval);
    }
    
    vinylImg.classList.toggle('vinyl_animation');

})



function nextPrevBtn(btn){
    btn.addEventListener('click', ()=>{
        if(btn == audioNext){
            index = index + 1;
            if(index > 2){
                index = 0;
            }
        }
        else{
            index = index - 1;
            if(index < 0){
                index = 2;
            }
        }
        console.log(index);
        
        offAudio();
        
        vinylImg.src = audioList[index].vinylImg;
        audioPlayer.src = audioList[index].song;
        audioTitle.innerHTML = audioList[index].title;
    });
   
}
nextPrevBtn(audioNext);
nextPrevBtn(audioPrev);





VanillaTilt.init(document.querySelector(".audio-card"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".audio-card"));


