import './style.css';

export default () => {
    //
    const copyright = document.createElement('div');
    copyright.innerHTML = `
        <p> Desafio Desenvolvedor Front Qconcursos.com </p>
    `

    copyright.classList.add('copyright');

    return copyright;
}