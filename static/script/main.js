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


// Compare sum of the circles radius with distance betwen their centers. 
// You can use distance squared since your're just comparing the values. 
// No need to find the square root, which is an expensive calculation.

var circle1 = $("#circle1");
var circle2 = $("#circle2");

var r1 = circle1.width() / 2;
var r2 = circle2.width() / 2;

var x2 = 300;
var y2 = 150;

var x1 = x2 - r1 + r2;
var y1 = y2 - r1 + r2;

var d1 = (r1 + r2) * (r1 + r2);

TweenLite.set(circle2, { x: x2, y: y2 });

Draggable.create(circle1, {  
  onDrag: function() {
            
    var dx = x1 - this.x;
    var dy = y1 - this.y;
    var d2 = dx * dx + dy * dy;
    
    d2 < d1 ? circle2.addClass("hit") : circle2.removeClass("hit");
  }
});


//Stuff below this is for envelope

document.querySelector('.envelope').addEventListener('click', function(){
  if (document.querySelector('.letter').classList.contains('letter--open')){
    document.querySelector('.letter').classList.remove('letter--open');
    document.querySelector('.letter').classList.add('letter--close');
    setTimeout(function(){
      document.querySelector('.letter').classList.remove('letter--close');
    }, 600);    
  } else {
    document.querySelector('.letter').classList.remove('letter--close');
    document.querySelector('.letter').classList.add('letter--open');
  }
});

document.querySelector('.paper-close').addEventListener('click', function(){   document.querySelector('.letter').classList.remove('letter--open');
  document.querySelector('.letter').classList.add('letter--close');
  setTimeout(function(){
    document.querySelector('.letter').classList.remove('letter--close');
  }, 600);
});

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

