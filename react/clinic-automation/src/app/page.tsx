import Header from "@/components/layout/Header";
import Login from "@/components/layout/Login";


export default function Home() {

  return (
    <>
      <Header/>
      <main className="flex justify-center items-center min-h-[calc(100vh-6rem)]">


        <Login />
      </main>
    </>
  );
}

