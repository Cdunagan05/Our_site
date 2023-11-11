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



//Stuff below this is for puzzle
//'https://media.gettyimages.com/photos/cat-headphones-wearing-sunglasses-rela    xing-in-the-grass-picture-id512291806?s=2048x2048'
//https://medi    a.gettyimages.com/vectors/hand-drawing-hipster-fantasy-animal-unicorn-illustration-vect    or-id1065322868?s=2048x2048


var img = ['https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2','https://media.gettyimages.com/vectors/cute-cartoon-dachshunds-in-love-vector-id865392634?s=2048x2048','https://media.gettyimages.com/vectors/heart-shaped-sea-otters-in-love-vector-graphics-vector-id1183276814?s=2048x2048','https://media.gettyimages.com/id/1404106422/photo/happy.jpg?s=612x612&w=0&k=20&c=KM6Y7W5eqR_kKLIHObLyDNu5hm87lsBrtWeKrhqZYWw=','https://media.gettyimages.com/vectors/cute-sloth-sitting-in-lotus-yoga-pose-cartoon-sloth-bear-vector-vector-id1076571820?s=2048x2048','https://images.fineartamerica.com/images-medium-large-5/gentoo-penguin-carrying-pebble-for-nest-john-shaw.jpg']

var old = 5
var clicks = 0
function randomize() {
  let root = document.documentElement
  root.style.setProperty('--image','url('+img[old]+')')
  old++
  if(old > 5) {
    old = 0
  }  
  var ul = document.querySelectorAll('#puzz i');
  for(var i=0;i<ul.length;i++){
    ul[i].style.left = Math.random()*(window.innerWidth-100) + 'px'
    ul[i].style.top = Math.random()*(window.innerHeight-100) + 'px'
  }
  // for (var i = ul.children.length; i >= 0; i--) {
  //   ul.appendChild(ul.children[Math.random() * i | 0]);    
  // }
}
randomize()

function reload() {
  var done = document.querySelectorAll('.done')
  done.forEach(function(e){
    e.classList.toggle('done')
  })
  var dropped = document.querySelectorAll('.dropped')
  dropped.forEach(function(e){
    e.classList.toggle('dropped')
  })
  var allDone = document.querySelector('.allDone')
  allDone.style = ''
  allDone.classList.toggle('allDone')
}


// mobile functionality
var p = document.querySelectorAll('#puzz i')
p.forEach(function(e){
  e.addEventListener('mousedown', function(){
    clicks++
    document.querySelector('#clicks').innerHTML = clicks
  })
  e.addEventListener('click', function(){
    if(document.querySelector('.clicked')){
      document.querySelector('.clicked').classList.toggle('clicked')
      e.classList.toggle('clicked')
    } else {
      e.classList.toggle('clicked')  
    }    
  })
})

var fp = document.querySelectorAll('#puz i')
fp.forEach(function(el){
  el.addEventListener('click', function(){
    if(document.querySelector('.clicked')){
      var c = document.querySelector('.clicked')
      if(c.classList.contains(el.classList)) {
        el.classList.add('dropped')
        c.classList.add('done')
        c.classList.toggle('clicked')

        if(document.querySelectorAll('.dropped').length == 9) {
          document.querySelector('#puz').classList.add('allDone')
          document.querySelector('#puz').style.border = 'none'  
          document.querySelector('#puz').style.animation = 'allDone 1s linear forwards'

          setTimeout(function(){
            reload()
            randomize()            
          },1500)
        } 
      }
    }    
  })
})

// desktop drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.className);  
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text")

  if(ev.target.className == data){
    ev.target.classList.add('dropped')
    document.querySelector('.'+data+"[draggable='true']").classList.add('done')

    if(document.querySelectorAll('.dropped').length == 9) {
      document.querySelector('#puz').classList.add('allDone')
      document.querySelector('#puz').style.border = 'none'  
      document.querySelector('#puz').style.animation = 'allDone 1s linear forwards'  

      setTimeout(function(){
        reload()
        randomize()        
      },1500)
    }    
  }  
}





//heart stuff


const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const heart = document.getElementById('heart');

image1.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', 'image1');
});

image2.addEventListener('dragover', (e) => {
  e.preventDefault();
});

image2.addEventListener('drop', (e) => {
  e.preventDefault();
  const draggedItem = e.dataTransfer.getData('text/plain');
  
  if (draggedItem === 'image1') {
    const rect1 = image1.getBoundingClientRect();
    const rect2 = image2.getBoundingClientRect();
    
    if (rect1.right >= rect2.left && rect1.left <= rect2.right && rect1.bottom >= rect2.top && rect1.top <= rect2.bottom) {
      heart.classList.remove('hidden');
      setTimeout(() => {
        heart.classList.add('hidden');
      }, 2000); // 2000 milliseconds (2 seconds), adjust as needed
    }
  }
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

