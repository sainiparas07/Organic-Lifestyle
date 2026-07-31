// Select all slides and dots
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

// Show Slide
function showSlide(index){
    if(slides.length === 0) return;
    
    // Remove active class
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    // Add active class
    if(slides[index]) slides[index].classList.add("active");
    if(dots[index]) dots[index].classList.add("active");
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

// Button Events (Check if buttons exist before adding event listener)
if(nextBtn){
    nextBtn.addEventListener("click", nextSlide);
}

if(prevBtn){
    prevBtn.addEventListener("click", prevSlide);
}

// Dot Click
dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto Slide Every 3 Seconds
if(slides.length > 0){
    setInterval(nextSlide, 3000);
}

//================ MOBILE MENU TOGGLE =================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

//================ CONTACT FORM VALIDATION =================

const form = document.getElementById("contactForm");

if(form){
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
}
