function templateListaDesejos(jogoImagemSrc, jogoNome, jogoSobre, jogoCategorias) {
    const urlParams = new URLSearchParams(window.location.search);
    const tipoLoja = urlParams.get('tipo');

    // Verificar se estamos na página "loja.html" e o tipo é "listaDesejos"
    if (tipoLoja === 'listaDesejos' && window.location.pathname.includes('loja.html')) {
        return `
            <div class="row">
                <div class="col-lg-6 columnLeft">
                    <div id="gamePics" style="height: 338px;">
                        <img id="jogoImagem" src="${jogoImagemSrc}" class="d-block w-100" alt="">
                    </div>
                </div>
                <div class="col-lg-6 columnRight">
                    <div class="aboutGame">
                        <h4 id="jogoNome">${jogoNome}</h4>
                        <h5>Sobre o jogo:</h5>
                        <p id="jogoSobre">${jogoSobre}</p>
                        <h5>Categorias:</h5>
                        <h5 id="jogoCategoria" style="text-align: center;">${jogoCategorias}</h5>
                        <div style="text-align: center;">
                            <button type="button" class="btn btn-lg btn-success comprar-button" 
                                 onclick="redirectToGamePage(this, '${jogoNome}')" style="margin-top: 12px;">
                                <i class="bi bi-cart-plus"></i > Comprar
                            </button>
                            <button type="button" class="btn btn-lg btn-danger remover-button" 
                                 onclick="removerDaListaDesejos('${jogoNome}')" style="margin-top: 12px;">
                                <i class="bi bi-trash"></i> Remover da Lista
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
    } else {
        return '';
    }
}

function preencherTemplateWish() {
    // Obter informações armazenadas localmente
    const listaDesejos = JSON.parse(localStorage.getItem("listaDesejos")) || [];
    // Verificar se há jogos na lista de desejos
    if (listaDesejos.length > 0) {
        // Criar uma string para armazenar todos os templates de jogos
        let jogosHTML = '';
        // Iterar sobre a lista de desejos e gerar o template para cada jogo
        listaDesejos.forEach(jogo => {
            const jogoTemplate = templateListaDesejos(
                jogo.primeiraImagem,
                jogo.nome,
                jogo.sobre,
                jogo.categoria
            );

            jogosHTML += jogoTemplate; // Adicionar o template do jogo à string
        });
        // Inserir todos os templates de jogos no elemento com ID "lojaTemplate" em "loja.html"
        document.getElementById('lojaTemplate').innerHTML = jogosHTML;
    }
}

function removerDaListaDesejos(jogoNome) {
    // Obter a lista de desejos do armazenamento local
    const listaDesejos = JSON.parse(localStorage.getItem("listaDesejos")) || [];
    // Filtrar a lista para remover o jogo com o nome correspondente
    const novaListaDesejos = listaDesejos.filter(jogo => jogo.nome !== jogoNome);
    // Atualizar a lista de desejos no armazenamento local
    localStorage.setItem("listaDesejos", JSON.stringify(novaListaDesejos));
    // Atualizar o conteúdo na página
    preencherTemplateWish();
    // Recarregar a página para refletir a remoção
    window.location.reload();
    alert("Jogo removido da Lista de Desejos!");
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
