function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'light' ? 'dark' : 'light';
  root.className = newTheme;
}

document.querySelector('#theme-btn').addEventListener('click', setTheme);

const userPass = document.querySelector('#user_password');
const helpText = document.querySelector('#helper-txt'); 

function passwordValidation() {
  const password = userPass.value.trim();
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const minLength = password.length >= 6; 

  helpText.innerHTML = ''; 

  function addMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    helpText.appendChild(messageDiv);
  }
  
  if (!hasUppercase) {
    addMessage("Password must include at least one uppercase letter.");
  }

  if (!hasLowercase) {
    addMessage("Password must include at least one lowercase letter.");
  }

  if (!minLength) {
    addMessage("Password must be at least 6 characters long.");
  }

  if (hasUppercase && hasLowercase && minLength) {
    addMessage("Password is valid.", true);
  }
}
userPass.addEventListener('input', passwordValidation);