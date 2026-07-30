
// Select all slides and dots
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

// Show Slide
function showSlide(index){

    // Remove active class
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Add active class
    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

// Next Slide
function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

// Previous Slide
function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

// Button Events
nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", prevSlide);

// Dot Click
dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide=index;

        showSlide(currentSlide);

    });

});

// Auto Slide Every 3 Seconds
setInterval(nextSlide,3000);
//================ CONTACT FORM VALIDATION ================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let preference = document.getElementById("preference").value;
    let message = document.getElementById("message").value.trim();

    // Name Validation
    if(name === ""){
        alert("Please enter your name.");
        return;
    }

    // Email Validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        alert("Please enter a valid email address.");
        return;
    }

    // Phone Validation
    let phonePattern = /^[0-9]{10}$/;

    if(!phone.match(phonePattern)){
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    // Preference Validation
    if(preference === ""){
        alert("Please select a preference.");
        return;
    }

    // Message Validation
    if(message.length < 10){
        alert("Message should contain at least 10 characters.");
        return;
    }

    alert("🎉 Thank You! Your message has been submitted successfully.");

    form.reset();

});