const express = require('express');
const fs = require('fs');
const { request } = require('http');

const app = express();
app.use(express.json());
const arquivo = 'jogos.json';

app.listen(3000, () => {
    console.log('API de jogo em execução na porta 3000')

    // Verifique se o arquivo existe
    fs.access(arquivo, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`${arquivo} does not exist`);
            console.log(`Create file ${arquivo}`);
            let data = JSON.stringify(dadosItens);
            fs.writeFileSync(arquivo, data);
        }
    });
});

app.get('/', (request, response) => response.send("API Version 1.0 on-line"));

app.get('/categorias', (req, res) => {
    const jogos = dadosItens;

    if (req.query.categoria) {
        const categoriasFiltradas = req.query.categoria.split(',');

        const jogosFiltrados = jogos.filter(jogo => {
            return categoriasFiltradas.every(categoria => jogo.categorias.includes(categoria));
        });

        res.send(jogosFiltrados);
    } else {
        res.send(jogos);
    }
});

const dadosItens = [
    {
        titulo: "Minecraft",
        descricao: "Explore seu próprio mundo único, sobreviva à noite e crie qualquer coisa que você possa imaginar!",
        categorias: ["Sandbox", "Sobrevivência", "Recomendado"],
        imagem_url: "images/Minecraft_logo.png"
    },
    {
        titulo: "Valorant",
        descricao: "Um jogo de tiro tático de heróis em primeira pessoa baseado em equipe que se passa em um futuro próximo.",
        categoria2: "FPS | Multiplayer | Recomendado",
        imagem_url: "images/Valorant_logo.webp"
    },
    {
        titulo: "Fortnite",
        descricao: "Um jogo PVP de até 100 jogadores, permitindo jogar sozinho, em dupla ou em equipe.",
        categoria2: "Battle Royale | Multiplayer | Recomendado",
        imagem_url: "images/Fortnite_logo.avif"
    },
    {
        titulo: "CS:GO",
        descricao: "Um jogo de tiro tático em primeira pessoa com duas equipes, Terroristas e Contra-Terroristas.",
        categoria2: "FPS | Multiplayer | Recomendado",
        imagem_url: "images/CSGO_logo.png"
    },
    {
        titulo: "League of Legends",
        descricao: "Um jogo MOBA com duas equipes, cada equipe ocupando e defendendo sua metade do mapa.",
        categoria2: "Multiplayer | Recomendado",
        imagem_url: "images/LOL_logo.jpg"
    },
    {
        titulo: "Call of Duty: Warzone",
        descricao: "Um jogo PVP com uma enorme arena de combate que agora apresenta o novo mapa, Al Mazrah.",
        categoria2: "Battle Royale | FPS | Não Recomendado",
        imagem_url: "images/CODWarzone_logo.jpg"
    }
];