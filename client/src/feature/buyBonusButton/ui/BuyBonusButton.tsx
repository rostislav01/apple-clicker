import { Button } from "@mui/material";
import { useAppDispatch } from "../../../shared/model";
import { buyBonus } from "../../../entities/counter/model/slice";

type Props = {
  id: number;
  price: number;
  count: number;
  type: "PER_CLICK" | "PER_SECOND";
};

export function BuyBonusButton(props: Props) {
  const dispatch = useAppDispatch();

  const buyBonusOnSubmit = () => {
    const dto = {
      price: props.price,
      id: props.id,
      type: props.type,
      count: props.count,
    };
    dispatch(buyBonus(dto));
  };
  return (
    <Button
      onClick={buyBonusOnSubmit}
      sx={{ width: "50%" }}
      variant="contained"
    >
      Buy
    </Button>
  );
}
