import { api } from "~/trpc/server";

export default async function Home() {
  const stats = await api.stats.getAll();

  return (
    <main className="flex h-[100vh] w-full items-center justify-center">
      <div>Tevuko programa</div>
    </main>
  );
}
