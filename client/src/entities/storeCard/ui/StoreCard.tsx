import { ReactNode } from "react";
import { BuyBonusButton } from "../../../feature/buyBonusButton";
import css from "./StoreCard.module.scss";


type Props = {
  id: number;
	title: string;
	cost: number;
	bonus: "PER_SECOND" | "PER_CLICK";
	bonusCount: number;	
	quantity: number;
  image: any;

}

export function StoreCard(props: Props) {
  
  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={css.button}>
        <BuyBonusButton id={props.id} type={props.bonus} price={props.cost} count={props.bonusCount} />
      </div>

      <div className={css.content}>
        <span>{props.title}s: {props.quantity}</span>
        <span>{props.title} cost: {props.cost}</span>
        <span>+{props.bonusCount} Apples {props.bonus ==="PER_CLICK" ? "per click" : "per second"  } </span>
      </div>
    </div>
  );
}
