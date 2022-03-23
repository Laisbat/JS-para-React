import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  const handleClick = () => {
    console.log("clicked");
  };

  return /*html*/ `
    <article class="card-front-back" onClick="handleClick()">
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
