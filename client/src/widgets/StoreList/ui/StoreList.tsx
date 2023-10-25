import { ReactNode, useEffect } from "react";
import css from "./StoreList.module.scss";
import { StoreCard } from "../../../entities/storeCard";

type DataType = {
  id: number;
  title: string;
  cost: number;
  count: number;
  type: "PER_SECOND" | "PER_CLICK";
  bonusCount: 1;
};
export function StoreList() {
  const dataShop: DataType[] = [
    {
      id: 1,
      title: "Iphone",
      cost: 10,
      count: 0,
      type: "PER_SECOND",
      bonusCount: 1,
    },
    {
      id: 2,
      title: "iPad",
      cost: 10,
      count: 0,
      type: "PER_CLICK",
      bonusCount: 1,
    },
  ];

  return (
    <section className={css.root}>
      <div className={css.title}>
        <span>Store</span>
      </div>
      <div className={css.containerCards}>
        {dataShop.map(item => (
          <StoreCard key={item.id} title={item.title} cost={item.cost} count={item.count} bonus={item.type} bonusCount={item.bonusCount} />
        ))}
      </div>
    </section>
  );
}
