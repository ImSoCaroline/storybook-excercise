import React , { useState } from 'react'
import nekoImage from '../assets/nekogames.jpg'
import './card.css';

export const Card = () => {

    const [count, setCount] = useState(0)
  return (
        <div className="product-card">
            <span className="card-tag">#1 Best Seller</span>
            <div className="card-header">                
                <img src={nekoImage} alt=""/>
            </div>
            <div className="card-body">
                <h4 className="product-title">VR Plastic Neko</h4>
                <p className="product-status">Ships in 5-10 days</p>
                <h3 className="product-price">$180.00</h3>
            </div>
            <div className="card-footer">
                <button className="btn btn-secondary">
                Save
                </button>
                <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
                Buy {count}
                </button>
            </div>
        </div>
  );
};
