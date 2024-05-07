



console.log('Hello from your JavaScript file!');
/* toggle icon navbar*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
 };

 console.log('Hello from your JavaScript file!');

/* selecting the section on scrolling */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all navigation links
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });

            // Add 'active' class to the corresponding navigation link
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            if (id === 'langua') {
                sec.classList.add('in-viewport');
            } else {
                sec.classList.remove('in-viewport');
            }
        
        }
    }); 
    /* sticky navbar*/

let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

/*remove toggle button and nav bar*/

 menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');

};
/*scroll animation*/
ScrollReveal({
  reset: true ,
  distance:'80px' ,
  duration :2000,
  delay:200
});

ScrollReveal().reveal('.home-content , .heading ,.egsec h1, .skill .container h1',{origin:'top'});
ScrollReveal().reveal('.home-img , .skill .container .skill-list, .project-box,.contact form ,.programm2',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-image ',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content ',{origin:'right'});

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';


}
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the backspace key (key code 8) or the 'Esc' key (key code 27)
    if (event.key === 'Backspace' || event.key === 'Escape') {
        closeModal();
    }
});

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}