const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const formContato = document.getElementById('formContato');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const linksMenu = document.querySelectorAll('.nav a');
linksMenu.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

function mostrarAviso(texto) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = texto;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}

formContato.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const tipoSite = document.getElementById('tipoSite').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !whatsapp || !tipoSite) {
    mostrarAviso('Preencha nome, WhatsApp e tipo de site.');
    return;
  }

  // Troque pelo seu número real no formato: 55 + DDD + número, sem espaços.
  const numeroDoSeuWhatsApp = '5599999999999';

  const texto = `Olá! Vim pelo seu site e gostaria de pedir um orçamento.\n\nNome: ${nome}\nWhatsApp: ${whatsapp}\nTipo de site: ${tipoSite}\nMensagem: ${mensagem}`;
  const textoFormatado = encodeURIComponent(texto);
  const link = `https://wa.me/${numeroDoSeuWhatsApp}?text=${textoFormatado}`;

  mostrarAviso('Abrindo WhatsApp...');
  window.open(link, '_blank');
});
