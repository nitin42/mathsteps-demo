import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../utils/main';
import Demo from './Demo';

const Heading = styled.div`
	font-family: AvenirNext-Regular;
	font-size: 64px;
	color: #4a4a4a;
	letter-spacing: 10.84px;
	margin-top: 30px;
	${media.handheld`
    font-size: 40px;
    letter-spacing: 7px;
    margin-top: 20px;
  `};
`;

const Image = styled.img`
  top: 25px;
  position: relative;
  padding: 5px;
`;

const Quote = styled.p`
	font-family: AvenirNext-Regular;
	font-size: 18px;
	color: #4a4a4a;
	letter-spacing: 5.14px;
	margin-top: 5px;
	padding: 15px;
	${media.handheld`
    font-size: 10px;
    letter-spacing: 1px;
    margin-top: 2px;
    padding: 10px;
  `};
`;

const StyledDiv = styled.div`padding: 20px;`;

const NameSpace = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

class Header extends Component {
	static displayName = 'Header';

	render() {
		return (
			<StyledDiv>
				<NameSpace>
					<Heading>
						Mathsteps
						<Image
							src="https://user-images.githubusercontent.com/5634097/28050123-82c1cdc6-65b0-11e7-8e70-a61f76f40932.png"
						/>
					</Heading>
					<Quote>Step by step math solutions for everyone</Quote>
					<a
						className="button is-primary"
						href="https://github.com/socraticorg/mathsteps/"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</NameSpace>
				<Demo />
			</StyledDiv>
		);
	}
}

export default Header;
