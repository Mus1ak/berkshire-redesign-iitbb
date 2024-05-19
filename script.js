document.querySelector('.navigate-about').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.querySelector('.section-about').scrollIntoView({
        behavior: 'smooth' 
    });
});


window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav-sub');
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

const button = document.getElementById('subs-button');
button.addEventListener('click', ()=>{
    window.location.href = 'subsidaries.html';
})
document.getElementById('download-button').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'downloadables/listofcompanies.pdf';
    link.download = 'listofcompanies.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


window.addEventListener('load', () => {
    
    gsap.to('.navbar', { duration: 1, y: 0 });

    
    gsap.to('.content', { duration: 1, opacity: 1, delay: 1 });
});


