import React from 'react';

const SingleGun = (props) => {
    const { gun, countIncrease } = props;
    console.log(gun)
    const { id, name, img, bullet, capacity, action, price, category } = gun;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-96 h-60' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>
                    </div>
                    <div className='card-actions mt-4'>
                        <button onClick={() => countIncrease()} className="btn btn-sm btn-primary mr-2">Add to card</button>
                        <button className="btn btn-sm btn-secondary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;