var cardId = document.getElementById("cardId");
var cardStyle = document.getElementById("cardStyle");

// console.log(cardId);
// console.log(cardStyle);

function setCard() {
  var card = document.getElementById(cardId.value);
  console.log(card);
  card.style.color = cardStyle.value;
}


