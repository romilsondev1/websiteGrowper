import large from '@/app/styles/large.module.css'
import Image from 'next/image'
import scrum from '../../public/scrum.png'
import ButtonLearnMore from '@/components/ButtonLearnMore'
import logobranco from '../../public/logobranco.png'

export default function SixContainer() {


    return (
        <>
            <div className={large.sixContainer}>
                <div className={large.informationsSixContainer}>
                    <h1 className={large.titleSixContainer}>Ágil como um<span> Falcão</span></h1>
                    <div className={large.titleTrueContainer}>
                        <p className={large.pTrueContainer}>Metodologias ágeis são estruturas de gerenciamento de projetos de objetivo geral, em modelos como estes se busca a otimização contínua dos processos, diferentemente das metodologias clássicas, no ágil é possível gerenciar o projeto de acordo com as suas necessidades ao invés de seguir um escopo rígido e inalterável. Com métodos ágeis é possível fazer melhorias ao longo do desenvolvimento do projeto, além disso corrigir falhas e reduzir riscos de forma rápida e assertiva. <br></br> O universo ágil promove comunicação eficiênte, colaboração e foco em resultados, todo processo de obtenção de valor e atribuição do mesmo ao produto final é facilitado.<br></br> Você não precisa de mais nada pra implementar métodos ágies em seus projetos!</p>
                    </div>
                    <div className={large.logosix}>
                    <Image
                    src={logobranco}
                    alt='Growper Tecnologia'
                    width={400}
                    height={61}
                    style={{
                        marginBottom: 30,
                        objectFit: "cover"
                    }}
                    />
                    </div>
                </div>
                <div className={large.gridSix}>
                    <div className={large.item1_GridSix}>
                        <h1 className={large.pGrid}>Kanban</h1>
                    </div>
                    <div className={large.item2_GridSix}>
                        <h1 className={large.pGrid}>SCRUM</h1>
                    </div>
                    <div className={large.item3_GridSix}>
                        <h1 className={large.pGrid}>XP</h1>
                    </div>
                    <div className={large.item4_GridSix}>
                        <h1 className={large.pGrid}>Lean</h1>
                    </div>
                </div>
            </div>
        </>
    )
}