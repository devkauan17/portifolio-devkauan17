import './style.css'
import closeIcon from '../../assets/close-icon.png';

export default function SkillModal({ skillInfos, setSkillInfos }) {

    const handleClose = () => {
        setSkillInfos({
            show: false,
            content: {}
        })

    }

    const skill = { ...skillInfos.content }
    return (
        <div
            className='modal-bg center-align'

        >

            <img className='close-icon-modal' src={closeIcon} alt='close icon' onClick={handleClose} />
            <div className='skill-modal'>
                <h1 className='title-h1 gradient-text'>{skill.name}</h1>
                <p className='paragraph-p'>
                    {skill.description}
                </p>
            </div>
        </div>
    )
}