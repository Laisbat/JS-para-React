import "./style.css";

function CardGame(alt = "Logo da Alura", icon = "alura-pixel") {
  return /*html*/ `
    <article class="card-game">
      <img src="images/${icon}.png" alt=${alt}>
    </article>
  `;
}

export default CardGame;
