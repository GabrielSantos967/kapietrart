import React from 'react'
import Blackwork from './imagens/blackwork.webp'
import Fineline from './imagens/fineline.webp'
import Realista from './imagens/realista.webp'

export const Works = () => {
  return (
    <div className='works-body'>
        <p>Nossos trabalhos</p>
        <div className='works-models'>

            <div className='box-img'>
                <img src={Blackwork} alt='Blackwork'></img>
                <p>Blackwork</p>
            </div>
            <div className='box-img'>
                <img src={Fineline} alt='Fineline'></img>
                <p>Fineline</p>
            </div>
            <div className='box-img'>
                <img src={Realista} alt='Realista'></img>
                <p>Realista</p>
            </div>
        </div>
    </div>
  )
}

export default Works