


import { ReactNode } from "react";
import css from "./StoreList.module.scss";
import { StoreCard } from "../../../entities/storeCard";

type Props = {
	card: ReactNode
}
export function StoreList() {
	return (
		<section className={css.root}>
			<div className={css.title}>
				<span>Store</span>
			</div>
			<div className={css.containerCards}>
				<StoreCard />
			</div>
		</section>
	)
}