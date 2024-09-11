const start = () => {
    while(true) {
        let opcao = "sair"
        switch(opcao) {
            case "cadastrar":
                console.log("Cadastrar")
                break

            case "listar":
                console.log("Listar")
                break

            case "sair":
                return
        }
    }
}

start()