import './style.css';

export default () => {
    // Criando div para área SObre mim
    const aboutText = document.createElement('div');
    aboutText.innerHTML = `
        <h1 class="title"> Sobre </h1>
        <p>
            Sou Paulo, sou desenvolvedor front-end, tenho 23 anos e sou do Rio de Janeiro - BR.
            Durante minha vida no ensino médio sempre gostei de lógicas, e sempre amei explorar o computador instalando
            jogos no meu computador e programas de trabalho para alguns parentes. Foi ai que decidir fazer faculdade em TI,
            mais especificamente Análise e Desenvolvimento de Sistemas.
            No meu último ano de faculdade decidir trancar, pois ainda não havia conseguido um estágio na área e isso me desanimou bastante.
        </p>

        <p>
            Em Janeiro deste ano(2020), decidi que seria um ano diferente para mim, então comecei a acordar 5 horas da manhã
            para estudar javascrirpt antes de ir para o trabalho. Rapidamente comecei a amar Javascript. Basicamente tenho
            estudado desenvolviemento front end em tempo integral, pois nas horas vagas no trabalho, sempre procuro estar lendo algum livro ou
            ouvindo algum podcast sobre desenvolvimento e vou documentando tudo que acho de interessante na minha conta no instagram.
        </p>
        
        <p class="end">
            Durante todo este ano fiz alguns cursos online sobre Javascript, alguns frameworks como: React, Vue. Fiz alguns projetos pessoais,
            pois sabemos que nessa área a melhor forma de aprender é práticando. Eu amo essa profissão e amei participar do processo seletivo
            de vocês, principalmente com esse desafio. Sempre quero aprender mais e foi isso que mais me motivou 
            em estar nesta jornada.
        </p>
    `
    aboutText.classList.add('about-text');

    return aboutText;
}