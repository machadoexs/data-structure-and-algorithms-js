import Queue from "../../js/queues/queue.js";

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }
  while(queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminatedList.push(queue.dequeue())
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}

const players = ['Vitor', 'Lais', 'Marcela', 'Allan', 'Vinicius']
const result = hotPotato(players, 7)
result.eliminated.forEach(name => {
  console.log(`${name} was eliminated fro the Hot Potato game. `)
})
console.log(`The winner is: ${result.winner}`)
