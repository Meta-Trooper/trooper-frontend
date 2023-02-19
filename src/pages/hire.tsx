import React from "react";
import axios from "axios";
import { API } from "@trooper/constants";
import { toast } from "react-hot-toast";

function Hire() {
  const [form, setForm] = React.useState({
    job_name: "Job name",
    recruiter_id: 1,
    short_description: "short description",
    description: "description",
    game_id: 1,
    payment_amount: 100,
    duration: 1,
    chosen_gamer_id: null,
    roles_id: [1, 2, 3],
  });
  const submitHandler = async () => {
    const data = axios.post(`${API}/job`, { ...form });
    console.log(data);
    toast.success("Job Posted!");
  };
  return (
    <>
      <h1 className=" mt-16 text-center  w-full mb-5 text-highlight text-3xl">
        Post a Job
      </h1>
      <div className=" p-4 h-full w-1/2 mx-auto bg-[#1c1c27] rounded-lg flex flex-col justify-between bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-highlight cursor-pointer">
        <label
          htmlFor="job name"
          className="block mb-2  mt-4 text-lg font-medium text-gray-900 dark:text-white"
        >
          Job name
        </label>
        <input
          type="text"
          id="job name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={form.job_name}
          onChange={(e) => setForm({ ...form, job_name: e.target.value })}
          required
        />
        <label
          htmlFor="job name"
          className="block mb-2 mt-4 text-lg font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <div className="flex justify-between">
          <div className="">
            <label
              htmlFor="amount"
              className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Payable Amount
            </label>
            <input
              type="text"
              id="amount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={form.payment_amount}
              onChange={(e) =>
                setForm({ ...form, payment_amount: parseInt(e.target.value) })
              }
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="job name"
              className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Recruiter Id
            </label>
            <input
              type="text"
              id="job name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={form.recruiter_id}
              onChange={(e) =>
                setForm({ ...form, recruiter_id: parseInt(e.target.value) })
              }
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="job name"
              className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              game id
            </label>
            <input
              type="text"
              id="job name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={form.game_id}
              onChange={(e) =>
                setForm({ ...form, game_id: parseInt(e.target.value) })
              }
              required
            />
          </div>
        </div>
        <button
          className="p-2 mt-10 rounded-lg bg-highlight w-full "
          onClick={submitHandler}
        >
          Post Job
        </button>
      </div>
    </>
  );
}

export default Hire;
