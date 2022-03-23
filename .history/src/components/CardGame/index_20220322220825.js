import "./style.css";

function CardGame(icon) {
  return /*html*/ `
    <article class="card-game">
      <img src="images/${icon}.png" alt="Logo da Alura">
    </article>
  `;
}

export default CardGame;
