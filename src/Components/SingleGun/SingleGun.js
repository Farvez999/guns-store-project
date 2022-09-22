import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modalData, setModalData] = useState({})
    const { gun, countIncrease } = props;
    const { id, name, img, bullet, capacity, action, price, category } = gun;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-96 h-60' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{price}/-</div>
                    </h2>
                    <div className="card-actions">
                        <div className="badge badge-outline">Action : {action}</div>
                        <div className="badge badge-outline">Bullet : {bullet}</div>
                        <div className="badge badge-outline">Capacity : {capacity}</div>
                    </div>
                    <div className='card-actions mt-4'>
                        <button onClick={() => countIncrease()} className="btn btn-sm btn-primary mr-2">Add to card</button>
                        <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button btn btn-sm btn-secondary">Details</label>

                    </div>
                </div>
            </div>
            {modalData && (<Modal data={modalData} setModalData={setModalData}></Modal>)}
        </div >
    );
};

export default SingleGun;