import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  return /*html*/ `
    <article class="card-front-back">
      <div class="front">
        ${CardGame()}
      </div>
      <div class="back">
        ${CardGame("Logo do Javascript", "javascript")}
      </div>
    </article>
  `;
}

export default CardFrontBack;
