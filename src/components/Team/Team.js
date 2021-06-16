import React, { Component } from "react";
import "./Team.css";

class Team extends Component {
  //INFORMATION

  //EVENT HANDLERS
  shootBasket = (event) => {
    event.preventDefault();
    this.props.shootBasket();
  };

  render() {
    const { shots, score } = this.props;

    let percentageClass = "";
    if (shots === 0) {
      percentageClass = "Percentage-hide";
    }

    return (
      <section>
        <div className="teamColor">
          <h1>{this.props.team}</h1>
          <img
            className="Team-logo"
            src={this.props.logoSrc}
            alt={this.props.name}
          />
          <div className="shotsColor">
            <p>Shots: {shots}</p>
            <p>Score: {score}</p>
            <p className={percentageClass}>
              Shooting %: {Math.abs((score / shots) * 100).toFixed(0)}{" "}
            </p>
          </div>
          <button onClick={this.shootBasket}>Shoot!</button>
        </div>
      </section>
    );
  }
}

export default Team;
