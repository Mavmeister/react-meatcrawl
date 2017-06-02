import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Api from '../utils/api'

//stateless functional
const SelectItem = props => {
	const options = ['All', 'Something', 'Nothing', 'Maybe']
	return (
		<ul className="items">
		  {options.map((item) => {
		    return (
		    	<li
	          style={item === props.selectedItem ? { color: 'red' } : null}
	          onClick={props.updateItem.bind(null, item)}
	          key={item}>
	          {item}
	        </li>
		      )
		  })}
		</ul>
	)
}

SelectItem.propTypes = {
	selectedItem: PropTypes.string.isRequired,
	updateItem: PropTypes.func.isRequired,
}

const RepoGrid = props => {
	return (
		<ul className="popular-list">
			{props.repos.map((repo,index) => {
				return (
					<li className="popular-item" key={index}>
					<div> # {index + 1} </div>
					<ul className="space-list-items"> <li> <img className="avatar" src={repo.owner.avatar_url} /> </li> </ul>
				</li>
				)
			})}
		</ul>
		)
}

class Menu extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedItem: 'All',
      repos: null
    }

    this.updateItem = this.updateItem.bind(this)

  }
  componentDidMount(){
  	this.updateItem(this.state.selectedItem)
  }
  
  updateItem(item){
    this.setState({
      selectedItem: item,
      repos: null
    })
  	Api.fetchPopularRepos(item)
  		.then(repos => this.setState({
  			repos: repos
  		}))
	  }

  render() {

    return (
      <div className="Menu">
      	<SelectItem 
      		selectedItem={this.state.selectedItem}
      		updateItem={this.updateItem}
				/> 
				{!this.state.repos 
					? <p> Loading... </p>
				  : <RepoGrid repos={this.state.repos} /> }
      </div>
    );
  }
}

export default Menu;
