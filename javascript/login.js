cadastroEmail = 0
cadastroSenha = 0
function cadastroLogin() {
    cadastroEmail = emailIpt.value
    cadastroSenha = senhaIpt.value
    console.log (cadastroEmail)
        if (cadastroEmail == "vitor.gsilva@sptech.school" && cadastroSenha == "senha") {
                location.href = 'dashboard.html'
        } else {
            emailIpt.style.backgroundColor = '#ffd9d9'
            emailIpt.value = ''
            credencialErrado.style.display = 'block'
            senhaIpt.style.backgroundColor = '#ffd9d9'
            senhaIpt.value = ''
        }
}
function mudarCor1() {
    emailIpt.style.backgroundColor = '#ffffff'
    credencialErrado.style.display = 'none'
}
function mudarCor2() {
    senhaIpt.style.backgroundColor = '#ffffff'
    credencialErrado.style.display = 'none'
}