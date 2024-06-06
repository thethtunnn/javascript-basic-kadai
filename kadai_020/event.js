
const textElement = document.getElementById('text');
const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', function() {
  textElement.textContent = 'ボタンがクリックされました！';
});

