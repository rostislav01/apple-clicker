import { InfoCounter } from "../../../entities/infoCounter";
import { Clicker } from "../../../feature/clicker";
import { CounterSection } from "../../../widgets/CounterSection";

export function MainPage() {
  return (
    <section>
      <CounterSection clicker={<Clicker />} infoCounter={<InfoCounter />} />
    </section>
  );
}
