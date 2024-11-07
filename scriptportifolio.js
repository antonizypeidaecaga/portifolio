// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');
    const erroDiv = document.getElementById('erro');
    const sucessoDiv = document.getElementById('sucesso');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        
        if (nome === '' || email === '' || mensagem === '') {
            
            erroDiv.style.display = 'block';
            sucessoDiv.style.display = 'none';
        } else {
            
            erroDiv.style.display = 'none';
            sucessoDiv.style.display = 'block';

            
            form.reset();
        }
    });
});
