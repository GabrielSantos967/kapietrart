import React from 'react'
import bodyImage from './imagens/body-img.webp'

export const Content = () => {
  return (
    <div className='content'>
        <dvi className='sobre'>
            <h2>Sobre <span>mim</span></h2>
        </dvi>
        <div className='body-container'>
            <div className='body-img'>
                <img src={bodyImage} alt='body-img'></img>
            </div>
            <div className='body-text'>
                <p><b>Arte que dura para sempre</b></p>
                <p>Transforme suas ideias em arte com tatuagens personalizadas e de alta qualidade. Nosso estúdio oferece designs exclusivos e técnicas avançadas para garantir traços precisos e duradouros. Agende sua consulta e leve uma obra prima para a sua pele.</p>
            </div>
        </div>
    </div>
  )
}
