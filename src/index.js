import _ from 'lodash';
import './style.css';
import Icon from './componentes/assets/desafio-front.jpg';

import header from './componentes/header/index.js';
import section from './componentes/section/index.js';
import footer from './componentes/footer/index.js';

function component() {
    // Criando a div container que envolve todo o site
    const element = document.createElement('div');
    element.classList.add('app-container');

    // Adicionando imagem de fundo.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    element.appendChild(header());
    element.appendChild(section());
    element.appendChild(footer());

    return element;
  }
  
  document.body.appendChild(component());