import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className=" w-full flex flex-col items-center  justify-center min-h-screen">
      <Nav />
      <Hero />
    </div>
  );
}
