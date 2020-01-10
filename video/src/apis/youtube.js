import axios from "axios";

//When users access in our application, sending this api key to youtube.

const KEY = "AIzaSyDIjnQndwIBjzIeaZB26peHCq267gc00XU";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    maxResult: 5,
    type: 'video',
    key: `${KEY}`
  }
});
