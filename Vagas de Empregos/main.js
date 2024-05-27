let vagas = [];


function exibirMenu() {
  return prompt(
    "Vagas.com\n" +
    "1. Listar Vagas Disponiveis\n" +
    "2. Criar um nova vaga\n" +
    "3. Visualizar uma vaga\n" +
    "4. Inscrever um candidato em uma vaga\n" +
    "5. Excluir uma vaga\n" +
    "6. Sair\n"
  )
}

function ListarVagas() {

    let listaDeVagas = "Lista de Vagas\n";
    for (let i = 0; i < vagas.length; i++) {
        listaDeVagas += i + 1 + " - " 
        + vagas[i].nome + "\n Inscritos: " + Object.keys(vagas[i].candidatos).length + "\n";
    }
    return alert(listaDeVagas);
    
}

function CriarVaga() {

    let nomeVaga = prompt("Digite o nome da Vaga: ")
    let descricao = prompt("Digite a Descrição da Vaga: ")
    let data = prompt("Digite uma Data limite: ")
    let candidatos = []

    let salvar = prompt(
    " - " + nomeVaga +
    "\n - " + descricao +
    "\n - " + data +
    "\nOs dados acimas estão corretos?" +
    "\nSe sim - digite Sim \n se não - Digite Não")

        if (salvar.trim().toUpperCase() == "SIM"){

            let vaga = {

                nome: nomeVaga,
                descricao: descricao,
                data: data,
                candidatos: candidatos
            }

            vagas.push(vaga)
            alert("Dados Salvos")

        }
        else{
            alert("Dados não Salvos")
        }
   
}

function VisualizarVaga() {

   let indice = prompt("Digite o Indice da vaga: ")

   indice -= 1

   alertaVaga = indice + " - \n" + 
   vagas[indice].nome + "\n" + 
   vagas[indice].descricao + "\n" +
   vagas[indice].data + "\n" +
   vagas[indice].candidatos.length + "\n" + 
   "Candidatos: ( "

   for (let candidato in vagas[indice].candidatos) {
    alertaVaga += vagas[indice].candidatos[candidato].nome + " - ";
    }

    alert(alertaVaga + ")")
    
}

function InscreverCandidato() {

    let indice = prompt("Digite o Indice da Vaga: ")
    let nomeCandidato = prompt("Digite o nome do Candidato: ")

    indice -= 1

    alertaVaga = indice + " - \n" + 
   vagas[indice].nome + "\n" + 
   vagas[indice].descricao + "\n" +
   vagas[indice].data + "\n" 

   let salvar =  prompt(alertaVaga + "\n Essa vaga quer voce quer ser Inscrever? " +
        "\nSe sim - digite Sim \nSe não - Digite Não")

        if (salvar.trim().toUpperCase() == "SIM"){

            let candidato = {

                nome: nomeCandidato 

            }

            vagas[indice].candidatos.push(candidato)
            alert("Candidato Inscrito")
        }

        else{
            alert("Candidato não Inscrito")
        }

}

function ExcluirVaga() {

    let indice = prompt("Digite o Indice da Vaga: ")

    indice -= 1

    alertaVaga = indice + " - \n" + 
   vagas[indice].nome + "\n" + 
   vagas[indice].descricao + "\n" +
   vagas[indice].data + "\n" 

   let deletar =  prompt(alertaVaga + "\n Essa vaga quer voce quer Excluir?" +
        "\nSe sim - digite Sim \nSe não - Digite Não")

        if (deletar.trim().toUpperCase() == "SIM"){

            vagas.splice(indice,1)

            alert("Vaga excluida")

        }

        else{
            alert("Vaga não excluida")
        }     
    
}

function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
  
      switch (opcao) {
        case "1":
          resultado = ListarVagas()
          break
        case "2":
          resultado = CriarVaga()
          break
        case "3":
          resultado = VisualizarVaga()
          break
        case "4":
          resultado = InscreverCandidato()
          break
        case "5":
          resultado = ExcluirVaga()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida!")
          break
      }
  
    } while (opcao !== "6");
  }

  executar()