let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
    return false
    }
}

function inLista (n, l){
    if (l.indexOf(Number(n)) != -1){
    return true
    }else{
    return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild (item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já consta na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0) {
        window.alert('Adicione um valor antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = [0]
        let menor = [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor infomado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores informado é ${media}</p>`
    }
}