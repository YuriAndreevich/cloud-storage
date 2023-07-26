import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col p-24">
      <h1 className="text-2xl font-bold text-center">Облачное хранилище</h1>
      <div className="my-10 mx-auto text-center flex gap-3 flex-col">
       <h1 className="rounded-3xl border p-2 text-lg bg-green-500 text-white"> <Link href='/dashboard/auth/'> Регистрация</Link></h1>
        <p className="text-center opacity-50">уже есть в системе?</p>
<h1 className="rounded-3xl border p-2  text-lg bg-blue-500 text-white"><Link href='/dashboard/auth/'> Войти</Link></h1>
      </div> 
    </main>
  );
}
