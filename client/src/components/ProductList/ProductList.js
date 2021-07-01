import React from 'react';
import { Link } from 'react-router-dom';
import { ProductData } from '../../constants/ProductData';

function ProductList({handleClick,Delete,Edit}) {
    return (
      <section className="product-section">
        <div className="product-container">
          <h1 className="product-header">Product List</h1>
          <div className="card-container ">
            {ProductData.map((product) => (
              <div className="" key={product.id}>
                <div className="card-body">
                  <img
                    src={product.image}
                    alt="product"
                    className="card-image"
                  />
                  <div className="card-details">
                    <h1 className="card-heading">{product.item}</h1>
                    <p className="card-text">${product.price}</p>
                    {Edit && <div className="line-clamp-3 mt-3"> {product.description}</div>}
                  </div>
                  {handleClick && (
                    <div className="card-footer">
                      <Link to={`/details/${product.id}`} onClick={handleClick}>
                        View
                      </Link>
                    </div>
                  )}

                  {Edit && (
                    <div className="card-footer">
                      <p>Edit</p>
                    </div>
                  )}
                  {Delete && (
                    <div className="card-footer bg-red-400">
                      <p>Delete</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default ProductList
