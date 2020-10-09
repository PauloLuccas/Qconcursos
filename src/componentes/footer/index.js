import copyright from './copyright/index.js';

export default () => {
    //
    const footer = document.createElement('footer');
    footer.classList.add('footer-principal')

    footer.appendChild(copyright());

    return footer;
}