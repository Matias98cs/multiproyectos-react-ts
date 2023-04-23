import { useState } from "react";
import { Link } from "react-router-dom";

const POKEMONS = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement;
};

export default function Pokemon() {
  const [hasWon, toggleWon] = useState(false);

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();

    const { pokemon } = event.currentTarget;

    if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
      toggleWon(true);
      alert(`You Won!`);
    } else {
      alert(`Wrong answer!`);
      pokemon.value = "";
    }
  }

  return (
    <>
      <Link
        to={`/`}
        style={{
          position: "absolute",
          left: "0",
          marginLeft: "1rem",
          top: "0",
          color: "black",
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "1.2rem",
          backgroundColor: "white",
          textDecoration: "none",
        }}
      >
        Volver
      </Link>

      <div
        style={{
          display: "flex",
          gap: 12,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width={412}
          height={412}
          style={{
            imageRendering: "pixelated",
            filter: hasWon ? "" : "brightness(0) invert(1)",
          }}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            MATCH + 1
          }.png`}
          alt=""
        />
        {hasWon ? (
          <button style={{ width: "100%" }} onClick={() => location.reload()}>
            Play Again
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" name="pokemon" autoFocus />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </>
  );
}
