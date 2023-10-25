import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/model";
import css from "./InfoCounter.module.scss";
import { addApplesEverySecond } from "../../counter/model/slice";


export function InfoCounter() {

	const state = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();

  useEffect(() => {

  
    const interval = setInterval(() => {
      if(state.perSecond > 0) {
        dispatch(addApplesEverySecond())
      }
      
    }, 1000);

    return () => clearInterval(interval);
  }, []);



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
