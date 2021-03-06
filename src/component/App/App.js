import React, { Component } from 'react';
import './App.css';
import FavoriteCreature from '../FavoriteCreature/FavoriteCreature';
import axios from 'axios';

class App extends Component {
  state = {
    enteredCreature: '',
    favoriteCreature: '',
  };

  // tracking what the user enters into the form field
  changeFavoriteAnimal = (event) => {
    this.setState({
      enteredCreature: event.target.value,
    });
  };

  // Saving the creature entered into the form field to local state
  saveCreature = (event) => {
    const creature = this.state.enteredCreature;

    this.setState({
      enteredCreature: '',
      favoriteCreature: creature,
    });
  };

  // React renders the content to the application view
  render() {
    return (
      <div>
        <FavoriteCreature creature={this.state.favoriteCreature} />

        <div className="container">
          <label className="formField">
            <div>Favorite Fantastic Creature:</div>
            <input
              type="text"
              placeholder="Name of creature"
              value={this.state.enteredCreature}
              onChange={this.changeFavoriteAnimal}
            />
          </label>
          <button className="btn" onClick={this.saveCreature}>
            Save My Creature
          </button>
        </div>
      </div>
    );
  }
}

export default App;
