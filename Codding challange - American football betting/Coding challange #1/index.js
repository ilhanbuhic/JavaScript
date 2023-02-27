"use strict"

// We get some data about some particular football game from a web service
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Humels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Humels"],
  date: "Feb 3rd 2023",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

/*

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players.
For Bayern Munich (team 1) create one variable 'gk' with the goalkeeper's name and one array
'fieldPlayers' with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team1) used 3 substitute players. So create a new array
'playersFinal' containing all the original team1 players, plus 'Thiago', 'Coutinho', 'Perisic'
5. Based on game.odds object, create one variable for each odd called 'team1', 'draw, 'team2'
6. Write a function 'printGoals' that receives an arbitary number of player names (NOT an array)
and prints each of them to the console, along with the number of goals who were scored
(number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely
to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FO 6: Use players 'Davies', 'Muller', 'Lewandoski' and 'Kimich'. Then, call the function
again with the players from games.scored

*/

// 1.
console.log(`// 1.`)
const [player1, player2] = game.players
console.log(player1, player1)

// 2.
console.log(`// 2.`)
const [goalKeeper, ...fieldPlayers] = player1
console.log(goalKeeper, fieldPlayers)

// 3.
console.log(`// 3.`)
const allPlayers = [...player1, ...player2]
console.log(allPlayers)

// 4.
console.log(`// 4.`)
const playersFinal = [...player1, "Thiago", "Coutinho", "Perisic"]
console.log(playersFinal)

// 5.
console.log(`// 5.`)
const {
  odds: { team1, x: draw, team2 },
} = game
console.log(team1, draw, team2) / 6
console.log(`// 6.`)
function printGoals(...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]} scored a goal`)
  }
  console.log(`${players.length} goals were scored`)
}
printGoals(...game.scored)

// 7.
console.log(`// 7.`)
team1 < team2 && console.log(`Team 1 is more likely to win`)
