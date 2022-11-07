import axios from "axios";

export const getUserAPI = async (username) => {
  try {
    return axios.get(`https://api.github.com/users/${username}`);
  } catch (error) {
    console.error(error);
  }
};
