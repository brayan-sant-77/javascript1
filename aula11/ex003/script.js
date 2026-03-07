
function enviar() {
    var txtv  = document.getElementById('vel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value) // converte o valor de txtv em número
    

    res.innerHTML = `<p> Sua velocidade é atual é de :<strong>${vel}Km/h<br>`
    if (vel >= 70) {
        res.innerHTML += '<p>Você está MULTADO!'
    } else {
        res.innerHTML += '<p>Você está na velocidade permitida.<br>'
    }
    res.innerHTML += '<p>Dirija sempre com cinto de segurança'
}



