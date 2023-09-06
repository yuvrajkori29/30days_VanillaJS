const player  = document.querySelector('.player');
const video =  player.querySelector('.player__video');

 const progress = player.querySelector('.progress');
 const progressBar  = player.querySelector('.progress__filled');
 const toggle =player.querySelector('.toggle')
 const skipButtons = player.querySelectorAll('[data-skip]');
 const ranges = player.querySelectorAll('.player__slider');


 //hookup functions


 function togglePlay()
 {
    //either play or pause

    if(video.paused)
     {
        video.play()
     }

     else
     {
        video.pause();
     }
 }

 function skip()
 {
    //  console.log(this.dataset.skip);
    const skipped = this.dataset.skip;

    video.currentTime +=parseFloat(skipped);

 }


 function handleRangeChange()
 {
    video[this.name] = this.value;
    console.log(this.value);
 }

 function handleProgress()
 {
    const percent = (video.currentTime /video.duration)*100;
    progressBar.style.flexBasis= `${percent}%`;
 }

 function scrub(e)
 {
    const scrubTime  = (e.offsetX /progress.offsetWidth)*video.duration;
    video.currentTime   = scrubTime;
    console.log(e);

 }

 function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
  }

  
 //event listeners;

 video.addEventListener('click',togglePlay);      //while clicking  on video
 video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
 video.addEventListener('timeupdate',handleProgress); 
 toggle.addEventListener('click',togglePlay);      //while clicking on play button
skipButtons.forEach(button => button.addEventListener('click',skip));

ranges.forEach(range=>range.addEventListener('change',handleRangeChange));
ranges.forEach(range=>range.addEventListener('mousemove',handleRangeChange));

progress.addEventListener('click',scrub);

let mousedown = false;
progress.addEventListener('mousemove',()=>{
    if(mousedown)
     {
        scrub;
     }
});
progress.addEventListener('mousedown' ,()=>{mousedown = true});
progress.addEventListener('mouseup' ,()=>{mousedown = false});

