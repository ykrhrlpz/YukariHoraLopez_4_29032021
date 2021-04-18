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
const form = document.getElementById("signup-form");

const submitBtn = document.querySelector(".btn-submit");
const modalBody = document.querySelector(".modal-body");
const modalContent = document.querySelector(".content");
// const firstNameInput = document.getElementById("first");
// const lastNameInput = document.getElementById("last");
// const emailInput = document.getElementById("email");
// const birthDateInput = document.getElementById("birthdate");

const closeIcon = document.querySelector(".close");



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



//Function for Email Validation
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Function for Dropdown Menu Validation
const ValidateDropdownMenu = (input) =>
{
  const quantityInput = document.getElementById("quantity");
console.log(quantityInput);
  if (!input.value)
  {
    console.log("false");
    return false;
  }
console.log("true");
  return true;
}


//Function for Radio Button Validation 
// const validateRadioButton = () => 
// {
//   const locationRadioButtons = document.getElementsByName("location");
// // console.log(locationRadioButtons);
//   for (let i = 0; i < locationRadioButtons.length; i++)
//   {
//     if (locationRadioButtons[i].checked)
//     {
//       // console.log("true");
//       return true;
//     }
//     else
//     {
//       // console.log("false");
//       return false;
//     }
   
//   }
// }
const locationRadioButtons = document.getElementsByName("location");
//Function for Radio Button Validation 
const validateRadioSection = (RadioButtons) => 
{
  let CheckedRadioButtons = []
  for (let i = 0; i < CheckedRadioButtons.length; i++)
  {
    if (CheckedRadioButtons[i].checked)
    {
      CheckedRadioButtons.push(CheckedRadioButtons[i])
    }
  }
  console.log(CheckedRadioButtons);
  if (CheckedRadioButtons.length >= 1) return true
  else return false
}
validateRadioSection(locationRadioButtons);

//Function for Checkbox Validation 
// const validateCheckbox = () =>
// {
//   const checkboxOne = document.getElementById("checkbox1");
//   if (checkboxOne.checked)
//   {
//     return true;
//   }
  
//   else
//   {
//     return false;
//   }
// }

// Function to show Thank you messagge after the form is submitted successfully.
const showSubmitSuccessMsg = () =>
{
  thankyouMessage.textContent = "Thank you for submitting your registration details";
  closeButton.textContent = "Close";
  modalContent.removeChild(modalBody);
  modalContent.appendChild(container);
  container.appendChild(thankyouMessage);
  modalContent.appendChild(closeButton);
  
  container.classList.add("thankyou");
  closeButton.classList.add("button", "btn-close");
  container.classList.add("container");
}

function validate()
{
  validateEmail(email);
  validateRadioSection(locationRadioButtons);
  validateCheckbox();


}

form.addEventListener("submit", event => 
{
  event.preventDefault();
  validate();
  // showSubmitSuccessMsg();
})



// form.addEventListener("submit", event => 
// {
//   const inputs = document.querySelectorAll(".formData");
// console.log(inputs);
//   event.preventDefault();
//   inputs.forEach((input) => 
//   {
//     switch (input.type) 
//     {
//       case "text":
//         if (!input.value || input.value.length < 2)
//         {
//           input.parentElement.classList.remove("error")
//         }
//         else
//         {
//           input.parentElement.classList.add("error")
//         }
//         break;
//       case "email":
//           if (validateEmail(input.value))
//           {
//             input.parentElement.classList.remove("error")
//           }
//           else
//           {
//             input.parentElement.classList.add("error")
//           }
//         break;
//       case "number":
//           if (ValidateDropdownMenu(input.value))
//           {
//             input.parentElement.classList.remove("error")
//           }
//           else
//           {
//             input.parentElement.classList.add("error")
//           }
//         break;
//       case "radio":
//         if (validateRadioSection(locationRadioButtons))
//         {
//           input.parentElement.classList.remove("error")
//         }
//         else
//         {
//           input.parentElement.classList.add("error")
//         }
//         break;
//       case "checkbox":
      
//         break;
//       default:
//         break;
//     }
//     // console.log(`${input.getAttribute("name")}: ${input.value}`)

//   })
// })

