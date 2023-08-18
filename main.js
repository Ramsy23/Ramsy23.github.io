                //typin' effect //
const text = document.querySelector(".sec-text");

const textLoad = () => {
 setTimeout(() => {
     text.textContent = "Freelancer" ;
 },0);
 setTimeout(() => {
     text.textContent = "Web Devloper";
 },4000);
 
}
textLoad();
setInterval(textLoad,8000);


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a.about");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = link.getAttribute("#");
            const targetSection = document.querySelector("#about");

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(" nav a.home");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = link.getAttribute("#");
            const targetSection = document.querySelector("#home");

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a.about");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = link.getAttribute("#");
            const targetSection = document.querySelector("#about");

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(" nav a.service");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = link.getAttribute("#");
            const targetSection = document.querySelector("#service");

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("button");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = link.getAttribute("#");
            const targetSection = document.querySelector("#contact");

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

const bar=document.querySelector(".bar");
function mobile(){
    const navBlock=document.querySelector(".nav-brock");
    navBlock.classList.toggle("active")
}
bar.addEventListener("click",mobile);