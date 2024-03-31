"use client";
import React, { useState } from "react";
import CreateForm from "./CreateForm";
import Stats from "./Stats";
import ListTable from "./ListTable";

enum Tabs {
  CREATE,
  STATS,
  LIST,
}

const DashboardTable = () => {
  const [currentTab, setCurrentTab] = useState(Tabs.LIST);

  return (
    <div className="mt-3 w-[100%] max-w-[75%]">
      <div className="flex justify-center rounded-t-lg bg-gray-300">
        <div
          onClick={() => setCurrentTab(Tabs.CREATE)}
          className="flex flex-1 cursor-pointer justify-center rounded-tl-lg py-2 transition-all hover:bg-gray-400"
        >
          Sukurk įrašą
        </div>
        <div
          onClick={() => setCurrentTab(Tabs.LIST)}
          className="flex flex-1 cursor-pointer justify-center py-2 transition-all hover:bg-gray-400"
        >
          Visi įrašai
        </div>
        <div
          onClick={() => setCurrentTab(Tabs.STATS)}
          className="flex flex-1 cursor-pointer justify-center rounded-tr-lg py-2 transition-all hover:bg-gray-400"
        >
          Rodikliai
        </div>
      </div>
      {(() => {
        switch (currentTab) {
          case Tabs.CREATE:
            return <CreateForm />;
          case Tabs.STATS:
            return <Stats />;
          case Tabs.LIST:
            return <ListTable />;
        }
      })()}
    </div>
  );
};

export default DashboardTable;
