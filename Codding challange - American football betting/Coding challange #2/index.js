'use strict'

// We get some data about some particular football game from a web service
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski'
    ],
    [
      'Burki',
      'Schulz',
      'Humels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze'
    ]
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Humels'],
  date: 'Feb 3rd 2023',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
}


/*
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lwandowski")
2. Use a loop to calculate the average odd and log it to the console
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrissia Dortmund: 6.5
Get the team names directly from the game object, don't hardcore them (except for "draw") 
HINT: Note how the odds and the game object have the same property names
*/

// 1.
console.log(`\n---- 1. ----`)
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`)
}

// 2.
console.log(`\n---- 2. ----`)
let average = Object.values(game.odds)

let sum = 0
for (const averageOdds of average) {
  sum += averageOdds
}
sum /= average.length
console.log(`${sum}`)

// 3.
console.log(`\n---- 3. ----`)

for (let [team, odd] of Object.entries(game.odds)) {
  console.log(team)
  const teamStr = team == `x` ? `draw` : `victory ${game.odds[team]}`
  console.log(`Odd of ${teamStr} ${odd}`)
}





