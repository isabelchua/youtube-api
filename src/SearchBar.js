import React, { Component } from "react";

export class SearchBar extends Component {
	state = { term: "search" };
	onInputChange = event => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = event => {
		event.preventDefault();
		//TODO callback
		this.props.onFormSubmit(this.state.term);
	};
	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} action="" className="ui form">
					<div className="field">
						<label htmlFor="">Video Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
