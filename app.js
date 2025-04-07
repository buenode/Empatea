


// Función para alternar el menú móvil
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}




document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); // Agrega la clase 'fade-in' cuando el elemento entra en vista
          observer.unobserve(entry.target); // Deja de observar el elemento después de la animación
        }
      });
    }, { threshold: 0.5 }); // El 50% del elemento debe ser visible para que se active
  
    // Selecciona todas las tarjetas que quieres animar
    const elementsToAnimate = document.querySelectorAll('.proyecto-card');
    elementsToAnimate.forEach(element => {
      observer.observe(element); // Empieza a observar cada tarjeta
    });
  });




  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      item.classList.toggle("active");
    });
  });




  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.ayuda-card');
  
    const observerOptions = {
      root: null, // Observar en el viewport
      rootMargin: '0px',
      threshold: 0.3 // Activar cuando el 30% de la tarjeta esté visible
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Deja de observar una vez que la animación se ha activado
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });

