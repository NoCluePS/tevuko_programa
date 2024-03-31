import React, { useMemo } from "react";
import { api } from "~/trpc/react";

const StatsTable = () => {
  const { data } = api.stats.getLatest.useQuery();
  const latestData = useMemo(() => data?.[0], [data]);

  return (
    <div className="flex rounded-lg rounded-t-none p-4 shadow-md">
      Kazkas cia, tikriausiai staliukas su statistikom :D
      {JSON.stringify(latestData)}
    </div>
  );
};

export default StatsTable;
