import { ReactNode } from "react";
import { BuyBonusButton } from "../../../feature/buyBonusButton";
import image from "./iphone.png";
import css from "./StoreCard.module.scss";


type Props = {
	title: string;
	cost: number;
	bonus: "PER_SECOND" | "PER_CLICK";
	bonusCount: number;	
	count: number;

}

export function StoreCard(props: Props) {
  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={image} alt="" />
      </div>
      <div className={css.button}>
        <BuyBonusButton type={props.bonus} price={props.cost} count={props.count} />
      </div>

      <div className={css.content}>
        <span>{props.title}s: {props.count}</span>
        <span>{props.title} cost: 10</span>
        <span>+{props.bonusCount} Apples {props.bonus ==="PER_CLICK" ? "per click" : "per second"  } </span>
      </div>
    </div>
  );
}
