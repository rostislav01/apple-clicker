import { useEffect } from "react";
import { useAppSelector } from "../../../shared/model";
import css from "./InfoCounter.module.scss";

export function InfoCounter() {

	const state = useAppSelector((state) => state.counter)
  return (
    <div className={css.root}>
			
      <div className={css.count}>
        <span>Apples = {state.apples}</span>
      </div>
      <div className={css.info}>
        <span>Apples per second = {state.perSecond}</span>
        <span>Apples per click = {state.perClick}</span>
      </div>
    </div>
  );
}
