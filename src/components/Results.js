import React, {Component} from 'react'
import queryString from 'query-string'
import api from '../utils/api'

class Results extends Component {
	constructor(props){
		super(props)

		this.state = {
			winner: null,
			loser: null,
			error: null,
			loading: true
		}
	}
	componentDidMount() {
	  let players = queryString.parse(this.props.location.search);

	  api.battle([
	    players.playerOneName,
	    players.playerTwoName
	  ]).then((players) => {
	  	console.log(players)
	    if (players === null) {
	      this.setState({
	          error: 'Looks like there was an error. Check that both users exist on Github.',
	          loading: false
	      });
	    }

	    // this.setState({
	    //     error: null,
	    //     winner: players[0],
	    //     loser: players[1],
	    //     loading: false
	    // })

	  })
	}

	render(){

		let error = this.state.error
		let winner = this.state.winner
		let loser = this.state.loser
		let loading = this.state.loading

		if (loading === true){
			return <p> Loading.. </p>
		}

		return (
			<div> 
				<div> Winner: {winner}
				Loser: {loser}
				</div>
			</div>
			)
	}
}

export default Results