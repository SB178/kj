// import React,{Component} from 'react';
// import './NavBar.css'
// class NavBar extends Component
// {
// 	constructor(){
// 		super()
// 		this.state = {
// 			icon: 'close'
// 		}
// 	}
// 	closeStage() {
// 		this.setState({
// 			icon: 'menu'
// 		})
// 	}
// 	render()
// 	{
// 		return(
// 		<div class = "navBarShown">
// 		<div class = "navBarContent" id = "close"><span class="material-icons" onClick={() => this.closeStage()}>{this.state.icon}</span> 			<span class = "navBarContentText">Close</span></div>
// 		<div class = "navBarContent"><span class="material-icons">dashboard</span> 						<span class = "navBarContentText">Dashboard</span></div>
// 		<div class = "navBarContent"><span class="material-icons">people</span> 						<span class = "navBarContentText">Customers</span></div>
// 		<div class = "navBarContent"><span class="material-icons">receipt_long</span> 					<span class = "navBarContentText">Packages</span></div>
// 		<div class = "navBarContent"><span class="material-icons">inventory_2</span> 					<span class = "navBarContentText">Channels</span></div>
// 		<div class = "navBarContent"><span class="material-icons">account_circle</span>					<span class = "navBarContentText" id="accountName">Account_Name</span></div>
// 		<div class = "navBarContent"><span class="material-icons">logout</span> 						<span class = "navBarContentText">Logout</span></div>
// 	</div>
// 	)
// 	}
// }

// export default NavBar;
import React,{useState} from 'react'
import './NavBar.css'

function NavBar() {
	const [logo,changeLogo] = useState('close')

const close = () => {
	changeLogo('menu')
}
  return (
	<div class = "navBarShown">
 		<div class = "navBarContent" id = "close"><span class="material-icons" onClick={close}>{logo}</span> 			<span class = "navBarContentText">Close</span></div>
 		<div class = "navBarContent"><span class="material-icons">dashboard</span> 						<span class = "navBarContentText">Dashboard</span></div>
 		<div class = "navBarContent"><span class="material-icons">people</span> 						<span class = "navBarContentText">Customers</span></div>
 		<div class = "navBarContent"><span class="material-icons">receipt_long</span> 					<span class = "navBarContentText">Packages</span></div>
 		<div class = "navBarContent"><span class="material-icons">inventory_2</span> 					<span class = "navBarContentText">Channels</span></div>
 		<div class = "navBarContent"><span class="material-icons">account_circle</span>					<span class = "navBarContentText" id="accountName">Account_Name</span></div>
 		<div class = "navBarContent"><span class="material-icons">logout</span> 						<span class = "navBarContentText">Logout</span></div>
 	</div>
  )
}

export default NavBar