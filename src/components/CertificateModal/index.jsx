import { Modal } from "@mui/material";
import './style.css'

export default function CerticateModal({ certificateInfos, setCertificateInfos }) {

    const handleClose = () => {
        setCertificateInfos({
            show: false, content: {}
        })
    }

    const certificate = { ...certificateInfos.content }

    return (
        <Modal
            className='modal-bg center-align'
            open={certificateInfos.show}
            onClose={handleClose}
        >
            <div className="certificate-modal">
                <img className='certificate-modal-image' src={certificate.image} alt={`${certificate.name} certificate`} />
                <div className='certificate-modal-infos'>
                    <span className="certificate-span">{certificate.name}</span>
                    <span className="certificate-span">{` - ${certificate.conclusionYear}`}</span>
                </div>
            </div>

        </Modal >
    )
}