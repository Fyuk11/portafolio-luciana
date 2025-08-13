
  document.addEventListener("DOMContentLoaded", () => {
    // === 1. Menú hamburguesa ===
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });

      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
        });
      });
    }

    // === 2. Carrusel automático ===
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    if (slides.length > 0) {
      showSlide(currentSlide);
      setInterval(nextSlide, 4000); // cambia cada 4 segundos
    }

    
// Volver arriba al hacer clic
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
  });

    // Mostrar botón cuando se scrollea hacia abajo
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("visible");
        } else {
            scrollToTopBtn.classList.remove("visible");
        }
    });

    scrollToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

  window.history.scrollRestoration = "manual"; // Desactiva que el navegador recuerde el scroll
  window.addEventListener("load", function() {
    window.scrollTo(0, 0);
  });


document.addEventListener("DOMContentLoaded", function() {
  
  // Inicializar EmailJS con tu Public Key
  emailjs.init("r0xK3YifZxW6x3M8D");

  // Obtener el formulario
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_ptdr60j", "template_sdt0xtd", form)
      .then(function() {
        alert("Mensaje enviado correctamente ✅");
        form.reset();
      }, function(error) {
        alert("Hubo un error al enviar el mensaje ❌");
        console.error("Error:", error);
      });
  });

});

