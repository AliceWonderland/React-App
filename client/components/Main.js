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
		  <section>
			  <h1>MAIN</h1>
			  <i class="fab fa-accessible-icon"></i>
			  <i class="fas fa-camera-retro"></i>
			  <i class="fas fa-user"></i>
			  <i class="far fa-user"></i>
			  <i class="fab fa-github-square"></i>
		  </section>
		);
	}
}

export default Main;