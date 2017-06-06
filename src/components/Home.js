import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Modal from './Modal'


class Home extends Component {
	render(){
		return (
			<div className = 'home-container'> yeah 
				<h1> Battle stuff </h1>


				<Link className='button' to='/battle'>
				Time to Eat Meat!
				</Link>
				<Modal />
			</div>
			)
	}
}

export default Home