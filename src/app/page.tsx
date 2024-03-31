import DashboardTable from "./_components/DashboardTable";

export default async function Home() {
  return (
    <main className="flex h-[100vh] w-full flex-col items-center justify-center">
      <div className="text-xl">Tevuko programa</div>
      <DashboardTable />
    </main>
  );
}
