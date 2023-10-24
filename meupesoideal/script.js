function calcular() {
    let peso = document.querySelector('input#peso')
    let altura = document.querySelector('input#altura')
    if (peso.value.length == 0 && Number (peso.value) == 0 || Number (altura.value) == 0) {
        window.alert ('[ERRO] Valores invalidos! por favor digite valores maiores que 0.')
    } else {
        let res = document.querySelector ('div#res')
        peso = Number (peso.value)
        altura = Number (altura.value)
        let imc = peso / altura**2
        imc = imc.toFixed(2)
        res.innerHTML = `SEU IMC É: ${imc}`

    }
    
}