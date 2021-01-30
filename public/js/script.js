//Alterna entre as paginas do menu
function abreComunicados(){
    let paginaComunicados = document.getElementById("comunicados")
    paginaComunicados.style.display = "block"

    let paginaServicos = document.getElementById("servicos")
    paginaServicos.style.display = "none"
}

function abreServicos(){
    let paginaServicos = document.getElementById("servicos")
    paginaServicos.style.display = "block"

    let paginaComunicados = document.getElementById("comunicados")
    paginaComunicados.style.display = "none"
}
