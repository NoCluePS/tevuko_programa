import React from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { api } from "~/trpc/react";

const columnHelper = createColumnHelper<{
  retire: string;
  pijus: string;
  elze: string;
  id: number;
  createdAt: Date;
  updatedAt: Date | null;
}>();

const ListTable = () => {
  const { data } = api.stats.getAll.useQuery();
  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
    }),
    columnHelper.accessor("retire", {
      header: "Pensija",
    }),
    columnHelper.accessor("pijus", {
      header: "Pijus",
    }),
    columnHelper.accessor("elze", {
      header: "Elze",
    }),
    columnHelper.accessor("createdAt", {
      header: "Sukurta",
      cell: (cell) => cell.getValue().toLocaleString(),
    }),
  ];

  const { getHeaderGroups, getRowModel } = useReactTable({
    columns,
    data: data ? data : [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col rounded-lg rounded-t-none p-4 shadow-md">
      <table>
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className=" bg-gray-200">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border-2 border-black">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id} className="cursor-pointer hover:bg-gray-200">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
