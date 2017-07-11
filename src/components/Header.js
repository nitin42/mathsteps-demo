import React, { Component } from 'react';
import './Header.css';

/** Header component */
class Header extends Component {
  static displayName = 'Header';

  render() {
    return (
      <div className='container-two'>
        <div className='main'>
          <div className='heading-mathsteps'>Mathsteps</div>
          <p className='description'>Step by step math solutions for everyone</p>
          <a
            className='button is-primary'
            href='https://github.com/socraticorg/mathsteps/'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
