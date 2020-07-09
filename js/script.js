var arNum = [];
for (var i = 0; i < 5; i++) {
  arNum.push(getRandomIntInclusive(10, 99));
}

alert(arNum);

// prompt 5 volte
setTimeout(arrayMy, 30000);

function arrayMy(){
  var counter = 0;
  var indovinati = [];
  var arUt = [];
  for (var j = 0; j < 5; j++) {
    var untenteNum = parseInt(prompt('Inserisci un numero da quelli che hai visto'));
    // devo comparare ogni numero inserito dal utente con array del alert se coincide il numero si aggiunge nel array "indovinati"
    if(includeNumero(untenteNum, arNum) == true){
      indovinati.push(untenteNum);
      counter++;
    }
  }

  // return arUt; come portare fuori array dopo tot secondi, senza richiamare un altra volta la funzione??


  // quand finisce il ciclo stampare il risultato
  console.log('Sei riuscito a memorizzare ' + counter + ' numeri, sono seguenti: ' + indovinati);

  }


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function includeNumero(promptUtente, array) {
  var uguali = false;
  var i = 0;
  while(uguali == false && i < array.length){
    if (array[i] == promptUtente)
    uguali = true;
    i++;
  }
return uguali;
}
