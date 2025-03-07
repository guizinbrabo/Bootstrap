function limparinput() {
    let certeza = confirm("tem certeza que deseja limpar todos os campos?")
    if (certeza) {
        document.getElementById("inputEmail4").value = ""
        document.getElementById("inputPassword4").value = ""
        document.getElementById("inputAddress").value = ""
        document.getElementById("inputAddress2").value = ""
        document.getElementById("inputCity").value = ""
        document.getElementById("inputCEP").value = ""


    }
}
function mudarCor(id_label) {
    document.getElementById(id_label).style.color = "red"
}