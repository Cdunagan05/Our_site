//alert("It. Is. Your. Birthday.")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//$(document).ready(function() {
//    $(".draggable").draggable({
//        containment: ".main-container", // Restrict dragging within the main container
//    });
//});

//$(document).ready(function() {
  // Initialize the images as draggable
 // $("#img1, #img2").draggable({
   // stack: "#img1, #img2", // This ensures they stack on top of each other
   // revert: "invalid" // If not dropped on a droppable, revert to original position
 // }); 

