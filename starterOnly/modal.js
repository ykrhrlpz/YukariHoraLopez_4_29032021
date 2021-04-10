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

const inputs = document.querySelectorAll("form input");

console.log(inputs);

form.addEventListener("submit", event => 
{
  event.preventDefault();
  inputs.forEach((input) => 
  {
    console.log(`${input.getAttribute("name")}: ${input.value}`)
    console.log(`${input.getAttribute("name")}: ${input.value.length}`)
    if (!input.value || input.value.length < 2)
    {
      input.parentElement.classList.add("error")
    }
    // else if (input.value.length < 2)
    // {
    //   console.log("error");
    //   console.log(input.value.length);
    //   input.parentElement.classList.add("error")
    // }
    else
    {
      input.parentElement.classList.remove("error")
      if (input.type == "email")
      {
        if (validateEmail(input.value))
        {
          input.parentElement.classList.remove("error")
        }
        else
        {
          input.parentElement.classList.add("error")
        }
      }
    }
  })
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// const validate = () => console.log("VALIDATED")