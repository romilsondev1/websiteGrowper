import large from '@/app/styles/large.module.css'
import Image from 'next/image'
import analise from '../../public/analise.png'
import ButtonLearnMore from '@/components/ButtonLearnMore'

export default function FiveContainer() {


    return (
        <>
            <div className={large.trueContainer}>
                <div className={large.imageTrueContainer}>
                    <Image
                        src={analise}
                        width={350}
                        height={350}
                        alt="Growper Gestão de projetos"
                    />
                </div>
                <div className={large.informationsTrueContainer}>
                    <div className={large.titleTrueContainer}>
                        <h2>Desenvolva um estudo antecipado do seu produto</h2>
                        <p className={large.pTrueContainer}>A análise de requisitos e toda documentação antecipada do projeto permite obter uma visão geral do seu produto contendo suas especificações de forma mais precisa possível. Evite surpresas após o início do projeto.</p>
                        < ButtonLearnMore />
                    </div>
                </div>
            </div>
        </>
    )
}