import './style.css';

export default () => {
    // Criando uma div com a classe menu
    const menu =  document.createElement('div');
    menu.innerHTML = `
        <div class="logo">
            <a href="#">
                <p>PAULO LUCCAS</p>
            </a>
        </div>

        <div class="home">
            <a href="#">
                <p>Home</p>
            </a>
        </div>

        <div class="sobre">
            <a href="#">
                <p>Sobre</p>
            </a>
        </div>

        <div class="desafio">
            <a href="#">
                <p>Desafio</p>
            </a>
        </div>
    `
    menu.classList.add('menu');

    return menu;
}