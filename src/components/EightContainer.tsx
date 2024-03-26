import large from '../app/styles/large.module.css'
import ButtonContact from './Buttoncontact'

export default function EightContainer(){

    return(<>
        <div className={large.eightContainer}>
            <h1>Quero mudar a minha história <br></br> com a Growper agora.</h1>
            <ButtonContact/>
        </div>
    </>)
}