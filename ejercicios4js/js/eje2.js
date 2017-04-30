/*2. Partiendo de la función anterior, modíficala para que además las cartas
 rojas sumen el doble. Prueba a invocarla con varias manos de cartas.*/

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
 }]


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


 console.log(puntHandOfCards(hand1));
 console.log(puntHandOfCards(hand2));
