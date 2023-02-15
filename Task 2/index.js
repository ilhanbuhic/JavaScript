const entry = prompt("List your favorite fruit, separated by commas or space")

if (entry === "") {
  alert("No entries")
} else if (entry === null) {
  alert("The user has clicked CANCEL")
}

const sort = entry.split(",").sort()
alert("Your favorite fruit is: " + sort.join(","))
