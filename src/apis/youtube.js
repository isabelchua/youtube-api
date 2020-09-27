import axios from "axios";
const KEY = "AIzaSyCQ1J7ZNjbbHdTCkTeuKUB3x0154n2hSno";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
