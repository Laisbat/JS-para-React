import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    console.log(e.target);
  };

  return /*html*/ `
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame("Logo do Javascript", "javascript")}
      </div>
    </article>
  `;
}

export default CardFrontBack;
