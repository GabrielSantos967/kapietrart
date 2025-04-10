import React from 'react'
import Blackwork from './imagens/blackwork.webp'
import Fineline from './imagens/fineline.webp'
import Realismo from './imagens/realista.webp'

export const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide mb-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Blackwork} className="d-block w-100" alt="Blackwork" />
          </div>
          <div className="carousel-item">
            <img src={Fineline} className="d-block w-100" alt="Fineline" />
          </div>
          <div className="carousel-item">
            <img src={Realismo} className="d-block w-100" alt="Realismo" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
