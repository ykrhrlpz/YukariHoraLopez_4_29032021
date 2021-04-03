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
const submitBtn = document.querySelector("btn-submit");
const modalBody = document.querySelector(".modal-body");
const modalContent = document.querySelector(".content");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

let container = document.createElement("div");
let thankyouMessage = document.createElement("p");
let closeButton = document.createElement("button");
thankyouMessage.textContent = "Thank you for submitting your registration details";
closeButton.textContent = "Close";
modalContent.removeChild(modalBody);
modalContent.appendChild(container);
container.appendChild(thankyouMessage);
modalContent.appendChild(closeButton);

console.log(modalBody);
container.classList.add("thankyou");
closeButton.classList.add("button", "btn-close");
container.classList.add("container");

// submitBtn.addEventListener("submit", () => {
//   modalBody.text
// })


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