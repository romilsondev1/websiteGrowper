import large from '@/app/styles/large.module.css'
import Image from 'next/image'
import relations from '../../public/relations.png'
import ButtonLearnMore from '@/components/ButtonLearnMore'

export default function TrueContainer() {


    return (
        <>
            <div className={large.trueContainer}>
                <div className={large.informationsTrueContainer}>
                    <div className={large.titleTrueContainer}>
                        <h2>Qual é o cenário atual <br></br> do seu projeto?</h2>
                        <h3>Chegou a hora <br></br> de mudar essa história!</h3>
                        <p>Resultados alcançados em</p>
                        <h1>6 meses</h1>
                        < ButtonLearnMore />
                    </div>
                </div>
            </div>
        </>
    )
}