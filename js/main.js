document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("is-open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("is-open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    if (window.AOS) {
        AOS.init({
            duration: 850,
            once: true,
            offset: 80
        });
    }

    if (window.particlesJS && document.querySelector("#particles-js")) {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 55,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                color: {
                    value: "#3dd6c6"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.42,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 145,
                    color: "#3dd6c6",
                    opacity: 0.24,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2.8,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    const loginForm = document.querySelector("[data-login-form]");
    const loginMessage = document.querySelector("[data-login-message]");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(loginForm);
            const email = String(formData.get("email") || "").trim().toLowerCase();
            const password = String(formData.get("senha") || "");

            if (email === "admin@cybersentinel.com" && password === "123456") {
                if (loginMessage) {
                    loginMessage.textContent = "Login aprovado. Redirecionando...";
                    loginMessage.classList.remove("is-error");
                    loginMessage.classList.add("is-success");
                }

                window.setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 600);
                return;
            }

            if (loginMessage) {
                loginMessage.textContent = "Email ou senha incorretos. Use o acesso demo informado acima.";
                loginMessage.classList.remove("is-success");
                loginMessage.classList.add("is-error");
            }
        });
    }
});
