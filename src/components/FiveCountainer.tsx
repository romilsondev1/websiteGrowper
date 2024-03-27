import large from '@/app/styles/large.module.css'
import Image from 'next/image'
import analise from '../../public/analise.png'
import ButtonLearnMore from '@/components/ButtonLearnMore'

export default function FiveContainer() {


    return (
        <>
            <div className={large.fiveContainer}>
                <div className={large.imageTrueContainer}>
                </div>
                <div className={large.informationsFiveContainer}>
                    <div className={large.titleTrueContainer}>
                        <h2>Como está a cultura<br></br> organizacional na sua empresa?</h2>
                        <h3>Mude a estratégia <br></br>e transforme sua história!</h3>

                     </div>
                </div>
            </div>
        </>
    )
}