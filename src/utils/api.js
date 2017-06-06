import axios from 'axios'


//help w adding client ids
// let id = "YOUR_CLIENT_ID"
// let sec = "YOUR_SECRET"
// let params = "?client_id" + id + "&client_secret=" + sec 

function getProfile(username){
		return axios.get('http://api.github.com/users/' + username )
		.then( (user) => {
			return user.data
		});
}

function getRepos(username){
		return axios.get('http://api.github.com/users/' + username + '/repos')

}

function getStarCount(repos){
	return repos.data.reduce( (count, repo) => {
		return count + repo.stargazers_count
	}, 0)
}

function calculateScore(profile, repos){
	let followers = profile.followers
	let totalStars = getStarCount(repos)

	return (followers + totalStars)
}

function handleError(error){
	console.warn(error);
	return null;
}

function getUserData(player){
	return axios.all([
		getProfile(player),
		getRepos(player)
		]).then( (data) => {
			console.log('axios data:', data)
			let profile = data[0]
			let repos = data[1]

			return {
				profile: profile,
				score: calculateScore(profile, repos)
			}
		})
}

function sortPlayers(players){
	return players.sort((a,b) => {
		return b.score - a.score
	})
}

const Api = {

	battle: function(players){
		return axios.all(players.map(getUserData))
			.then(sortPlayers)
			.catch(handleError)
	},

	fetchPopularRepos: function(language){
		let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + 
			'&sort=stars&order=desc&type=Repositories')

		return axios.get(encodedURI)
			.then(response => response.data.items)
	},

	fetchRandom: function(){
		let d = [
			{
				thing: 'what',
				name: 'bobby',
				rest: 'hundai fish company',
				location: '24th and Grove',
				funky: true
			},
			{
				thing: 'what',
				name: 'jeff',
				rest: 'something fun',
				location: '35th and Grove',
				funky: true
			},
			{
				thing: 'here',
				name: 'ape',
				rest: 'hundai fish company',
				location: '24th and Grove',
				funky: true
			}
		]
		return d
	}
}

export default Api
