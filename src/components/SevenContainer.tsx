import { useState, useEffect } from 'react';
import SectionCard from './SectionCard';
import large from '../app/styles/large.module.css'
import Image from 'next/image'
import usingComputer from '../../public/usingComputer.jpg';
import section from '../../public/section2.jpg'
import section3 from '../../public/section3.jpg'

export default function SevenContainer() {

    return (<>
        <div className={large.sevenContainer}>
            <h1>Ainda tenho dúvidas sobre a Growper</h1>
            <p>Tire qualquer dúvida com a nossa equipe comercial, vamos te ajudar a entender todo o processo, nossas metodologias e qual é o passo a passo para iniciarmos seu projeto. Chega de investir em projetos da forma errada.</p>
            <div className={large.gridSeven}>
                <div>
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
                        <section className={large.sectionRelative}>
                            <p>Como a Growper faz para começar a trabalhar no meu projeto atual?</p>
                            <span>Saber mais <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg></span>
                        </section>
                    </div>
                </div>
                <div>
                    <div className={large.section}>
                        <section className={large.imgSection}>
                            <Image
                                className={large.imgSeven}
                                src={section}
                                alt='Growper - Gerenciamento de projetos'
                                width={undefined}
                                height={undefined}
                            />
                        </section>
                        <section className={large.sectionRelative}>
                            <p>Estou analisando o projeto ainda, é possível contratar a Growper?</p>
                            <span>Saber mais <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg></span>
                        </section>
                    </div>
                </div>
                <div>
                    <div className={large.section}>
                        <section className={large.imgSection}>
                            <Image
                                className={large.imgSeven}
                                src={section3}
                                alt='Growper - Gerenciamento de projetos'
                                width={undefined}
                                height={undefined}
                            />
                        </section>
                        <section className={large.sectionRelative}>
                            <p>De quais formas a Growper avalia o desempenho e sucesso no meu projeto?</p>
                            <span>Saber mais <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </>)
}