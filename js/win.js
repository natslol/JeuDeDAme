var pion_noir = document.getElementsByName("pion_noir")
var pion_blanc = document.getElementsByName("pion_blanc")
var winDiv = document.createElement("div")
var winP = document.createElement("div")
winDiv.setAttribute("id", "windiv")

function ifBlancWin() {
    if (pion_noir.length == 0) {
        winP.textContent += "Victoire des blancs !"
        winDiv.appendChild(winP)
        document.body.appendChild(winDiv)
    }
}

function ifNoirWin() {
    if (pion_blanc.length == 0) {
        winP.textContent += "Victoire des noirs !"
        winDiv.appendChild(winP)
        document.body.appendChild(winDiv)
    }
}
