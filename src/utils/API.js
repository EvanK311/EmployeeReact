import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
const baseurl = "https://randomuser.me/api/?results=5&nat=us"
const APIKEY = "";

export default {
  search: function(query) {
    return axios.get(baseurl + query + APIKEY);
  },
  
};
