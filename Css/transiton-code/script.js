// script.js
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.transition-link');
  
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetPage = this.getAttribute('href');
        document.body.classList.add('fade-out');
  
        
        setTimeout(function () {
          window.location.href = targetPage;
        }, 500); // Adjust the timeout based on the transition duration in CSS
      });
    });
  });
  