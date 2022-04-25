import React, { Component } from 'react';
import Headline from '../../sections/headline/headline';
import './main.css';

export class Main extends Component {
  render() {
    return (
      <main id="main-content">
        <Headline />
      </main>
    );
  }
}

export default Main;
