document.querySelectorAll('.details-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.classList.toggle('open');
    button.textContent = details.classList.contains('open') ? 'Show less' : 'Read more';
  });
});
