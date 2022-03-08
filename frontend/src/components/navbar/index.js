import { ReactComponent as gitHubIcon } from '../../assets/img/git.svg';
/* inportando nosso estilo */
import './style.css';

function NavBar() {
    return (
        <header >
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1> Ds Movie </h1>
                    <a href=''>
                        <div className='dsmovie-contact-container'>
                            <gitHubIcon /> <p className='dsmovie-contact-link'> / Felipe Assis</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>


    );
}



export default NavBar