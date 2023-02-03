/* Podemos escrever funções dessa forma tbm
Arrow Function
const adicionarCarro = () => {
    
} */
let LISTA_CARROS = []
let LISTA_VEICULOS = [
    {
        id: 'valorHoraMoto',
        textoPergunta: 'Qual valor da hora moto'
    },
    {
        id: 'valorHoraCarro',
        textoPergunta: 'Qual valor da hora carro'
    }
]

//let valorHora = prompt('Qual Valor da hora? ')
function limparCampos() {
    document.getElementById('placa').value = ''
    document.getElementById('modelo').value = ''
    document.getElementById('marca').value = ''
    document.getElementById('cor').value = ''
}


function adicionarCarro() {
    let placaInput = document.getElementById('placa').value
    let modeloInput = document.getElementById('modelo').value
    let marcaInput = document.getElementById('marca').value
    let corInput = document.getElementById('cor').value

    if (placaInput == "" || placaInput == null || placaInput == undefined) {
        alert('A placa é obrigatoria!!!!!!')
        return
    }

    const carro = {
        placa: placaInput,
        modelo: modeloInput,
        marca: marcaInput,
        cor: corInput,
        horaEntrada: new Date()
    }

    LISTA_CARROS.push(carro)

    limparCampos()

    montarLista()
}


function montarLista() {
    if (LISTA_CARROS.length > 0) {
        const elementoLista = document.getElementById('listaCarros')
        elementoLista.innerHTML = ''
        for (let index = 0; index < LISTA_CARROS.length; index++) {
            const carro = LISTA_CARROS[index];
            //console.log(carro)
            //const aux = '<div> Placa: ' + carro.placa + ' - Cor: ' + carro.cor + ' - Marca: ' +  carro.marca + ' - Modelo: ' + carro.modelo + '</div>'
            const item = `<div>Placa: ${carro.placa} - Cor: ${carro.cor} - Marca: ${carro.marca} - Modelo: ${carro.modelo} </div>`
            elementoLista.innerHTML += item
        }
    }
}

function pegaCampo(id) {
    return document.getElementById(id)
}

let cobrarCarro = () => {
    let placaInput = pegaCampo('placaCobrarCarro').value
    for (let index = 0; index < LISTA_CARROS.length; index++) {
        const carro = LISTA_CARROS[index];

        if (carro.placa == placaInput) {
            let horaSaida = new Date()
            let horaEmMilisegundos = horaSaida - carro.horaEntrada
            //Conveter de miliSegundos para segundos
            let horaEmSegundos = horaEmMilisegundos / 1000
            //converter de segundos para minutos
            let horaEmMinutos = horaEmSegundos / 60
            // convert de muntos para hora
            let horas = horaEmMinutos / 60

            let valorApagara = valorHora * horas
            console.log(valorApagara);
            console.log(horas);



        }
        else if (!placaInput) {
            alert('uai')
        }
    }
}

