btnCalcular.addEventListener('click', function() {
    var minUso = minutos.value
    var frResult = Number(minUso / 15)
    var resultCheio

    if (frResult > frResult.toFixed(0)) {
            resultCheio =  (Number(frResult.toFixed(0)) + 1) 
    }
    else { resultCheio = frResult.toFixed(0)
    }

    valor = resultCheio * 2
    valorBrl = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    mostrarValor = document.getElementById('mostrar')
    mostrarValor.innerHTML = `
    <h5> Valor a pagar ${valorBrl} </h5>
    <p> Total de frações utilizadas: ${resultCheio}</p>
    `
})