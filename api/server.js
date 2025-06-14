const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const dados = {
 "Romance": [
    {
        nome: "Como eu era antes de você",
        imagem: "https://cdn.pensador.com/img/imagens/15/co/15_como_eu_era_antes_de_voce_c.jpg?auto_optimize=low&width=655",
        descricao: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico."
      },
      {
        nome: "É assim que acaba",
        imagem: "https://m.media-amazon.com/images/I/91r5G8RxqfL.jpg",
        descricao: "Um romance sobre a força necessária para fazer as escolhas corretas nas situações mais difíceis. Da autora das séries Slammed e Hopeless. Lily nem sempre teve uma vida fácil, mas isso nunca a impediu de trabalhar arduamente para conquistar a vida tão sonhada."
      }
],

  "Ação": [
    {
      nome: " Jogos Vorazes- A cantiga dos pássaros e das serpentes",
      imagem: "https://m.media-amazon.com/images/I/711wgxr7SDL._UF894,1000_QL80_.jpg",
      descricao: "A Cantiga dos Pássaros e das Serpentesé um prelúdio da série Jogos Vorazes, ambientado 60 anos antes dos eventos de Katniss Everdeen. A história acompanha a trajetória do jovem Coriolanus Snow, que se torna o mentor de Lucy Gray Baird, uma tributo do Distrito 12, durante os 10º Jogos Vorazes."
    },
    {
      nome: "Duna",
      imagem: "https://m.media-amazon.com/images/I/81SPvywH9sL._AC_UF1000,1000_QL80_.jpg",
      descricao: "Paul Atreides é um jovem brilhante, dono de um destino além de sua compreensão. Ele deve viajar para o planeta mais perigoso do universo para garantir o futuro de seu povo."
    }
  ],
  "Ficção": [
    {
      nome: "1984 George Orwell",
      imagem: "https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg",
      descricao: "Tematicamente, centra-se nas consequências do totalitarismo, da vigilância em massa e da lavagem cerebral na sociedade. Orwell, um socialista democrático, modelou o Estado autoritário descrito no romance com base na União Soviética stalinista e na Alemanha Nazista."
    },
    {
      nome: "A Maquina do tempo",
      imagem: "https://m.media-amazon.com/images/I/91XAnKe28UL._AC_UF1000,1000_QL80_.jpg",
      descricao: "Desesperado pelo assassinato de sua noiva, o inventor Alexander não consegue reverter a morte da amada alterando o tempo. Porém, em um futuro em que a humanidade está dividida entre espécies pacíficas e predatórias, o cientista precisa enfrentar os carnívoros Morlocks para salvar seus novos amigos."
    }
  ],
  "Cursos online": [
    {
      nome: "Inglês",
      imagem: "https://www.primecursos.com.br/arquivos/images/new/ingles_basico.png",
      descricao: "Curso de Inglês Básico"
    },
    {
      nome: "Espanhol",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUie2lxYWQnwsnn8DZIuDW2V1T0WHrOtgag&s",
      descricao: "Curso de Espanhol Básico"
    }
  ],
  "Cursos Online": [
    {
      nome: "Curso online de python",
      imagem: "https://4.bp.blogspot.com/-zOV8WuZOOfA/W9DUwql7MjI/AAAAAAABtHs/tm7Em3Q8nngyhxEKPScTE8qD7BU-DEbhgCK4BGAYYCw/s1600/usp%2Bprogr.png",
      descricao: "Curso online de python, aprenda a programar do zero com python, uma das linguagens mais utilizadas no mundo"
    },
    {
      nome: "Curso online de Lógica de Programação",
      imagem: "https://www.primecursos.com.br/arquivos/uploads/2018/06/logica-de-programacao-basica.jpg",
      descricao: "Curso online de Lógica de Programação, aprenda a lógica por trás da programação e desenvolva suas habilidades de raciocínio Lógico"
    }
  ]
};

app.get('/api/cursos', (req, res) => {
  res.json(dados);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}/api/cursos`);
});
