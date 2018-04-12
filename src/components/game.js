import React, { Component } from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


class Game extends Component {
  constructor(props) {
  super(props);

    this.state = {
      guesses: [],
      guess: null,
      count: null,
      randomNum: Math.floor(Math.random() * 100 + 1),
      feedback: 'Make your guess!',
      modal: false
    }
  }

  onSubmit(userGuess){
     const guesses = [...this.state.guesses, userGuess];
     const num = Math.abs(this.state.randomNum - userGuess)
    this.setState({
      guess: userGuess,
      guesses: guesses,
      count: guesses.length
    })
    if( this.state.randomNum.toString() === userGuess) {
      this.setState({
        feedback: 'winner winner chicken dinner'
      })
    } else if( num < 25) {
      this.setState({
        feedback: 'hot'
      })
    } else if( num > 25) {
      this.setState({
        feedback: 'cold'
      })
    }
  }

  showModal(){
    this.setState({
      modal: !this.state.modal
    })
  }

  resetGame(){
    this.setState({
      guesses: [],
      guess: null,
      count: null,
      randomNum: Math.floor(Math.random() * 100 + 1),
      feedback: 'Make your guess!',
      modal: false
    })
  }

  render (){

    return (
        <div>
            <Header visability={this.state.modal} toggleModal={()=>this.showModal()} restartGame={()=>this.resetGame()}/>
            <GuessSection feedback={this.state.feedback} onSubmit={(userGuess)=>this.onSubmit(userGuess)}/>
            <GuessCount count={this.state.count} />
            <GuessList guesses={this.state.guesses} />
        </div>
      );
  }
}

export default Game
