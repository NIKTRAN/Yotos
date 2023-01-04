
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

function create_card(title, desc, img) {
    return (
        `<div id ="cover_item" class="scroll-items-size"> 

            <img class="scroll-img" src="Images/${img}" alt="${img}">  

            <div class="scroll-texts text-margin">
                <p class="text title">${title}</p>
                <p class="text" >${desc}</p>
            </div>

        </div>`
    );
}





//ASYNC FUNCTION
async function Cover_Info() {
    const response = await fetch("../txt/Cover-Texts.txt");

    const text = await response.text();

    const obj = JSON.parse(text);

    obj.forEach((cover_obj) => {
        console.log(`TITLE: ${cover_obj.title}, DESC: ${cover_obj.description}`);
        gallery.innerHTML += create_card(cover_obj.title, cover_obj.description, cover_obj.link);
    });
}
Cover_Info();




//<div id = "gallery" class="scroll-size-function">

    // <div id ="cover_item" class="scroll-items-size"> 
    // <img class="scroll-img"src="\Images\cat-loaf.jpg" alt="cat1">  
    // <div class="scroll-texts text-margin">
    //     <p class="text title">Cat Pictures</p>
    //     <p class="text" >Cras ornare arcu dui vivamus arcu. Jemortis ras ornare arcu dui vivamus arcu. </p>
    // </div>
    // </div>

// const gallery = document.getElementById('gallery');


// const cover_items = document.getElementById('cover_items');

// const title = document.getElementById('title');
// const description = document.getElementById('description');


// const slide_cards_Indexes = [1,2];


// var test_text = 'Cras ornare arcu dui vivamus arcu. Jemortis ras ornare arcu dui vivamus arcu.';

// var slide_cards_titles = [];
// var slide_cards_text = [];






//     // let response = await fetch('../txt/texts.txt');
// console.log(slide_cards_titles);
// console.log(slide_cards_titles[0]); // THIS DOESN'T WORK?



// // for(var i=0; i< slide_cards_titles.length ;i++) {
// //     console.log(slide_cards_titles[i]);
// //     console.log(slide_cards_text[i]);
// // }


// // var i = 0;
// // slide_cards_Indexes.forEach( (i) =>;
// for(var i=1;i<=slide_cards_Indexes.length;i++)
// {

//     var fetch = document.getElementById('gallery').innerHTML;

//     gallery.innerHTML =
//     `<div id ="cover_item" class="scroll-items-size"> 

//         <img class="scroll-img" alt="cover-img${i}">  

//         <div class="scroll-texts text-margin">
//             <p class="text title"  alt = "cover-title${i}" ></p>
//             <p class="text" alt="text-${i}" >Cras ornare arcu dui vivamus arcu. Jemortis ras ornare arcu dui vivamus arcu. </p>
//         </div>

//     </div>`     + fetch;

//     var cover_image = document.querySelector(`img[alt = "cover-img${i}"]`);
//     cover_image.src= `../Images/cover-img-${i}.jpg`;

//     var cover_title = document.querySelector(`p[alt = "cover-title${i}"]`);
    
//         // console.log(slide_cards_titles[i - 1]);
    
//     cover_title.innerHTML= slide_cards_titles[i - 1];


// }





// // var bCheckEnabled = true;
// // var bFinishCheck = false;

// // var img;
// // var imgArray = new Array();
// // var i = 0;


// // var myInterval = setInterval(loadImage, 1);


