import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev">Miguel Durán</TwitterFollowCard>

      <TwitterFollowCard userName="pheralb">Pablo Henandez</TwitterFollowCard>
    </section>
  );
}
