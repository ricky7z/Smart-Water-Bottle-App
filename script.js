document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDarkMode');
    const navToggle = document.getElementById('navToggle');
    const navList = document.querySelector('.nav-list');
  
    // Check for saved preference and apply it
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  
      // Save the preference in localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.removeItem('darkMode');
      }
    });
  
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  });
  
