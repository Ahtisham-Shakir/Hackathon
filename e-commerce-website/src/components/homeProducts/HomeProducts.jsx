import React from 'react'
import SHOP_DATA from './shopData'
import ProductsOverview from '../../assets/productsOverview/ProductsOverview'

const HomeProducts = () => {
    const arrangedItems = [];
    return (
        SHOP_DATA.map((collection) => {
            return <div className='container py-4' key={collection.id}>
                <h1>{collection.title}</h1>
                <div className="container">
                    <div className='row'>
                        <ProductsOverview  {...collection}/>
                    </div>
                </div>
            </div>
        })
    )
}

export default HomeProducts