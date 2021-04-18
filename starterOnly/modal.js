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
let formDataLocationGroup = document.getElementById("formData-location")
let formDataLocation = [...document.getElementById("formData-location").querySelectorAll("input")]
let formDataTerms = document.getElementById("formData-terms")
let formDataSubscription = document.getElementById("formData-subscription")

let formSubmitted = false
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
////////// set formSubmitted to false so everytime modal is opened, inputs are cleared.
const launchModal = () =>
{
    formSubmitted = false
    modalbg.style.display = "block";
}


////////// Function to clear form 
const clearForm = () =>
{

    ////////// clear the all the input value
    formDataFirstName.value = ""
    formDataLastName.value = ""
    formDataEmail.value = ""
    formDataBirthdate.value = ""
    formDataQuantity.value = ""
    formDataLocation.forEach(input => input.checked = false)
    formDataTerms.checked = true
    formDataSubscription.checked = false

    ////////// clear the error message
    handleErrorMessage(formDataFirstName.parentElement, true)
    handleErrorMessage(formDataLastName.parentElement, true)
    handleErrorMessage(formDataEmail.parentElement, true)
    handleErrorMessage(formDataBirthdate.parentElement, true)
    handleErrorMessage(formDataQuantity.parentElement, true)
    handleErrorMessage(formDataLocationGroup, true)
    handleErrorMessage(formDataTerms.parentElement, true)
    handleErrorMessage(formDataSubscription.parentElement, true)
}

const closeModal = () =>
{
    modalbg.style.display = "none";

    ////////// If submitted removes the thank you message elements
    if(formSubmitted)
    {
        modalContent.appendChild(modalBody);
        modalContent.removeChild(container);
        container.removeChild(thankyouMessage);
        modalContent.removeChild(closeButton);
    }

    clearForm()
}


////////// Function for Text inputs
const validateTextInput = (text, minLength) =>
{
    if (text && text.length >= minLength) return true
    else return false
}

////////// Function for Number inputs
const validateNumberInput = (number, minNumber) =>
{
    if (number && number >= minNumber) return true
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

////////// Function for handling error message
const handleErrorMessage = (element, condition) => 
{
    if (condition) element.classList.remove("error") 
    else element.classList.add("error")
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

    ////////// formSubmitted is true becasue it is submitted
    formSubmitted = true
}

const validateForm = () =>
{
    let validation = []

    ////////// FIRST NAME
    // Defining validation and adding to validation array.
    let formDataFirstNameValidation = validateTextInput(formDataFirstName.value, 2)
    validation.push(formDataFirstNameValidation)
    // Handling error message based on validation result.
    if (formDataFirstNameValidation) handleErrorMessage(formDataFirstName.parentElement, true)
    else handleErrorMessage(formDataFirstName.parentElement, false)

    ////////// LAST NAME
    // Defining validation and adding to validation array.
    let formDataLastNameValidation = validateTextInput(formDataLastName.value, 2)
    validation.push(formDataLastNameValidation)
    // Handling error message based on validation result.
    if (formDataLastNameValidation) handleErrorMessage(formDataLastName.parentElement, true)
    else handleErrorMessage(formDataLastName.parentElement, false)

    ////////// EMAIL
    // Defining validation and adding to validation array.
    let formDataEmailValidation = validateEmailInput(formDataEmail.value)
    validation.push(formDataEmailValidation)
    // Handling error message based on validation result.
    if (formDataEmailValidation) handleErrorMessage(formDataEmail.parentElement, true)
    else handleErrorMessage(formDataEmail.parentElement, false)

    ////////// BIRTHDATE
    // Defining validation and adding to validation array.
    let formDataBirthdateValidation = validateTextInput(formDataBirthdate.value, 1)
    validation.push(formDataBirthdateValidation)
    // Handling error message based on validation result.
    if (formDataBirthdateValidation) handleErrorMessage(formDataBirthdate.parentElement, true)
    else handleErrorMessage(formDataBirthdate.parentElement, false)

    ////////// QUANTITY
    // Defining validation and adding to validation array.
    let formDataQuantityValidation = validateNumberInput(formDataQuantity.value, 0)
    validation.push(formDataQuantityValidation)
    // Handling error message based on validation result.
    if (formDataQuantityValidation) handleErrorMessage(formDataQuantity.parentElement, true)
    else handleErrorMessage(formDataQuantity.parentElement, false)

    ////////// LOCATION
    // Defining validation and adding to validation array.
    let formDataLocationValidation = validateRadioInputSection(formDataLocation)
    validation.push(formDataLocationValidation)
    // Handling error message based on validation result.
    if (formDataLocationValidation) handleErrorMessage(formDataLocationGroup, true)
    else handleErrorMessage(formDataLocationGroup, false)

    ////////// TERMS
    // Defining validation and adding to validation array.
    let formDataTermsValidation = validateCheckbox(formDataTerms)
    validation.push(formDataTermsValidation)
    // Handling error message based on validation result.
    if (formDataTermsValidation) handleErrorMessage(formDataTerms.parentElement, true)
    else handleErrorMessage(formDataTerms.parentElement, false)

    ////////// TOTAL VALIDATION
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

    ////////// if validateForm is true, showSubmitSuccessMsg will run.
    if(validateForm()) showSubmitSuccessMsg()
})
////////////////////////////////////////////////////////////