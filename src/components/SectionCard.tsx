import large from '../app/styles/large.module.css'
import Image from 'next/image'
import usingComputer from '../../public/usingComputer.jpg'

export default function SectionCard({prop}:any){

    return(<>
        <div className={large.section}>
            <section className={large.imgSection}>
                <Image 
                    className={large.imgSeven}
                    src={usingComputer}
                    alt='Growper - Gerenciamento de projetos'
                    width={undefined}
                    height={undefined}
                />
            </section>
            <section className={large.textSection}>

            </section>
        </div>
    </>)
}