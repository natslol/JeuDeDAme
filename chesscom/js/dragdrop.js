// Déplacement
var div = document.querySelectorAll("divcase")
var every_pion = document.getElementsByName("pion")
var dragged = "";

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    dragged = ev.target
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nb_case = parseInt(ev.target.getAttribute("data-case-number"));
    console.log(nb_case);
    var num_pion = parseInt(dragged.getAttribute("data-index-number"))
    if (dragged.getAttribute("name") == "pion_noir") {
        if (ev.target.getAttribute("class") == "divcase casenoir") {
            if (num_pion == nb_case - 11) {
                dragged.setAttribute("data-index-number", nb_case)
                ev.target.appendChild(document.getElementById(data));
                tourBlanc()
            } else if (num_pion == nb_case - 9) {
                dragged.setAttribute("data-index-number", nb_case)
                ev.target.appendChild(document.getElementById(data));
                tourBlanc()
            } else if (num_pion == nb_case - 22) {
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case - 11}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_blanc") {
                        ev.target.appendChild(document.getElementById(data));
                        case_avant.firstChild.classList.add("byebye")
                        tourBlanc()
                    }
                }
            } else if (num_pion == nb_case - 18) {
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case - 9}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_blanc") {
                        ev.target.appendChild(document.getElementById(data));
                        case_avant.firstChild.classList.add("byebye")
                        tourBlanc()
                    }
                }
                
            }
        }
    } else if (dragged.getAttribute("name") == "pion_blanc") {
        if (ev.target.getAttribute("class") == "divcase casenoir") {
            if (num_pion == nb_case + 11) {
                dragged.setAttribute("data-index-number", nb_case)
                ev.target.appendChild(document.getElementById(data));
                tourNoir()
            } else if (num_pion == nb_case + 9) {
                dragged.setAttribute("data-index-number", nb_case)
                ev.target.appendChild(document.getElementById(data));
                tourNoir()
            } else if (num_pion == nb_case + 22) {
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case + 11}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_noir") {
                        ev.target.appendChild(document.getElementById(data));
                        case_avant.firstChild.classList.add("byebye")
                        tourNoir()
                    }
                }
            } else if (num_pion == nb_case + 18) {
                var case_avant = document.querySelectorAll(`[data-case-number="${nb_case + 9}"]`)[0]
                if (case_avant.firstChild) {
                    if (case_avant.firstChild.getAttribute("name") == "pion_noir") {
                        ev.target.appendChild(document.getElementById(data));
                        case_avant.firstChild.classList.add("byebye")
                        tourNoir()
                    }
                }
            }
        }
    }
}

function can_caught(ev) {
    if(ev.target.parentElement) {
        console.log("sltcv");
    }
}




// function onDragEnd(ev) {

// }

// function onDragStart(ev) {

// }

