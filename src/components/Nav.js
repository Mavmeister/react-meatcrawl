import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

const Nav = props => {
	
  return (
    <ul className='nav'>
    <li>
    	<NavLink exact activeClassName='active' to='/'>
    	 Home
    	 </NavLink>
    </li>
    <li>
    	<NavLink activeClassName='active' to='/menu'>
    	 Menu
    	</NavLink>
  	</li>
  	<li>
	  	<NavLink activeClassName='active' to='/battle'>
	  	Meat
	  	</NavLink>
  	</li>
    </ul>
  )
}


export default Nav