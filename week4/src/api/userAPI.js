import axios from "axios";

export const getUserAPI = async (username) => {
  try {
    const result = await axios.get(`https://api.github.com/users/${username}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
