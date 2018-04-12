import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TicTacToe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: 'x',
			board: [
				{id: 1, value: null, state: 0}, {id: 2, value: null, state: 0}, {id: 3, value: null, state: 0},
				{id: 4, value: null, state: 0}, {id: 5, value: null, state: 0}, {id: 6, value: null, state: 0},
				{id: 7, value: null, state: 0}, {id: 8, value: null, state: 0}, {id: 9, value: null, state: 0}
			],
			test: {
				1: {value: null, state: 0},
				2: {value: null, state: 0},
				3: {value: null, state: 0},
				4: {value: null, state: 0},
				5: {value: null, state: 0},
				6: {value: null, state: 0},
				7: {value: null, state: 0},
				8: {value: null, state: 0},
				9: {value: null, state: 0},
			}

		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {

	}

	handleClick(e) {
		console.log('clicked', e, e.target, e.value);
		let item=e;
		if(this.state.player==='o'){ return; }

		new Promise((resolve,reject) => {

			//set spot
			this.setSpot(item);
			resolve();

		}).then(res => {
			//check winner

			//else
			setTimeout(() => {
				console.log('set bot here');
				this.chooseRandomSpot();
			}, 1000);
		});
	}

	checkWinner(){
		//     |   |
		//   0 | 1 | 2
		// ----+---+----
		//   3 | 4 | 5
		// ----+---+----
		//   6 | 7 | 8
		//     |   |
	}

	setSpot(item){
		console.log('item',item);
		if(!item.state){
			// console.log({...item,state:1});

			// set spot
			let arr=this.state.board.map(ele => {
				if(ele.id===item.id){
					return {...item,...{value:this.state.player,state:1}};
				}else{
					return ele;
				}
			});
			console.log('set spot',arr);

			// change player
			let player=(this.state.player==='x')? 'o': 'x';
			this.setState({...this.state, ...{board: arr, player: player}});
		}
	}

	chooseRandomSpot(){
		let openSpots=this.state.board.filter(ele => !ele.state);
		if(openSpots.length){
			let randomSpot= openSpots[Math.floor(Math.random()*openSpots.length)];
			this.setSpot(randomSpot);
		}
	}

	render() {
		console.log(this.state);
		return (
		  <main className="tic-tac-toe">
			  <h1>TIC TAC TOE (<span style={{color: 'red'}}>X Wins!</span>)</h1>
			  <div className="game-board">
				  {
					  this.state.board.map((item, ind) => (
						<div key={ind} onClick={() => this.handleClick(item)}>{item.value}</div>
					  ))
				  }
			  </div>
		  </main>
		);
	}
}

export default TicTacToe;