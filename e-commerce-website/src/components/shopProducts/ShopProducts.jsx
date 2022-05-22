import React from 'react'

const ShopProducts = ({items}) => {
  return (
    (
        items.map((item) => {
            return  (<div className="col py-4" key={item.id}>
                <div className="card" style={{ width: '18rem' }} >
                <img src={item.imageUrl} className="card-img-top product-image" alt="..." />
                <div className="card-body">
                    <div className='d-flex justify-content-between'>
                    <h5 className="card-title">{item.name}</h5>
                    <h5 className=''>${item.price}</h5>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
            </div>)
        })
    )
  )
}

export default ShopProducts