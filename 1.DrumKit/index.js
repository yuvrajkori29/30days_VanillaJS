
window.addEventListener('keydown',(e)=>{
   
    const audio  = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);


    if(!audio)
    {
       
            return
       
    }
 
      
        audio.currentTime = 0;    //rewind for repated 
        audio.play();
               
        
     
     
   })