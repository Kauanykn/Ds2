let chat = document.getElementById('chat');
let estiloSelecionado = null;

function selecionarEstilo(estilo, imagem) {
  estiloSelecionado = { nome: estilo, imagem: imagem };
}

function gerarMusica() {
  let tema = document.getElementById('tema').value.trim();

  if (!estiloSelecionado) {
    alert("Selecione um estilo musical.");
    return;
  }

  if (!tema) {
    alert("Digite o tema da música.");
    return;
  }

  // Simulando IA (você pode trocar por API OpenAI)
  let letra = simularIA(estiloSelecionado.nome, tema);

  let musica = new Musica(estiloSelecionado.nome, tema, letra, estiloSelecionado.imagem);
  exibirMusica(musica);

  document.getElementById('tema').value = '';
}

function simularIA(estilo, tema) {
  const versos = [
    `No som do ${estilo},\nSinto o peso de ${tema} no ar.`,
    `${tema} me guia,\nEntre batidas e harmonia.`,
    `Canto ${tema}, sem hesitar,\nÉ no ${estilo} que vou me expressar.`,
    `${tema} é a melodia que me faz dançar.`
  ];
  return versos.sort(() => Math.random() - 0.5).slice(0, 3).join('\n\n');
}

function exibirMusica(musica) {
  let col_tema = document.createElement('div');
  col_tema.classList.add('col-12', 'd-flex', 'justify-content-end');

  let col_letra = document.createElement('div');
  col_letra.classList.add('col-12', 'd-flex', 'justify-content-start');

  let card_tema = document.createElement('div');
  card_tema.classList.add('card', 'p-2', 'm-1', 'bg-success', 'text-white');
  card_tema.innerText = `Tema: ${musica.tema}`;

  let card_letra = document.createElement('div');
  card_letra.classList.add('card', 'p-2', 'm-1', 'bg-light');
  card_letra.innerText = `${musica.estilo} diz:\n\n${musica.letra}`;

  let img = document.createElement('img');
  img.setAttribute('src', musica.imagem);
  img.setAttribute('width', "70px");

  col_tema.appendChild(card_tema);
  col_letra.appendChild(img);
  col_letra.appendChild(card_letra);

  chat.appendChild(col_tema);
  chat.appendChild(col_letra);
}
