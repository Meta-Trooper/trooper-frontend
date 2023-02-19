import { getJobs } from "@trooper/services/jobs";
import { NextPage } from "next";
import { Jobs } from "@trooper/models";
import React from "react";

const Jobs: NextPage<{ jobs: Jobs[] }> = ({ jobs }) => {
  console.log(jobs);
  return (
    <div>
      {jobs.length &&
        jobs?.map((job) => {
          return (
            <div className="" key={job.id}>
              <h1>{job.job_name}</h1>
            </div>
          );
        })}
    </div>
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
