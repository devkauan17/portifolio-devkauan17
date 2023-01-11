import { Modal } from '@mui/material'
import './style.css'
import closeIcon from '../../assets/close-icon.png';


export default function MenuMobile({ showMenu, setShowMenu }) {
    const handleClose = () => {
        setShowMenu(false)
    }

    return (

        <Modal
            className='modal-bg center-align'
            open={showMenu}
            onClose={handleClose}

        >

            <ul className='mobile-ul vertical-align center-align'>
                <li className='mobile-li'><a className='mobile-link' href="#skills" onClick={handleClose}>Habilidades</a></li>
                <li className='mobile-li'><a className='mobile-link' href="#certificates" onClick={handleClose}>Certificados</a></li>
                <li className='mobile-li'><a className='mobile-link' href="#projects" onClick={handleClose}>Projetos</a></li>
                <li className='mobile-li'> <img src={closeIcon} alt='close-icon' onClick={handleClose} /></li>
            </ul>
        </Modal>
    )
}