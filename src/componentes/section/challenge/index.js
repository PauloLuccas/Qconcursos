import './style.css';


export default () => {
    // Criando uma div para área dos repositórios
    const desafio = document.createElement('div');
    desafio.classList.add('challenge');

    const username = 'PauloLuccas';
    
    // Chamando api para dados do usuario
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/users/' + username);
    request.onload = function () {
        const data = JSON.parse(request.responseText);
        desafio.innerHTML = `
        <h1>Desafio</h1>

        <div class="repositories">
            <div class="left">
                <div>
                    <img id="avatar" src='${data.avatar_url}' />
                </div>

                <p id="profile">
                    <a href='${data.html_url}'>Visitar perfil</a>
                </p>
            </div>

            <div class="right">
                <div class="text-profile">
                    <p>User: <span id='user'> @${data.login}</span></p>
                    <p>Repositórios: <span id="t_repositories">${data.public_repos}</span></p>
                    <p>Seguidores: <span id="followers">${data.followers} </span></p>
                    <p>Seguindo: <span id="following">${data.following} </span></p>
                </div>

                <div class="containerButtons">
                    <div class="buttons">
                        <input type="checkbox" id="view_repositories"/>
                        <label for="view_repositories">
                            Ver Repositório
                        </label>

                        <div id="listOfRepositories">
                            <h3>Lista dos Repositórios</h3>

                            <span class="n1"><a href="https://github.com/PauloLuccas/100daysofcode">100daysofcode</a></span>
                            <span class="n2"><a href="https://github.com/PauloLuccas/gobarber-api">gobarber-api</a></span>
                            <span class="n3"><a href="https://github.com/PauloLuccas/Meu-Site">Meu-Site</a></span>
                            <span class="n4"><a href="https://github.com/PauloLuccas/node-api">node-api</a></span>
                            <span class="n5"><a href="https://github.com/PauloLuccas/ProjetoOrlando">ProjetoOrlando</a></span>
                            <span class="n6"><a href="https://github.com/PauloLuccas/react-instagram">react-instagram</a></span>
                            <span class="n7"><a href="https://github.com/PauloLuccas/Smash-Bros">Smash-Bros</a></span>
                            <span class="n8"><a href="https://github.com/PauloLuccas/Trigg">Trigg</a></span>
                        </div>
                    </div>

                    <div class="buttons-fav">
                        <input type="checkbox" id="view_favorites"/>
                        <label for="view_favorites">
                            Ver Favoritos
                        </label>

                        <div id="listOfFavorites">
                            <h3>Lista dos Favoritos</h3>

                            <span class="n1"><a href="https://github.com/PauloLuccas/Meu-Site">Meu-Site</a></span>
                            <span class="n2"><a href="https://github.com/PauloLuccas/ProjetoOrlando">ProjetoOrlando</a></span>
                            <span class="n3"><a href="https://github.com/PauloLuccas/Smash-Bros">Smash-Bros</a></span>
                            <span class="n4"><a href="https://github.com/PauloLuccas/Trigg">Trigg</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    },request.send();

    return desafio;
}