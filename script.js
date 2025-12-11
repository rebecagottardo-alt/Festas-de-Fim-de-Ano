// Função do menu responsivo
document.querySelectorAll('.hamburger').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = btn.nextElementSibling;
    nav.classList.toggle('open');
  });
});

// Ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const ano = new Date().getFullYear();
  document.querySelectorAll("#anoAtual").forEach(el => {
    el.textContent = ano;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contatoForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      const email = form.email.value.trim();
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!regex.test(email)) {
        alert("Digite um e-mail válido!");
        e.preventDefault(); // impede recarregar
        return;
      }

      // Se for só um formulário visual, sem backend:
      e.preventDefault(); 
      alert("Formulário enviado com sucesso!");
    });
  }
});


