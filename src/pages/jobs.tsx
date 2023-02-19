import { getJobs } from "@trooper/services/jobs";
import { NextPage } from "next";
import { Jobs } from "@trooper/models";
import React from "react";

const Jobs: NextPage<{ jobs: Jobs[] }> = ({ jobs }) => {
  console.log(jobs);
  return (
    <>
      <h1 className=" mt-16 ml-3 text-highlight text-3xl">Jobs</h1>

      <div className="grid grid-cols-3 mx-auto mt-10 gap-10">
        {jobs.length &&
          jobs?.map((job) => {
            return (
              <div
                className=" p-4 h-full w-full bg-[#1c1c27] rounded-lg flex flex-col justify-between bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-highlight cursor-pointer
                "
                key={job.id}
              >
                <div className=" flex justify-between items-center">
                  <h1 className="text-highlight text-2xl">{job.job_name}</h1>{" "}
                  <span className=" border-highlight p-2 rounded border-2 font-semibold   text-highlight">
                    {job.job_state}
                  </span>
                </div>

                <h2 className="mt-2 text-lg text-gray-300">
                  {job.description}
                </h2>
                <div className="flex items-center mt-3 ">
                  <h3 className="flex items-center text-highlight text-2xl">
                    {job.payment_amount || 0} ₸
                  </h3>
                  <h3 className="ml-4 text-2xl text-subtitle">
                    {job.duration || 0} Days
                  </h3>
                </div>
                <button className="rounded bg-highlight flex w-full mt-6  p-2 justify-center">
                  Apply
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const jobs = await getJobs();

  return {
    props: {
      jobs,
    },
  };
}

export default Jobs;
