import large from '../app/styles/large.module.css'

export default function Numbers() {

    return (<>
        <div className={large.NContainer}>
            <h1 className={large.titleNumbers}>Marcas da Growper</h1>
            <div className={large.numbersContainer}>
                <div className={large.itemNambers}>
                    <p>
                        50
                    </p>
                </div>
                <div className={large.itemNambers}>
                    <p>
                        100
                    </p>
                </div>
                <div className={large.itemNambers}>
                    <p>
                        + 1000
                    </p>
                </div>
            </div>
        </div>
    </>)
}