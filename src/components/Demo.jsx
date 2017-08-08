import React, { Component } from "react";
import styled from "styled-components";
import mathsteps from "mathsteps-test";
import Search from "./Search";
import Steps from "./Steps";
import { media } from "../utils/main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  ${media.handheld`
    font-size: 1em;
  `}
`;

const Heading = styled.h1`
  margin-top: 20px;
`;

class Demo extends Component {
  static displayName = "Demo";

  /**
   * TODO: add an enum or some other construct to prevent both simplify and solve 
   * being both true or both false at the same time.
   */ 
  state = {
    value: "2x + 2x + x + x",
    steps: [],
    simplify: true,
    solve: false,
    error: false
  };

  // Handle input value change
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  // Handle input submission
  handleClick = (e) => {
    const { simplify, solve, value } = this.state;
    let steps;

    if (simplify) {
      steps = mathsteps.simplifyExpression(value);
    } else if (solve) {
      steps = mathsteps.solveEquation(value);
    }

    if (steps.length !== 0) {
      this.setState({
        steps: steps,
        error: false
      });
    } else {
      this.setState({
        error: true
      })
    }
  };

  // Change mode to simplify
  handleSimplify = (e) => {
    this.setState({
      simplify: e.target.checked,
      solve: false,
      value: "2x + 2x + x + x"
    });
  };

  // Change mode to solve
  handleSolve = (e) => {
    this.setState({
      simplify: false,
      solve: e.target.checked,
      value: "2x + 2x = 12"
    });
  };

  // Render radio buttons
  renderRadio = () => (
    <div className="field has-addons">
      <label className="radio options">
        <input
          name="simplify"
          type="radio"
          checked={this.state.simplify}
          onChange={this.handleSimplify}
        />
        {" "}Simplify Expression
      </label>&nbsp;&nbsp;
      <label className="radio options">
        <input
          name="solve"
          type="radio"
          checked={this.state.solve}
          onChange={this.handleSolve}
        />
        {" "}Solve Equation
      </label>
    </div>
	);

  render() {
    const { simplify, value, steps } = this.state;

    return (
      <div>
        <Container>
          <Heading>Let's get started. Enter an equation {""}</Heading>
          <Search 
            value={value}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            error={this.state.error}
          />
          {this.renderRadio()}
          <Steps
            steps={steps}
            simplify={simplify}
            solve={this.state.solve}
          />
        </Container>
      </div>
    );
  }
}

export default Demo;
