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
		  </section>
		);
	}
}

export default Main;