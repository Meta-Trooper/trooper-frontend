import { NextPage } from "next";
import { Gamer } from "@trooper/models";
import React from "react";
import { getGamer } from "@trooper/services/gamer";

const Gamer: NextPage<{ gamers: Gamer[] }> = ({ gamers }) => {
  console.log(Gamer);
  return (
    <div>
      {gamers?.map((gamer) => {
        return (
          <div className="" key={gamer.id}>
            <h1>{gamer.username}</h1>
          </div>
        );
      })}
    </div>
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
