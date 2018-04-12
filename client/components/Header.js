import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../components';

class Header extends Component {
	constructor(props){
		super(props);
		this.state={
			page:'',
			linkName:''
		};
		this.handleClick=this.handleClick.bind(this);
	}

	componentDidMount(){
		// console.log('props',location.pathname,this.props,this.props.path.slice(this.props.path.lastIndexOf('/')+1));
		let page=this.props.path.slice(this.props.path.lastIndexOf('/')+1);
		if(page==='giphy'){
			this.setState({page:'Giphy',linkName:'Reddit'});
		}else{
			this.setState({page:'Skeleton',linkName:'Sample'});
		}
	}

	handleClick(e){
		if(page==='giphy'){
			this.setState({page:'Reddit',linkName:'Giphy'});
		}else{
			this.setState({page:'Skeleton',linkName:'Sample'});
		}
	}

	render() {
		let page=this.state.page;
		let linkName=this.state.linkName;
		return (
		  <header className="App-header">
			  <i className="fas fa-thumbs-up fa-5x"></i>
			  <h1>Hello, {page}!</h1>
			  <Nav/>
		  </header>
		);
	}
}

export default Header;