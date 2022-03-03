function entrar(event){
    event.preventDefault()

    const form = document.querySelector('#form')
    var login = "tel@mis"
    var senha = "tel@2022"
    var campologin = document.getElementById("text").value
    var camposenha = document.getElementById("password").value

    if (campologin === login &&
        camposenha === senha) {
            window.location.href = 'index.html'
            console.log("funcionou")
        } else {
            alert("LOGIN OU SENHA INCORRETO")
        }

}

const form = document.querySelector('#form')
form.addEventListener('submit', entrar)

