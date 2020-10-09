import about from './about/index.js';
import desafio from './challenge/index.js';

export default () => {
    //
    const section = document.createElement('section');
    section.classList.add('about-principal');

    section.appendChild(about());
    section.appendChild(desafio());

    return section;
}