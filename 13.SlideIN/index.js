function debounce(func, wait = 0, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const slideimage = document.querySelectorAll('.slide-in');



  function sliding(e){
    // console.log(e);

    slideimage.forEach(imageslide => { 
          ///postion of image to be slided at;

          const slideInat = (window.scrollY + window.innerHeight) - imageslide.height /2;
          console.log(slideInat); 

          const imageBottom = imageslide.offsetTop + imageslide.height;

          const isHalfShown = slideInat > imageslide.offsetTop ;
          const isNotScrolledPast = window.scrollY < imageBottom;

          if(isHalfShown && isNotScrolledPast)
            {
                imageslide.classList.add('active');
            }

            else
            {
                
           imageslide.classList.remove('active');
          
            }
     });
  }

  window.addEventListener('scroll',debounce(sliding));
