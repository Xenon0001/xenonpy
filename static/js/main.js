        // Menú hamburguesa para móviles
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const navMenu = document.getElementById('navMenu');
            
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                menuToggle.innerHTML = navMenu.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            // Modales de proyectos
            const viewButtons = document.querySelectorAll('.view-project');
            const modals = document.querySelectorAll('.modal');
            const closeButtons = document.querySelectorAll('.modal-close');
            
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const projectId = this.getAttribute('data-project');
                    const modal = document.getElementById(`${projectId}Modal`);
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Deshabilitar scroll
                });
            });
            
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const modal = this.closest('.modal');
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Habilitar scroll
                });
            });
            
            // Cerrar modal al hacer clic fuera del contenido
            modals.forEach(modal => {
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });
            });
            
            // Cerrar menú al hacer clic en un enlace (para móviles)
            // const navLinks = document.querySelectorAll('.nav-link');
            // navLinks.forEach(link => {
            //     link.addEventListener('click', function() {
            //         if (navMenu.classList.contains('active')) {
            //             navMenu.classList.remove('active');
            //             menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            //         }
            //     });
            // });

            // Validación del formulario
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Validación básica
                    const name = document.getElementById('name').value.trim();
                    const email = document.getElementById('email').value.trim();
                    const message = document.getElementById('message').value.trim();
                    
                    if (!name || !email || !message) {
                        alert('Por favor complete todos los campos del formulario.');
                        return;
                    }
                    
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                        alert('Por favor ingrese un correo electrónico válido.');
                        return;
                    }
                    
                    // Aquí iría el código para enviar el formulario
                    alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
                    contactForm.reset();
                });
            }

            
            // Scroll suave para todos los enlaces
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Animación al hacer scroll
            const fadeElements = document.querySelectorAll('.fade-in');
            
            function checkScroll() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Ejecutar al cargar y al hacer scroll
            window.addEventListener('load', checkScroll);
            window.addEventListener('scroll', checkScroll);
            
            // Efecto de cambio de color del header al hacer scroll
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.backgroundColor = 'var(--blanco)';
                    header.style.boxShadow = 'var(--sombra)';
                }
            });
        });