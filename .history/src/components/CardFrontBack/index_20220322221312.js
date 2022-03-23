import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  return /*html*/ `
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame("Logo do Javascript", "javascript")}
    </article>
  `;
}

export default CardFrontBack;
