import './style.css'
import closeIcon from '../../assets/close-icon.png';


export default function CerticateModal({ certificateInfos, setCertificateInfos }) {

    const handleClose = () => {
        setCertificateInfos({
            show: false, content: {}
        })
    }

    const certificate = { ...certificateInfos.content }

    return (
        <div
            className='modal-bg center-align'

        >
            <img className='close-icon-modal' src={closeIcon} alt='close icon' onClick={handleClose} />
            <div className="certificate-modal">
                <img className='certificate-modal-image' src={certificate.image} alt={`${certificate.name} certificate`} />
                <div className='certificate-modal-infos'>
                    <span className="certificate-span">{certificate.name}</span>
                    <span className="certificate-span">{` - ${certificate.conclusionYear}`}</span>
                </div>
            </div>

        </div >
    )
}