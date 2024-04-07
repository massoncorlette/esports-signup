function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'light' ? 'dark' : 'light';
  root.className = newTheme;
  
}

document.querySelector('#theme-btn').addEventListener('click', setTheme);