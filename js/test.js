// Hämta element
const openBtn = document.querySelector('button');
const dialog = document.getElementById('info');
const closeBtn = dialog.querySelector('button');

// Öppna dialogen
openBtn.addEventListener('click', () => {
  dialog.showModal();
});

// Stäng dialogen
closeBtn.addEventListener('click', () => {
  dialog.close();
});

// Stäng dialogen med Esc (bra tillgänglighet)
dialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  dialog.close();
});
