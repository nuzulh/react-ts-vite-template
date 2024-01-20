import { useAssets } from "@/lib/hooks";

export default function HomePage() {
  const assets = useAssets();

  return (
    <main className="h-screen bg-gradient-to-r from-primary/50 to-primary/10 p-4 flex flex-col md:flex-row items-center justify-evenly">
      <img
        src={assets.getImage("hero")}
        alt="hero"
      />
      <h1>hello, home page here!</h1>
    </main>
  );
}
