document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("formResponse");

if (!form) return;

form.addEventListener("submit", function(e){

e.preventDefault();

const name = form.name.value;
const email = form.email.value;
const message = form.message.value;

if(name === "" || email === "" || message === ""){

responseMessage.textContent = "Please fill all fields";
responseMessage.style.color = "red";
return;

}

responseMessage.textContent = "Thank you! Your message has been received.";
responseMessage.style.color = "#00eaff";

form.reset();

});

});
