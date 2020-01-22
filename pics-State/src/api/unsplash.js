import axios from "axios";

//configuration file

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID be67707be4cee67eb7af05f6bac04fb22b42b697b6632eb60a05cba8473065ab"
  }
});
