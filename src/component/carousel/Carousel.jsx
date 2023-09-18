import React from 'react'
import './carousel.css'

const Carousel = () => {
    const img1 = 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600'
    const img2 = 'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const img3 = 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <div className='container'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={img1} className="d-block w-100 images" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 className='text-white'>Eko Atlantic</h2>
        <h5 className='text-white'>Welcome To Lekki</h5>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={img2} className="d-block w-100 images" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 className='text-white'>Eko Ikorodu</h2>
        <h5  className='text-white'>Welcome To Ikorudu Estate.</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 images" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2 className='text-white'>Eko Yaba</h2>
        <h5 className='text-white'>Welcome To Yaba Estate</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel