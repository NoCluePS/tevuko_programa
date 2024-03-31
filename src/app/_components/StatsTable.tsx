import React from "react";
import { api } from "~/trpc/react";

const StatsTable = () => {
  const { data } = api.stats.getAll.useQuery();

  return (
    <div className="flex rounded-lg rounded-t-none p-4 shadow-md">
      Kazkas cia, tikriausiai staliukas su statistikom :D
      {JSON.stringify(data)}
    </div>
  );
};

export default StatsTable;
