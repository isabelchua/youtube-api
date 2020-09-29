import React, { Component } from "react";
import SearchBar from "./SearchBar";

import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";

import VideoDetail from "./components/VideoDetail";

const KEY = "AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg";

export class App extends Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit("buildings");
	}

	onTermSubmit = async term => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
				part: "snippet",
				maxResults: 5,
				key: KEY
			}
		});
		//console.log(response);
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = video => {
		console.log("frm the app", video);

		this.setState({ selectedVideo: video });
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				{/* I have{" "} {this.state.videos.length} videos */}
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>

						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
