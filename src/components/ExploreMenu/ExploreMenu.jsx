import React from 'react';
import './ExploreMenu.css';
import { specialization_list } from '../../Assets/Assets';

const ExploreMenu = ({ Category, setCategory }) => {
    return (
        <div className="explore-specialist" id="explore-specialist">
            <h1>Explore our Specialists</h1>
            <p className="explore-specialist-text">
                Discover the range of specialized medical services available at our hospital. Our expert team of specialists is dedicated to providing comprehensive care tailored to your health needs. Explore our specializations:
            </p>
            <div className="explore-specialist-list">
                {specialization_list.map((item, index) => {
                    return (
                        <div
                            onClick={() => setCategory(prev => prev === item.specialist_name ? "ALL" : item.specialist_name)}
                            key={index}
                            className='explore-specialist-list-item'
                        >
                            <img className={Category === item.specialist_name ? "active" : ""} src={item.specialist_image} alt={item.specialist_name} />
                            <p>{item.specialist_name}</p>
                        </div>
                    );
                })}
            </div>
            {/* <hr /> */}
        </div>
    );
};

export default ExploreMenu;
