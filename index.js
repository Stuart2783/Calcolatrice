/*document.getElementById("rachel").addEventListener("click", displayDate1);
var nome="mirko";
function displayDate1() {
    
    var altezza=180;
    var altInMetri=altezza/100;
    alert("Sono alto " + altInMetri +"!");
}
document.getElementById("monica").addEventListener("click", displayDate2);

function displayDate2() {
    alert("Hello! I am monica!");
}
document.getElementById("chandler").addEventListener("click", displayDate3);

function displayDate3() {
    alert("Hello! I am chandler!");
}
document.getElementById("joey").addEventListener("click", displayDate4);

function displayDate4() {
    alert("Hello! I am joey!");
}*/

/*var result = document.getElementById('metri');
document.getElementById("converti").addEventListener("click", displayDate5);
function displayDate5() {

    var altezza=document.getElementById('cm').value;
    var altInMetri=altezza/100;
    result.textContent = altInMetri;
}


function grafico(x,y) {
    console.log("la x è: " + x + " il valore della y é: " + y);
}


var arrx = [1,22,3,44,5];
var arry = [15,52,3];
var arrTot = [];
var somma = 0;
for (let index = 0; index < arrx.length; index++ ) {
    for (let index1 = 0; index1 < arry.length; index1++ ){
        if (index1 %2 === 0 && arrx[index] %2 === 0){
            somma = somma + (arrx[index] * arry[index1]);
            arrTot.push(arrx[index] * arry[index1])
        }
        
        
    }
    
    //grafico(arrx[index],arry[index]
    
}
arrx = arrx.concat(arry);
console.log("la somma è: " + somma)
console.log("la somma parziale è: " + arrx)

var persone = []
var persona1 = {
    nome: 'Stu',
    cognome: 'Torna',
    eta: 33,
    altezza: 1.85,
    hobby: ["calcetto", "basket", "tennis", "calcetto"]
}

var persona2 = {
    nome: 'mirko',
    cognome: 'lazza',
    eta: 32,
    altezza: 1.81,
    hobby: ["calcetto", "basket", "porno","calcetto","calcetto" ]
}
var persona3 = {
    nome: 'elia',
    cognome: 'varda',
    eta: 30,
    altezza: 1.80,
    hobby: ["calcetto", "basket"]
}

persone = [persona1, persona2, persona3];
document.getElementById('persone').value =  JSON.stringify(persone);
console.log(persone)
var temp={
    nome:persone[0].nome,
    eta:persone[0].eta,
    altezza:persone[0].altezza
}
var somma = 0
var tempsomma = 0

for (let index = 0; index < persone.length; index++) {
    tempsomma = 0
    for (let index2 = 0; index2 < persone[index].hobby.length; index2++) {
        if (persone[index].hobby[index2] === "calcetto") {
            tempsomma++;
        }
            
    }
    if (index === 0) {
        temp = {
            nome:persone[index].nome,
            n: tempsomma
        }
        somma = tempsomma
    }
    if (tempsomma < somma ) {
        temp = {
            nome:persone[index].nome,
            n: tempsomma
        }
        somma = tempsomma;
    }
}

console.log("il signor " +temp.nome + " ha come hobby il calcetto " +temp.n + " volte")
document.getElementById("submit").addEventListener("click", aggiungiNuovaPersona);

function aggiungiNuovaPersona() {

    if(document.getElementById('name').value && document.getElementById('surname').value && document.getElementById('age').value>17 && document.getElementById('height').value>1.60) {
        var select = document.getElementById('hobby');
        var result = [];
        var options = select && select.options;
        var opt;

        for (var i=0, iLen=options.length; i<iLen; i++) {
            opt = options[i];

            if (opt.selected) {
            result.push(opt.value || opt.text);
            }
        }

        var persona = {
            nome: document.getElementById('name').value,
            cognome: document.getElementById('surname').value,
            eta: document.getElementById('age').value,
            altezza: document.getElementById('height').value,
            hobby: result
        }
    
        persone.push(persona)
        document.getElementById('persone').value =  JSON.stringify(persone)   
    }else if (document.getElementById('age').value<18) {
        alert("Devi essere maggiorenne!")
    }else if (document.getElementById('name').value!=="" || document.getElementById('surname').value!=="") {
        alert("Completa tutti i campi!")
    }
    else {
        alert("Sei nano!")
    }
}


/*for (let index = 0; index < persone.length; index++) {
    for (let index2 = 0; index2 < persone[index].hobby.length; index2++) {
        if (persone[index].hobby[index2] === "porno") {
            console.log("l'hobby di " + persone[index].nome + " è " + persone[index].hobby[index2])
        }
    }
        
    
}



/*for (let index = 0; index < persone.length-1; index++ ) {
    if (temp.eta >= persone[index+1].eta && temp.altezza > persone[index+1].altezza)  {
        temp={
            nome:persone[index+1].nome,
            eta:persone[index+1].eta,
            altezza:persone[index+1].altezza
        }

    }

}

for (let index = 0; index < persone.length; index++ ) {
    if (persone[index].eta %2 === 0)  {
        console.log("l'eta pari è: " +persone[index].nome)
    }      
}        




/*var temp=0;
for (let index = 0; index < persona1.hobby.length; index++ ) {
    temp=index+1
    console.log("hobby num " + temp + 'è: ' +persona1.hobby[index])
}


for (let index = persona1.hobby.length-1; index > -1; index-- ) {
    temp=index+1
    if (persona1.hobby[index] === "calcetto" && index !== 0) {
        console.log("hobby è calcetto")
    }else {
        console.log("hobby num " + temp + ' è: ' +persona1.hobby[index])
    }

    
}

if (persona1.eta > persona2.eta) {
    console.log( persona2.nome+ " è piu giovane di " +persona1.nome)
}*/


/*var boolean = true

function stampaNomi(nome) {
    console.log("Mi chiamo: " + nome)
}
function nomiS(nome) {
    console.log("Questo nome inizia con la s: " + nome)
}
function nomeLungo(nome) {
    console.log("Questo nome ha più di 5 caratteri: " + nome)
}
nomi.sort();
console.log(nomi)

var nomiB = []
var numeri = []
var length;

console.log(nomi[4])

for (index = 0; index < nomi.length; index++) {
    if (!isNaN(nomi[index])) {
        numeri.push(nomi[index])
    }else {
        nomiB.push(nomi[index])
    }
}

console.log("I numeri sono: " + numeri + "e i nomi sono: " + nomiB)*/

// var nomi = ["stefano", 12, 25, "elia", "anna", "giulia", "natalia", 1]
// var nomiB = ["dio", 12, 1, "elia", "anna", "anna", "elia", 1, 12]
// var somma = 0

// for (let index = 0; index < nomi.length; index++) {
//     for (let index2 = 0; index2 < nomiB.length; index2++) {
//         if (nomi[index] === nomiB[index2]) {
//             somma = somma + 1
//         }
//     }

//     if (somma > 0) {
//         console.log(nomi[index] + " è presente " + somma + " volte")
//         somma = 0
//     }
//     else {
//         console.log(nomi[index] + " non è presente in nomiB")
//     }


// }

/*var lista1 = []
var lista2 = []

document.getElementById("buttonA").addEventListener("click", aggiungi1);

function aggiungi1() {
    var val = document.getElementById('listaA').value
    lista1.push(val)
    document.getElementById('print1').innerHTML  =  JSON.stringify(lista1);
}

document.getElementById("buttonB").addEventListener("click", aggiungi2);

function aggiungi2() {
    var val = document.getElementById('listaB').value
    lista2.push(val)
    document.getElementById('print2').innerHTML  =  JSON.stringify(lista2);
}*/



document.getElementById("somma").addEventListener("click", somma);

var risultato = 0
var pippo = true


function somma() {
    risultato = parseInt(document.getElementById("number1").value) + risultato
    document.getElementById("number1").value = ""
    calcolo = "somma"
  
}


document.getElementById("sottrazione").addEventListener("click", sottrazione);



function sottrazione() {
    if (pippo) {
        risultato = risultato + parseInt(document.getElementById("number1").value) 
        document.getElementById("number1").value = ""
        pippo = false
    } else {
        risultato = risultato - parseInt(document.getElementById("number1").value)
        document.getElementById("number1").value = ""
    }
    calcolo = "sottrazione"
    

  
}

document.getElementById("prodotto").addEventListener("click", prodotto);



function prodotto() {
    if (pippo) {
        risultato = parseInt(document.getElementById("number1").value)
        document.getElementById("number1").value = ""
        pippo = false
    } else {
        risultato = risultato * parseInt(document.getElementById("number1").value)
        document.getElementById("number1").value = ""
    }
    calcolo = "prodotto"
    

  
}

document.getElementById("quoziente").addEventListener("click", quoziente);



function quoziente() {
    if (pippo) {
        risultato = parseInt(document.getElementById("number1").value)
        document.getElementById("number1").value = ""
        pippo = false
    } else {
        risultato = risultato / parseInt(document.getElementById("number1").value)
        document.getElementById("number1").value = ""
    }
    calcolo = "quoziente"

  
}
var calcolo = ""


document.getElementById("totale").addEventListener("click", result);

function result() {
    if (parseInt(document.getElementById("number1").value)) {
        if (calcolo === "somma") {
            document.getElementById("result").innerHTML = risultato + parseInt(document.getElementById("number1").value)
        } else if (calcolo === "sottrazione") {
            document.getElementById("result").innerHTML = risultato - parseInt(document.getElementById("number1").value)
        } else if (calcolo === "prodotto") {
            document.getElementById("result").innerHTML = risultato * parseInt(document.getElementById("number1").value)
        } else if(calcolo === "quoziente") {
            document.getElementById("result").innerHTML = risultato / parseInt(document.getElementById("number1").value)
        }
    }else{
        document.getElementById("result").innerHTML = "Inserisci un cazzo di numero!!! Negro"
    }
  
}

document.getElementById("refresh").addEventListener("click", refresh);

function refresh() {
    document.getElementById("number1").value = "";
    document.getElementById("result").innerHTML = "";
    risultato = 0;
    calcolo = "";
    pippo = true;
}