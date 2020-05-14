// Variables
const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");

// Validation 
// const username = form.username.value;
// const firstnamePattern = /^[a-zA-Z]{1,}$/;
// const lastnamePattern = /^[a-zA-Z]{1,}$/;
// const password = form.password.value;
const passwordPattern = /^[a-z A-Z 0-9]{6,12}$/;
const emailPattern = /^[a-z A-Z @ . 0-9]{1,}$/;
const agePattern = /^[a-z A-Z 0-9]{1,3}$/;

// Check passwords match
// function checkPasswordsMatch(password1, password2,){
//     password1 = password1.value;
//     password2 = password2.value;

//     if (password1 == " "){
//         alert("Please enter a Password")
//     } else if (password2 == " "){
//         alert("Please confirm your password");
//     } else if (password1 != password2){
//         alert("Both Passwords did not match. Please try again");
//         return false
//     } 
// }



form.addEventListener("submit", function(e){
    e.preventDefault();

    console.log("first name: ",firstName.value);
    const fnametext = document.querySelector("#form > div:nth-child(5) > div");

    console.log("last name: ",lastName.value);
    const lnametext = document.querySelector("#form > div:nth-child(6) > div");

    console.log("email: ",email.value)
    const mailtext = document.querySelector("#form > div:nth-child(7) > div");

    console.log("age: ",age.value)
    const agenotext = document.querySelector("#form > div:nth-child(9) > div");

    console.log("First password: ",password1);
    const pass1 = document.querySelector("#form > div:nth-child(11) > div");

    console.log("Second Password: ",password2);
    const pass2 = document.querySelector("#form > div:nth-child(12) > div");

    if(firstName.value ==  "" ){
       fnametext.innerText = "Please insert your first name";
    };
    if (lastName.value == ""){
        lnametext.innerText = "Please insert your last name";
    }
    // if(lastName.value == ""){
    //    lname.innerText = "Please insert your first name";
    // }

    // if(email.value || age.value == ""){
    //     mail.innerText = "Please insert email";
    //     ageno.innerText = "Please insert your age";
    // }


    if(email.value == ""){
        mailtext.innerText = "Please insert email";
    }; 

     if (age.value == "") {
        agenotext.innerText = "Please insert your age";
    };

    // if(age.value == ""){
    //     ageno.innerText = "Please insert your age"
    // }

    // console.log(pass1.value);

    // if(pass1.value || pass2.value === ""){
    //     pass1.innerText = "Please Insert Password"
    //     pass2.innerText = "Please Insert Password"
        
    // } 
    
    document.getElementsByName("password").forEach(function(pass){
       if(password1.value == ""){
        pass1.innerText = "Please insert a password";
       }
        if( password2.value == ""){
        pass2.innerText = "Please insert a password";
       };
});



const doNotMatch = document.querySelector("#form > div:nth-child(11) > div.match");

// document.querySelector(".match")
//     if(password1.value != password2.value){
//         doNotMatch.innerText = "Password Do Not Match";
//     }
// }

document.querySelector(".match");{
    if(password1.value != password2.value){
        doNotMatch.innerText = "Password Do Not Match";
    }
}


    // const member =  document.querySelector('input[name="membership"]:checked');

    // const member1 = document.querySelector("#form > div:nth-child(10) > div");

    // if(member == null){
    //     member1.innerText = "Please click a Membership Option";
    // }

    document.getElementsByName("membership").forEach(function(radio) {
        if(radio.checked){
console.log(radio.value);
        } else {
document.querySelector("#form > div:nth-child(10) > div").innerText = "Please select an option";
        }
});

})

// form.addEventListener("onClick", function(e){
//     e.preventDefault();

//     console.log(member.value)

//     const member =  document.querySelector('input[name="membership"]:checked');

//     const member1 = document.querySelector("#form > div:nth-child(10) > div");

//     if(member == null){
//         member1.innerText = "Please click a Membership Option";
//     }
    
// })

