import { API } from "@trooper/constants";
import { Gamer } from "@trooper/models";
import axios from "axios";

export const getGamer = async () => {
  const data = await axios.get(`${API}/gamers`);
  return data.data.data as Gamer[];
};
