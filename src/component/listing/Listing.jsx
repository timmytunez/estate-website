import React from 'react'
import './listing.css'

const Listing = () => {
    const list1='https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const list2 ='https://images.pexels.com/photos/18179901/pexels-photo-18179901/free-photo-of-house-with-swimming-pool-in-yard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    const list3='https://images.pexels.com/photos/2416472/pexels-photo-2416472.jpeg?auto=compress&cs=tinysrgb&w=600'
    return (
    <div className='pb-5'>
        <h3 className='text-center m-5 text-secondary text-underline'><u>Listings</u></h3>

        <div className="container">

            <div className="row">

                <div className="col">
                    <div className="card p-3 bg-light">
                        <img src={list1} alt="" className='list1'/>
                        <h4>4Bedroom Terrace Building</h4>
                        <h5 className='text-secondary'>₦150,000,000</h5>
                        <h6>Yaba Phase 2</h6>
                        <div className="icons">
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-regular fa-star text-success"></i>
                        </div>
                        
                    </div>

                </div>
                <div className="col">
                <div className="card p-3 bg-light">
                        <img src={list3} alt="" className='list1'/>
                        <h4>2Bedroom Flat</h4>
                        <h5 className='text-secondary'>₦40,000,000</h5>
                        <h6>Lakowe</h6>
                        <div className="icons">
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-regular fa-star text-success"></i>
                            <i class="fa-regular fa-star text-success"></i>                   
                        </div>
                        
                    </div>

                </div>
                <div className="col">
                <div className="card p-3 bg-light">
                        <img src={list2} alt="" className='list1'/>
                        <h4>5Bedroom Detached House</h4>
                        <h5 className='text-secondary'>₦400,000,000</h5>
                        <h6>Ikoyi</h6>
                        <div className="icons">
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                            <i class="fa-solid fa-star text-success"></i>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Listing