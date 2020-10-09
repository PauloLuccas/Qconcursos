import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid' // https://fontawesome.com/icons?d=gallery&s=solid&m=free
import '@fortawesome/fontawesome-free/js/regular' // https://fontawesome.com/icons?d=gallery&s=regular&m=free
import '@fortawesome/fontawesome-free/js/brands' // https://fontawesome.com/icons?d=gallery&s=brands&m=free

import './style.css';

export default () => {
    // Criando div para área das redes socias
    const socials = document.createElement('div');
    socials.innerHTML = `
        <div class="facebook">
            <a href="#">
                <i class="fab fa-facebook-square"></i>
            </a>
        </div>

        <div class="linkedin">
            <a href="#">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>

        <div class="github">
            <a href="#">
                <i class="fab fa-github-square"></i>
            </a>
        </div>
    `
    socials.classList.add('socials');

    return socials;
}