const myElement = document.querySelector('#text');
    
// Adding a click event listener to the button
const changeTextButton = document.querySelector('#btn');
changeTextButton.addEventListener('click', function() {
  // Delaying the text change by 2 seconds (2000 milliseconds)
  setTimeout(function() {
    // Changing the text content after the delay
    myElement.textContent = 'ボタンをクリックしました　。2秒後';
  }, 2000);
});