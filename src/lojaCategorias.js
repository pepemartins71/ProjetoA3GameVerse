function filtrarJogosPorCategoria() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const jogos = document.querySelectorAll('.jogo');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const categoriasSelecionadas = [];
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    categoriasSelecionadas.push(cb.id);
                }
            });

            jogos.forEach(jogo => {
                const jogoCategorias = jogo.getAttribute('data-categorias').split(' | ');
                const jogoDeveAparecer = categoriasSelecionadas.every(cat => jogoCategorias.includes(cat));
                jogo.style.display = jogoDeveAparecer ? 'block' : 'none';
            });

            // Se nenhum checkbox estiver marcado, oculte todos os jogos
            const nenhumCheckboxMarcado = !Array.from(checkboxes).some(cb => cb.checked);
            if (nenhumCheckboxMarcado) {
                jogos.forEach(jogo => {
                    jogo.style.display = 'none';
                });
            }
        });
    });
}

function preencherTemplateCat() {
    // Obter as informações armazenadas localmente
    const jogos = JSON.parse(localStorage.getItem('dadosItens')) || [];

    if (jogos.length > 0) {
        const jogosCategoria = document.getElementById('jogosCategoria');
        jogosCategoria.innerHTML = '';

        jogos.forEach(jogo => {
            const jogoElement = document.createElement('div');
            jogoElement.className = 'jogo';

            // Certificar-se de que categoria2 seja tratada como uma array
            const categoriasArray = Array.isArray(jogo.categoria2) ? jogo.categoria2 : [jogo.categoria2];
            
            // Transformar as categorias em uma string no formato desejado
            const categoriasString = categoriasArray.join(' | ');
            jogoElement.setAttribute('data-categorias', categoriasString);
            jogoElement.style.display = 'none';

            jogoElement.innerHTML = `
                <div class="row" style="margin-bottom: 15px;">
                    <div class="col-lg-6 columnLeft" style="padding-top: 0px; padding-bottom: 0px;">
                        <div id="gamePics" style="height: 338px; width: 600px;">
                            <img src="${jogo.imagem_url}" class="d-block w-100" alt="" style="height: 338px; margin-left: 30px;">
                        </div>
                    </div>
                    <div class="col-lg-6 columnRight" style="padding-top: 0px; padding-bottom: 0px;">
                        <div class="aboutGame" style="width: 423px; margin-left: 133px; padding-top: 20px;">
                            <h4 id="jogoNome">${jogo.titulo}</h4>
                            <h5>Sobre o jogo:</h5>
                            <p id="jogoSobre">${jogo.descricao}</p>
                            <h5>Categorias:</h5>
                            <h5 id="jogoCategoria" style="text-align: center;">${categoriasString}</h5>
                            <div style="text-align: center;">
                                <button type="button" class="btn btn-lg btn-success comprar-button" 
                                    onclick="redirectToGamePage(this, '${jogo.titulo}')" style="margin-top: 12px;">
                                    <i class="bi bi-cart-plus"></i > Comprar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            jogosCategoria.appendChild(jogoElement);
        });

        // Chama a função para filtrar os jogos por categoria
        filtrarJogosPorCategoria();
    }
}

function redirectToGamePage(button, gameTitle) {
    let gameName;
    // Determine o nome do jogo com base no título
    if (gameTitle.includes("Minecraft")) {
        gameName = "Minecraft";
    } else if (gameTitle.includes("Valorant")) {
        gameName = "Valorant";
    } else if (gameTitle.includes("Fortnite")) {
        gameName = "Fortnite";
    } else if (gameTitle.includes("CS:GO")) {
        gameName = "CS:GO";
    } else if (gameTitle.includes("League of Legends")) {
        gameName = "League of Legends";
    } else if (gameTitle.includes("Call of Duty: Warzone")) {
        gameName = "Call of Duty: Warzone";
    } else if (gameTitle.includes("Fifa 23")) {
        gameName = "Fifa 23";
    } else if (gameTitle.includes("GTA 5")) {
        gameName = "GTA 5";
    } else if (gameTitle.includes("Genshin Impact")) {
        gameName = "Genshin Impact";
    } else if (gameTitle.includes("Sonic Mania")) {
        gameName = "Sonic Mania";
    }

    if (gameName) {
        // Construa a URL com os parâmetros necessários
        const url = `game.html?gameName=${encodeURIComponent(gameName)}`;
        // Redirecione para a página game.html com os parâmetros
        window.location.href = url;
    }
}
