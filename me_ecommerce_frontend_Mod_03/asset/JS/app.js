window.addEventListener('scroll', function() {
    if (window.scrollY > 200) { 
      document.body.classList.add('show-btn');
    } else {
      document.body.classList.remove('show-btn');
    }
  });
  
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const mensaje = document.getElementById('mensaje');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === '' || password === '') {
        mensaje.textContent = 'Por favor, complete todos los campos.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = `¡Bienvenido, ${email}!Contraseña: ${password}`;
        mensaje.style.color = 'green';
        console.log("Datos enviados (simulación):", { email, password });
        loginForm.reset(); 
    }
  });  
