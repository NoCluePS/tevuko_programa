import React from "react";
import { api } from "~/trpc/react";

const Stats = () => {
  const { data } = api.stats.getLatest.useQuery();

  return (
    <div className="flex rounded-lg rounded-t-none p-4 shadow-md">
      Kazkas cia, tikriausiai staliukas su statistikom :D
      {JSON.stringify(data)}
    </div>
  );
};

export default Stats;
