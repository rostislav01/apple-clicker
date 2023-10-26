import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/model";
import css from "./InfoCounter.module.scss";
import { addApplesEverySecond } from "../../counter/model/slice";

let render = 0;
export function InfoCounter() {
  const state = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.counter.perSecond > 0) {
      const interval = setInterval(() => {
        console.log("render", ++render);

        dispatch(addApplesEverySecond());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [state.counter.perSecond, state.counter.apples]);

  return (
    <div className={css.root}>
      <div className={css.count}>
        <span>Apples = {state.counter.apples}</span>
      </div>
      <div className={css.info}>
        <span>Apples per second = {state.counter.perSecond}</span>
        <span>Apples per click = {state.counter.perClick}</span>
      </div>
    </div>
  );
}
