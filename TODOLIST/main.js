

function createrow(nomeTarefa){

    const tbody = document.getElementById("tabela");
    const tr = document.createElement("tr");
    const td = document.createElement("td", nomeTarefa);
    var dataAtual = new Date();
    const data = document.createElement("td", dataAtual.getDate())
    const  addStatus = document.createElement("td")
    const  addAction = document.createElement("td")


    const editButton = document.createElement("button")
    editButton.innerHTML = '<span class="material-symbols-outlined">edit</span>'

    addAction.appendChild(editButton)
    tr.appendChild(td)
    tbody.appendChild(tr)

    const editSpan =  document.createElement("span")

}

document.getElementById("adicionar").addEventListener("click",function(){

   var nomeTarefa = document.getElementById("nomeTarefa").value;


})

if (nomeTarefa != null) {
    
    createrow(nomeTarefa)
    
}

