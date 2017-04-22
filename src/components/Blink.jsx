import React, { Component } from 'react';

class Blink extends components {
  constructor () {
    super();
    this.state = {showText: true};

    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000)
  }
}
