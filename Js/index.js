
var seconds = 7;
var noScroll = true;
const timerText = document.getElementById('timer');


function updatecountdown() {
    timerText.innerHTML  = (seconds);



    if(seconds == 0 && noScroll == true){
        document.getElementById('sectionCover').scrollIntoView();
        firststimescroll = false;
    }

    if(seconds > 0) {
        seconds--;
    }
}

function inactivityTime() {
    
    // events
    // window.onload = resetTime;
    window.addEventListener('scroll', resetTime, true);
    
    setInterval (updatecountdown, 1000);

    function resetTime(){
        seconds = 60;
    }

};


inactivityTime(); 

const gallery = document.getElementById('gallery');

function create_card(objc) {
    return (
        `<div id ="cover_item" class="scroll-items-size"> 

            <img class="scroll-img" src="Images/${objc.img}" alt="${objc.img}">  

            <div class="scroll-texts text-margin">
                <p class="text title">${objc.title}</p>
                <p class="text" >${objc.desc}</p>
            </div>

        </div>`
    );
}





//ASYNC FUNCTION
async function Cover_Info() {
    const response = await fetch("../txt/Cover-Texts.txt");

    const text = await response.text();

    const obj = JSON.parse(text);

    // obj.forEach((cover_obj) => {
    //     // console.log(`TITLE: ${cover_obj.title}, DESC: ${cover_obj.description}`);
    //     gallery.innerHTML += create_card(cover_obj.title, cover_obj.description, cover_obj.link);
    // });
    gallery.innerHTML += create_card({
        title :"Cat 1",
        desc :"Cras ornare arcu dui vivamus arcu. Jemortis ras ornare arcu dui vivamus arcu.",
        img :"cat1.jpg",
    });

    gallery.innerHTML += create_card({
        title :"Cat 2",
        desc :"Cras ornare arcu dui vivamus arcu. Jemortis ras ornare arcu dui vivamus arcu.",
        img :"cat2.jpg",
    });

    gallery.innerHTML += create_card({
        title :"Cat 2",
        desc :"Cras ornare arcu dui vivamus arcu. Jemortis ras ornare arcu dui vivamus arcu.",
        img :"cat2.jpg",
    });



}
Cover_Info();

