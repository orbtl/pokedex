import React, { Component } from "react";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import ShinyView from "./ShinyView";
import Unselectedview from "./UnselectedView";
import Pokemon from "../Pokemon";
import "./styles/App.css";
import DropDown from "./DropDown";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: "unselected",
      type: {},
      isShiny: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleTypeClick = this.handleTypeClick.bind(this);
    this.handleShinyClick = this.handleShinyClick.bind(this);
    this.handleOnTypesClicker = this.handleOnTypesClicker.bind(this);
  }
  handleOnTypesClicker() {
    console.log();
  }

  handleShinyClick() {
    this.setState({ isShiny: !this.state.isShiny });
  }
  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }
  handleTypeClick(type) {
    fetch(`https://pokeapi.co/api/v2/type/${type}/pokemon/[0]/url/`)
      .then(res => res.json())
      .then(data => {
        const type = new Pokemon(data);
        this.setState({ type });
      })
      .catch(err => console.log(err));
    console.log({ type });
  }

  render() {
    if (this.state.pokemon === "unselected") {
      return (
        <div className="App">
          <DropDown />

          <PokeList handleOnClick={this.handleOnClick} />
          <Unselectedview pokemon={this.state.pokemon} />
        </div>
      );
    } else if (this.state.isShiny === false) {
      return (
        <div className="App">
          <DropDown />
          <PokeList handleOnClick={this.handleOnClick} />
          <DetailView
            pokemon={this.state.pokemon}
            handleTypeClick={this.handleTypeClick}
            handleShinyClick={this.handleShinyClick}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <DropDown />

          <PokeList handleOnClick={this.handleOnClick} />
          <ShinyView
            pokemon={this.state.pokemon}
            handleTypeClick={this.handleTypeClick}
            handleShinyClick={this.handleShinyClick}
          />
        </div>
      );
    }
  }
}

export default App;
