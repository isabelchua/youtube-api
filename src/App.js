import React, { Component } from "react";
import SearchBar from "./SearchBar";

import youtube from "./apis/youtube";

const KEY = "AIzaSyCQ1J7ZNjbbHdTCkTeuKUB3x0154n2hSno";

export class App extends Component {
	onTermSubmit = term => {
		youtube.get("/search", {
			params: {
				q: term,
				part: "snippet",
				maxResults: 5,
				key: KEY
			}
		});
		console.log(term);
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
			</div>
		);
	}
}

export default App;
