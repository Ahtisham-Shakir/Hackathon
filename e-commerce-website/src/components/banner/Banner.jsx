import React from 'react'
import mainBanner from '../../assets/main-banner.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div id="banner" style={{ backgroundImage: `url(${mainBanner})`, height : "75vh"  }}>
            <div id="layer" style={{ background: `rgba(0,0,0,0.4)` }} className="h-100 py-5">
            <div className="container text-white text-center h-100 py-5 ">
                <h1 className='text-white text-center'>Welcome to Cartify</h1>
                <p className='px-5 my-3 fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui tempora odio officia, aperiam amet mollitia nesciunt quas quisquam voluptatum consequatur vitae earum? Assumenda beatae officiis soluta doloremque animi, quisquam accusamus quo iure eveniet optio adipisci labore. Aperiam, corporis iure? Unde sapiente facere voluptate provident labore omnis magni ex in?
                </p>
                <button className='btn btn-primary'><Link to='/shop' className='text-white text-decoration-none'>SHOP NOW</Link></button>
            </div>
            </div>
        </div>
    )
}

export default Banner