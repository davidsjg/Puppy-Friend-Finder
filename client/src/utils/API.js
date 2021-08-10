import axios from "axios";
const BASEURL = "https://dog.ceo/api";

export default {
  search: function (query) {
    let temp = BASEURL + query;
    console.log("in API utils query = " + temp);
    return axios.get(BASEURL + query);
  },
  getDogArr: function (breed) {
    return axios.get(BASEURL + "/breed/" + breed + "/images");
  },
};
