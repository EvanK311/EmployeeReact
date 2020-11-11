import axios from "axios";


const baseurl = "https://randomuser.me/api/?results=5&nat=us"

export default {
  search: function () {
    return axios.get(baseurl);
  },
};
