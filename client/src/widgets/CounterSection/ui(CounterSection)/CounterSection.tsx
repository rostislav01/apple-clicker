import { ReactNode } from 'react'
import css from './CounterSection.module.scss'


type Props = {
  clicker: ReactNode,
  infoCounter: ReactNode
}

export function CounterSection(props: Props) {
  return (
    <section className={css.root}>
     
     <div>
      {props.clicker}
     </div>
          
    {props.infoCounter}

    </section>
  )
}