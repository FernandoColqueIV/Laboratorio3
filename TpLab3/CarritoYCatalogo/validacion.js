const nombre = document.getElementById("txtusuario")
const pass = document.getElementById("txtpassword")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(nombre.value.length <3){
        warnings += `El nombre tiene que tener al menos 4 caracteres <br>`
        entrar = true
    }
    if(pass.value.length < 3){
        warnings += `La contraseña tiene que tener al menos 4 caracteres <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Entrando"
    }
})