import React, { Component } from 'react';
import mathsteps from 'mathsteps-test';
import Radio from './Radio';
import Input from './Input';
import Steps from './Steps';
import './Demo.css';

const EXPRESSION_EXAMPLE = '2x + 2x + x + x';
const EQUATION_EXAMPLE = '2x + 2x = 12';

/** Demo component for displayig the steps and radio buttons for the options**/
class Demo extends Component {
  static displayName = 'Demo';

  state = {
    mathString: EXPRESSION_EXAMPLE,
    steps: [],
    simplify: true,
    solve: false
  };

  handleMathStringChange = e => {
    this.setState({
      mathString: e.target.value
    });
  };

  // Event handler for getting the steps
  getSteps = e => {
    const { simplify, solve, mathString } = this.state;
    let steps;

    if (simplify) {
      steps = mathsteps.simplifyExpression(mathString);
    } else if (solve) {
      steps = mathsteps.solveEquation(mathString);
    }

    if (steps && steps.length !== 0) {
      this.setState({
        steps: steps
      });
    } else {
      alert(
        'OOPS! No steps for ' +
          this.state.mathString +
          '. Try a different equation 😄'
      );
    }
  };

  // Simplify 
  handleSimplify = e => {
    this.setState({
      simplify: e.target.checked,
      solve: false,
      mathString: EXPRESSION_EXAMPLE
    });
  };

  // Solve
  handleSolve = e => {
    this.setState({
      simplify: false,
      solve: e.target.checked,
      mathString: EQUATION_EXAMPLE
    });
  };

  render() {
    const { simplify, solve, mathString, steps } = this.state;

    return (
      <div>
        <div className='container'>
          <h1 className='subheading'>
            Let's get started. Enter a math expression or equation.
          </h1>
          <Input
            value={mathString}
            handleMathStringChange={this.handleMathStringChange}
            getSteps={this.getSteps}
          />
          <Radio
            simplify={simplify}
            solve={solve}
            handleSimplify={this.handleSimplify}
            handleSolve={this.handleSolve}
          />
          <Steps steps={steps} simplify={simplify} solve={this.state.solve} />
        </div>
      </div>
    );
  }
}

export default Demo;
