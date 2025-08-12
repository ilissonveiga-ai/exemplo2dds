js
const button = document.getElementById('btnMudarCor');

button.addEventListener('click', () => {
    // Gera uma cor aleatória em hexadecimal
    const corAleatoria = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = corAleatoria;
});
