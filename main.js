
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle-mode');
  const body = document.body;

  if (localStorage.getItem('mode') === 'light') {
    body.classList.add('dark-mode');
  }

  toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'light');
    } else {
      localStorage.setItem('mode', 'dark');
    }
  });
});
