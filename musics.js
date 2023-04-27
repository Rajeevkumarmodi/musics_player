const allMusics = [
    {
        name: 'Yaad aa Jati hai',
        src : 'm-1.mp4',
        image : 'image-1.jpg'
    },
    {
        name: 'Bom Bhole Bom',
        src : 'm-2.mp4',
        image : 'image-2.webp'
    },
     {
         name: 'Basanti',
         src : 'm-3.mp4',
         image : 'image-3.webp'
     },
     {
         name: 'Dil Kisko Du',
         src : 'm-4.mp4',
         image : 'image-4.webp'
     },
     {
         name: 'O dil tor ke',
         src : 'm-5.mp4',
         image : 'image-5.jpg'
     }
 ]


const length = allMusics.length
let playNo = 0;
const name = document.getElementById('name')
const mainImage = document.getElementsByClassName('image')
const mainImage2 =document.getElementById('mainImage')
const previous = document.getElementById('previous')
const play = document.getElementById('play')
const next = document.getElementById('next')
const musics = document.querySelector('audio')

// Play Musics

let isPlay = false;
function playMusics(){
    isPlay = true
    musics.play()
    mainImage[0].classList.add('img')
    play.src = 'pause-icon.png'
    name.innerText = allMusics[playNo].name
}

// pause Musics

function pauseMusics(){
    isPlay = false
    musics.pause()
    play.src = 'play-icon.png'
    mainImage[0].classList.remove('img')
}

// event for play button
play.addEventListener('click',() =>{
    // if(isPlay){
    //     pauseMusics();
    // }
    // else{
    //    playMusics()
    // }

          //  OR
    isPlay?pauseMusics():playMusics()
})

// event for next button 

next.addEventListener('click',() =>{
//    playNo++;
//    if(playNo == length){
//       playNo = 0;
//    }
//    if(playNo < length)
//    {
//       mainImage2.src = allMusics[playNo].image
//       musics.src = allMusics[playNo].src
//       playMusics();

//     }

        //   OR

    playNo = (playNo+1)%length  //Formula
    mainImage2.src = allMusics[playNo].image
    musics.src = allMusics[playNo].src
    name.innerText = allMusics[playNo].name
    playMusics();
})

previous.addEventListener('click',() =>{

    // if(playNo == 0){
        
    //     playNo = length;
        
    // }
    // playNo--;
    // if(playNo < length){
    //     mainImage2.src = allMusics[playNo].image
    //     musics.src = allMusics[playNo].src
    //     playMusics();
    // }

        //  OR

    playNo = (playNo - 1 + length)%length
    mainImage2.src = allMusics[playNo].image
    musics.src = allMusics[playNo].src
    name.innerText = allMusics[playNo].name
    playMusics()
})