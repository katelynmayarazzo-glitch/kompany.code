
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const currentYear = document.querySelector("#current-year");
  const faqItems = document.querySelectorAll(".faq-list details");

  // Atualiza o ano do rodapé automaticamente.
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Menu para celular.
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Abrir menu" : "Fechar menu"
      );

      navMenu.classList.toggle("is-open", !isOpen);
    });

    // Fecha o menu ao selecionar uma seção.
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      });
    });

    // Fecha o menu com a tecla Escape.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        navMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      }
    });

    // Fecha o menu ao voltar para a tela desktop.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        navMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      }
    });
  }

  // Mantém apenas uma pergunta do FAQ aberta por vez.
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.open = false;
          }
        });
      }
    });
  });
});
