var escalacao = [];

function AdicionarJogador(event) {
  var posicao = document.getElementById("posicaoJogador").value;
  var nome = document.getElementById("nomeJogador").value;
  var numero = document.getElementById("numeroJogador").value;
  event.preventDefault();

  var inserir = prompt("Deseja inserir o Jogador " + nome + "?" + " (Sim/Não)");

  if (inserir.trim().toUpperCase() == "SIM") {
    let jogador = {
      posicao: posicao,
      nome: nome,
      numero: numero,
    };

    escalacao.push(jogador);

    alert("Dados Salvos");
  } else {
    alert("Dados não Salvos");
  }

  document.getElementById("posicaoJogador").value = "";
  document.getElementById("nomeJogador").value = "";
  document.getElementById("numeroJogador").value = "";

  CriarTabela();
}

function RemoverJogador(event) {
  var numero = document.getElementById("numeroJogador1").value;
  event.preventDefault();

  for (let index = 0; index < escalacao.length; index++) {
    if (escalacao[index].numero == numero) {
      var inserir = prompt(
        "Deseja inserir o Jogador abaixo? (Sim/Não) \n" +
          "Nome: " +
          escalacao[index].nome +
          "\n" +
          "Posição: " +
          escalacao[index].posicao +
          "\n" +
          "Numero: " +
          escalacao[index].numero +
          "\n"
      );

      if (inserir.trim().toUpperCase() == "SIM") {
        escalacao.splice(index, 1);

        alert("Jogador excluido");
      }
    }
  }

  document.getElementById("numeroJogador1").value = "";

  CriarTabela();
}

function CriarTabela() {
  var tabela = document
    .getElementById("minhaTabela")
    .getElementsByTagName("tbody")[0];

  tabela.innerHTML = "";

  for (let index = 0; index < escalacao.length; index++) {
    var novaLinha = tabela.insertRow();
    var coluna1 = novaLinha.insertCell(0);
    var coluna2 = novaLinha.insertCell(1);
    var coluna3 = novaLinha.insertCell(2);
    coluna1.innerHTML = escalacao[index].posicao;
    coluna2.innerHTML = escalacao[index].nome;
    coluna3.innerHTML = escalacao[index].numero;
  }
}
