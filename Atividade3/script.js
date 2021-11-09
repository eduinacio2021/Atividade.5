btnCalcular.addEventListener('click', function() {
    var frmNum = num.value
    var result

    if (frmNum % 2 === 0) {
          result = 'Par'
    }
    else { result = 'Ímpar'
    }

    mostrarValor = document.getElementById('mostrar')
    mostrarValor.innerHTML = `
      <p> O número informado é ${result}</p>
    `
})