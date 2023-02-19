import { NextPage } from "next";
import { Gamer } from "@trooper/models";
import React from "react";
import { getGamer } from "@trooper/services/gamer";

const Gamer: NextPage<{ gamers: Gamer[] }> = ({ gamers }) => {
  console.log(Gamer);
  return (
    <>
      <h1 className=" mt-16 ml-3 text-highlight text-3xl">Jobs</h1>

      <div className="grid grid-cols-3 mx-auto mt-10 gap-10">
        {gamers?.map((gamer) => {
          return (
            <div
              className=" p-4 h-full w-full bg-[#1c1c27] rounded-lg flex flex-col justify-between bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-highlight cursor-pointer
          "
              key={gamer.id}
            >
              <div className=" flex justify-between items-center">
                <h1 className="text-highlight text-2xl">{gamer.username}</h1>{" "}
                <div className="flex">
                  <a
                    href={gamer?.link_twitter}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      className="cursor-pointer h-6 mx-1"
                      src="./twitter.svg"
                      alt="twitter"
                    />
                  </a>{" "}
                  <a
                    href={gamer?.link_facebook}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      className="cursor-pointer h-6 mx-1"
                      src="./facebook.svg"
                      alt="facebook"
                    />
                  </a>
                  <a
                    href={gamer?.link_linkedin}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <img
                      className="cursor-pointer h-6 mx-1"
                      src="./linkedin.svg"
                      alt="linkedin"
                    />
                  </a>
                </div>
              </div>

              <h2 className="mt-2 text-lg text-gray-300">
                {gamer.description}
              </h2>
              <div className="flex items-center mt-3 ">
                <h3 className="flex items-center text-highlight text-2xl">
                  #{gamer.name_discord || "gamer543"}
                </h3>
                <h3 className="ml-4 text-xl text-highlight border border-highlight rounded p-2 px-3">
                  {gamer.profile_type || 0}
                </h3>
              </div>
              <button className="rounded bg-highlight flex w-full mt-6 text-xl  p-2 justify-center">
                Hire
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const gamers = await getGamer();

  return {
    props: {
      gamers,
    },
  };
}

export default Gamer;
