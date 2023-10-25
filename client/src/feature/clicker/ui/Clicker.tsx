import { addApplesOnClick } from "../../../entities/counter";
import { useAppDispatch, useAppSelector } from "../../../shared/model";
import apple from "./apple.png";
import css from "./Clicker.module.scss";

type Props = {};

export function Clicker(props: Props) {
 const dispatch = useAppDispatch()
 const state = useAppSelector((state) => state.counter)
 console.log(state)
  return (
    <button className={css.button} onClick={() => {
      return dispatch(addApplesOnClick())
    }}>
      <img width={200} height={200} src={apple} alt="" />
    </button>
  );
}
