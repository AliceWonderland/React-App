import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TicTacToe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [],
			dimensions: 3,
			player: 'x',
			winner: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState({board:this.createBoard()});
	}

	createBoard(){
		let board=[],
			length=this.state.dimensions*this.state.dimensions;
		for(let i=1; i<=length; i++){
			board.push({id:i, value:null, state:0});
		}
		return board;
	}

	setSpot(item){
		if(!item){return;}
		if(!item.state){
			// set spot
			let arr=this.state.board.map(ele => {
				if(ele.id===item.id){
					return {...item,...{value:this.state.player,state:1}};
				}else{
					return ele;
				}
			});

			this.setState({board: arr}, () => {

				//check winner
				let winner=this.checkWinner();
				if(winner){
					this.setState({winner: winner});
					return;
				}

				// change player
				let player=(this.state.player==='x')? 'o': 'x';
				this.setState({player: player}, () => {
					if(this.state.player==='o'){
						setTimeout(() => {
							this.setSpot(this.chooseRandomSpot());
						}, 1000);
					}
				});

			});
		}
	}

	chooseRandomSpot(){
		let openSpots=this.state.board.filter(ele => !ele.state);
		if(openSpots.length){
			let randomSpot= openSpots[Math.floor(Math.random()*openSpots.length)];
			return randomSpot;
		}
		return null;
	}

	checkWinner(){
		//     |   |
		//   0 | 1 | 2
		// ----+---+----
		//   3 | 4 | 5
		// ----+---+----
		//   6 | 7 | 8
		//     |   |
		let board=this.state.board;
		let player=this.state.player;
		let dimensions=this.state.dimensions;

		//horiz
		for(let i=0; i<board.length; i+=dimensions){
			if(board[i].value===player && board[i+1].value===player && board[i+2].value===player){
				return player;
			}
		}
		//vert
		for(let i=0; i<dimensions; i++){
			if(board[i].value===player && board[i+dimensions].value===player && board[i+dimensions+dimensions].value===player){
				return player;
			}
		}
		// diag
		if(board[0].value===player && board[4].value===player && board[8].value===player){
			return player;
		}
		if(board[2].value===player && board[4].value===player && board[6].value===player){
			return player;
		}

		// game over
		let openSpots=this.state.board.filter(ele => !ele.state);
		if(!openSpots.length){
			return 'no one';
		}

		return 0;

		// horiz
		// board[0].value===player && board[1].value===player && board[2].value===player
		// board[3].value===player && board[4].value===player && board[5].value===player
		// board[6].value===player && board[7].value===player && board[8].value===player

		// vert
		// board[0].value===player && board[3].value===player && board[6].value===player
		// board[1].value===player && board[4].value===player && board[7].value===player
		// board[2].value===player && board[5].value===player && board[8].value===player

		// diag
		// board[0].value===player && board[4].value===player && board[8].value===player
		// board[2].value===player && board[4].value===player && board[6].value===player
	}

	clearBoard(){
		let player='x',
		  	winner= 0,
			board= this.createBoard();
		this.setState({player:player, winner:winner, board:board});
	}

	handleClick(e) {
		console.log('clicked', e, e.target, e.value);
		let item=e,
		  player=this.state.player,
		  winner=this.state.winner;

		if(item==='clear'){ this.clearBoard(); return; } //clear board
		if(winner || item.state===1 || player==='o'){ return; } //do not allow clicks

		this.setSpot(item);
	}

	render() {
		console.log('render',this.state);
		let winner=this.state.winner;
		return (
		  <main className="tic-tac-toe">
			  <h1>TIC TAC TOE
				  {winner ? (
				    <span>
					<span style={{color: 'red', 'text-transform': 'capitalize'}}>{winner ? ` (${winner} Wins!) ` : ''}</span>
					<input type="button" onClick={() => this.handleClick('clear')} value={`new game`} defaultValue={`new game`} />
					</span>
				  ) : (
					''
				  )
				  }

			  </h1>
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