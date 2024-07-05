function createLabel(text, htmlFor) {

    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    label.innerText = text;

    return label;
} 

function createInput(id, value, name, type = "text", placeholder = "") {

    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;

    return input;
    
}

const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("formDev");

const developers = []

let inputRows = 0

addTechBtn.addEventListener("click", function(ev) { 

    const stackInputs = document.getElementById("stackInputs");
    const newRow = document.createElement("li");
    const rowIndex = inputRows;
    inputRows++;
 
    newRow.id = "inputRows-" + rowIndex;
    newRow.className = "inputRow";

    const techNameLabel = createLabel ("Nome: ", "techName-" + rowIndex);
    const techNameInput = createInput ("techname-" + rowIndex, null, "techName");

    const expLabel = createLabel(" Experiencia: ")
    const id1 = "expradio - " + rowIndex + ".1"
    const expInput1 = createInput (id1, "0 - 2 anos", "techExp - " + rowIndex, "radio")
    const expLabel1 = createLabel ("0-2 anos ", id1)
    const id2 = "expradio - " + rowIndex + ".2"
    const expInput2 = createInput(id2, "3 - 4 anos", "techExp - " + rowIndex, "radio")
    const expLabel2 = createLabel ("3-4 anos ", id2)
    const id3 = "expradio - " + rowIndex + ".3"
    const expInput3 = createInput(id3, "5+ anos", "techExp - " + rowIndex, "radio")
    const expLabel3 = createLabel ("5+ anos  ", id3)


    const removeRowBtn = document.createElement("button")
    removeRowBtn.type = "button"
    removeRowBtn.innerText = "Remover"
    removeRowBtn.addEventListener("click", function (params) {
        stackInputs.removeChild(newRow)
        
    })

    newRow.append(techNameLabel, techNameInput, expLabel, expInput1, expLabel1, expInput2, expLabel2, expInput3, expLabel3, removeRowBtn);

    stackInputs.appendChild(newRow);
})

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const fullName = document.getElementById("fullName")
    const inputRows = document.querySelectorAll(".inputRow")

    let tecnologies = []

    inputRows.forEach(function (row) { 

        const techName = document.querySelector("#" + row.id + ' input[name = "techName"]').value
        const techExp = document.querySelector("#" + row.id + ' input[type = "radio"]:checked').value   
        tecnologies.push({ name: techName, exp: techExp})
    })

    const newDev = ({ fullName: fullName.value, tecnologies: tecnologies })

    developers.push(newDev)

    fullName.value = ""

    inputRows.forEach(function (row) {
        row.remove()
    })

    console.log(developers)
    
})
