import axios from "axios";

export const getUserAPI = async (username) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyTeamAPI = async () => {
  try {
    const res = await axios.get("/user/team");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
