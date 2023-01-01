






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


//<div id = "gallery" class="scroll-size-function">

    // <div id ="cover_item" class="scroll-items-size"> 
    // <img class="scroll-img"src="\Images\cat-loaf.jpg" alt="cat1">  
    // <div class="scroll-texts text-margin">
    //     <p class="text title">Cat Pictures</p>
    //     <p class="text" >Cras ornare arcu dui vivamus arcu. Jemortis ras ornare arcu dui vivamus arcu. </p>
    // </div>
    // </div>

const gallery = document.getElementById('gallery');


const cover_items = document.getElementById('cover_items');

const title = document.getElementById('title');
const description = document.getElementById('description');


const imageIndexes = [1,2];


var test_text = 'Cras ornare arcu dui vivamus arcu. Jemortis ras ornare arcu dui vivamus arcu.';


imageIndexes.reverse().forEach( (i) =>{

    var fetch = document.getElementById('gallery').innerHTML;

    gallery.innerHTML =
    `<div id ="cover_item" class="scroll-items-size"> 

        <img class="scroll-img"src="../Images/cover-img-${i}.jpg" alt="cover-img${i}">  

        <div class="scroll-texts text-margin">
            <p class="text title"  alt = "title-${i}" >Cat ${i}</p>
            <p class="text" alt="text-${i}" >Cras ornare arcu dui vivamus arcu. Jemortis ras ornare arcu dui vivamus arcu. </p>
        </div>

    </div>`     + fetch;



    // const cover_item = document.createElement('li');

    // cover_item.alt = `cover-item-${i}`;
    // cover_item.classList.add('scroll-items-size');


    // const image = document.createElement('img');

    // image.src = `../Images/cover-img-${i}.jpg`;
    // image.alt = `cover-image-${i}`;
    // image.classList.add('scroll-img');


    // const title = document.createElement('p');

    // title.content = `CAT ${i}`;
    // title.alt = `cover-title-${i}`;
    // title.classList.add('text title');


    // const text = document.createElement('p');

    // text.content = test_text;
    // text.alt = `cover-text-${i}`;
    // text.classList.add('text');

    // gallery.appendChild(cover_item);
    
    // cover_item.appendChild(image);
    // cover_item.appendChild(title);
    // cover_item.appendChild(text);



})


// var bCheckEnabled = true;
// var bFinishCheck = false;

// var img;
// var imgArray = new Array();
// var i = 0;


// var myInterval = setInterval(loadImage, 1);








