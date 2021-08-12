import axios from "axios";
const BASEURL = "https://dog.ceo/api";

export default {
  search: function (query) {
    let temp = BASEURL + query;
    return axios.get(BASEURL + query);
  },
  getDogArr: function (breed) {
    return axios.get(BASEURL + "/breed/" + breed + "/images");
  },
  getBaseBreedList: function () {
    return axios.get(BASEURL + "/breeds/list/all");
  },
  getDogsOfBreedList: function (breed) {
    return axios.get(BASEURL + "/breed/" + breed + "/images");
  },
};
