import './style.css';

export default () => {
    // Criando div para o texto central do banner
    const banner = document.createElement('div');
    banner.innerHTML = `
        <h1>Desenvolvedor Front-End</h1>
        <p>Desafio Qconcursos.com</p>
        
    `
    banner.classList.add('banner-text')

    return banner;
}