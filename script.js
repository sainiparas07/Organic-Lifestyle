// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ================= GALLERY SLIDER =================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    if(dots[index]){
        dots[index].classList.add("active");
    }
}

// Dot Click

dots.forEach((dot,index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;
        showSlide(currentSlide);

    });

});

// Auto Slide

if(slides.length > 0){

    setInterval(() => {

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 4000);

}

// ================= PREV / NEXT BUTTONS =================

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if(prevBtn){

    prevBtn.addEventListener("click", () => {

        currentSlide--;

        if(currentSlide < 0){
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);

    });

}

if(nextBtn){

    nextBtn.addEventListener("click", () => {

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);

    });

}

// ================= SEARCH FUNCTION =================

const searchInput = document.querySelector(".search-container input");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        const searchValue = this.value.toLowerCase();

        const cards = document.querySelectorAll(
            ".service-card, .fertilizer-card, .blog-card, .season-card"
        );

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if(text.includes(searchValue)){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

}

// ================= ACTIVE NAV LINK =================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ================= CONTACT FORM =================

const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert(
            "Thank You! Your message has been submitted successfully."
        );

        form.reset();

    });

}

// ================= SCROLL TO TOP =================

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        document.body.classList.add("scrolled");

    }else{

        document.body.classList.remove("scrolled");

    }

});
// ================= AUTO DATE =================

const blogDates = document.querySelectorAll('.blog-date');

const today = new Date();

const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

const formattedDate = today.toLocaleDateString('en-US', options);

blogDates.forEach(date => {
    date.innerHTML = "📅 " + formattedDate;
});

console.log("Organic Lifestyle Website Loaded Successfully 🌿");
