import { InfoCounter } from "../../../entities/infoCounter";
import { Clicker } from "../../../feature/clicker";
import { CounterSection } from "../../../widgets/CounterSection";
import { StoreList } from "../../../widgets/StoreList";

export function MainPage() {
  return (
    <section>
      <CounterSection clicker={<Clicker />} infoCounter={<InfoCounter />} />
      <StoreList />
    </section>
  );
}
