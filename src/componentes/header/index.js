import itensMenu from './itensMenu/index.js';
import bannerText from './bannerText/index.js';
import socials from './socials/index.js';

import '../../style.css';

export default () => {
    // 
    const header = document.createElement('header');
    header.classList.add('banner-principal');

    header.appendChild(itensMenu());
    header.appendChild(bannerText());
    header.appendChild(socials());

    return header;
}