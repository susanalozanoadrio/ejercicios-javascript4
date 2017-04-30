/*3. Desarrolla un programa que use la función anterior para puntuar las
manos de cartas de dos jugadores e imprima por consola al ganador, es decir,
 al que obtenga mayor puntuación.*/

function puntHandOfCards(hand) {
  var total = 0;
  for (var i = 0; i < hand.length; i++) {
    var card = hand[i].value;
    if (card === 1) {
      card = 20;
    }
    if (hand[i].suit === "r" || hand[i].suit === "c") {
      card = card * 2;
    }
    total = total + card;
  }
  return total;
}

function winnerHand(hand1, hand2) {
  var totalHand1 = puntHandOfCards(hand1);
  var totalHand2 = puntHandOfCards(hand2);
  if (totalHand1 > totalHand2) {
    win = "Hand1 is the winner";
  } else if (totalHand1 < totalHand2) {
    win = "Hand2 is the winner";
  } else if (totalHand1 === totalHand2) {
    win = "Tie"
  }
console.log(win);
  }

  function program (){
    var hand1 = [{
      suit: "c",
      value: 10
    }, {
      suit: "p",
      value: 4
    }, {
      suit: "r",
      value: 1
    }, {
      suit: "t",
      value: 6
    }, {
      suit: "c",
      value: 5
    }];
    var hand2 = [{
      suit: "r",
      value: 8
    }, {
      suit: "t",
      value: 7
    }, {
      suit: "c",
      value: 5
    }, {
      suit: "c",
      value: 2
    }, {
      suit: "p",
      value: 3
    }];
    puntHandOfCards(hand1,hand2);
    winnerHand(hand1, hand2);
  }

  program();
