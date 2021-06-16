import React, { Component } from "react";
import Team from "../Team/Team";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visitingStats: {
        shots: 0,
        score: 0,
      },
      homeStats: {
        shots: 0,
        score: 0,
      },
    };
  }
  resetButton = (event) => {
    this.setState({
      visitingStats: {
        shots: 0,
        score: 0,
      },
      homeStats: {
        shots: 0,
        score: 0,
      },
    });
  };

  visitorShootBasket = () => {
    let point = 0;
    if (Math.random() < 0.5) {
      point = 1;
    }
    this.setState((currentState) => {
      return {
        visitingStats: {
          shots: currentState.visitingStats.shots + 1,
          score: currentState.visitingStats.score + point,
        },
      };
    });
  };

  homeShootBasket = () => {
    let point = 0;
    if (Math.random() < 0.5) {
      point = 1;
    }
    this.setState((currentState) => {
      return {
        homeStats: {
          shots: currentState.homeStats.shots + 1,
          score: currentState.homeStats.score + point,
        },
      };
    });
  };

  render() {
    return (
      <section className="sectionContainer">
        <h1>{this.props.venue}</h1>

        <div className="visitingTeam">
          <Team
            name={this.props.visitingTeam.name}
            logoSrc={this.props.visitingTeam.logoSrc}
            shots={this.state.visitingStats.shots}
            score={this.state.visitingStats.score}
            shootBasket={this.visitorShootBasket}
          />
        </div>

        <h1>VS</h1>

        <div>
          <button onClick={this.resetButton} forHTML="Reset button">
            Reset
          </button>
        </div>

        <div className="homeTeam">
          <Team
            name={this.props.homeTeam.name}
            logoSrc={this.props.homeTeam.logoSrc}
            shots={this.state.homeStats.shots}
            score={this.state.homeStats.score}
            shootBasket={this.homeShootBasket}
          />
        </div>
      </section>
    );
  }
}

export default Game;
