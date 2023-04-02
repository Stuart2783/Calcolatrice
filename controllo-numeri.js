document.getElementById("check").addEventListener("click", controllo);

var soluzione = Math.floor(Math.random() * 101);
console.log(soluzione)
var conteggio = 1

function reset(check) {
    if(check) {
        alert("Tentativi finiti!");
    }
    soluzione = Math.floor(Math.random() * 101);
    console.log(soluzione)
    conteggio = 1
}

function controllo() {
    if(conteggio < 6) {
        conteggio++
        if(soluzione === parseInt(document.getElementById("number").value)) {
            alert("Bravo hai indovinato");
            reset(false)
        } else if (parseInt(document.getElementById("number").value) < soluzione) {
            alert("Il numero segreto è più grande, ritenta");
            if(conteggio === 6) {
                reset(true)
            }
        } else {
            alert("Il numero segreto è più piccolo, ritenta");
            if(conteggio === 6) {
                reset(true)
            }
        }
        document.getElementById("number").value = ""; 
    
    }

}