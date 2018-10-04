import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card'
const update = require('immutability-helper')

class App extends Component {
  state = {
			cards: [
				{
					id: 1,
					text: 'Write a cool JS library',
				},
				{
					id: 2,
					text: 'Make it generic enough',
				},
				{
					id: 3,
					text: 'Write README',
				},
				{
					id: 4,
					text: 'Create some examples',
				},
				{
					id: 5,
					text:
						'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
				},
				{
					id: 6,
					text: '???',
				},
				{
					id: 7,
					text: 'PROFIT',
				},
			],
  }

  moveCard = (dragIndex, hoverIndex) => {
		const { cards } = this.state
		const dragCard = cards[dragIndex]

		this.setState(
			update(this.state, {
				cards: {
					$splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
				},
			}),
		)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="drag">
          {
            this.state.cards.map((card, i) => 
              <Card
                key={i}
                index={i}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard} 
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
