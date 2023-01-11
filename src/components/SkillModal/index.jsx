import { Modal } from '@mui/material'
import './style.css'

export default function SkillModal({ skillInfos, setSkillInfos }) {

    const handleClose = () => {
        setSkillInfos({
            show: false,
            content: {}
        })

    }

    const skill = { ...skillInfos.content }
    return (
        <Modal
            className='modal-bg center-align'
            open={skillInfos.show}
            onClose={handleClose}
        >
            <div className='skill-modal'>
                <h1 className='title-h1 gradient-text'>{skill.name}</h1>
                <p className='paragraph-p'>
                    {skill.description}
                </p>
            </div>
        </Modal>
    )
}