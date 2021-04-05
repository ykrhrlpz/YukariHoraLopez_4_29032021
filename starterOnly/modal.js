function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("#signup-form");
const submitBtn = document.querySelector(".btn-submit");
const modalBody = document.querySelector(".modal-body");
const modalContent = document.querySelector(".content");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const closeIcon = document.querySelector(".close");
const locationRadioButtons = document.getElementsByName("location");
const checkboxOne = document.getElementById("checkbox1");
const checkboxTwo = document.getElementById("checkbox2");

// Thank you messagge modal
let container = document.createElement("div");
let thankyouMessage = document.createElement("p");
let closeButton = document.createElement("button");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Function to close a modal
const closeModal = () =>
{
  modalbg.style.display = "none";
}

// can i make a loop or something not to repeat?
//Calling close modal function
closeButton.addEventListener("click", () => {
  closeModal();
});

closeIcon.addEventListener("click", () => {
  closeModal();
});

// Thank you messagge modal
// thankyouMessage.textContent = "Thank you for submitting your registration details";
// closeButton.textContent = "Close";
// modalContent.removeChild(modalBody);
// modalContent.appendChild(container);
// container.appendChild(thankyouMessage);
// modalContent.appendChild(closeButton);

// console.log(modalBody);
// container.classList.add("thankyou");
// closeButton.classList.add("button", "btn-close");
// container.classList.add("container");

//First Name Input Validation

const validateFirstNameInputs = () => 
{
  
  if (!firstNameInput.value || firstNameInput.value.length > 2)
  {
    console.log("false");
    
    firstNameInput.style.backgroundColor = "pink";
    return false;
  }
  else if (firstNameInput.value.length >= 2 )
  {
  console.log("true");
    return true;
  }
};

// Form Validation for first name
firstNameInput.addEventListener("input", (event) => 
{
  if (!event.target.value || event.target.value.length < 2)
  {
    console.log("error");
    firstNameInput.style.backgroundColor = "pink";

    return false;
  }
  else if (event.target.value.length >= 2 )
  {
    firstNameInput.style.backgroundColor = "green";
  
    return true;
  }
});

// Form Validation for last name
lastNameInput.addEventListener("input", (event) => 
{
  if (!event.target.value || event.target.value.length < 2)
  {
    console.log("error");
    lastNameInput.style.backgroundColor = "pink";

    return false;
  }
  else if (event.target.value.length >= 2 )
  {
    lastNameInput.style.backgroundColor = "green";
  
    return true;
  }
});

// Form Validation for email adress

// const validateEmail = (email)  => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email.toLowerCase());
// }
// emailInput.addEventListener("input", (event) => 
// {
//   if (!event.target.value || event.target.value.length < 2)
//   {
//     console.log("error");
//     emailInput.style.backgroundColor = "pink";

//     return false;
//   }
//   else if (event.target.value.length >= 2 )
//   {
//     emailInput.style.backgroundColor = "green";
  
//     return true;
//   }
// });



// firstNameInput.addEventListener("input", (event) => 
// {
//     if (event.target.value.length > 2)
//     {
//       submitBtn.removeAttribute("disabled");
//       document.getElementById("error-msg-first-name").classList.add("hidden");
//       // document.getElementById("error-msg-first-name").classList.remove("hidden");
//     }
//     else
//     {
//       document.getElementById("error-msg-first-name").classList.remove("hidden");
//       // document.getElementById("error-msg-first-name").classList.add("hidden");
//       submitBtn.setAttribute("disabled", "true");
//     }
// });

// //Last Name Input Validation

// lastNameInput.addEventListener("input", (event) => 
// {
//     if (event.target.value)
//     {
//       if (event.target.value.length >= 2 )
//       {
//         submitBtn.removeAttribute("disabled");
//         document.getElementById("error-msg-first-name").classList.add("hidden");
//       }
//       else
//       {
//         submitBtn.setAttribute("disabled", "true");
//         document.getElementById("error-msg-first-name").classList.add("hidden");
//       }
//     }
// });

// Element is the element to be checked
// expectedLenght is the length of the string
// Strict is a boolean, if strict is true then the length 
// has to be stricly expectedLenght and not above.
// const lengthValidation = (element, expectedLength, strict=false) => 
// {
//   strict 
//   ?
//     element.length == expectedLength ?  true : false
//   :
//     element.length >= expectedLength ?  true : false
// }

// const validate = () => 
// {
//   if (!firstNameInput.value || firstNameInput.value.length < 2 )
//   {
//     alert("error")
//     return false;
//   }
//   else
//   {
//     return true;
//   }
// }

// const FormValidation = () => 
// {
//   validateFirstNameInput = lengthValidation(firstNameInput)
//   validateLastNameInput = lengthValidation(lastNameInput)
  
//   emailInput
//   birthDateInput
//   quantityInput
//   locationRadioButtons
//   checkboxOne
//   checkboxTwo

//   //if all the validation went to true then return true
// }




//Function which shows the warning message when user enters invalid inputs.
// const showErrorMessage = (userInput) => 
// {
//   switch (first)
//   {
//     document.getElementById("error-msg-first-name").classList.remove("hidden");
//   }
//   if (last)
//   {
//     document.getElementById("error-msg-last-name").classList.remove("hidden");
//   }
//   if (email)
//   {
//     document.getElementById("error-msg-email").classList.remove("hidden");
//   }
//   if (birthdate)
//   {
//     document.getElementById("error-msg-birthDate").classList.remove("hidden");
//   }
//   if (location)
//   {
//     document.getElementById("error-msg-location").classList.remove("hidden");
//   }
//   if (checkbox)
//   {
//     document.getElementById("error-msg-checkbox").classList.remove("hidden");
//   }
  
    
// }




//later use promise to structure the code, form validation -> show message ?





//Radio button in Modal
//Radio Button Event Listener

// for (let i = 0; i < locationRadioButtons.length; i++)
// {
//   locationRadioButtons[i].addEventListener("change", (event) => {

//   });
// }

//Checkbox in Modal
//Checkbox Event Listener
// document.getElementById("checkbox1").addEventListener("change", (event) => {
//   if (event.target.checked)
//   {
//     //write function
//   }
// })


//Form Submit Button Event Listener
form.addEventListener("submit", (event) => 
{
  event.preventDefault();
  submitBtn.removeAttribute("disabled");
  // validateInputs();
  //Insert the Thank you message when User submit successfully.

  // thankyouMessage.textContent = "Thank you for submitting your registration details";
  // closeButton.textContent = "Close";
  // modalContent.removeChild(modalBody);
  // modalContent.appendChild(container);
  // container.appendChild(thankyouMessage);
  // modalContent.appendChild(closeButton);
  // container.classList.add("thankyou");
  // closeButton.classList.add("button", "btn-close");
  // container.classList.add("container");
  // Empty fields once the values are extracted.
  // form.reset();
});


//Referrence
// FormValidation() {}
// SwitchModalContent() {}

// SubmitAcion()
// {
//   FormValidation()
//   .then(() => SwitchModalContent())
//   .then(() => setTimeout(() => CloseModal(), 2000))
//   .catch(() => "Sorry, something went wrong.")
// }