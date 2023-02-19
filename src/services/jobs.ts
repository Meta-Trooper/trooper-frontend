import { API } from "@trooper/constants";
import { Jobs } from "@trooper/models";
import axios from "axios";

export const getJobs = async () => {
  const data = await axios.get(`${API}/jobs`);
  return data.data.data as Jobs[];
};
