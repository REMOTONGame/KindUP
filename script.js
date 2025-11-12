const showFormBtn = document.getElementById('showFormBtn');
const joinText = document.getElementById('joinText');
const joinForm = document.getElementById('joinForm');

showFormBtn.addEventListener('click', () => {
  joinText.classList.toggle('shift-left');
  joinForm.classList.toggle('d-none');

  setTimeout(() => {
    joinForm.classList.toggle('active');
  }, 50);
});

//  ТЕМА 

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// StarTree
const starTree = document.getElementById('starTree'); 

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.textContent = 'Тема: 🌙';

  // Картинка темної теми
  if (starTree) starTree.src = "image/StarTreeDark.png";
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');

  themeToggle.textContent = isDark ? 'Тема: 🌙' : 'Тема: ☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  if (starTree) {
    starTree.src = isDark
      ? "image/StarTreeDark.png"
      : "image/StarTree.png";
  }
});


