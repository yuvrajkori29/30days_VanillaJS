const panels = document.querySelectorAll('.box1');

function toggleOpen() {
  panels.forEach(panel => {
    panel.classList.remove('open');
    panel.classList.remove('open-active');
  });
  this.classList.add('open');
  this.classList.add('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
