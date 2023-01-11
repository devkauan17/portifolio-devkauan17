import expandMoreIcon from '../../assets/expandMoreIcon.png';
import { DividerBottom, DividerTop } from '../../components/Dividers';
import { Swiper, SwiperSlide } from 'swiper/react';
import skills from '../../data/skills';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import './style.css';
import 'swiper/css/pagination';
import certificates from '../../data/certificates';
import projects from '../../data/projects';
import { useState } from 'react';
import CerticateModal from '../../components/CertificateModal';

export default function Home() {

    const [certificateInfos, setCertificateInfos] = useState({
        show: false,
        content: {}
    })

    return (
        <main className='page'>
            <header className='page-header'>
                <h1 className='title-h1 gradient-text'>Portifólio</h1>
                <ul className='header-ul'>
                    <li className='header-li'><a className='header-link' href="#skills" >Habilidades</a></li>
                    <li className='header-li'><a className='header-link' href="#certificates" >Certificados</a></li>
                    <li className='header-li'><a className='header-link' href="#projects" >Projetos</a></li>
                </ul>
            </header>
            <section className='content-page'>
                <div className='content-initial center-align full-size'>
                    <h1 className='title-h1'>Portifólio Kauan Rodrigues</h1>
                    <h1 className='title-h2 gradient-text'>Desenvolvedor Front-End</h1>
                    <img className='expand-more-arrow' src={expandMoreIcon} alt='Expand more icon' />
                    <DividerBottom />
                </div>

                <section className='content-apresentation center-align'>
                    <div className='apresentation-infos'>
                        <div className='apresentation-texts'>
                            <h1 className='title-h1 gradient-text apresentation-title'>Sobre mim</h1>
                            <p className='paragraph-p'>
                                &nbsp; Olá! Tenho 18 anos e moro em São Paulo/SP. Atualmente sou um desenvolvedor web front-end capacitado pela Cubos Academy, e um designer autodidata.
                                <br />
                                <br />
                                &nbsp; Adoro assistir filmes/séries, super heróis (da Marvel principalmente) e jogar um game nas minhas horas de lazer.
                                <br />
                                <br />
                                &nbsp; Estou sempre em busca de aprender novas tecnologias e aprimorar as que eu já sei. No momento eu concluí o curso de desenvolvimento de software da Cubos Academy, onde aprendi tecnologias como: HTML, CSS, Javascript, ReactJS, NodeJS e PostgreSQL e eu estou em busca de aprimorar os meus conhecimentos em ReactJS.
                            </p>
                            <div className='apresentation-buttons'>
                                <a className='link' href='https://github.com/devkauan17' target='_blank'>Github</a>
                                <a className='link' href='https://www.linkedin.com/in/kauan-rodrigues-b4b311195/' target='_blank'>LinkedIn</a>
                            </div>
                        </div>
                        <img className='profile-image' src="https://avatars.githubusercontent.com/u/104030967?v=4" alt="profile image" />
                    </div>
                </section>

                <section className=' content-skills mid-size center-align' id='skills'>
                    <DividerTop />
                    <div className='content-cards'>
                        <h1 className='title-h1'>Habilidades</h1>

                        <Swiper
                            className='content-carousel'
                            modules={[Pagination, Autoplay]}
                            loop
                            spaceBetween={50}
                            slidesPerView={3}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: false }}
                        >
                            {skills.map(skill => {
                                return (

                                    <SwiperSlide className='card' key={skill.id}>
                                        <img className='skill-image' src={skill.image} alt={`${skill.name} icon`} />
                                        <h1 className='skill-h1'>{skill.name}</h1>
                                    </SwiperSlide>)
                            })}
                        </Swiper>

                    </div>
                    <DividerBottom />
                </section>

                <section className='content-certificates mid-size center-align' id='certificates'>

                    <section className='content-cards'>
                        <h1 className='title-h1'>Certificados</h1>
                        <Swiper
                            className='content-carousel'
                            modules={[Pagination, Autoplay]}
                            loop
                            spaceBetween={50}
                            slidesPerView={3}
                            autoplay={{ delay: 4000 }}
                            pagination={{ clickable: false }}
                        >
                            {certificates.map(certificate => {
                                return (

                                    <SwiperSlide className='card' key={certificate.id} onClick={() => {
                                        return setCertificateInfos({ show: true, content: { ...certificate } })
                                    }}>
                                        <img className='certificate-image' src={certificate.image} alt={`${certificate.name} icon`} />
                                        <div className='certificate-infos'>
                                            <span className='certificate-span'>{certificate.name}</span>
                                            <span className='certificate-span certificate-conclusion-year'>{certificate.conclusionYear}</span>
                                        </div>
                                    </SwiperSlide>)
                            })}
                        </Swiper>

                    </section>
                </section>

                <section className="content-projects mid-size center-align" id='projects'>
                    <DividerTop />

                    <section className="content-cards">
                        <h1 className='title-h1'>Projetos</h1>
                        <Swiper
                            className='content-carousel'
                            modules={[Pagination, Autoplay]}
                            loop
                            spaceBetween={50}
                            slidesPerView={3}
                            autoplay={{ delay: 5000 }}
                            pagination={{ clickable: false }}
                        >
                            {projects.map(project => {
                                return (

                                    <SwiperSlide className='card' key={project.id} style={{ cursor: 'unset' }}>
                                        <img className='project-image' src={project.image} alt={`${project.name} icon`} />
                                        <h1 className='project-h1'>{project.name}</h1>
                                        <div className='project-buttons'>
                                            <a className='link project-link' href={project.linkRepo} target='_blank'>Repo</a>
                                            <a className='link project-link' href={project.linkDeploy} target='_blank'>Deploy</a>
                                        </div>
                                    </SwiperSlide>)
                            })}
                        </Swiper>
                    </section>
                    <DividerBottom />
                </section>
            </section>
            <footer className='page-footer center-align'>
                <span className='footer-span'>Portifólio | Kauan Rodrigues</span>
            </footer>
            {certificateInfos.show && <CerticateModal certificateInfos={certificateInfos}
                setCertificateInfos={setCertificateInfos}
            />}
        </main>
    )
}