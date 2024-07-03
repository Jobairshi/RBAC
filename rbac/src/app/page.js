import Loginpage from "@/components/Loginpage";
import Nav from "@/components/Nav";


export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between bg-white">
      <div>
        <Loginpage/>
      </div>
    </main>
  );
}
