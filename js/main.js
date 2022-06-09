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




let vinylImg = document.getElementById('vinyl');
let audioPlayer = document.querySelector('.audio-player');
let audioNext = document.getElementById('audio-next');
let audioPrev = document.getElementById('audio-prev');
let audioPlay = document.getElementById('audio-play');

let index = 0;
const audioList = [
    {
        vinylImg: './image-video-audio/vinyl0.png',
        title: 'Moldanazar Mahabbatyym',
        song: './image-video-audio/moldanazar0.mp3'

    },
    {
        vinylImg: './image-video-audio/vinyl1.png',
        title: 'Moldanazar Ozin gana',
        song: './image-video-audio/moldanazar1.mp3'

    },
    {
        vinylImg: './image-video-audio/vinyl2.png',
        title: 'Moldanazar Meyrimdi bol',
        song: './image-video-audio/moldanazar2.mp3'

    }
]
function nextPrevBtn(btn){
    btn.addEventListener('click', ()=>{
        if(btn == audioNext){
            index = index + 1;
            if(index > 2){
                index = 0;
            }
        }
        else{
            imgIndex = imgIndex - 1;
            if(index <= 0){
                index = 2;
            }
        }
        console.log(index);
        
        audioPlay.className = 'fa-solid fa-play mx-2';
        vinylImg.classList.remove('vinyl_animation');
        audioPlayer.pause();
        
        vinylImg.src = audioList[index].vinylImg;
        audioPlayer.src = audioList[index].song;
        
    });
   
}
nextPrevBtn(audioNext);
nextPrevBtn(audioPrev);


audioPlay.addEventListener('click', ()=>{
    audioPlay.className = 'fa-play' == audioPlay.classList[1] ? 'fa-solid fa-pause mx-2' : 'fa-solid fa-play mx-2';
    if(audioPlayer.paused){
        audioPlayer.play();
    }else{
        audioPlayer.pause();
    }
    vinylImg.classList.toggle('vinyl_animation');
})





