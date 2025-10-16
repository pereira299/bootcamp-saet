let form = document.querySelector('form')
let mostraSenha = false;

function entrar(evento){
    evento.preventDefault()
    let email = document.querySelector('input[name="email"]')
    let senha = document.querySelector('input[name="senha"]')

    if(email == null){
        console.error("Email não encontrado")
        return
    }

    if(senha == null) {
        console.error("Senha não encontrada")
        return
    }

    

    let valorEmail = email.value
    let valorSenha = senha.value
    // regexp
    let padrao = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/

    if(!padrao.test(valorEmail)){
        Swal.fire({
            title: "Email inválido",
            icon: "error",
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            position: "bottom",
        })
        return
    }

    let data = {
        email: valorEmail,
        senha: valorSenha
    }

    console.log(data)
    Swal.fire({
        title: "Login realizado com sucesso!",
        icon: "success",
        toast: true,
        showConfirmButton: false,
        timer: 1500,
        position: "bottom",
    })
}


function alternaSenha() {
    let aberto = document.querySelector(".olho-aberto")
    let fechado = document.querySelector(".olho-fechado")
    let campoSenha = document.querySelector('input[name="senha"]')

    if(mostraSenha) {
        aberto.style.display = 'none';
        fechado.style.display = 'block';
        campoSenha.type = "password"
    }else {
        aberto.style.display = 'block';
        fechado.style.display = 'none';
        campoSenha.type = "text"
    }

    mostraSenha = !mostraSenha;
}

form.addEventListener('submit', (e) => entrar(e))
