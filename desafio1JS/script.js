var hora = new Date()
var agora = hora.getHours()
var minutos = hora.getMinutes()
var msg = document.getElementById('msg')
var foto = document.getElementById('foto')

msg.innerHTML = `Agora são ${agora}h${minutos}min`

if (agora < 12) {
    foto.src = 'imagens/ftmanhã.jpg'
    document.body.style.backgroundImage = "url(imagens/ftmanhã.jpg)"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "left center"
    msg.innerHTML += '<p> Bom dia!'
} else if (agora <= 18) {
    foto.src = 'imagens/fttarde.jpg'
    document.body.style.backgroundImage = "url(imagens/fttarde.jpg)"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center center"
    msg.innerHTML += '<p> Boa tarde!'
} else {
    foto.src = "imagens/noite.jpg"
    document.body.style.backgroundImage = 'url(imagens/noite.jpg)'
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
    msg.innerHTML += '<p> Boa noite!'
}