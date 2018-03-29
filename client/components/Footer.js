import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
	constructor(props){
		super(props);
		this.state={
			page:'',
			linkName:''
		};
	}

	render() {
		return (
		  <footer>
			  <h1>footer</h1>
		  </footer>
		);
	}
}

export default Footer;