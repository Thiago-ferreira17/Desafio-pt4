const result = document.querySelector('.result')

const myScore = document.querySelector('#human-score')

const AlexaScore = document.querySelector('#machine-score')

let myScoreNumber = 0
let AlexaScorenumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {

    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {

    if (human === machine) {

        result.innerHTML = "Deu empate !"

    } else if (

        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')

    ) {
        myScoreNumber ++
        myScore.innerHTML = myScoreNumber
        result.innerHTML = "Você ganhou !"
    } else {
        AlexaScorenumber ++
        AlexaScore.innerHTML = AlexaScorenumber
        result.innerHTML = "Você perdeu para Alexa !"
    }
    console.log('Humano: ' + human + "Máquina: " + machine)
}