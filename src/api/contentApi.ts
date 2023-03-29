import { BASE_URL } from "./userApi";
import { Skill } from "./userTypes";
import axios from "axios";
const CONTENT_URL = `${BASE_URL}v1/content/skills`;

export const fetchContent = async (token: string) => {
  const response = await axios.get(CONTENT_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const postContent = (skill: Skill ,token: string) => {
  return axios.post(CONTENT_URL, skill,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    console.log(response.data);
    return response.data;
  })
  .catch((error) => {
    console.error(error);
    throw error;
  });
}

