function templateJogoNov(jogo) {
    return `
        <div class="row" style="margin-bottom: 15px;">
      <div class="col-lg-6 columnLeft" style="padding-top: 0px; padding-bottom: 0px;">
        <div id="newGamePics" style="height: 338px; width: 600px;">
          <img src="${jogo.imagem_url}" class="d-block w-100" alt="" style="height: 338px; margin-left: 80px;">
        </div>
      </div>
      <div class="col-lg-6 columnRight" style="padding-top: 0px; padding-bottom: 0px;">
        <div class="newGame">
          <h4 id="jogoNome">${jogo.titulo}</h4>
          <h5>Sobre o jogo:</h5>
          <p id="jogoSobre">${jogo.descricao}</p>
          <h5>Categorias:</h5>
          <h5 id="jogoCategoria" style="text-align: center;">${jogo.categoria2.join(' | ')}</h5>
          <div style="text-align: center;">
            <button type="button" class="btn btn-lg btn-success comprar-button"
              onclick="redirectToGamePage(this, '${jogo.titulo}')" style="margin-top: 12px;">
              <i class="bi bi-cart-plus"></i> Comprar
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

function preencherTemplateNov() {
    // Obter informações armazenadas localmente
    const dadosItens = JSON.parse(localStorage.getItem('dadosItens')) || [];

    // Filtrar os jogos que têm categoria2 igual a "Novidade"
    const jogosNovidade = dadosItens.filter(jogo => jogo.categoria2.includes("Novidade"));

    // Criar uma string para armazenar todos os templates de jogos
    let jogosHTML = '';

    // Iterar sobre os jogos de novidade e gerar o template para cada jogo
    jogosNovidade.forEach(jogo => {
        const jogoTemplate = templateJogoNov(jogo);
        jogosHTML += jogoTemplate; // Adicionar o template do jogo à string
    });

    // Inserir todos os templates de jogos no elemento com ID "lojaTemplate" em "loja.html"
    const lojaTemplate = document.getElementById('lojaTemplate');
    lojaTemplate.innerHTML = jogosHTML;
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