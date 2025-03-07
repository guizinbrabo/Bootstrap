// alert('Olá mundo')
//
// var test = prompt("Digite qualquer coisa")
//
// alert(test)
//

function testTexto() {
    document.getElementById("titulo").innerHTML += "Boa tarde"
}

function testColor() {
    const titulo = document.getElementById("titulo")

    titulo.style.color = "red"
    titulo.style.fontSizet = "30px"
}

function Reset() {
    document.getElementById("titulo").innerHTML = "Bem-vindo ao centro da Nike"
}

function Reset2() {
    const titulo = document.getElementById("titulo")

    titulo.style.color = "black"
    titulo.style.fontSizet = "20px"
}

function TestInput() {
    document.getElementById("input").value = "Bem-vindo ao centro"
}