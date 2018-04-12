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
			  <p>Source Code available on <a href="https://github.com/AliceWonderland/React-App" target="_blank" rel="noopener">Github</a></p>
		  </footer>
		);
	}
}

export default Footer;