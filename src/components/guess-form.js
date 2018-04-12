import React from 'react';

import './guess-form.css';

function GuessForm(props) {

    return (
        <form onSubmit={(e) => {
          e.preventDefault()
          let userGuess = e.target.userGuess.value;
          props.onSubmit(userGuess)
          e.target.userGuess.value = ''
          e.target.userGuess.focus()
        }}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

export default GuessForm
