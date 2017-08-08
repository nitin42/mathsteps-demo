import React, { PureComponent } from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";
import { media, trimAll, trimOne, userFriendlyString, capitalize } from "../utils/main";

const Showsteps = styled.div`
  font-size: 0.8em;
  background-color: black
  color: green;
  height: 500px;
  width: 800px;
  padding: 10px;
  margin-top: 15px;
  border: 0.06px solid #b3b3b3;
  overflow: auto;
  box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.20);
  ${media.handheld`
    font-size: 0.5em;
    height: 300px;
    width: 300px;
  `}
`;

const Description = styled.p`
	font-size: 1em;
	font-weight: bold;
	margin-bottom: 5px;
`

class Steps extends PureComponent {
  static displayName = "Steps";

  static propTypes = {
    steps: PropTypes.array,
    simplify: PropTypes.bool,
    solve: PropTypes.bool
  };

  state = {
    updateSteps: []
  };

  componentWillReceiveProps = nextProps => {
    const { steps, simplify, solve } = this.props;

    if (nextProps.steps !== steps) {
      this.setState({
        updateSteps: nextProps.steps
      });
      console.log(this.state.updateSteps);
    } else if (nextProps.simplify !== simplify || nextProps.solve !== solve) {
      this.setState({
        updateSteps: []
      });
    }
  };

  simplify = (step) => (
		<div>
			<Description>Simplification</Description>
			<p>
      	Previous expression : {trimAll(step.oldNode.toString())}
    	</p>
    	<p>
      	New expression: {trimOne(step.newNode.toString())}
      	({capitalize(userFriendlyString(step.changeType))})
    	</p>
  	</div>
  );

  solve = (step, i) => (
		<div>
    	<strong>
      	Step {i + 1}
    	</strong>
    	<p>
      	Previous expression : {step.oldEquation.print()}
    	</p>
    	<p>
      	New expression: {step.newEquation.print()} {" "}
      	({capitalize(userFriendlyString(step.changeType))})
    	</p>
  	</div>
	);

  render() {
    const { updateSteps } = this.state;
    const { simplify, solve } = this.props;

    const renderer = updateSteps.map((step, i) => {
      return (
        <div key={i} className="steps">
          {simplify
            ? this.simplify(step)
            : solve ? this.solve(step, i) : <div />}
          <br />
        </div>
      );
    });

    return (
      <div>
        <Showsteps>
          {renderer}
        </Showsteps>
      </div>
    );
  }
}

export default Steps;
