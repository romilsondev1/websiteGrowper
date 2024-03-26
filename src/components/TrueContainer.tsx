import large from '@/app/styles/large.module.css'
import Image from 'next/image'
import relations from '../../public/relations.png'
import ButtonLearnMore from '@/components/ButtonLearnMore'

export default function TrueContainer() {


    return (
        <>
            <div className={large.trueContainer}>
                <div className={large.imageTrueContainer}>
                    <Image
                        src={relations}
                        width={400}
                        height={300}
                        alt="Growper Gestão de projetos"
                    />
                </div>
                <div className={large.informationsTrueContainer}>
                    <div className={large.titleTrueContainer}>
                        <h2>Aplique métodos ágeis nas suas rotinas de gerenciamento de projetos</h2>
                        <p className={large.pTrueContainer}>Milhares de empresas ao redor do mundo tem alcançado resultados impressionantes somente pela escolha da abordagem de gerenciamento correta, esse processo quando realizado de forma equivocada pode gerar riscos ao projeto e além disso prejuízos significativos, levando grandes soluções ao seu declínio, por isso, antes de qualquer ação desenvolvemos um plano de ação sobre o seu projeto visando a aplicação da metodologia mais adequada.</p>
                        < ButtonLearnMore />
                    </div>
                </div>
            </div>
        </>
    )
}