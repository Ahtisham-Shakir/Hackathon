import React from 'react'
import SHOP_DATA from '../../components/homeProducts/shopData'
import ShopProducts from '../../components/shopProducts/ShopProducts'

const Shop = () => {
  return (
    SHOP_DATA.map((collection) => {
        return <div className='container py-5' key={collection.id}>
            <h1>{collection.title}</h1>
            <div className="container">
                <div className='row'>
                    <ShopProducts {...collection} />
                </div>
            </div>
        </div>
    })
  )
}

export default Shop