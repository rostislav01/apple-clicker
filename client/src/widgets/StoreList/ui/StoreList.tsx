import { useEffect } from "react";
import css from "./StoreList.module.scss";
import { StoreCard } from "../../../entities/storeCard";
import { useAppDispatch, useAppSelector } from "../../../shared/model";
import { initialStore } from "../../../entities/counter/model/slice";
import iphone from "./iphone.png";
import ipad from "./ipad.png";
import pen from "./pen.jpg";
import airpods from "./airpods.png";
import mac from "./mac.jpg";
import imac from "./imac.png";
import store from "./store.png";
import steve from "./steve.jpg";


type DataType = {
	id: number;
	title: string;
	cost: number;
  quantity: number;
	type: "PER_SECOND" | "PER_CLICK";
	bonusCount: number;	
  image: any;

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
      image: iphone   
    },
    {
      id: 1,
      title: "iPad",
      cost: 10,
      quantity: 0,
      type: "PER_CLICK",
      bonusCount: 1,
      image: ipad 
    },
    {
      id: 2,
      title: "Apple pen",
      cost: 200,
      quantity: 0,
      type: "PER_SECOND",
      bonusCount: 100,
      image: pen 
    },
    {
      id: 3,
      title: "AirPods",
      cost: 500,
      quantity: 0,
      type: "PER_CLICK",
      bonusCount: 100,
      image: airpods 
    },
    {
      id: 4,
      title: "Mac",
      cost: 10000,
      quantity: 0,
      type: "PER_SECOND",
      bonusCount: 1000,
      image: mac 
    },
    {
      id: 5,
      title: "Imac",
      cost: 1000000,
      quantity: 0,
      type: "PER_CLICK",
      bonusCount: 10.000,
      image: imac 
    },
    {
      id: 6,
      title: "Apple Store",
      cost: 10000000,
      quantity: 0,
      type: "PER_SECOND",
      bonusCount: 100000,
      image: store 
    },
    {
      id: 7,
      title: "Steve Jobs",
      cost: 1000000000,
      quantity: 0,
      type: "PER_CLICK",
      bonusCount: 1000000,
      image: steve 
    },
  ];
  useEffect(() => {
   return dataShop.forEach(item => dispatch(initialStore(item)))
  }, [])



  const state = useAppSelector((state) => state.counter);
  
  return (
    <section className={css.root}>
      <div className={css.title}>
        <span>SHOP</span>
      </div>
      <div className={css.containerCards}>
        {state?.storeItems.map((item, index) => (
          <StoreCard image={item.image}  id={index} key={item.id} title={item.title} cost={item.cost} quantity={item.quantity} bonus={item.type} bonusCount={item.bonusCount} />
        ))}
      </div>
    </section>
  );
}
