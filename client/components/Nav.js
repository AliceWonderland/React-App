import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	constructor(props){
		super(props);
		this.state={
			page:'',
			linkName:''
		};
		this.handleClick=this.handleClick.bind(this);
	}

	componentDidMount(){

	}

	handleClick(e){

	}

	render() {

		return (
		  <nav>
			  <Link to="/sample">Home <i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
			  <Link to="/sample">Robot <i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
			  <Link to="/tictactoe">Tic Tac Toe <i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
		  </nav>
		);
	}
}

export default Nav;