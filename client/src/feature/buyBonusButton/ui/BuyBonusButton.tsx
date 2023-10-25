import { Button } from "@mui/material";
import { useAppDispatch } from "../../../shared/model";
import { addBonus } from "../../../entities/counter/model/slice";


type Props = {
	price: number;
	count: number;
	type: "PER_CLICK" | "PER_SECOND"
}

export function BuyBonusButton(props: Props) {
	const dispatch = useAppDispatch()
	
	return (
		<Button onClick={() => {
			dispatch(addBonus({
				price: props.price,
				count: props.count,
				type: props.type,
			}))
		}} sx={{width: "50%"}} variant="contained">Buy</Button>
	)
}