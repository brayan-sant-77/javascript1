function estacao() {
   let mes =(prompt('Escreva o mês por extenso:'))
   let saida = document.querySelector('#saida')
   let estacao
   switch (mes.toUpperCase()) {
        case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO':
            estacao = 'Verão'
            break
        case 'MARÇO': case 'ABRIL': case 'MAIO':
            estacao = 'Outono'
            break
        case 'JUNHO': case 'JULHO': case 'AGOSTO':
            estacao = 'Inverno'
            break
        case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
            estacao = 'Primavera'
            break
        default:
            estacao = 'INDEFINIDA'
            break
   }
   saida.innerHTML =  `<p> No mês de <strong> ${mes} </strong> a estação é <strong> ${estacao} </strong>`
}