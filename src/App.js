import React, { Component } from 'react';
import ClickyCard from "./components/Card/Card"
import cards from "./Cards.json";
import Wrapper from "./components/Wrapper/Wrapper"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0,
    messageUpdate: ""
  };

// Clicking function, if you click on a different picture successfully it will add 1 to your state.score 
  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1, messageUpdate: "Good Job!" }, function () {
            console.log(this.state.score);
          });
          //Then it will sort the cards randomly
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        }
        //Otherwise if you did not click on a different card it will run the gameOver function
        else {
          this.gameOver();
          //And setState the score back to 0
          this.setState({score: 0})
        }
      }
    });
  }

  gameOver = () => {
    //When this function is run it will check if the current score is higher than the highscore
    if(this.state.score > this.state.highscore) {

    //If the score is higher then it will overtake the highscore and become the new highscore
      this.setState({highscore: this.state.score, messageUpdate: "Yikes, better luck next time!"}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over: Your score was ${this.state.score}`);
    return true;
  }

  // Mapping over the cards array to get their id and image
  render() {
    return (
    
      <Wrapper>
        <Navbar />
        <Header score={this.state.score} highscore={this.state.highscore} messageUpdate={this.state.messageUpdate}/>
        <div className="container">
        {this.state.cards.map(card => (
          <ClickyCard
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
