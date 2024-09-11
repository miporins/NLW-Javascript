const { select } = require('@inquirer/prompts')

const start = async () => {
    while(true) {
        const opcao = await select({
            message: "O que deseja fazer?",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listas metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })
        
        switch(opcao) {
            case "cadastrar":
                console.log("Cadastrando...")
                break

            case "listar":
                console.log("Listando...")
                break

            case "sair":
                console.log("Saindo...")
                return
        }
    }
}

start()