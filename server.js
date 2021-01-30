//Express cria e configura servidor
const express = require("express")
const server = express()

const comunicados = [
   
    {
        img: "/img/ocorrenciaVerde.png",
        titulo: "Titulo do comunicado 1",
        nomePorteiro: "Nome do porteiro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga eveniet ex nemo veritatis voluptas iste nobis rerum molestias numquam, ut fugit blanditiis dolore expedita. Cupiditate porro obcaecati eaque voluptate?",
        botao: "Descartar Comunicado"
    },

    {
        img: "/img/ocorrenciaVerde.png ",
        titulo: "Titulo do comunicado 2",
        nomePorteiro: "Nome do porteiro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga eveniet ex nemo veritatis voluptas iste nobis rerum molestias numquam, ut fugit blanditiis dolore expedita. Cupiditate porro obcaecati eaque voluptate?",
        botao: "Descartar Comunicado"
    },

    {
        img: "/img/ocorrenciaVerde.png",
        titulo: "Titulo do comunicado 3",
        nomePorteiro: "Nome do porteiro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga eveniet ex nemo veritatis voluptas iste nobis rerum molestias numquam, ut fugit blanditiis dolore expedita. Cupiditate porro obcaecati eaque voluptate?",
        botao: "Descartar Comunicado"
    },

    {
        img: "/img/ocorrenciaVerde.png",
        titulo: "Titulo do comunicado 4",
        nomePorteiro: "Nome do porteiro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga eveniet ex nemo veritatis voluptas iste nobis rerum molestias numquam, ut fugit blanditiis dolore expedita. Cupiditate porro obcaecati eaque voluptate?",
        botao: "Descartar Comunicado"
    },
]

const servicos = [
   
    {
        img: "/img/ocorrenciaVerde.png",
        titulo: "Titulo do Serviço 1",
        nomePorteiro: "Nome do porteiro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga eveniet ex nemo veritatis voluptas iste nobis rerum molestias numquam, ut fugit blanditiis dolore expedita. Cupiditate porro obcaecati eaque voluptate?",
        botao: "Descartar Serviço"
    },

    {
        img: "/img/ocorrenciaVerde.png ",
        titulo: "Titulo do Serviço 2",
        nomePorteiro: "Nome do porteiro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga eveniet ex nemo veritatis voluptas iste nobis rerum molestias numquam, ut fugit blanditiis dolore expedita. Cupiditate porro obcaecati eaque voluptate?",
        botao: "Descartar Serviço"
    },

    {
        img: "/img/ocorrenciaVerde.png",
        titulo: "Titulo do Serviço 3",
        nomePorteiro: "Nome do porteiro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga eveniet ex nemo veritatis voluptas iste nobis rerum molestias numquam, ut fugit blanditiis dolore expedita. Cupiditate porro obcaecati eaque voluptate?",
        botao: "Descartar Serviço"
    },

    {
        img: "/img/ocorrenciaVerde.png",
        titulo: "Titulo do Serviço 4",
        nomePorteiro: "Nome do porteiro",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga eveniet ex nemo veritatis voluptas iste nobis rerum molestias numquam, ut fugit blanditiis dolore expedita. Cupiditate porro obcaecati eaque voluptate?",
        botao: "Descartar Serviço"
    },
]

//Configurando arquivos estáticos - (css, script, imagens, etc)
server.use(express.static("public"))

//Configurando o Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

//Criada uma rota "/"
//Capitura o pedido de cliente para responder

server.get("/", function(req, res){

    const reverseComunicados = [...comunicados].reverse()
    let lastComunicados = []
     for(let comunicado of reverseComunicados){
            lastComunicados.push(comunicado)
    }

    const reverseServicos = [...servicos].reverse()
    let lastServicos = []
     for(let servico of reverseServicos){
            lastServicos.push(servico)
    }

    return res.render("index.html", 
    {
        comunicados: lastComunicados, 
        servicos: lastServicos
    })
}),


/*
server.get("/comunicados", function(req, res){

    const reverseComunicados = [...comunicados].reverse()
    let lastComunicados = []
    for(let comunicado of reverseComunicados){
            lastComunicados.push(comunicado)
    }

    return res.render("p-comunicados.html", {comunicados: comunicados.reverse()})
})
*/

//Servidor ligado na porta 3000
server.listen(3000)