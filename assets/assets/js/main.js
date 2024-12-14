/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: [
      "Frontend Developer",
      "Backend Developer",
      "Web Designer",
      "Software Engineer",
      "Problem Solver",
      "Tech Enthusiast",
      "JavaScript Ninja",
      "Creative Coder",
      "Team Player",
      "Code Optimizer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)



  // Hire Me Button functionality
  document.getElementById("hireMeBtn").addEventListener("click", function() {
    window.location.href = 'mailto:k_mokebe@icloud.com'; // Replace with your email
});

// Download CV Button functionality
document.getElementById("downloadCVBtn").addEventListener("click", function() {
    // Replace 'your-cv.pdf' with the actual path to your CV file
    const link = document.createElement('a');
    link.href = 'assets/assets/images/construction.pdf'; // Path to your CV file
    link.download = "Kamohelo mokebe's CV"; // Optional: Specify the name of the downloaded file
    link.click();
});




  // Attach event listener to the Send button
  document.getElementById("sendBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Create a new FormData object to send the data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Send the form datSa using Fetch API
    fetch('sendEmail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Display success message or error
    })
    .catch(error => {
        console.error('Error:', error);
    });
});