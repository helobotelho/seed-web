const toggleContrastButton = document.getElementById('toggle-contrast');

// Adiciona um ouvinte de evento de clique no botão
toggleContrastButton.addEventListener('click', function () {
    // Obtém o elemento body
    const bodyElement = document.body;

    // Obtém o elemento que deseja alterar o contraste pelo seletor de classe
    const myElement = document.querySelector('.conteudo__ferramentas');

    // Verifica se a classe 'contrast' já está presente no elemento body
    const hasContrastClass = bodyElement.classList.contains('contrast');

    // Se a classe 'contrast' estiver presente, remove-a; caso contrário, adiciona-a
    if (hasContrastClass) {
        bodyElement.classList.remove('contrast');
        myElement.classList.remove('contrast');
    } else {
        bodyElement.classList.add('contrast');
        myElement.classList.add('contrast');
    }
});