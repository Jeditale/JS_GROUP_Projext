function runaway(id) {
    id.style.top = Math.round(Math.random() * 250) - 10 + 'px';
    id.style.left = Math.round(Math.random() * 250) - 20 + 'px';
}
var circle = document.getElementById("jay");

document.addEventListener("mousemove", (event) => {
    var circleX = circle.offsetLeft + circle.offsetWidth / 0.4;
    var circleY = circle.offsetTop + circle.offsetHeight / 0.4;
    var dX = circleX - event.clientX;
    var dY = circleY - event.clientY;
    var degree = (Math.atan(-dX / dY) * 180) / Math.PI;
    if (dY > 0) {
        degree += 180;
    }
    circle.style.transform = "rotate(" + degree + "deg)";
});

document.getElementById('mycv').addEventListener('click', function() {
    var videoModal = document.getElementById('videoModal');
    var modalVideo = document.getElementById('modalVideo');
    
    videoModal.classList.remove('hidden');
    modalVideo.play();
});

document.getElementById('closeModal').addEventListener('click', function() {
    var videoModal = document.getElementById('videoModal');
    var modalVideo = document.getElementById('modalVideo');
    
    videoModal.classList.add('hidden');
    modalVideo.pause();
    modalVideo.currentTime = 0; // Reset video to start
});
