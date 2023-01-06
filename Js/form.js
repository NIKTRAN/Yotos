
function create_field(title, id, type, placeholder, size) {
    return (
        `<div class="input-details">
            <span class="detials">${title}</span>
            <input id="${id}" type="${type}" placeholder="${placeholder}" required>
        </div>`
    );
}




function phoneformat(){
 
    const inital = document.getElementById('phoneNumber');
    const validatePhoneNumberRegex = /^\(?(\d{3})\)?[-]?(\d{3})?[-]?(\d{3,4})$/
    console.log(inital.value)
    const modfiedval = validatePhoneNumberRegex.test(inital.value)
    if(modfiedval == false){
        inital.style.borderColor = "red";
    }
    else{
        inital.style.borderColor = "black";
    }

    console.log("Work?");

}


function confirm(){
    document.getElementById("beforesubmit").style.display = "none";
    document.getElementById("confirmation").style.visibility = "visible";
    document.getElementById("emailConfirmation").innerHTML = document.getElementById("beforeEmail").value
    document.getElementById("nameConfirmation").innerHTML = document.getElementById("beforeName").value
}   





const userdetails = document.getElementById('userdetails');

//ASYNC FUNCTION
async function Cover_Info() {
    const response = await fetch("../txt/Form-fields.txt");

    const text = await response.text();

    const obj = JSON.parse(text);

    obj.forEach((details_obj) => {
        // console.log(`TITLE: ${details_obj.title}, DESC: ${details_obj.type}`);
        userdetails.innerHTML += create_field(details_obj.title, details_obj.id, details_obj.type, details_obj.placeholder, details_obj.size);
    });

    document.getElementById('phoneNumber').addEventListener('keyup', phoneformat);


}
Cover_Info();










// <div class="input-details">
// <span class="detials">Full Name</span>
// <input id="beforeName" type="text" placeholder="Enter Your Name" required>
// </div>


// <div class="input-details">
// <span class="detials">Email</span>
// <input id="beforeEmail" type="text" placeholder="Email" required>
// </div>
// <div class="input-details">
// <span class="detials">Phone Number</span>
// <input onkeydown = "phoneformat()" type="text" id ="phoneNumber" placeholder="Enter Your phone number" required>
// </div>


// <div class="input-details">
// <span class="detials">Choose a Day</span>
// <input type="date" placeholder="Enter A Date" required>
// </div>



