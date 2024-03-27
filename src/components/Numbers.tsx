import large from '../app/styles/large.module.css'

export default function Numbers() {

    return (<>
        <div className={large.NContainer}>
            <p className={large.pNumbers}>BUSINESS</p>
            <h1 className={large.titleNumbers}>Oque importa para você?</h1>
            <div className={large.numbersContainer}>
                <div className={large.itemNambers}>
                    <p>
                        Confiança
                    </p>
                </div>
                <div className={large.itemNambers}>
                    <p>
                        Custo
                    </p>
                </div>
                <div className={large.itemNambers}>
                    <p>
                        Segurança
                    </p>
                </div>
            </div>
        </div>
    </>)
}