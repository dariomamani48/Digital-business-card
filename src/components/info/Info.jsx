import React from 'react';
import fotoPerfil from '../../assets/imagenes/perfil.jpg'
import './info.css'

const Info = () => {
  return <div className='infoCard'>
        <img className='infoCard-foto' src={fotoPerfil} alt="Foto perfil"></img>
        <h3 className='infoCard-tittle'>Dario Mamani Duarte</h3>
        <p className='infoCard-subt'>Full-Stack Developer</p>
        <span className='infoCard-local'>Tucumán, Argentina</span>
        <div className='infoCard-btns'>
        <a className='infoCard-btn-lk' href='https://www.linkedin.com/in/dario-mamani/' target='_blank' rel="noreferrer"><i class="fab fa-linkedin"></i> Linkedin</a>
        <a className='infoCard-btn-git' href='https://github.com/dariomamani48' target='_blank' rel="noreferrer"><i class="fab fa-github"></i> Github</a>
        </div>
  </div>;
};

export default Info;

