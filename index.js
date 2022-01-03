
let incrementBtn = document.getElementById("increment-btn")
let countEl = document.getElementById("count-el")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")

incrementBtn.addEventListener('click', increment)
saveBtn.addEventListener('click', save)

let peopleCount = 0

function increment() {
  peopleCount++
  countEl.textContent = peopleCount
}

function save() {
  let countStr = ` ${peopleCount} - `
  saveEl.textContent += countStr

  peopleCount = 0
  countEl.textContent = peopleCount
}