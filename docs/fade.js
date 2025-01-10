document.addEventListener("DOMContentLoaded", function() {
    let image1 = document.getElementById('image-1');
    let image2 = document.getElementById('image-2');
    
    setInterval(function() {
      
      // After the first image fades out, fade in the second image
      setTimeout(function() {
        image1.style.opacity = 0;
        image2.style.opacity = 1;
      }); // Wait for the first image to completely fade out (2s)
      
      // After 2 seconds, fade out the second image and fade in the first image
      setTimeout(function() {
        image2.style.opacity = 0;
        image1.style.opacity = 1;
      }, 4000); // Set the second image's fade out timing after the first one is done
    }, 6000); // Loop every 6 seconds (2s fade out + 2s fade in)
});
