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

let controller = document.querySelector('.fa-bars-progress');
controller.addEventListener('click', ()=>{
    if(!videoBack.controls){
        videoBack.controls = true;
    }else{
        videoBack.controls = false;
        
        
    }
    alert(`Контоллер ${videoBack.controls === true ? 'включен': 'выключен'}`)
});

let vinyl = document.querySelectorAll('.vinyl');
vinyl.forEach((event)=>
{event.addEventListener('click', ()=>{
        event.classList.toggle('vinyl_animation');
    })
});


