import Image from "next/image"
import large from '../app/styles/large.module.css'
import small from '../app/styles/small.module.css'
import medium from '../app/styles/medium.module.css'
import logo1 from '../../public/logo1.png'
import ButtonContact from "./Buttoncontact"
import gt from '../../public/gt.png'
import Nav from "./Nav"
import Icons from "./Icons"
import Numbers from "./Numbers"

export default function Top() {


    return (
        <div className={`${large.top}`}>
            <Nav />
            <div className={large.content}>
                <div className={large.item}>
                    <h1 className={large.initialtitle}>
                        Valorize suas ideias<br></br>
                        Execute seus projetos
                    </h1>
                    <h1 className={large.subtitle}>
                        realize seu sonho
                    </h1>
                    <Icons />
                </div>
            </div>
            <div className={`${large.buttonandNumbers} container-fluid`}>
                <div>
                    <ButtonContact />
                </div>
                <Numbers />
            </div>
        </div>
    )
}