document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.querySelector('body');
  
    // Verifica se o tema selecionado está salvo no armazenamento local
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      body.classList.add(currentTheme);
    }
  
    themeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-theme');
  
      // Salva o tema selecionado no armazenamento local
      const theme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
      localStorage.setItem('theme', theme);
    });
  });
  