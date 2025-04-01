// Adiciona um evento que será executado quando o conteúdo da página (DOM) for totalmente carregado
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona o elemento HTML com o ID 'menu-icon' e armazena na variável `menuIcon`
    const menuIcon = document.getElementById('menu-icon');

    // Seleciona o elemento HTML com o ID 'nav' e armazena na variável `nav`
    const nav = document.getElementById('nav');

    // Adiciona um evento de clique ao elemento `menuIcon`
    menuIcon.addEventListener('click', function() {

        // Alterna (adiciona/remove) a classe 'active' no elemento `nav`
        nav.classList.toggle('active');
    });
});