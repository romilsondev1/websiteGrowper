import { createElement } from 'react'
import large from '../app/styles/large.module.css'

export default function Card({Content} : any){

    return(<> 
        <div className={large.card}>
            <div className={large.trianguloCard}></div>
            <div className={large.iconCard}>{createElement(Content?.icon.type, {className: Content?.icon.class}, Content?.icon.value)}</div>
            <h1 className={large.titleCard}>{Content?.title}</h1>
            <p className={large.pCard}>{Content?.subtitle}</p>
        </div>
    </>)
}