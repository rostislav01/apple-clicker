import { Button } from "@mui/material";
import { useAppDispatch } from "../../../shared/model";
import { addBonus } from "../../../entities/counter/model/slice";


type Props = {

}

export function BuyBonusButton(props: Props) {
	const dispatch = useAppDispatch()
	
	return (
		<Button onClick={() => {
			dispatch(addBonus({
				price: 10,
				count: 1,
				type: "PER_CLICK"
			}))
		}} sx={{width: "50%"}} variant="contained">Buy</Button>
	)
}