import logobranco from '../../public/logobranco.png'
import Image from 'next/image'
import large from '../app/styles/large.module.css'
import ButtonContact from './Buttoncontact'

export default function Nav() {


    return (
        <nav className={`navbar navbar-expand-lg container-fluid`}>
            <div className={`container-fluid`}>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">
                        <Image
                            src={logobranco}
                            alt='Growper - Gestão de projetos ágeis'
                            className='img-fluid'
                            width={150}
                            height={100}
                        />
                    </a>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end justify-items-center">
                        <li className={large.nav_item}>
                            <a >Home</a>
                        </li>
                        <li className={large.nav_item}>
                            <a >Projects</a>
                        </li>
                        <li className={large.nav_item}>
                            <a >History</a>
                        </li>
                        <li className={large.nav_item}>
                            <a >Contacts</a>
                        </li>
                        <li className={large.nav_item}>
                            <a >Technology Community</a>
                        </li>                        
                    </ul>
                    <ButtonContact />
                </div>
            </div>
        </nav>
    )
}