import { useEffect } from "react";
import css from "./StoreList.module.scss";
import { StoreCard } from "../../../entities/storeCard";
import { useAppDispatch, useAppSelector } from "../../../shared/model";
import { initialStore } from "../../../entities/counter/model/slice";

type DataType = {
	id: number;
	title: string;
	cost: number;
  quantity: number;
	type: "PER_SECOND" | "PER_CLICK";
	bonusCount: number;	

};
export function StoreList() {
  const dispatch = useAppDispatch();

  const dataShop: DataType[] = [
    {
      id: 0,
      title: "Iphone",
      cost: 10,
      quantity: 0,
      type: "PER_SECOND",
      bonusCount: 1,
    },
    {
      id: 1,
      title: "iPad",
      cost: 10,
      quantity: 0,
      type: "PER_CLICK",
      bonusCount: 1,
    },
    {
      id: 2,
      title: "Apple pen",
      cost: 200,
      quantity: 0,
      type: "PER_SECOND",
      bonusCount: 100,
    },
    {
      id: 3,
      title: "AirPods",
      cost: 500,
      quantity: 0,
      type: "PER_CLICK",
      bonusCount: 100,
    },
    {
      id: 4,
      title: "Mac",
      cost: 10000,
      quantity: 0,
      type: "PER_SECOND",
      bonusCount: 1000,
    },
    {
      id: 5,
      title: "Imac",
      cost: 1000000,
      quantity: 0,
      type: "PER_CLICK",
      bonusCount: 10.000,
    },
    {
      id: 6,
      title: "Apple Store",
      cost: 10000000,
      quantity: 0,
      type: "PER_SECOND",
      bonusCount: 100000,
    },
    {
      id: 7,
      title: "Steve Jobs",
      cost: 1000000000,
      quantity: 0,
      type: "PER_CLICK",
      bonusCount: 1000000,
    },
  ];
  useEffect(() => {
   return dataShop.forEach(item => dispatch(initialStore(item)))
  }, [])



  const state = useAppSelector((state) => state.counter);
  
  return (
    <section className={css.root}>
      <div className={css.title}>
        <span>Store</span>
      </div>
      <div className={css.containerCards}>
        {state?.storeItems.map((item, index) => (
          <StoreCard  id={index} key={item.id} title={item.title} cost={item.cost} quantity={item.quantity} bonus={item.type} bonusCount={item.bonusCount} />
        ))}
      </div>
    </section>
  );
}
