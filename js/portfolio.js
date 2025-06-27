document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioContents = document.querySelectorAll('.portfolio-content');

    // Função para mostrar o conteúdo do projeto
    function showProject(projectId) {
        // Esconde todos os conteúdos
        portfolioContents.forEach(content => {
            content.classList.remove('active');
        });

        // Mostra o conteúdo selecionado
        document.querySelector(`#${projectId}`).classList.add('active');

        // Atualiza a classe ativa nos itens do portfólio
        portfolioItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-project') === projectId) {
                item.classList.add('active');
            }
        });
    }

    // Adiciona eventos de clique aos itens do portfólio
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            showProject(projectId);
        });
    });

    // Mostra o primeiro projeto ao carregar a página
    showProject('projeto1');
}); 