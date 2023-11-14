function preencher_template(titulo, imagem_url) {
    var template = `
    <div style="text-align: center; width: 374px;">
        <div class="gameCard">
          <img src="${imagem_url}" class="gameImg" alt="">
          <div>
            <h5 class="gameTitle">${titulo}</h5>
          </div>
          <button type="button" class="btn btn-lg btn-success"><img class="categoryImg" src="images/Multiplayer_icon.png"> Jogar</button>
        </div>
    </div>
    `;
    return template;
}

// Exemplo de dados para os itens
var dadosItens = [
    {
        titulo: "Minecraft",
        imagem_url: "images/Minecraft_logo.png"
    },
    {
        titulo: "Valorant",
        imagem_url: "images/Valorant_logo.webp"
    },
    {
        titulo: "Fortnite",
        imagem_url: "images/Fortnite_logo.avif"
    },
    {
        titulo: "CS:GO",
        imagem_url: "images/CSGO_logo.png"
    },
];