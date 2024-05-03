import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Stars from "./components/Stars";


export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Stars />
      <Navbar />
      <Header />
    </main>
  );
}
