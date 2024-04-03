

function createrow(nomeTarefa){

    const tr = createElement("tr")
    const td = createElement("td", nomeTarefa)
}

document.getElementById("adicionar").addEventListener("click",function(){

    var nomeTarefa = document.getElementById("nomeTarefa").value;
    createrow(nomeTarefa);

})

