import axios from "axios";

axios.defaults.baseURL = "https://6457a2680c15cb14820d309d.mockapi.io";

export const getUsers = async () => {
  const { data } = await axios.get("Users");
  console.log(data);
  return data;
};
