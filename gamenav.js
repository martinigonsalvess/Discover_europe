// const popUp = document.querySelector(".btn").addEventListener("click", message);

// function message() {
//     alert (`Thank you for your message !`);
// }

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');


    }); 
    
}

navSlide();