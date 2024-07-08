const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const inputResult = document.getElementById("result");


const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {

    charKeyBtn.addEventListener("click", function () {

        const value = charKeyBtn.dataset.value
        input.value += value

    })
    
})

document.getElementById("clear").addEventListener("click", function(){

    input.value = ""
    input.focus()


})

document.getElementById("equal").addEventListener("click", calculate)

input.addEventListener("keydown", function (event) {
    
    event.preventDefault()

    if (allowedKeys.includes(event.key)) {
        
        input.value += event.key;
        return
        
    }

    if (event.key = "Backspace") {
        input.value = input.value.slice(0, -1)

    }

    if (event.key = "Enter") {
        
        calculate()
        
    }

})

function calculate() {

    inputResult.value = "ERROR"
    inputResult.classList.add("error")
    const result = eval(input.value)
    inputResult.value = result
    inputResult.classList.remove("error")
    
}

document.getElementById("copyToClipboard").addEventListener("click", function (event) {

    const button = event.currentTarget

    if (button.innerText === "Copy") {
        
        button.innerText = "Copied!"
        button.classlist.add("success")
        window.navigator.clipboard.writeText(inputResult.value)
    }else{

        button.innerText = "Copy"
        button.classlist.remove("success")

    }


    
})

document.getElementById("themeSwitcher").addEventListener("click", function () {

    if (main.dataset.theme === "dark") {
        
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light"
    }else{

        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"

    }
    
})