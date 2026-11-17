import NavBar from "./components/NavBar";
import RecepiGrid from "./components/RecepiGrid";
import { recipes } from "./data/recepie";

export default function Home() {
  return (
    <main>
      <NavBar />
      <RecepiGrid recipes={recipes} />
    </main>
  );
}
