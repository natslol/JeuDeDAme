var pion_noir = document.getElementsByName('pion_noir')
var pion_blanc = document.getElementsByName('pion_blanc')

function tourBlanc() {
    pion_noir.forEach(pion => {
        pion.setAttribute('draggable', 'false')
    });
    pion_blanc.forEach(pion => {
        pion.setAttribute('draggable', 'true')
    });
}

function tourNoir() {
    pion_noir.forEach(pion => {
        pion.setAttribute('draggable', 'true')
    });
    pion_blanc.forEach(pion => {
        pion.setAttribute('draggable', 'false')
    });
}