

function verificar() {
    var pais = document.getElementById('pais')
    var res = document.getElementById('res')
    var txpais = pais.value.toUpperCase()

    res.innerHTML = `Você nasceu no(a) ${txpais} <br>`

    if (txpais != "BRASIL") {
        res.innerHTML += 'Puts, é gringo'
    } else {
        res.innerHTML += 'Cê é brasileiro, tamo junto!'
    }
}