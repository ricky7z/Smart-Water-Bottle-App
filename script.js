document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDarkMode');
    const navToggle = document.getElementById('navToggle');
    const navList = document.querySelector('.nav-list');
  
    // Function to apply the theme based on preference
    const applyTheme = (isDarkMode) => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    };
  
    // Check for saved preference and apply it
    const savedPreference = localStorage.getItem('darkMode');
    if (savedPreference === 'enabled') {
      applyTheme(true);
    } else if (savedPreference === 'disabled') {
      applyTheme(false);
    } else {
      applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  
    // Toggle dark mode manually
    toggleButton.addEventListener('click', () => {
      const isDarkMode = document.body.classList.toggle('dark-mode');
  
      // Save the preference in localStorage
      if (isDarkMode) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  
    // Toggle navigation menu on mobile
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  
    // Detect changes in the user's color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('darkMode')) { // Only change if no manual preference is set
        applyTheme(e.matches);
      }
    });
  });
  
