import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Main extends Component {
	constructor(props){
		super(props);
		this.state={
			page:'',
			linkName:''
		};
	}

	render() {
		return (
		  <main>
			  <h1>HOME</h1>
			  <i class="fas fa-camera-retro"></i>
			  <i class="fas fa-user"></i>
		  </main>
		);
	}
}

export default Main;