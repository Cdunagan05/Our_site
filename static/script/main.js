alert("It. Is. Your. Birthday.")

$(function() {
  $("#img1").draggable({  });
});

/*
const draggableImage = document.getElementById('img1');

let isDragging = false;
let initialX, initialY;
let offsetX, offsetY;

draggableImage.addEventListener('mousedown', (event) => {
    isDragging = true;
    initialX = event.clientX - offsetX;
    initialY = event.clientY - offsetY;
    
    // Add CSS to indicate dragging
    draggableImage.style.transition = 'none';
    draggableImage.style.zIndex = 2; // Bring it to the front
    draggableImage.style.cursor = 'grabbing'; // Change cursor style
});

document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    event.preventDefault();
    
    const currentX = event.clientX;
    const currentY = event.clientY;
    
    offsetX = currentX - initialX;
    offsetY = currentY - initialY;
    
    draggableImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        
        // Reset styles when dragging ends
        draggableImage.style.transition = 'transform 0.3s ease';
        draggableImage.style.zIndex = 1;
        draggableImage.style.cursor = 'grab';
    }
});
*/
