let movie = "Lord of the Rings"
// var movie = 'Batman vs Superman' -> ERRO, movie já foi declarada

function starWarsFan() {
  const movie = 'Star Wars' //
  return movie;
}

function marvelFan() {
  movie = 'The Avengers' // reatribuição de valor da variavel da linha 1. Lord of the Rings -> The Avengers
  return movie;
}

function blizzardFan() {
  const isFan = true;
  let phrase = "Warcraft"; // escopo da função

  if (isFan) {
    let phrase = 'initial text' // escopo do if
    phrase = 'For the Horde!' // reatribuindo o valor da variavel linha 19

    console.log('Inside IF ' + phrase) // Inside IF For the Horde!
  }
  phrase = 'For the Alliance!'
  console.log('After if ' + phrase) // After if For the Alliance!
}

console.log(movie) // Lord of the Rings
console.log(starWarsFan()) // escopo local, output: Star Wars
console.log(marvelFan()) // The Avengers
console.log(movie) // The Avengers
blizzardFan()
