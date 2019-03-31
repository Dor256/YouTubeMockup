import axios from "axios";

const KEY = "AIzaSyC8xlxjk-WrtzC6PxsFqkYbLAcJ50aHEvc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video"
    }
});