// Animación fade-in para secciones
document.addEventListener('DOMContentLoaded', () => {
    const fadeEls = document.querySelectorAll('.fade-in');
    const showFade = () => {
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', showFade);
    showFade();
});

// Menú burguer
const burgerBtn = document.getElementById('menu-burger');
const navMenu = document.querySelector('nav ul');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    burgerBtn.classList.toggle('active');
});

// Cerrar el menú burguer al hacer click fuera o en un enlace
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
    burgerBtn.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && e.target !== burgerBtn) {
        navMenu.classList.remove('open');
        burgerBtn.classList.remove('active');
    }
});

// EmailJS config
document.addEventListener("DOMContentLoaded", function () {
  
  emailjs.init("Q3XsOAiEKNt06MIcu"); //--> Public Key

  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_c6nohop", "template_3p1z35c", form)
      .then(() => {
        msg.textContent = "Mensaje enviado con éxito ✅";
        msg.style.color = "lightgreen";
        form.reset();
      })
      .catch((error) => {
        msg.textContent = "Ocurrió un error al enviar el mensaje 😢";
        msg.style.color = "tomato";
        console.error("EmailJS error:", error);
      });
  });
});


// Animación para logo al hacer scroll
window.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo img');
    if(window.scrollY > 80){
        logo.style.transform = 'scale(1.12) rotate(-8deg)';
    } else {
        logo.style.transform = 'scale(1) rotate(0deg)';
    }
});

