"use client";
import React, { useState } from "react";
import CreateForm from "./CreateForm";
import StatsTable from "./StatsTable";

const DashboardTable = () => {
  const [create, setCreate] = useState(false);

  return (
    <div className="mt-3 w-[50%]">
      <div className="flex justify-center rounded-t-lg bg-gray-300">
        <div
          onClick={() => setCreate(true)}
          className="flex flex-1 cursor-pointer justify-center rounded-tl-lg py-2 transition-all hover:bg-gray-400"
        >
          Sukurk įrašą
        </div>
        <div
          onClick={() => setCreate(false)}
          className="flex flex-1 cursor-pointer justify-center rounded-tr-lg py-2 transition-all hover:bg-gray-400"
        >
          Rodikliai
        </div>
      </div>
      {create ? <CreateForm /> : <StatsTable />}
    </div>
  );
};

export default DashboardTable;
