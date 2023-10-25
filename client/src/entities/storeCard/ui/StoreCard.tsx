import { ReactNode } from "react";
import { BuyBonusButton } from "../../../feature/buyBonusButton";
import image from "./iphone.png";
import css from "./StoreCard.module.scss";




export function StoreCard() {
  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={image} alt="" />
      </div>
      <div className={css.button}>
        <BuyBonusButton />
      </div>

      <div className={css.content}>
        <span>Iphones: 0</span>
        <span>iPhone cost: 10</span>
        <span>+1 Apples per second</span>
      </div>
    </div>
  );
}
