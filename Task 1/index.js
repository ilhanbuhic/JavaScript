// Make 2 arrays that contain names and heights of people. Loop through these arrays, so that each person in array get it's own height

// 1. Making an array with names
const names = [
  "James",
  "Robert",
  "John",
  "Michael",
  "David",
  "William",
  "Richard",
  "Mary",
  "Patricia",
  "Jennifer",
  "Elizabeth",
  "Joseph",
  "Jessica",
  "Thomas",
  "Sarah",
  "Charles",
  "Christopher",
  "Nancy",
  "Lisa",
  "Betty",
]

// 2. Making an array with heights
const heights = [
  153, 142, 145, 167, 164, 133, 174, 143, 187, 152, 173, 146, 162, 173, 149,
  169, 171, 155, 172, 166,
]

const tabela = document.createElement("table")
const tr = document.createElement("tr")
const th1 = document.createElement("th")
const th2 = document.createElement("th")
th1.innerHTML = "Ime"
th2.innerText = "Visina"

document.querySelector("body").appendChild(tabela)
tabela.appendChild(tr)
tr.appendChild(th1)
tr.appendChild(th2)

// 3. Looping through 'names' array and adding the values of 'heights' array
for (let i = 0; i < names.length; i++) {
  const tr = document.createElement("tr")
  tr.classList.add("tr-el")
  const td1 = document.createElement("td")
  td1.classList.add("td1")
  td1.innerText = names[i]

  const td2 = document.createElement("td")
  td2.classList.add("td2")
  td2.innerText = heights[i]

  tabela.appendChild(tr)
  tr.appendChild(td1)
  tr.appendChild(td2)
}
