const main = document.getElementById('main')
const placarTag = document.getElementById('placar')
const buttonEncerrar = document.getElementById('encerrar')
// const buttonIniciar = document.getElementById('iniciar')
let click01 = null
let click02 = null
let encontrados = 0
let placar = 0

renderizarCartas()

buttonEncerrar.addEventListener('click', () => {
  location.assign('./index.html')
})

// buttonIniciar.addEventListener('click', () => {
//   window.assign('../../jogo.html')
// })

function renderizarCartas() {
  const arrDuplicado = [...personagens, ...personagens]
  const personagensEmbaralhados = shufleArray(arrDuplicado)
  console.log(personagensEmbaralhados)

  for (let i = 0; i < personagensEmbaralhados.length; i++) {
    let carta = document.createElement('img')

    carta.id = personagensEmbaralhados[i].id

    carta.addEventListener('click', clickCarta)
    carta.src = './img/QuestionBlock.png'

    main.appendChild(carta)
  }
}

function clickCarta(event) {
  const imgClicada = event.target
  let idClicado = event.target.id

  let personagemClicado = personagens.find(elemento => elemento.id == idClicado)

  imgClicada.src = personagemClicado.img

  if (click01 == null) {
    click01 = imgClicada
  } else {
    click02 = imgClicada
    testPar()
  }
}

function testPar() {
  if (click01.id == click02.id) {
    console.log('Encontrei um par!')
    encontrados++
    click01 = null
    click02 = null

    if (encontrados == 4) {
      // setTimeout(() => {
      //   alert('Parabéns!')
      // }, 500)

      setTimeout(() => {
        placar++
        placarTag.innerHTML = placar
        encontrados = 0
        main.innerHTML = ''
        renderizarCartas()
      }, 500)
    }
  } else {
    setTimeout(() => {
      click01.src = './img/QuestionBlock.png'
      click02.src = './img/QuestionBlock.png'
      console.log('Não é par!')
      click01 = null
      click02 = null
    }, 1000)

    console.log('Não é par!')
  }
}

function shufleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
