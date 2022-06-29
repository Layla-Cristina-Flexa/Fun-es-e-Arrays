let nomes = ['Rafael', 'Manoel', 'Daniel']
function positions(nome){
    let posicao = nome

    if (nome[1] == 'Daniel'){
        let primeiro = nome[0]
        nome[0] = 'Daniel'
        nome [1] = primeiro

    }else if (nome[2] == 'Daniel'){ 
        let primeiro = nome[1]
        nome[1] = 'Daniel'
        nome [2] = primeiro
    }
    else{
        return 'Daniel é o vencedor'
    }
return `1ª Lugar: ${posicao[0]}, 2ª Lugar: ${posicao[1]}, 3ª Lugar: ${posicao[2]}`
}
console.log (positions(nomes))