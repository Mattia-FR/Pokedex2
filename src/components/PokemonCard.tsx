function PokemonCard({ pokemon }) {
  return pokemon.imgSrc ? (
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <figcaption>Bulbasaur</figcaption>
    </figure>
  ) : (
    <p>???</p>
  );
}

export default PokemonCard;
