import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Decimal } from "decimal.js";
import { api } from "~/trpc/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  const { data, isLoading } = api.stats.getAll.useQuery();
  const latestData = data?.[0];

  if (isLoading) return <div>Kraunama...</div>;

  if (!latestData) return null;

  const formattedData = {
    labels: ["Pensija", "Elze", "Pijus"],
    datasets: [
      {
        label: "€",
        data: [latestData.retire, latestData.elze, latestData.pijus],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex gap-4 rounded-lg rounded-t-none p-4 shadow-md">
      <div className="flex flex-1 flex-col items-center justify-center rounded-md p-3 text-xl shadow-lg">
        Bendros santaupos
        <span className="mt-[8px] text-3xl text-green-500">
          {new Decimal(latestData.retire)
            .add(new Decimal(latestData.pijus))
            .add(new Decimal(latestData.elze))
            .toString()}{" "}
          €
        </span>
      </div>
      <div className="flex flex-grow flex-col items-center justify-center rounded-md p-3 text-xl shadow-lg">
        Išskaidytai
        <div className="my-3 max-w-[300px]">
          <Pie data={formattedData} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
