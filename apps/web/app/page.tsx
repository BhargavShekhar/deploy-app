import { client } from "@repo/db/client";

export default async function Home() {
  const users = await client.user.findMany();

  return (
    <div className="bg-black text-white flex justify-center flex-col gap-4 items-center h-screen w-full">
      <h1 className="text-2xl">All the Users in the database are:</h1>
      {
        users.map((user, key) => (
          <div key={key} className="bg-amber-200 flex justify-center items-center flex-col gap-2 p-2 rounded">
            <h1 className="text-black text-xl">Username: {user.username}</h1>
          </div>
        ))
      }
    </div>
  );
}
