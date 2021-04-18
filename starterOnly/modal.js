////////////////////////////////////////////////////////////
//  VARIABLES
////////////////////////////////////////////////////////////

////////// DOM Elements
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let formData = document.querySelectorAll(".formData");
let form = document.getElementById("signup-form");
let submitBtn = document.querySelector(".btn-submit");
let modalBody = document.querySelector(".modal-body");
let modalContent = document.querySelector(".content");
let closeIcon = document.querySelector(".close");

////////// Thank you messagge modal
let container = document.createElement("div");
let thankyouMessage = document.createElement("p");
let closeButton = document.createElement("button");

let locationRadioButtons = document.getElementsByName("location");

// The spread operator turns form data into an array instead of a NodeList type
// let validationDependencies = [...formData].map(section => [...section.querySelectorAll("input")])

////////// Form inputs
let formDataFirstName = document.getElementById("formData-first")
let formDataLastName = document.getElementById("formData-last")
let formDataEmail = document.getElementById("formData-email")
let formDataBirthdate = document.getElementById("formData-birthdate")
let formDataQuantity = document.getElementById("formData-quantity")
let formDataLocation = [...document.getElementById("formData-location").querySelectorAll("input")]
let formDataTerms = document.getElementById("formData-terms")
let formDataSubscription = document.getElementById("formData-subscription")

////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//  FUNCTIONS
////////////////////////////////////////////////////////////

const editNav = () => 
{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") 
    {
        x.className += " responsive";
    } 
    else 
    {
        x.className = "topnav";
    }
}

////////// launch modal form
const launchModal = () =>
{
    modalbg.style.display = "block";
}


////////// Function to close a modal
const closeModal = () =>
{
    modalbg.style.display = "none";
}

////////// Function for Text inputs
const validateTextInput = (text, minLength) =>
{
    if (!text) return false
    if (text.length >= minLength) return true
    else return false
}

////////// Function for Number inputs
const validateNumberInput = (number, minNumber) =>
{
    if (!number) return false
    if (number >= minNumber) return true
    else return false
}

////////// Function for Email Validation
const validateEmailInput = (email) =>
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

////////// Function for Radio Button Validation 
const validateRadioInputSection = (radioSection) => 
{
    if (radioSection.filter(checkbox => checkbox.checked === true).length >= 1) return true
    else return false
}

////////// Function for Checkbox Button Validation 
const validateCheckbox = (checkbox) => 
{
    if (checkbox.checked) return true
    else return false
}

////////// Function to show Thank you messagge after the form is submitted successfully.
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

const validateForm = () =>
{
    let validation = []
    validation.push(validateTextInput(formDataFirstName.value, 2))
    validation.push(validateTextInput(formDataLastName.value, 2))
    validation.push(validateEmailInput(formDataEmail.value))
    validation.push(validateTextInput(formDataBirthdate.value, 1))
    validation.push(validateNumberInput(formDataQuantity.value, 0))
    validation.push(validateRadioInputSection(formDataLocation))
    validation.push(validateCheckbox(formDataTerms))

    if (validation.filter(input => input === false).length >= 1) return false
    else return true
}
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
//  PROCESS
////////////////////////////////////////////////////////////

////////// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// can i make a loop or something not to repeat?
////////// Calling close modal function
closeButton.addEventListener("click", () => 
{
    closeModal();
});

closeIcon.addEventListener("click", () => 
{
    closeModal();
});

form.addEventListener("submit", event => 
{
  event.preventDefault();
  console.log(validateForm())
  // showSubmitSuccessMsg();
})
////////////////////////////////////////////////////////////