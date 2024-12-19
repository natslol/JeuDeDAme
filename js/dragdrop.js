// Déplacement
var div = document.querySelectorAll("divcase")
var every_pion = document.getElementsByClassName("pion")
var dragged = "";
var dragged_base = "";
var eaten = false
var eated = []
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    dragged = ev.target
    dragged_base = + ev.target
}

function drop(ev) {
    ev.preventDefault();
    console.log(dragged.getAttribute("data-type"));
    
    var data = ev.dataTransfer.getData("text");
    var nb_case = parseInt(ev.target.getAttribute("data-case-number"));
    var num_pion = parseInt(dragged.getAttribute("data-index-number"));

    if (ev.target.getAttribute("class") == "divcase casenoir") {
        if (dragged.getAttribute("data-type") == "pion") {
            if ((num_pion == nb_case + 11 || num_pion == nb_case + 9) && dragged.getAttribute("name") == "pion_blanc") {
                if (eaten == false) {
                    dragged.setAttribute("data-index-number", nb_case)
                    dragged.setAttribute('draggable', 'false')
                    moved()
                    devientDameOuPas(ev.target)
                    ev.target.appendChild(document.getElementById(data));
                }
            } else if ((num_pion == nb_case - 11 || num_pion == nb_case - 9) && dragged.getAttribute("name") == "pion_noir") {
                if (eaten == false) {
                    dragged.setAttribute("data-index-number", nb_case)
                    dragged.setAttribute('draggable', 'false')
                    moved()
                    devientDameOuPas(ev.target)
                    ev.target.appendChild(document.getElementById(data));
                }
            } else if (num_pion == nb_case - 22 || num_pion == nb_case - 18 || num_pion == nb_case + 22 || num_pion == nb_case + 18) {
                var new_case_number =  (num_pion == nb_case - 22) ? nb_case - 11 : ((num_pion == nb_case - 18) ? nb_case - 9 : ((num_pion == nb_case + 22) ? nb_case + 11 : nb_case + 9))
                eaten = true
                dragged.setAttribute("data-index-number", nb_case)
                var case_avant = document.querySelector(`[data-case-number="${new_case_number}"]`)
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") != dragged.getAttribute("name")) {
                        eated.push(case_avant.firstChild)
                        moved()
                        devientDameOuPas(ev.target)
                        ev.target.appendChild(document.getElementById(data));
                   }
                }
            }
        } else if (dragged.getAttribute("data-type") == "dame") {
            var new_nb_case = nb_case
            var pions = []
            console.log("num pion: " + num_pion);
            console.log("num case: " + nb_case);
            console.log((num_pion - nb_case) % 11);
            if ((num_pion - nb_case) % 11 === 0) {
                if(nb_case > num_pion) {
                    while(new_nb_case != num_pion) {
                        console.log("slt");
                        console.log(new_nb_case);
                        
                        new_nb_case = new_nb_case - 11
                        var case_avant = document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild
                        if(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild) {
                            if(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild.getAttribute("name") != dragged.getAttribute("name")) {
                                pions.push(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild)
                            }
                        }
                    }
                } else {
                    while(new_nb_case != num_pion) {
                        new_nb_case = new_nb_case + 11
                        var case_avant = document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild
                        if(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild) {
                            if(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild.getAttribute("name") != dragged.getAttribute("name")) {
                                pions.push(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild)
                            }
                        }
                    }
                }
                if (pions.length == 0) {
                    if(eaten == false) {
                        dragged.setAttribute("data-index-number", nb_case)
                        dragged.setAttribute('draggable', 'false')
                        moved()
                        ev.target.appendChild(document.getElementById(data));
                    }
                } else if (pions.length == 1) {
                    eaten = true
                    eated.push(pions[0])
                    dragged.setAttribute("data-index-number", nb_case)
                    moved()
                    ev.target.appendChild(document.getElementById(data));
                }
            } else if ((num_pion - nb_case) % 9 === 0 ) {
                if(nb_case > num_pion) {
                    while(new_nb_case != num_pion) {
                        new_nb_case = new_nb_case - 9
                        var case_avant = document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild
                        if(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild) {
                            if(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild.getAttribute("name") != dragged.getAttribute("name")) {
                                pions.push(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild)
                            }
                        }
                    }
                } else {
                    while(new_nb_case != num_pion) {
                        new_nb_case = new_nb_case + 9
                        var case_avant = document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild
                        if(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild) {
                            if(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild.getAttribute("name") != dragged.getAttribute("name")) {
                                pions.push(document.querySelector(`[data-case-number="${new_nb_case}"]`).firstChild)
                            }
                        }
                    }
                }
                if (pions.length == 0) {
                    dragged.setAttribute("data-index-number", nb_case)
                    dragged.setAttribute('draggable', 'false')
                    moved()
                    ev.target.appendChild(document.getElementById(data));
                } else if (pions.length == 1) {
                    eated.push(pions[0])
                    dragged.setAttribute("data-index-number", nb_case)
                    moved()
                    ev.target.appendChild(document.getElementById(data));
                }
            }
        }
    }
}


var tourBlancOuPas = true

document.addEventListener('keyup', event => {
    if (event.code == "Space") {
        eaten = false
        eated.forEach((element) => {
            element.remove()
        })
        eated.length = 0
        if (tourBlancOuPas === true) {
            tourNoir()

        } else if (tourBlancOuPas === false) {
            tourBlanc()
        }
    }
})

function moved() {
    Array.from(every_pion).forEach((element) => {
        if (element.getAttribute("name") == dragged.getAttribute("name")) {
            if(element != dragged) element.setAttribute('draggable', 'false')
        }
    });
}

function devientDameOuPas(casedame) {
    var case_number = casedame.getAttribute("data-case-number")
    var ctx = dragged.getContext("2d")
    if (dragged.getAttribute("name") == "pion_blanc") {
        if ((case_number >= 0 && case_number <= 9)) {
            dragged.setAttribute('data-type', "dame")
            ctx.font = "40px TourFout"
            ctx.textAlign = "center";
            ctx.fillStyle = "#000000"
            ctx.fillText("D", 37.5, 55)
        }
    } if (dragged.getAttribute("name") == "pion_noir") {
        if ((case_number >= 90 && case_number <= 99)) {
            dragged.setAttribute('data-type', "dame")
            ctx.font = "40px TourFout"
            ctx.textAlign = "center";
            ctx.fillStyle = "#ffffff"
            ctx.fillText("D", 37.5, 55)
        }
    }
}
