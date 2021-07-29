function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const hiddenText = document.getElementById('text');
  
  button.addEventListener('click', () => {
    hiddenText.hidden = !hiddenText.hidden
    }) 
}
