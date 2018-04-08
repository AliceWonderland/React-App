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
			  <p>Footer</p>
		  </footer>
		);
	}
}

export default Footer;