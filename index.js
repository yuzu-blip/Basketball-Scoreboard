let scoreH = document.getElementById("scrH")
let scoreG = document.getElementById("scrG")
let countH = 0
let countG = 0

function add1H() {
    countH += 1
    scoreH.textContent = countH
}

function add2H() {
    countH += 2
    scoreH.textContent = countH
}

function add3H() {
    countH += 3
    scoreH.textContent = countH
}

function add1G() {
    countG += 1
    scoreG.textContent = countG
}

function add2G() {
    countG += 2
    scoreG.textContent = countG
}

function add3G() {
    countG += 3
    scoreG.textContent = countG
}

function restart() {
    scoreH.textContent = 0
    scoreG.textContent = 0
    countH = 0
    countG = 0
}