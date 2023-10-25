import { type ReactNode } from 'react'
import css from './Layout.module.css'
import { Outlet } from 'react-router-dom'

type Props = {
  headerSlot: ReactNode
	footerSlot: ReactNode
}

export function Layout(props: Props) {
  return (
    <div className={css.root}>
      {props.headerSlot}
      <div className={css.container}>
        <div className={css.content}>
            <Outlet />
        </div>
			</div>
			{props.footerSlot}
    </div>
  )
}