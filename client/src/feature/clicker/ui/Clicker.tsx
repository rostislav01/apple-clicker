import { addApplesOnClick } from "../../../entities/counter";
import { useAppDispatch } from "../../../shared/model";
import apple from "./apple.png";
import css from "./Clicker.module.scss";


export function Clicker() {
  const dispatch = useAppDispatch();
  const onAddApples = () => dispatch(addApplesOnClick());
  return (
    <button
      className={css.button}
      onClick={onAddApples}
    >
      <img width={200} height={200} src={apple} alt="" />
    </button>
  );
}
