class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.type = data.types[0].type.name;
    this.moves = data.moves[0].move.name;
    this.shiny = data.sprites.front_shiny;
  }
}

export default Pokemon;
