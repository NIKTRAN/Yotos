






var seconds = 6;
var noScroll = true;
const timerText = document.getElementById('timer');


function updatecountdown() {
    timerText.innerHTML  = (seconds);

    if(seconds > 0) {
        seconds--;
    }

    if(seconds == 0 && noScroll == true){
        document.getElementById('sectionCover').scrollIntoView();
        firststimescroll = false;
    }
}

function inactivityTime() {
    
    // events
    // window.onload = resetTime;
    window.addEventListener('scroll', resetTime, true);
    
    setInterval (updatecountdown, 1000);

    function resetTime(){
        noScroll = false;
    }

};





inactivityTime(); 







